import React from 'react';
import javaImage from './images/java11.png';
import logo from './images/logo.png'; // Оновлений імпорт зображення
import newLogo from './images/newLogo.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#F4F2F6' }}>
            <div style={{ width: 1709, height: 934, position: 'absolute', left: 0, top: 94 }}>
                <div style={{ width: 1440, height: 796, background: '#F4F2F6' }} />

                <div style={{ width: 580, height: 393, position: 'absolute', left: 92, top: 217 }}>
                    <div style={{
                        width: 223,
                        height: 50,
                        paddingLeft: -5,
                        paddingRight: -5,
                        paddingTop: 2,
                        paddingBottom: 2,
                        background: '#7C4EE4',
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                        display: 'inline-flex',
                        position: 'absolute',
                        left: 1020,
                        top: -295, // Відстань від верху (можете змінити за потреби)
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

                <img
                    src={logo}
                    alt="Лого"
                    style={{
                        width: '43.851px',
                        height: '43.804px',
                        position: 'absolute',
                        left: 90,  // Відстань від лівого краю
                        top: -70,   // Відстань від верхнього краю
                        flexShrink: 0,
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
                    left: 160,  // Вирівнюємо по лівому краю логотипу
                    top: -47,   // Відстань від верхнього краю
                    transform: 'translateY(-50%)', // Центруємо текст по вертикалі
                    zIndex: 2,
                }}>
                    <div>from Zero</div>
                    <div>to Hero</div>
                </div>

                {/* Додавання тексту "Про нас" біля логотипу */}
                <div style={{
                    color: '#7C4EE4',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: 30,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 800, // Вирівнюємо по лівому краю логотипу
                    top: -48,    // Відстань від верхнього краю
                    transform: 'translateY(-50%)', // Центруємо текст по вертикалі
                    zIndex: 2,
                }}>
                    Про нас
                </div>

                {/* Додавання тексту "Наш курс" під "Про нас" з відстанню  */}
                <Link to="/our" style={{
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
                    textDecoration: 'none'
                }}>
                    Наш курс
                </Link>

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

                <img
                    src={newLogo}
                    alt="Новий логотип"
                    style={{
                        width: '43.851px',
                        height: '43.804px',
                        position: 'absolute',
                        left: 700,  // Відстань від лівого краю
                        top: 900,   // Відстань від верхнього краю
                        zIndex: 2, // Додайте zIndex
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
                    left: 812,  // Вирівнюємо по лівому краю нового логотипу
                    top: 900,   // Відстань від верхнього краю
                    transform: 'translateX(-50%)', // Центруємо текст по горизонталі
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
                    top: 1209, // Це значення потрібно зменшити
                }}>Copyright Ideapeel Inc © 2024. All Right Reserved</div>
            </div>

            {/* Новий блок з текстом під новим логотипом */}
            <div style={{ width: '100%', height: '100%', position: 'relative', top: 890 }}>
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
                    textDecoration: 'none'
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
                {/* Додано рамка під текстом */}
                <div style={{ width: '80%', border: '1px #7C4EE4 solid', position: 'absolute', top: 330, right: '10%', left: '8%' }}></div>
            </div>
        </div>
    );
};

export default About;
