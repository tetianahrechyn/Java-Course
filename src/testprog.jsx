import React, { useState, useEffect } from 'react';
import { auth, database } from './firebase';
import { ref, onValue } from 'firebase/database';

const Progress = () => {
    const [userId, setUserId] = useState(null);
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
                }, {
                    onlyOnce: true
                });
            });
        }
    }, [userId]);

    const gradient = `conic-gradient(
        #C5B6F2 0%,
        #A084EA ${percentage * 0.5}%,
        #7C4EE4 ${percentage}%,
        #E0E0E0 ${percentage}% 100%
    )`;

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#F4F2F6' }}>
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
        </div>
    );
};

export default Progress;
