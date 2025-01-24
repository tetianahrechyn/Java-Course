import React, { useState, useEffect } from 'react';
import { auth, database } from './firebase'; // Імпорт бази даних
import { ref, set } from 'firebase/database'; // Імпорт функцій для запису в базу даних
import javaImage from './images/java11.png';
import logo from './images/logo.png'; // Оновлений імпорт зображення
import newLogo from './images/newLogo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Our from './Our'; // Імпорт нового компонента
import Log from './Log';
import Sign from './Sign';
import Learn from './learn';
import outImage from './images/out.png';
import theImage from './images/the.png';
import praImage from './images/pra.png';
import plusImage from './images/plus.png';
import Theory1Page from "./Theory1";
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Plus1 = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe(); // Очистка підписки на unmount
    }, []);

    // UID, якому дозволено доступ
    const allowedUID = '9BmZeeNofHXK8yNKduUgPPeKJoZ2';

    // Перевірка доступу
    if (!user || user.uid !== allowedUID) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Ви не маєте прав доступу до цієї сторінки.</h2>
            </div>
        );
    }

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleCreateQuestion = async () => {
        console.log('Кнопка натиснута!');
        console.log('Запитання:', question);
        console.log('Варіанти:', options);
        console.log('Правильна відповідь:', correctAnswer);

        try {
            const questionData = {
                question,
                options,
                correctAnswer,
            };
            const questionRef = ref(database, 'questions/' + Date.now());
            await set(questionRef, questionData);
            alert('Запитання успішно створено!');
            setQuestion('');
            setOptions(['', '', '', '']);
            setCorrectAnswer('');
        } catch (error) {
            console.error('Помилка при створенні запитання:', error);
            alert('Сталася помилка, спробуйте ще раз.');
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Ви вийшли з акаунту."); // Відображає повідомлення про вихід
        } catch (error) {
            console.error("Помилка при виході:", error);
            alert("Сталася помилка, спробуйте ще раз."); // Обробка помилки
        }
    };
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: '#F4F2F6'}}>
            <div style={{width: 1709, height: 934, position: 'absolute', left: 0, top: 94}}>
                <div style={{width: 1440, height: 1000, background: '#F4F2F6'}}/>
                <div style={{width: 580, height: 393, position: 'absolute', left: 92, top: 217}}>
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 16,
                        display: 'inline-flex',
                        position: 'absolute',
                        left: 600, // Це може бути будь-яке значення, яке ви хочете
                        top: -78,
                    }}
                >
                    {/* Основний контейнер для елементів з позиціями */}
                    <div style={{width: 573, height: 531, position: 'relative', left: -68}}>
                        <div style={{width: 411, height: 451, position: 'absolute', left: 37, top: 80}}>
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    background: '#7C4EE4',
                                    borderRadius: 18,
                                }}
                            />
                            <div style={{width: '100%', height: 56, position: 'absolute', background: '#7C4EE4'}}/>
                        </div>

                        {/* Коло елементів з різними відтінками */}
                        <div
                            style={{
                                width: 262,
                                height: 248,
                                position: 'absolute',
                                left: 0,
                                top: 97,
                                background: 'rgba(199, 168, 252, 0.36)',
                                borderRadius: '50%',
                            }}
                        />
                        <div
                            style={{
                                width: 204,
                                height: 196,
                                position: 'absolute',
                                left: 29,
                                top: 123,
                                background: '#C7A8FC',
                                borderRadius: '50%',
                            }}
                        />
                        <div
                            style={{
                                width: 152,
                                height: 144,
                                position: 'absolute',
                                left: 55,
                                top: 149,
                                background: 'white',
                                borderRadius: '50%',
                            }}
                        />

                        <div
                            style={{
                                width: 52,
                                height: 52,
                                position: 'absolute',
                                left: 283,
                                top: 144,
                                background: 'rgba(199, 168, 252, 0.36)',
                                borderRadius: '50%',
                            }}
                        />

                        <img
                            style={{width: 90, height: 90, position: 'absolute', left: 88, top: 176}}
                            src={javaImage}
                            alt="Java"
                        />
                    </div>

                    {/* Контейнер для полів вводу */}
                    <div style={{width: 316, marginTop: 410, position: 'relative'}}> {/* Додаємо marginTop */}
                        <input
                            type="text"
                            placeholder="Запитання"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            style={{
                                width: '100%',
                                height: 30,
                                padding: '16px',
                                fontSize: 14,
                                fontFamily: 'Poppins',
                                border: '1px solid #79747E',
                                borderRadius: 6,
                                boxShadow: '0px 2px 13px 4px rgba(157, 87, 227, 0.25)',
                                marginBottom: 20,
                                zIndex: 2,
                                position: 'relative',
                            }}
                        />

                        {/* Відображення варіантів відповідей */}
                        {options.map((option, index) => (
                            <input
                                key={index}
                                type="text"
                                placeholder={`Варіант відповіді ${index + 1}`}
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                style={{
                                    width: '100%',
                                    height: 30,
                                    padding: '16px',
                                    fontSize: 14,
                                    fontFamily: 'Poppins',
                                    border: '1px solid #79747E',
                                    borderRadius: 6,
                                    marginBottom: 20,
                                    zIndex: 10,
                                }}
                            />
                        ))}

                        <input
                            type="text"
                            placeholder="Правильна відповідь"
                            value={correctAnswer}
                            onChange={(e) => setCorrectAnswer(e.target.value)}
                            style={{
                                width: '100%',
                                height: 30,
                                padding: '16px',
                                fontSize: 14,
                                fontFamily: 'Poppins',
                                border: '1px solid #79747E',
                                borderRadius: 6,
                                marginBottom: 20,
                            }}
                        />
                    </div>

                    {/* Кнопка створення */}
                    <div style={{width: 196, height: 64, marginLeft: 67}}>
                        <button
                            onClick={handleCreateQuestion}
                            style={{
                                width: '100%',
                                height: 64,
                                background: '#7C4EE4',
                                borderRadius: 50,
                                color: 'white',
                                fontSize: 25,
                                fontFamily: 'Poppins',
                                fontWeight: '500',
                                boxShadow: '0px 2px 13px 4px rgba(157, 87, 227, 0.25)',

                            }}
                        >
                            Створити
                        </button>
                    </div>
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
                        top: 1100,
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
                    top: 1100,
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                }}>
                    <div>from Zero</div>
                    <div>to Hero</div>
                </div>

                <div style={{width: 1440, height: 397, background: 'white', position: 'absolute', left: 0, top: 1100}}/>
                <div style={{
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: '24px',
                    position: 'absolute',
                    left: 565,
                    top: 1419,
                }}>Copyright Ideapeel Inc © 2024. All Right Reserved
                </div>
            </div>
            {/* Новий блок з текстом під новим логотипом */}
            <div style={{width: '100%', height: '100%', position: 'relative', top: 1100}}>
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
                <div style={{
                    width: '80%',
                    border: '1px #7C4EE4 solid',
                    position: 'absolute',
                    top: 330,
                    right: '10%',
                    left: '8%'
                }}></div>
            </div>
        </div>
    );
};
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/plus1" component={Plus1Page} />
                {/* Інші маршрути */}
            </Switch>
        </Router>
    );
}
export default Plus1;
