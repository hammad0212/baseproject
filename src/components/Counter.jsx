import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <h2>{count}</h2>
            <button className="button prim" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="button prim" onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrement</button>
            <button className="button prim" onClick={() => setCount(0)}>Reset</button>
            <style jsx>{`
                .counter-container {
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
                .button {
                    padding: 10px 20px;
                    margin: 5px;
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
                .prim {
                    background-color: #007bff;
                }
            `}</style>
        </div>
    );
}
