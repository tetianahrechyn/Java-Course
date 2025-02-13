import React from 'react';
import bitImage from './images/bit.png';
import logo from './images/logo.png'; // Оновлений імпорт зображення
import newLogo from './images/newLogo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Our from './Our'; // Імпорт нового компонента
import Log from './Log';
import Sign from './Sign';
import Learn from './learn';
import outImage from './images/out.png';
import palImage from './images/pal.png';
import komImage from './images/kom.png';
import wordImage from './images/word.png';
import pal1Image from './images/pal1.png';
import kom1Image from './images/kom1.png';
import praImage from './images/pra.png';
import plusImage from './images/plus.png';
import { signOut } from "firebase/auth";
import { auth } from './firebase';

const Theory1Page = () => {
    const handleLogout = async () => {
        try {
            await signOut(auth); // Вихід з акаунту
            console.log("Користувача виведено з системи");
            // Можливо, ви хочете перенаправити користувача на сторінку входу або додати іншу логіку
        } catch (error) {
            console.error("Помилка при виході:", error);
        }
    };
    return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#F4F2F6' }}>
        <div style={{ width: 1709, height: 934, position: 'absolute', left: 0, top: 94 }}>
            <div style={{ width: 1440, height: 3570, background: '#F4F2F6' }} />
            <div style={{ width: 580, height: 393, position: 'absolute', left: 92, top: 217 }}>
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
                top: 50,
                left: 580,
                textAlign: 'center', // Додано для центрування тексту
            }}>
                <div style={{ margin: 0, }}> Основні поняття</div>

                <div style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: 530,
                    lineHeight:  1.4,
                    wordWrap: 'break-word',
                    top: 90,
                    left: -360,
                    position: 'absolute',
                }}>
                    Що таке Java?
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight:  1.4,
                    wordWrap: 'break-word',
                    top: 120,
                    left: -360,
                    textAlign: 'left',
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                }}>
                    Java це об'єктно-орієнтована мова програмування. Як мова, яка має функцію
                    об'єктно-орієнтування, мова <br />
                    програмування Java підтримує такі основні поняття:<br />
                    - Поліморфізм.<br />
                    - Наслідування.<br />
                    - Інкапсуляція.<br />
                    - Абстракція.<br />
                    - Класи.<br />
                    - Об'єкти.<br />
                    - Методи.<br />
            </div>

                <div style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: 530,
                    lineHeight:  1.4,
                    wordWrap: 'break-word',
                    top: 350,
                    left: -360,
                    position: 'absolute',
                }}>
                    Базовий синтаксис Java:
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    top: 380,
                    whiteSpace: 'nowrap',
                    left: -360,
                    textAlign: 'left',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight:  1.4,
                    position: 'absolute',
                    wordWrap: 'break-word'
                }}>
                   Object - Об'єкти мають стан та поведінку. Приклад: собака має стан - колір, ім'я, породу, а також поведінку - гавкати,
                    їсти, бігати. Об'єкт <br />є екземпляром класу.<br /> Class - Клас можна назвати шаблоном/планом що описуює поведінку/стан, якими наділений обєкт.<br />
                    Methods - метод в основному описує поведінку. Клас може містити багато методів. Саме в методах описана логіка, манікуляції з <br />
                    даними та виконуються всі дії. <br />
                    Instant Variables - Кожен об'єкт має свій набір змінних. Стан об'єкта створюється значеннями, присвоєними цим змінним.
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    top: 540,
                    whiteSpace: 'nowrap',
                    left: -360,
                    textAlign: 'left',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight:  1.4,
                    position: 'absolute',
                    wordWrap: 'break-word'
                }}>
                    Про Java програми важливо знати наступні моменти.<br />
                    <br />Чутливість до регістру - Java чутлива до регістру два ідентифікатори Hello і hello в Java будуть мати різне значення.<br />
                    Імена класів - для всіх імен класів, перша літера повинна бути у верхньому регістрі.<br /> - Якщо для імені класу використовуються кілька слів, то кожне внутрішнє слово повинне починатися з літери у верхньому регістрі.<br />
                    - Приклад імені класу MyFirstJavaProgram <br />
                    Імена методів - всі імена методів повинні починатися з літери в нижньому регістрі.<br />
                    - Якщо для імені методу використовуються кілька слів, то кожне внутрішнє слово повинне починатися з літери у верхньому регістрі.<br />
                    - Приклад імені методу public void myMethodName()<br />
                    Назва файлу програми - Назва файлу програми повинні точно збігатися з ім'ям класу.<br />
                    - При збереженні файлу, Ви повинні зберегти його, використовуючи ім'я класу (пам'ятайте про чутливість мови програмування Java до<br />
                    регістру) і додати «.java» наприкінці імені (якщо ім'я файлу та ім'я класу не збігаються, Ваша програма не скомпілюється). <br />
                    - Наприклад "MyFirstJavaProgram" - це назва класу, тоді файл повинен нами назву "MyFirstJavaProgram.java"<br />
                    public static void main (String[] args) - обробка програми починається з методу main(), який є обов'язковою частиною кожної програми <br />
                    Java. <br />
                </div>

                <div style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: 530,
                    lineHeight:  1.4,
                    wordWrap: 'break-word',
                    top: 910,
                    left: -360,
                    position: 'absolute',
                }}>
                    Java ідентифікатори:
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    top: 940,
                    whiteSpace: 'nowrap',
                    left: -360,
                    textAlign: 'left',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight:  1.4,
                    position: 'absolute',
                    wordWrap: 'break-word'
                }}>
                    Всі компоненти Java мають імена. Імена, що використовувються для класів, змінних і методів називаються ідентифікаторами.<br />
                    В Java є декілька моментів, які потрібно пам'ятати про ідентифікатори. Вони наступні:<br />
                    - Всі ідентифікатори повинні починатися з літери (від A до Z або a до z), символу ($) або підкреслення ( _ ).<br />
                    - Після першого символу ідентифікатори можуть мати будь-яку комбінацію символів.<br />
                    - Ключове слово не може бути використане в якості ідентифікатора.<br />
                    - Найголовніше, ідентифікатори чутливі до регістру.<br />
                    - Декілька прикладів правильних ідентифікаторів: age, $salary, _value, __1_value<br />
                    - Декілька прикладів НЕ правильних ідентифікаторів: 123abc, -salary
                </div>

                <div style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: 530,
                    lineHeight:  1.4,
                    wordWrap: 'break-word',
                    top: 1150,
                    left: -360,
                    position: 'absolute',
                }}>
                    Модифікатори в Java:
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    top: 1180,
                    whiteSpace: 'nowrap',
                    left: -360,
                    textAlign: 'left',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight:  1.4,
                    position: 'absolute',
                    wordWrap: 'break-word'
                }}>
                    Як і в інших мовах, можна змінювати класи, методи і т.д., за допомогою модифікаторів. Модифікатор в Java діляться на дві категорії:<br />
                    - Модифікатори доступу: default, public , protected, private<br />
                    - Модифікатори без-доступу: final, abstract, strictfp.<br />
                    Більш детально про модифікатори буде описано пізніше.
                </div>


                <div style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: 530,
                    lineHeight:  1.4,
                    wordWrap: 'break-word',
                    top: 1300,
                    left: -360,
                    position: 'absolute',
                }}>
                    Змінні в Java:
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    top: 1330,
                    whiteSpace: 'nowrap',
                    left: -360,
                    textAlign: 'left',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight:  1.4,
                    position: 'absolute',
                    wordWrap: 'break-word'
                }}>
                    Ми побачимо наступні змінні в Java:<br />
                    - Локальні змінні.<br />
                    - Змінні класу (статичні змінні в Java).<br />
                    - Змінні екземпляра (нестатичні змінні в Java).
                </div>

                <div style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: 530,
                    lineHeight:  1.4,
                    wordWrap: 'break-word',
                    top: 1450,
                    left: -360,
                    position: 'absolute',
                }}>
                    Масиви в Java:
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    top: 1480,
                    whiteSpace: 'nowrap',
                    left: -360,
                    textAlign: 'left',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight:  1.4,
                    position: 'absolute',
                    wordWrap: 'break-word'
                }}>
                    В Java масиви є об'єктами, які зберігають кілька змінних одного і того ж типу. Тим не менше, сам масив є об'єктом. Ми розглянемо, як <br />
                    створити і заповнити масив Java в наступних статтях.
                </div>
                <div style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: 530,
                    lineHeight:  1.4,
                    wordWrap: 'break-word',
                    top: 1560,
                    left: -360,
                    position: 'absolute',
                }}>
                    Ключові слова в Java:
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    top: 1590,
                    whiteSpace: 'nowrap',
                    left: -360,
                    textAlign: 'left',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight:  1.4,
                    position: 'absolute',
                    wordWrap: 'break-word'
                }}>
                    Нижче наведений список ключових слів в Java. Ключове слово в Java не може бути використане як постійне або змінне, або будь-яке <br />
                    інше ім’я для ідентифікаторів.
                </div>

                <img
                    src={wordImage}
                    alt="word"
                    style={{
                        width: '669',
                        height: '250',
                        position: 'absolute',
                        left: -170,
                        top: 1680,
                        zIndex: 3
                    }}
                />


                <div style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: 530,
                    lineHeight:  1.4,
                    wordWrap: 'break-word',
                    top: 1980,
                    left: -360,
                    position: 'absolute',
                }}>
                    Є два типи даних, доступні в Java:
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    top: 2010,
                    whiteSpace: 'nowrap',
                    left: -360,
                    textAlign: 'left',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight:  1.4,
                    position: 'absolute',
                    wordWrap: 'break-word'
                }}>
                    - Примітивні типи даних Java.<br />
                    - Об'єктні типи даних Java.
                </div>


                <div style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: 530,
                    lineHeight:  1.4,
                    wordWrap: 'break-word',
                    top: 2090,
                    left: -360,
                    position: 'absolute',
                }}>
                    Примітивні типи даних Java:
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    top: 2120,
                    whiteSpace: 'nowrap',
                    left: -360,
                    textAlign: 'left',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight:  1.4,
                    position: 'absolute',
                    wordWrap: 'break-word'
                }}>
                    В Java існує всього 8 типів примітивних даних, які не є об'єктами. Імена примітивних  типів даних в Java є ключовими словами. <br />
                    Давайте тепер розглянемо в ці типи даних Java.
                </div>

                <img
                    src={bitImage}
                    alt="word"
                    style={{
                        width: '679',
                        height: '350',
                        position: 'absolute',
                        left: -160,
                        top: 2210,
                        zIndex: 3
                    }}
                />


                <div style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: 530,
                    lineHeight:  1.4,
                    wordWrap: 'break-word',
                    top: 2420,
                    left: -360,
                    position: 'absolute',
                }}>
                    Довідка по типами даних Java:
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    top: 2450,
                    whiteSpace: 'nowrap',
                    left: -360,
                    textAlign: 'left',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight:  1.4,
                    position: 'absolute',
                    wordWrap: 'break-word'
                }}>
                    - Змінні створюються за допомогою певних конструкторів класів Java. Вони використовуються для доступу до об'єктів. Ці змінні<br />
                    оголошуються певного типу, який не може бути змінений. Наприклад, Employee, Cat і т.д.<br />
                    - В Java об'єкти класу, а також змінні масиву підпадають під різні типи даних.<br />
                    - В Java значення будь-якої заданої змінної за замовчуванням дорівнює нулю.<br />
                    - Задана змінна може бути використана для позначення будь-якого об'єкта, заявленого типу або будь-якого сумісного типу.<br />
                    - Приклад: Animal animal = new Animal ("dog");
                </div>
                <div style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: 530,
                    lineHeight:  1.4,
                    wordWrap: 'break-word',
                    top: 2620,
                    left: -360,
                    position: 'absolute',
                }}>
                    Коментарі в Java:
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    top: 2650,
                    whiteSpace: 'nowrap',
                    left: -360,
                    textAlign: 'left',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight:  1.4,
                    position: 'absolute',
                    wordWrap: 'break-word'
                }}>
                    Java підтримує однорядкові і багаторядкові коментарі, дуже схожі на С і С ++. Всі символи що всередині будь-якого коментаря<br />
                    ігноруються компілятором Java.
                </div>

                <img
                    src={palImage}
                    alt="word"
                    style={{
                        width: '669',
                        height: '250',
                        position: 'absolute',
                        left: -170,
                        top: 2740,
                        zIndex: 3
                    }}
                />

                <img
                    src={komImage}
                    alt="word"
                    style={{
                        width: '669',
                        height: '250',
                        position: 'absolute',
                        left: -140,
                        top: 2744,
                        zIndex: 3
                    }}
                />

                <div style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: 530,
                    lineHeight:  1.4,
                    wordWrap: 'break-word',
                    top: 3080,
                    left: -360,
                    position: 'absolute',
                }}>
                    Перша програма на Java:
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    top: 3110,
                    whiteSpace: 'nowrap',
                    left: -360,
                    textAlign: 'left',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight:  1.4,
                    position: 'absolute',
                    wordWrap: 'break-word'
                }}>
                    Давайте розглянемо простий код, який буде друкувати слова "Hello World".
                </div>

                <img
                    src={pal1Image}
                    alt="word"
                    style={{
                        width: '669',
                        height: '250',
                        position: 'absolute',
                        left: -170,
                        top: 3180,
                        zIndex: 3
                    }}
                />

                <img
                    src={kom1Image}
                    alt="word"
                    style={{
                        width: '669',
                        height: '250',
                        position: 'absolute',
                        left: -140,
                        top: 3185,
                        zIndex: 3
                    }}
                />

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
                    top: 3680,
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
                top: 3680,
                transform: 'translateX(-50%)',
                zIndex: 2,
            }}>
                <div>from Zero</div>
                <div>to Hero</div>
            </div>

            <div style={{ width: 1440, height: 385, background: 'white', position: 'absolute', left: 0, top: 3660 }} />
            <div style={{
                color: '#150E06',
                fontSize: 16,
                fontFamily: 'Raleway',
                fontWeight: '400',
                lineHeight: '24px',
                position: 'absolute',
                left: 565,
                top: 3979,
            }}>Copyright Ideapeel Inc © 2024. All Right Reserved</div>
        </div>
        {/* Новий блок з текстом під новим логотипом */}
        <div style={{ width: '100%', height: '100%', position: 'relative', top: 3670 }}>
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
            <div style={{ width: '80%', border: '1px #7C4EE4 solid', position: 'absolute', top: 334, right: '10%', left: '8%' }}></div>
        </div>
    </div>
);
};


export default Theory1Page;
