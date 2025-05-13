import React, { useState, useEffect } from 'react';
import javaImage from './images/java11.png';
import logo from './images/logo.png';
import newLogo from './images/newLogo.png';
import { Link } from 'react-router-dom';
import outImage from './images/out.png';
import {auth, database} from './firebase';
import { ref, onValue, set } from 'firebase/database';
import {signOut} from "firebase/auth";
import userImage from './images/user.png';

const Pact1 = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [result, setResult] = useState("");
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
    const [userId, setUserId] = useState(null);
    const [testResults, setTestResults] = useState([]);
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [hasCompletedTest, setHasCompletedTest] = useState(false);

    useEffect(() => {
        const questionsRef = ref(database, 'questions');
        onValue(questionsRef, (snapshot) => {
            const data = snapshot.val();
            const questionsList = [];
            for (let id in data) {
                questionsList.push({ id, ...data[id] });
            }
            setQuestions(questionsList);
        });
        const user = auth.currentUser;
        if (user) {
            setUserId(user.uid);
            checkTestCompletion(user.uid);
        }
    }, []);

    const checkTestCompletion = (userId) => {
        const resultsRef = ref(database, 'testResults/' + userId);
        onValue(resultsRef, (snapshot) => {
            if (snapshot.exists()) {
                setHasCompletedTest(true);
            }
        });
    };

    const questionData = questions[selectedQuestionIndex];

    const handleAnswerSelect = (option) => {
        setSelectedAnswers((prev) =>
            prev.includes(option) ? prev.filter((answer) => answer !== option) : [...prev, option]
        );
        setIsAnswerChecked(false);
    };

    const checkAnswer = () => {
        if (questionData && selectedAnswers.length > 0) {
            const isCorrect = selectedAnswers.every((answer) => questionData.correctAnswers.includes(answer.trim()))
                && selectedAnswers.length === questionData.correctAnswers.length;
            setResult(isCorrect ? "Правильна відповідь!" : "Неправильна відповідь!");
            saveTestResult(isCorrect);
            setIsAnswerChecked(true);
        } else {
            setResult("Будь ласка, виберіть відповідь перед перевіркою.");
        }
    };

    const nextQuestion = () => {
        if (!isAnswerChecked) {
            alert("Будь ласка, перевірте відповідь перед переходом до наступного питання.");
            return;
        }
        setSelectedAnswers([]);
        setResult("");
        setIsAnswerChecked(false);
        setSelectedQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Ви вийшли з акаунту.");
        } catch (error) {
            console.error("Помилка при виході:", error);
            alert("Сталася помилка, спробуйте ще раз.");
        }
    };

    const saveTestResult = (isCorrect) => {
        if (userId) {
            const currentResult = {
                question: questionData.question,
                selectedAnswers,
                isCorrect,
                timestamp: new Date().toISOString(),
            };
            setTestResults((prevResults) => [...prevResults, currentResult]);
        }
    };

    const finishTest = () => {
        if (!isAnswerChecked) {
            alert("Будь ласка, перевірте відповідь перед завершенням тесту.");
            return;
        }

        if (userId && testResults.length > 0) {
            const correct = testResults.filter(result => result.isCorrect).length;
            const total = testResults.length;
            const percentage = Math.round((correct / total) * 100);

            const resultsRef = ref(database, 'testResults/' + userId);
            set(resultsRef, testResults);

            alert(`Правильних відповідей: ${correct} з ${total}\nПроцент правильних відповідей: ${percentage}%`);
            setIsFinished(true);
            setHasCompletedTest(true); // Після завершення тесту користувач не зможе пройти його знову
        }
    };

    const renderAnswerOption = (option, index) => {
        const isSelected = selectedAnswers.includes(option);
        const isCorrect = questionData.correctAnswers.includes(option);
        const isIncorrect = isSelected && !isCorrect;

        let optionStyle = {
            padding: '16px',
            fontSize: 14,
            fontFamily: 'Poppins',
            borderRadius: 6,
            marginBottom: 10,
            cursor: 'pointer',
            backgroundColor: isSelected ? (isCorrect ? 'green' : (isIncorrect ? 'red' : '#EDE7F6')) : 'white',
            color: isSelected ? 'white' : 'black',
        };

        return (
            <div key={index} onClick={() => handleAnswerSelect(option)} style={optionStyle}>
                {option}
            </div>
        );
    };

    const renderResults = () => {
        return testResults.map((result, index) => {
            const { question, selectedAnswers, isCorrect } = result;
            return (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: 18, fontWeight: 'bold' }}>{question}</div>
                    {questionData.options.map((option, i) => {
                        const isSelected = selectedAnswers.includes(option);
                        const isCorrectOption = questionData.correctAnswers.includes(option);
                        return (
                            <div
                                key={i}
                                style={{
                                    padding: '12px',
                                    backgroundColor: isSelected
                                        ? isCorrectOption
                                            ? 'green'
                                            : 'red'
                                        : 'white',
                                    color: isSelected ? 'white' : 'black',
                                    marginBottom: '8px',
                                    borderRadius: '6px',
                                }}
                            >
                                {option}
                            </div>
                        );
                    })}
                    <div style={{ marginTop: '10px', color: isCorrect ? 'green' : 'red' }}>
                        {isCorrect ? 'Правильна відповідь' : 'Неправильна відповідь'}
                    </div>
                </div>
            );
        });
    };

    if (hasCompletedTest) {
        return (
            <div>
                <h1>Результати тесту</h1>
                {renderResults()}
                <Link to="/">Повернутися на головну</Link>
            </div>
        );
    }

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#F4F2F6' }}>
            <div style={{ width: 1440, height: 934, position: 'absolute', left: 0, top: 94 }}>
                <div style={{ width: 1440, height: 1000, background: '#F4F2F6' }} />
                <div style={{ width: 580, height: 393, position: 'absolute', left: 92, top: 217 }} />
                <div style={{ width: 500, height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex', position: 'absolute', left: 600, top: -78 }}>
                    <div style={{ width: 573, height: 531, position: 'relative', left: -68 }}>
                        <div style={{ width: 411, height: 451, position: 'absolute', left: 37, top: 80 }}>
                            <div style={{ width: '100%', height: '100%', position: 'absolute', background: '#7C4EE4', borderRadius: 18 }} />
                            <div style={{ width: '100%', height: 56, position: 'absolute', background: '#7C4EE4' }} />
                        </div>
                        <div style={{ width: 262, height: 248, position: 'absolute', left: 0, top: 97, background: 'rgba(199, 168, 252, 0.36)', borderRadius: '50%' }} />
                        <div style={{ width: 204, height: 196, position: 'absolute', left: 29, top: 123, background: '#C7A8FC', borderRadius: '50%' }} />
                        <div style={{ width: 152, height: 144, position: 'absolute', left: 55, top: 149, background: 'white', borderRadius: '50%' }} />
                        <div style={{ width: 52, height: 52, position: 'absolute', left: 283, top: 144, background: 'rgba(199, 168, 252, 0.36)', borderRadius: '50%' }} />
                        <img style={{ width: 90, height: 90, position: 'absolute', left: 88, top: 176 }} src={javaImage} alt="Java" />
                    </div>
                    <div style={{ width: 316, height: 1, zIndex: 10 }}>
                        {questionData && (
                            <div style={{ width: '100%', padding: '16px', fontSize: 14, fontFamily: 'Poppins', border: '1px solid #79747E', borderRadius: 6, backgroundColor: 'white', marginBottom: 20, marginTop: -110 }}>
                                {questionData.question}
                            </div>
                        )}
                        {questionData && questionData.options.map((option, index) => renderAnswerOption(option, index))}
                        <button onClick={checkAnswer} style={{ width: 196, height: 64, background: '#7C4EE4', borderRadius: 50, color: 'white', fontSize: 25, fontFamily: 'Poppins', fontWeight: '500' }}>Перевірити</button>
                        {result && (
                            <div style={{ marginTop: 20, fontSize: 18, color: result.includes("Правильна") ? 'green' : 'red' }}>
                                {result}
                            </div>
                        )}
                        {selectedQuestionIndex < questions.length - 1 && (
                            <button onClick={nextQuestion} style={{ width: 196, height: 64, background: '#7C4EE4', borderRadius: 50, color: 'white', fontSize: 25, fontFamily: 'Poppins', fontWeight: '500', marginTop: 20 }}>
                                Наступне питання
                            </button>
                        )}
                        {selectedQuestionIndex === questions.length - 1 && (
                            <button onClick={finishTest} style={{ width: 196, height: 64, background: '#7C4EE4', borderRadius: 50, color: 'white', fontSize: 25, fontFamily: 'Poppins', fontWeight: '500', marginTop: 20 }}>
                                Завершити тест
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pact1;
