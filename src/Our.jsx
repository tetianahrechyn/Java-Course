import React from 'react';
import logo from './images/logo.png';
import newLogo from './images/newLogo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import tema1 from './images/t1.png';
import tema2 from './images/t2.png';
import tema3 from './images/t3.png';

const Our = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#F4F2F6' }}>
            <div style={{ width: 1440, height: 934, position: 'absolute', left: 0, top: 94 }}>
                <div style={{ width: 1440, height: 1127, background: '#F4F2F6' }} />

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '600',
                    lineHeight: 24,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: -120,
                    left: 680,
                }}>
                    НАШ КУРС
                </div>
                <div style={{
                    color: '#333333',
                    fontSize: 36,
                    fontFamily: 'Raleway',
                    fontWeight: '520',
                    lineHeight: 1,
                    letterSpacing: 0.8,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 120,
                    left: 300,
                }}>
                    <div style={{ margin: 0 }}> Ти можеш самостійно вибирати теми для вивчення, </div>
                    <div style={{ margin: 0, }}>починаючи з основ TypeScript і завершуючи типами даних.</div>
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.6', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 245,
                    left: 280,
                    letterSpacing: '2.7px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        Наш курс розроблений, щоб надати тобі найкращий контент для вивчення TypeScript і програмування<br />
                        загалом. Ми прагнемо забезпечити тебе якісними ресурсами, щоб ти міг легко опановувати нові  <br />
                        знання і постійно вдосконалювати свої навички на шляху до успіху.
                    </div>
                </div>
                <img
                    src={tema1}
                    alt="Нова т1"
                    style={{
                        width: '400px',
                        height: '360px',
                        position: 'absolute',
                        left: 100,  // Відстань від лівого краю
                        top: 410,   // Відстань від верхнього краю
                        zIndex: 2,
                    }}
                />


                <div style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    lineHeight: 18,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 144, // Вирівнюємо по лівому краю логотипу
                    top: 710,    // Відстань від верхнього краю
                }}>
                    16 Червня 2025
                </div>


                <div
                    style={{
                        color: '#333333',
                        fontSize: 24,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '32px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 189, // Вирівнюємо по лівому краю логотипу
                        top: 849,  // Відстань від верхнього краю
                    }}
                >
                    Що таке TypeScript
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 922,
                    left: 100,
                    letterSpacing: '0.6px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        TypeScript — це мова програмування з відкритим<br />
                        кодом на основі JavaScript, яка додає статичну <br />
                        типізацію, полегшує розробку великих застосунків.
                    </div>
                </div>

                    <Link to="/our/learn" style={{
                        color: '#007ACC',
                        fontSize: 18,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '27px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 100, // Вирівнюємо по лівому краю логотипу
                        top: 1009,
                        textDecoration: 'none'// Відстань від верхнього краю
                    }}
                >
                    Перейти до вивчення...
                    </Link>

            <hr
                style={{
                    width: '210px', // Можна змінити на бажану ширину
                    border: '1px solid #007ACC', // Колір та стиль лінії
                    marginTop: '5px', // Відстань між текстом та лінією
                    position: 'absolute',
                    left: 100, // Вирівнювання по лівому краю
                    top: 1024, // Встановіть на основі позиції тексту
                }}
            />

                <img
                    src={tema2}
                    alt="Нова т2"
                    style={{
                        width: '400px',
                        height: '360px',
                        position: 'absolute',
                        left: 518,  // Відстань від лівого краю
                        top: 410,   // Відстань від верхнього краю
                        zIndex: 2,
                    }}
                />



                <div style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    lineHeight: 18,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 562, // Вирівнюємо по лівому краю логотипу
                    top: 710,    // Відстань від верхнього краю
                }}>
                    20 Червня 2025
                </div>


                <div
                    style={{
                        color: '#333333',
                        fontSize: 24,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '32px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 600, // Вирівнюємо по лівому краю логотипу
                        top: 849,  // Відстань від верхнього краю
                    }}
                >
                    Змінні та константи
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 922,
                    left: 518,
                    letterSpacing: '0.6px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        Змінні та константи в TypeScript використовуються<br />
                        для зберігання даних: змінні (let, var) дозволяють<br />
                        змінювати значення, а константи (const) — ні.
                    </div>
                </div>


                <Link to="/helloworld" style={{
                        color: '#007ACC',
                        fontSize: 18,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '27px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 518, // Вирівнюємо по лівому краю логотипу
                        top: 1009,
                    textDecoration: 'none'// Відстань від верхнього краю
                    }}
                >
                    Перейти до вивчення...
                </Link>

                <hr
                    style={{
                        width: '210px', // Можна змінити на бажану ширину
                        border: '1px solid #007ACC', // Колір та стиль лінії
                        marginTop: '5px', // Відстань між текстом та лінією
                        position: 'absolute',
                        left: 518, // Вирівнювання по лівому краю
                        top: 1024, // Встановіть на основі позиції тексту
                    }}
                />



                <img
                    src={tema3}
                    alt="Нова т3"
                    style={{
                        width: '400px',
                        height: '360px',
                        position: 'absolute',
                        left: 936,  // Відстань від лівого краю
                        top: 410,   // Відстань від верхнього краю
                        zIndex: 2,
                    }}
                />



                <div style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    lineHeight: 18,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 980, // Вирівнюємо по лівому краю логотипу
                    top: 710,    // Відстань від верхнього краю
                }}>
                    26 Червня 2025
                </div>


                <div
                    style={{
                        color: '#333333',
                        fontSize: 24,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '32px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 1059, // Вирівнюємо по лівому краю логотипу
                        top: 849,  // Відстань від верхнього краю
                    }}
                >
                    Типи даних
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 922,
                    left: 936,
                    letterSpacing: '0.6px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        TypeScript є строго типізованою мовою, підтримує<br />
                        різні типи даних: string, number, boolean, array,<br />
                        enum, any, null, undefined, never, bigint і symbol.
                    </div>
                </div>


                <Link to="/variables" style={{
                        color: '#007ACC',
                        fontSize: 18,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '27px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 936, // Вирівнюємо по лівому краю логотипу
                        top: 1009,
                        textDecoration: 'none'// Відстань від верхнього краю
                    }}
                >
                    Перейти до вивчення...
                </Link>

                <hr
                    style={{
                        width: '210px',
                        border: '1px solid #007ACC', // Колір та стиль лінії
                        marginTop: '5px', // Відстань між текстом та лінією
                        position: 'absolute',
                        left: 936, // Вирівнювання по лівому краю
                        top: 1024,
                    }}
                />

                <div style={{ width: 580, height: 393, position: 'absolute', left: 92, top: 217 }}>
                    <div style={{
                        width: 223,
                        height: 50,
                        paddingLeft: -5,
                        paddingRight: -5,
                        paddingTop: 2,
                        paddingBottom: 2,
                        background: '#007ACC',
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                        display: 'inline-flex',
                        position: 'absolute',
                        left: 1020,
                        top: -295, // Відстань від верху
                    }}>
                        <Link to="/sign" style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 20,
                            fontFamily: 'Raleway',
                            fontWeight: '500',
                            lineHeight: 30,
                            wordWrap: 'break-word',
                            textDecoration: 'none'
                        }}>Зареєструватися</Link>
                    </div>
                </div>

                <Link to="/" style={{ position: 'absolute', left: 90, top: -70 }}>
                <img
                    src={logo}
                    alt="Лого"
                    style={{
                        width: '43.851px',
                        height: '43.804px',
                        textDecoration: 'none',
                        flexShrink: 0,
                    }}
                />
                </Link>

                {/* Додавання тексту "from Zero" та "to Hero" біля логотипу */}
                <Link to="/" style={{
                    textAlign: 'center',
                    color: '#333333',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '800',
                    position: 'absolute',
                    left: 160,  // Вирівнюємо по лівому краю логотипу
                    top: -47,   // Відстань від верхнього краю
                    transform: 'translateY(-50%)', // Центруємо текст по вертикалі
                    zIndex: 2,
                    textDecoration: 'none',
                }}>
                    <div>from Zero</div>
                    <div>to Hero</div>
                </Link>

                <div style={{
                    color: '#333333',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: 30,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 900, // Вирівнюємо по лівому краю "Про нас"
                    top: -48,  // Відстань від "Про нас" (48 - 33)
                    transform: 'translateY(-50%)', // Центруємо текст по вертикалі
                    zIndex: 2,
                }}>
                    Наш курс
                </div>

                {/* Додавання тексту "Увійти" під "Наш курс" з відстанню  */}
                <Link to="/log" style={{
                    color: '#333333',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: 30,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 1013, // Вирівнюємо по лівому краю "Наш курс"
                    top: -48,  // Відстань від "Наш курс" (48 - 33)
                    transform: 'translateY(-50%)', // Центруємо текст по вертикалі
                    zIndex: 2,
                    textDecoration: 'none'
                }}>
                    Увійти
                </Link>

                <Link to="/" style={{ position: 'absolute', left: 700, top: 1226, zIndex: 2 }}>
                <img
                    src={newLogo}
                    alt="Новий логотип"
                    style={{
                        width: '43.851px',
                        height: '43.804px',
                        textDecoration: 'none',
                    }}
                />
                </Link>

                {/* Додавання тексту "from Zero" та "to Hero" під новим логотипом */}
                <Link to="/" style={{
                    textAlign: 'center',
                    color: '#333333',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '800',
                    position: 'absolute',
                    left: 812,  // Вирівнюємо по лівому краю нового логотипу
                    top: 1226,   // Відстань від верхнього краю
                    transform: 'translateX(-50%)', // Центруємо текст по горизонталі
                    zIndex: 2,
                    textDecoration: 'none',
                }}>
                    <div>from Zero</div>
                    <div>to Hero</div>
                </Link>

                <div style={{ width: 1440, height: 497, background: 'white', position: 'absolute', left: 0, top: 1127 }} />
                <div style={{
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: '24px',
                    position: 'absolute',
                    left: 565,
                    top: 1545,
                }}>Copyright Ideapeel Inc © 2025. All Right Reserved</div>
            </div>

            {/* Новий блок з текстом під новим логотипом */}
            <div style={{ width: '100%', height: '100%', position: 'relative', top: 890 }}>
                <Link to="/" style={{
                    position: 'absolute',
                    left: 450,
                    top: 370,
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

                <Link to="/reviews" style={{
                    position: 'absolute',
                    left: 969,
                    top: 370,
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: 24,
                    wordWrap: 'break-word',
                    textDecoration: 'none',
                }}>
                    Залишити відгук
                </Link>
                {/* Додано рамка під текстом */}
                <div style={{ width: '80%', border: '1px #007ACC solid', position: 'absolute', top: 660, right: '10%', left: '8%' }}></div>
            </div>
        </div>
    );
};

export default Our;
