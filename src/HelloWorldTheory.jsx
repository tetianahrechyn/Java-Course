import React, {useEffect, useState} from 'react';
import logo from './images/logo.png';
import newLogo from './images/newLogo.png';
import { Link } from 'react-router-dom';
import outImage from './images/out.png';
import { signOut } from "firebase/auth";
import { auth, db } from './firebase';
import userImage from './images/user.png';
import { collection, getDocs } from 'firebase/firestore';

const HelloWorldTheory = () => {
    const [theories, setTheories] = useState([]);

    useEffect(() => {
        const fetchTheories = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'thhelloworld'));
                const theoryData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTheories(theoryData);
            } catch (error) {
                console.error('Помилка отримання даних:', error);
            }
        };

        fetchTheories();
    }, []);

    if (!theories.length) return <div>Завантаження...</div>;

    const handleLogout = async () => {
        try {
            await signOut(auth); // Вихід з акаунту
            console.log("Користувача виведено з системи");
        } catch (error) {
            console.error("Помилка при виході:", error);
        }
    };
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#F4F2F6' }}>
            <div style={{ width: 1440, height: 934, position: 'absolute', left: 0, top: 94 }}>
                <div style={{ width: 1440, height: 3370, background: '#F4F2F6' }} />
                <div style={{ width: 580, height: 393, position: 'absolute', left: 92, top: 217 }}>
                </div>
                <div style={{ marginLeft: '5cm', marginRight: '5cm', marginTop: '1180px', position: 'relative', zIndex: 10 }}>
                    {theories.slice(0, 1).map(theory => (
                        <div key={theory.id} style={{ position: 'relative', marginTop: '-4475px' }}>
                            <h3 style={{ fontSize: '55px', textAlign: 'left', marginLeft: '305px' }}>{theory.title}</h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: theory.content.replace(
                                        /<a\s/gi,
                                        '<a target="_blank" rel="noopener noreferrer" '
                                    )
                                }}
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '20px',
                                    borderRadius: '10px',
                                    border: '1px solid #ccc',
                                    maxWidth: '85%', // скорочуємо ширину праворуч
                                    marginLeft: '90px',
                                }}
                            />
                            <br />
                        </div>
                    ))}
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


                <Link to="/user">
                    <img
                        src={userImage}
                        alt="user"
                        style={{
                            width: '43.851px',
                            height: '43.804px',
                            position: 'absolute',
                            left: 1080,
                            top: -70,
                            textDecoration: 'none'
                        }}
                    />
                </Link>

                <Link to="/" >
                    <img
                        src={logo}
                        alt="Лого"
                        style={{
                            width: '43.851px',
                            height: '43.804px',
                            position: 'absolute',
                            left: 90,
                            top: -70,
                            textDecoration: 'none',
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
                    left: 160,
                    top: -47,
                    transform: 'translateY(-50%)',
                    textDecoration: 'none',
                    zIndex: 2,
                }}>
                    <div>from Zero</div>
                    <div>to Hero</div>
                </Link>

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


                <Link to="/" >
                    <img
                        src={newLogo}
                        alt="Новий логотип"
                        style={{
                            width: '43.851px',
                            height: '43.804px',
                            position: 'absolute',
                            left: 700,
                            top: 3480,
                            zIndex: 2,
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
                    left: 812,
                    top: 3480,
                    transform: 'translateX(-50%)',
                    textDecoration: 'none',
                    zIndex: 2,
                }}>
                    <div>from Zero</div>
                    <div>to Hero</div>
                </Link>

                <div style={{ width: 1440, height: 385, background: 'white', position: 'absolute', left: 0, top: 3460 }} />
                <div style={{
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: '24px',
                    position: 'absolute',
                    left: 565,
                    top: 3779,
                }}>Copyright Ideapeel Inc © 2025. All Right Reserved</div>
            </div>
            {/* Новий блок з текстом під новим логотипом */}
            <div style={{ width: '100%', height: '100%', position: 'relative', top: 3470 }}>

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
                <div style={{ width: '80%', border: '1px #007ACC solid', position: 'absolute', top: 334, right: '10%', left: '8%' }}></div>
            </div>
        </div>
    );
};


export default HelloWorldTheory;
