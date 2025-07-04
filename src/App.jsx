import React from 'react';
import javaImage from './images/java11.png';
import logo from './images/logo.png';
import newLogo from './images/newLogo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Our from './Our';
import Log from './Log';
import Sign from './Sign';
import Learn from './learn';
import Theory1Page from "./Theory1";
import Pract1Page from "./Pract1";
import Plus1Page from "./Plus1";
import Plust1Page from "./Plust1";
import AddReviews from "./vidhyki";
import Reviews from "./statictikaReviews";
import User from "./user";
import Variables from "./Variables";
import VariablesTheory from "./VariablesTheory";
import VariablesPlus from "./VariablesPlus";
import VariablesPract from "./VariablesPract";
import VariablesPlusTheory from "./VariablesPlusTheory";
import HelloWorldPlus from "./HelloWorldPlus";
import HelloWorldTheory from "./HelloWorldTheory";
import HelloWorld from "./HelloWorld";
import HelloWorldPract from "./HelloWorldPract";
import HelloWorldPlusTheory from "./HelloWorldPlusTheory";
import Progress from "./Progress";

const HomePage = () => (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#F4F2F6' }}>
        <div style={{ width: 1440, height: 934, position: 'absolute', left: 0, top: 94 }}>
            <div style={{ width: 1440, height: 796, background: '#007ACC' }} />
            <div style={{ width: 580, height: 393, position: 'absolute', left: 92, top: 217 }}>
                <h1 style={{
                    color: 'white',
                    fontSize: 48,
                    fontFamily: 'Raleway',
                    fontWeight: '700',
                    lineHeight: '61px',
                }}>Привіт! <br />Вітаємо тебе на курсі</h1>

                <p style={{
                    color: 'white',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: '30px',
                }}>
                    TypeScript — це мова програмування на базі JavaScript, яка додає типізацію. З її допомогою можна створювати вебзастосунки, мобільні додатки, ігри та серверні програми.
                </p>

                <div style={{
                    width: 243,
                    height: 23,
                    background: 'white',
                    borderRadius: 8,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '15px 4px',
                    position: 'absolute',
                    left: 10,
                    top: 300,
                }}>
                    <Link to="/our" style={{
                        color: '#373737',
                        fontSize: 14,
                        fontFamily: 'Raleway',
                        fontWeight: '700',
                        lineHeight: '21px',
                        textDecoration: 'none'
                    }}>Перейти до вивчення</Link>
                </div>

                {/* Кнопка "Зареєструватися" */}
                <div style={{
                    width: 223,
                    height: 50,
                    background: '#007ACC',
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'inline-flex',
                    position: 'absolute',
                    left: 1020,
                    top: -295,
                }}>
                    <Link to="/sign" style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 20,
                        fontFamily: 'Raleway',
                        fontWeight: '500',
                        lineHeight: 30,
                        wordWrap: 'break-word',
                        textDecoration: 'none',
                    }}>Зареєструватися</Link>
                </div>
            </div>

            {/* Вставка нового зображення */}
            <img
                style={{ width: 608, height: 576, position: 'absolute', left: 733, top: 122 }}
                src={javaImage}
                alt="Java"
            />
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

            {/* Додавання тексту "Наш курс" під "Про нас" */}
            <Link to="/our" style={{
                color: '#333333',
                fontSize: 20,
                fontFamily: 'Raleway',
                fontWeight: '500',
                lineHeight: 30,
                position: 'absolute',
                left: 900,
                top: -48,
                transform: 'translateY(-50%)',
                zIndex: 2,
                textDecoration: 'none',
            }}>
                Наш курс
            </Link>

            {/* Додавання тексту "Увійти" під "Наш курс" */}
            <Link to="/log" style={{
                color: '#333333',
                fontSize: 20,
                fontFamily: 'Raleway',
                fontWeight: '500',
                lineHeight: 30,
                position: 'absolute',
                left: 1013,
                top: -48,
                transform: 'translateY(-50%)',
                zIndex: 2,
                textDecoration: 'none',
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
            }}>Copyright Ideapeel Inc © 2025. All Right Reserved</div>
        </div>
        {/* Новий блок з текстом під новим логотипом */}
        <div style={{ width: '100%', height: '100%', position: 'relative', top: 890 }}>
           
            <Link to="/reviews" style={{
                position: 'absolute',
                left: 969,
                top: 45,
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
            <div style={{
                position: 'absolute',
                left: 450,
                top: 45,
                color: '#150E06',
                fontSize: 16,
                fontFamily: 'Raleway',
                fontWeight: '400',
                lineHeight: 24,
                wordWrap: 'break-word'
            }}>
                Головна сторінка
            </div>
            {/* Рамка під текстом */}
            <div style={{ width: '80%', border: '1px #007ACC solid', position: 'absolute', top: 330, right: '10%', left: '8%' }}></div>
        </div>
    </div>
);

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our" element={<Our />} />
            <Route path="/our/learn" element={<Learn />} />
            <Route path="/log" element={<Log />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/theory1" element={<Theory1Page />} />
            <Route path="/pract1" element={<Pract1Page />} />
            <Route path="/plus1" element={<Plus1Page />} />
            <Route path="/plust1" element={<Plust1Page />} />
            <Route path="/reviews/addreviews" element={<AddReviews />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/user" element={<User />} />
            <Route path="/variables" element={<Variables />} />
            <Route path="/variablestheory" element={<VariablesTheory />} />
            <Route path="/variablesplus" element={<VariablesPlus />} />
            <Route path="/variablesplustheory" element={<VariablesPlusTheory />} />
            <Route path="/variablespract" element={<VariablesPract />} />
            <Route path="/helloworld" element={<HelloWorld />} />
            <Route path="/helloworldtheory" element={<HelloWorldTheory />} />
            <Route path="/helloworldplus" element={<HelloWorldPlus />} />
            <Route path="/helloworldplustheory" element={<HelloWorldPlusTheory />} />
            <Route path="/helloworldpract" element={<HelloWorldPract />} />
            <Route path="/progress" element={<Progress />} />
        </Routes>
    </Router>
);
export default App;
