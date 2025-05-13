import React, { useState, useEffect } from 'react';
import { auth, database } from './firebase';
import { ref, onValue } from 'firebase/database';
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';  // Імпортуємо Link
import logo from './images/logo.png'; // Оновлений імпорт зображення

const Progress = () => {
    const [userId, setUserId] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const [percentage, setPercentage] = useState(0);

    const sections = [
        'testResults',
        'testResultscomments',
        'testResultsexstatemetnsblock',
        'testResultshelloworld',
        'testResultsinputandoutput',
        'testResultsliterals',
        'testResultsoperators',
        'testResultsprimitive',
        'testResultsvariables',
    ];

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setUserId(user.uid);
            setUserEmail(user.email);
        }
    }, []);

    useEffect(() => {
        if (userId) {
            let totalCorrect = 0;
            let totalQuestions = 0;
            let loadedCount = 0;

            sections.forEach(section => {
                const refPath = `${section}/${userId}`;
                const resultsRef = ref(database, refPath);
                onValue(resultsRef, (snapshot) => {
                    const data = snapshot.val();
                    if (data && data.results) {
                        totalCorrect += data.results.filter(result => result.isCorrect).length;
                        totalQuestions += data.results.length;
                    }
                    loadedCount++;
                    if (loadedCount === sections.length) {
                        const calc = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
                        setPercentage(calc);
                    }
                }, { onlyOnce: true });
            });
        }
    }, [userId]);

    const gradient = `conic-gradient(
        #C5B6F2 0%,
        #A084EA ${percentage * 0.5}%,
        #7C4EE4 ${percentage}%,
        #E0E0E0 ${percentage}% 100%
    )`;

    const handleDownloadCertificate = () => {
        const doc = new jsPDF
        ({
            unit: 'mm', // Одиниця вимірювання в міліметрах
            format: [210, 165], // Встановлюємо розміри 210x180 мм
        });

        doc.setFillColor(244, 242, 246); // Фон
        doc.rect(0, 0, 210, 297, 'F'); // Прямокутник, що покриває всю сторінку
        doc.setFontSize(22);
        doc.text('Сертифікат про завершення курсу Java', 20, 40);
        doc.setFontSize(16);
        doc.text(`Цей сертифікат підтверджує, що`, 20, 60);
        doc.text(`${userEmail}`, 20, 70);
        doc.text(`успішно завершив курс з результатом: ${percentage}%`, 20, 80);
        doc.text('Дата: ' + new Date().toLocaleDateString(), 20, 100);

        doc.addImage(logo, 'PNG', 10, 10, 30, 30); // Логотип зліва вгорі

        doc.setFontSize(14);
        doc.text('Certificate', 20, 130);
        doc.setTextColor(125, 78, 228); // Фіолетовий колір
        doc.text('OF COMPLETION', 20, 145);
        doc.line(20, 150, 190, 150); // Лінія

        doc.setFontSize(18);
        doc.setTextColor(0, 0, 0); // Чорний текст
        doc.text('Java for Beginners', 20, 160);

        doc.setFontSize(12);
        doc.text('THIS CERTIFICATE IS PROUDLY PRESENTED TO', 20, 190);
        doc.text(`${userEmail}`, 20, 210);

        doc.text(
            'This certificate certifies the successful completion of the "Java for Beginners" and the mastery of core Java concepts: operators, conditional statements, loops, inheritance, method overriding, polymorphism, abstraction, and encapsulation.',
            20,
            220,
            { maxWidth: 170 }
        );

        doc.text('Instructors: TH Training', 140, 270);

        doc.save('certificate.pdf');
    };

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#F4F2F6' }}>
            <div
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: gradient,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    position: 'relative',
                    marginBottom: 30,
                }}
            >
                <div
                    style={{
                        width: 160,
                        height: 160,
                        borderRadius: '50%',
                        backgroundColor: '#F4F2F6',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                    }}
                >
                    <span style={{ fontSize: '24px', color: '#7C4EE4' }}>
                        {percentage}%
                    </span>
                </div>
            </div>

            {percentage === 100 && (
                <button
                    onClick={handleDownloadCertificate}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#7C4EE4',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                    }}
                >
                    Завантажити сертифікат
                </button>
            )}

            {percentage !== 100 && (
                <Link to="/" style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#7C4EE4',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '20px',
                }}>
                    Продовжити
                </Link>
            )}
        </div>
    );
};

export default Progress;
