import React, { useState, useRef, useEffect } from 'react';

export default function Stop() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);

    const handleStart = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        const currentTime = Date.now();
        setStartTime(currentTime - elapsedTime);
        setNow(currentTime);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    };

    const handleStop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setElapsedTime(now - startTime);
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setStartTime(null);
        setNow(null);
        setElapsedTime(0);
    };

    let timePassed = startTime !== null && now !== null ? ((now - startTime) / 1000).toFixed(3) : (elapsedTime / 1000).toFixed(3);

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div className="stopwatch-container">
            <h2>Stopwatch: {timePassed}</h2>
            <div className="button-group">
                <button className="button" onClick={handleStart}>Start</button>
                <button className="button" onClick={handleStop}>Stop</button>
                <button className="button" onClick={handleReset}>Reset</button>
            </div>
            <style jsx>{`
                .stopwatch-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    background-color: #f0f8ff;
                    text-align: center;
                }
                h2 {
                    font-size: 48px;
                    margin-bottom: 20px;
                }
                .button-group {
                    display: flex;
                    gap: 10px;
                }
                .button {
                    padding: 10px 20px;
                    font-size: 16px;
                    color: white;
                    background-color: #007bff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
}
