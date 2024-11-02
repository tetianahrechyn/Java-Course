import javaImage from './images/java11.png';
import logo from './images/logo.png'; // Оновлений імпорт зображення
import newLogo from './images/newLogo.png';
import { BrowserRouter as Router, Route, Routes, Link, Redirect, useNavigate } from 'react-router-dom';
import About from './About';
import Our from './Our'; // Імпорт нового компонента
import Log from './Log';
import Sign from './Sign';
import Learn from './learn';
import React, { useEffect, useState } from 'react';
import { auth } from './firebase'; // Імпортуємо auth
import { onAuthStateChanged } from 'firebase/auth';
import outImage from './images/out.png';
import theImage from './images/the.png';
import praImage from './images/pra.png';
import plusImage from './images/plus.png';
import Theory1Page from "./Theory1";
import { signOut } from "firebase/auth";
import { useAuth } from './AuthContext';

const LearnPage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Використовуємо useNavigate для перенаправлення

    const handleLogout = async () => {
        try {
            await signOut(auth); // Вихід з акаунту
            console.log("Користувача виведено з системи");
            // Можливо, ви хочете перенаправити користувача на сторінку входу або додати іншу логіку
        } catch (error) {
            console.error("Помилка при виході:", error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user); // Користувач увійшов
            } else {
                setUser(null); // Користувач вийшов
                navigate('/log'); // Перенаправлення на сторінку входу
            }
        });

        return () => unsubscribe(); // Очистка підписки на unmount
    }, [navigate]);
    return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#F4F2F6' }}>
        <div style={{ width: 1709, height: 934, position: 'absolute', left: 0, top: 94 }}>
            <div style={{ width: 1440, height: 796, background: '#F4F2F6' }} />
            <div style={{ width: 580, height: 393, position: 'absolute', left: 92, top: 217 }}>
            </div>

            <div style={{
                color: '#666666',
                fontSize: 16,
                fontFamily: 'Raleway',
                fontWeight: '700',
                lineHeight: 24,
                letterSpacing: 1.60,
                wordWrap: 'break-word',
                position: 'absolute',
                top: -100,
                left: 680,
            }}>
                ОСНОВНІ ПОНЯТТЯ
            </div>
            <div style={{
                color: '#333333',
                fontSize: 48,
                fontFamily: 'Raleway',
                fontWeight: '700',
                lineHeight: 1.2,
                letterSpacing: 0.8,
                wordWrap: 'break-word',
                position: 'absolute',
                top: 120,
                left: 620,
                textAlign: 'center', // Додано для центрування тексту
            }}>
                <div style={{ margin: 0, }}> Вивчай із</div>
                <div style={{ margin: 0, }}>задоволенням</div>
            </div>


            <Link to="/" onClick={handleLogout}>
                <img
                    src={outImage}
                    alt="out"
                    style={{
                        width: '43.851px',
                        height: '43.804px',
                        position: 'absolute',
                        left: 1326,
                        top: -70,
                        textDecoration: 'none'
                    }}
                />
            </Link>



            <img
                src={theImage}
                alt="the"
                style={{
                    width: '180px',
                    height: '180px',
                    position: 'absolute',
                    left: 270,
                    top: 320,
                }}
            />


            <Link to="/theory1" style={{
                color: '#7C4EE4',
                fontSize: 20,
                fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                fontWeight: 700,
                lineHeight: '27px', // Встановлено правильний формат
                wordWrap: 'break-word',
                position: 'absolute',
                left: 325, // Вирівнюємо по лівому краю логотипу
                top: 485,
                textDecoration: 'none'
            }}>
                Теорія
            </Link>

            <div style={{
                color: '#7A7A7A',
                fontSize: 16,
                fontFamily: 'Raleway',
                fontWeight: '500',
                lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                wordWrap: 'break-word',
                position: 'absolute',
                left: 256, // Вирівнюємо по лівому краю логотипу
                top: 535,
                letterSpacing: '0.6px',
                textAlign: 'center',
            }}>
                <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                    Тут ти зможеш опанувати  <br />
                    фундаментальні знання з Java
                </div>
            </div>

            <img
                src={praImage}
                alt="out"
                style={{
                    width: '150px',
                    height: '150px',
                    position: 'absolute',
                    left: 700,
                    top: 340,
                }}
            />


            <div style={{
                color: '#7A7A7A',
                fontSize: 16,
                fontFamily: 'Raleway',
                fontWeight: '500',
                lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                wordWrap: 'break-word',
                position: 'absolute',
                left: 637, // Вирівнюємо по лівому краю логотипу
                top: 540,
                letterSpacing: '0.6px',
                textAlign: 'center',
            }}>
                <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                    Тут ти зможеш застосувати свої   <br />
                    теоретичні знання на практиці через<br />
                    виконання різноманітних завдань.
                </div>
            </div>

            <Link to="/pract1" style={{
                color: '#7C4EE4',
                fontSize: 20,
                fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                fontWeight: 700,
                lineHeight: '1.4', // Встановлено правильний формат
                wordWrap: 'break-word',
                position: 'absolute',
                left: 720, // Вирівнюємо по лівому краю логотипу
                top: 490,
                textDecoration: 'none'
            }}>
                Практика
            </Link>

            <div style={{
                color: '#7A7A7A',
                fontSize: 16,
                fontFamily: 'Raleway',
                fontWeight: '500',
                lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                wordWrap: 'break-word',
                position: 'absolute',
                left: 1041, // Вирівнюємо по лівому краю логотипу
                top: 540,
                letterSpacing: '0.6px',
                textAlign: 'center',
            }}>
                <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                    Дана функція доступна тільки адміну
                </div>
            </div>

            <img
                src={plusImage}
                alt="out"
                style={{
                    width: '150px',
                    height: '150px',
                    position: 'absolute',
                    left: 1110,
                    top: 340,
                }}
            />

            <Link to="/plus1" style={{
                color: '#7C4EE4',
                fontSize: 20,
                fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                fontWeight: 700,
                lineHeight: '27px', // Встановлено правильний формат
                wordWrap: 'break-word',
                position: 'absolute',
                left: 1125, // Вирівнюємо по лівому краю логотипу
                top: 490,
                textDecoration: 'none'
            }}>
                Додати тест
            </Link>


            <img
                src={logo}
                alt="Лого"
                style={{
                    width: '43.851px',
                    height: '43.804px',
                    position: 'absolute',
                    left: 90,
                    top: -70,
                }}
            />

            {/* Додавання тексту "from Zero" та "to Hero" біля логотипу */}
            <div style={{
                textAlign: 'center',
                color: '#333333',
                fontSize: 20,
                fontFamily: 'Raleway',
                fontWeight: '800',
                position: 'absolute',
                left: 160,
                top: -47,
                transform: 'translateY(-50%)',
                zIndex: 2,
            }}>
                <div>from Zero</div>
                <div>to Hero</div>
            </div>

            {/* Додавання тексту "Про нас" біля логотипу */}
            <Link to="/about" style={{
                color: '#7C4EE4',
                fontSize: 20,
                fontFamily: 'Raleway',
                fontWeight: '500',
                lineHeight: 30,
                position: 'absolute',
                left: 1060,
                top: -48,
                transform: 'translateY(-50%)',
                zIndex: 2,
                textDecoration: 'none',
            }}>
                Про нас
            </Link>

            {/* Додавання тексту "Наш курс" під "Про нас" з відстанню  */}
            <Link to="/our" style={{
                color: '#333333',
                fontSize: 20,
                fontFamily: 'Raleway',
                fontWeight: '500',
                lineHeight: 30,
                position: 'absolute',
                left: 1172,
                top: -48,
                transform: 'translateY(-50%)',
                zIndex: 2,
                textDecoration: 'none',
            }}>
                Наш курс
            </Link>



            <img
                src={newLogo}
                alt="Новий логотип"
                style={{
                    width: '43.851px',
                    height: '43.804px',
                    position: 'absolute',
                    left: 700,
                    top: 900,
                    zIndex: 2,
                }}
            />

            {/* Додавання тексту "from Zero" та "to Hero" під новим логотипом */}
            <div style={{
                textAlign: 'center',
                color: '#333333',
                fontSize: 20,
                fontFamily: 'Raleway',
                fontWeight: '800',
                position: 'absolute',
                left: 812,
                top: 900,
                transform: 'translateX(-50%)',
                zIndex: 2,
            }}>
                <div>from Zero</div>
                <div>to Hero</div>
            </div>

            <div style={{ width: 1440, height: 397, background: 'white', position: 'absolute', left: 0, top: 890 }} />
            <div style={{
                color: '#150E06',
                fontSize: 16,
                fontFamily: 'Raleway',
                fontWeight: '400',
                lineHeight: '24px',
                position: 'absolute',
                left: 565,
                top: 1209,
            }}>Copyright Ideapeel Inc © 2024. All Right Reserved</div>
        </div>
        {/* Новий блок з текстом під новим логотипом */}
        <div style={{ width: '100%', height: '100%', position: 'relative', top: 890 }}>
            <Link to="/about" style={{
                position: 'absolute',
                left: 745,
                top: 45,
                color: '#150E06',
                fontSize: 16,
                fontFamily: 'Raleway',
                fontWeight: '400',
                lineHeight: 24,
                wordWrap: 'break-word',
                textDecoration: 'none',
            }}>
                Про нас
            </Link>
            <div style={{
                position: 'absolute',
                left: 969,
                top: 45,
                color: '#150E06',
                fontSize: 16,
                fontFamily: 'Raleway',
                fontWeight: '400',
                lineHeight: 24,
                wordWrap: 'break-word'
            }}>
                Залишити відгук
            </div>
            <Link to="/" style={{
                position: 'absolute',
                left: 450,
                top: 45,
                color: '#150E06',
                fontSize: 16,
                fontFamily: 'Raleway',
                fontWeight: '400',
                lineHeight: 24,
                wordWrap: 'break-word',
                textDecoration: 'none'
            }}>
                Головна сторінка
            </Link>
            {/* Додано рамка під текстом */}
            <div style={{ width: '80%', border: '1px #7C4EE4 solid', position: 'absolute', top: 330, right: '10%', left: '8%' }}></div>
        </div>
    </div>
    );
};



export default LearnPage;
