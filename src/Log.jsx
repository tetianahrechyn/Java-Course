import React from 'react';
import logo from './images/logo.png';
import newLogo from './images/newLogo.png';
import { Link } from 'react-router-dom';

const Log = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', top: -105, background: '#F4F2F6' }}>
            <div style={{ width: 1709, height: 934, position: 'absolute', left: 0, top: 94 }}>

                {/* Фон */}
                <div style={{ width: 1440, height: 796, background: '#F4F2F6' }} />

                {/* Логотип та текст "from Zero" та "to Hero" на фоні F4F2F6 */}
                <div style={{ background: '#F4F2F6', position: 'relative', zIndex: 2 }}>
                    <img
                        src={logo}
                        alt="Лого"
                        style={{
                            width: '43.851px',
                            height: '43.804px',
                            position: 'absolute',
                            left: 90,
                            top: -760,
                            zIndex: 3
                        }}
                    />

                    <div style={{
                        textAlign: 'center',
                        color: '#333333',
                        fontSize: 20,
                        fontFamily: 'Raleway',
                        fontWeight: '800',
                        position: 'absolute',
                        left: 160,
                        top: -737,
                        transform: 'translateY(-50%)',
                        zIndex: 3
                    }}>
                        <div>from Zero</div>
                        <div>to Hero</div>
                    </div>


                    <div style={{
                        width: '100%',
                        height: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 16,
                        display: 'inline-flex',
                        position: 'absolute', // Додаємо абсолютне позиціювання
                        left: 100, // Зменшуємо значення left
                        top: -600, // Піднімаємо значення top
                    }}>
                        <div style={{
                            color: '#313131',
                            fontSize: 40,
                            fontFamily: 'Poppins',
                            fontWeight: '600',
                            wordWrap: 'break-word',
                        }}>
                            Вхід
                        </div>
                        <div style={{
                            opacity: 0.75,
                            color: '#313131',
                            fontSize: 16,
                            fontFamily: 'Poppins',
                            fontWeight: '400',
                            wordWrap: 'break-word'
                        }}>
                            Увійдіть, щоб отримати доступ до свого облікового запису
                        </div>

                        <div style={{
                            width: '100%',
                            height: '100%',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',

                            gap: 24,
                            display: 'inline-flex',
                            position: 'relative',
                            top: 40,
                            left: 1
                        }}>
                            <div style={{
                                width: 512,
                                height: 56,
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                display: 'flex'
                            }}>
                                <div style={{
                                    alignSelf: 'stretch',
                                    height: 56,
                                    background: 'white',
                                    borderRadius: 4,
                                    border: '1px #79747E solid',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: 10,
                                    display: 'flex'
                                }}>
                                    <div style={{
                                        alignSelf: 'stretch',
                                        paddingTop: 8,
                                        paddingBottom: 8,
                                        paddingLeft: 16,
                                        borderTopLeftRadius: 4,
                                        borderTopRightRadius: 4,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        display: 'inline-flex'
                                    }}>
                                        <input
                                            type="email"
                                            placeholder="Електронна пошта"
                                            style={{
                                                flex: '1 1 0',
                                                height: 40,
                                                border: 'none',
                                                outline: 'none',
                                                fontSize: 14,
                                                fontFamily: 'Poppins',
                                                color: '#1C1B1F',
                                                padding: '0 4px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                width: 512,
                                height: 56,
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                display: 'flex'
                            }}>
                                <div style={{
                                    alignSelf: 'stretch',
                                    height: 56,
                                    background: 'white',
                                    borderRadius: 4,
                                    border: '1px #79747E solid',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: 10,
                                    display: 'flex'
                                }}>
                                    <div style={{
                                        alignSelf: 'stretch',
                                        paddingTop: 4,
                                        paddingBottom: 4,
                                        paddingLeft: 16,
                                        borderTopLeftRadius: 4,
                                        borderTopRightRadius: 4,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        display: 'inline-flex'
                                    }}>
                                        <input
                                            type="password"
                                            placeholder="Пароль"
                                            style={{
                                                flex: '1 1 0',
                                                height: 40,
                                                border: 'none',
                                                outline: 'none',
                                                fontSize: 14,
                                                fontFamily: 'Poppins',
                                                color: '#313131',
                                                padding: '0 4px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: 252,
                                display: 'inline-flex'
                            }}>
                                <div style={{
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: 8,
                                    display: 'flex'
                                }}>
                                    <div style={{ width: 24, height: 24, position: 'relative' }}>
                                        <div style={{ width: 18, height: 18, left: 3, top: 3, position: 'absolute', border: '2px #313131 solid' }}></div>
                                    </div>
                                    <div style={{ color: '#313131', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Запам’ятати мене</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ color: '#FF8682', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}> </span>
                                    <span style={{ color: '#7C4EE4', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Забули</span>
                                    <span style={{ color: '#FF8682', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}> </span>
                                    <span style={{ color: '#7C4EE4', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>пароль</span>
                                </div>
                            </div>

                            <div style={{
                                width: 510,
                                minHeight: 50, // Замість height
                                borderRadius: 4,
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 4,
                                display: 'flex',
                                background: '#515DEF',
                                border: '1px #79747E solid',
                                cursor: 'pointer',
                                marginTop: 16,
                            }}>
                                <div style={{ color: '#F3F3F3', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600' }}>Login</div>
                            </div>


                            {/* Додано обгортку для тексту "Немає облікового запису?" */}
                            <div style={{
                                width: 512, // Зроблено так само, як поля введення
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 4,
                                marginTop: 16, // Відстань до кнопки
                            }}>
                                <span style={{ color: '#313131', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500' }}>Немає облікового запису? </span>
                                <span style={{ color: '#7C4EE4', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600' }}>Зареєструватися</span>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Новий логотип та текст під ним */}
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

                {/* Додатковий контент */}
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

            {/* Блок з текстом під новим логотипом */}
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
                }}>
                    Залишити відгук
                </div>
                <div style={{ width: '80%', border: '1px #7C4EE4 solid', position: 'absolute', top: 330, right: '10%', left: '8%' }}></div>
            </div>
        </div>
    );
};

export default Log;
