import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Import Firestore database
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; 

export default function Todo() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    // Fetch todos from Firestore on component mount
    useEffect(() => {
        const fetchTodos = async () => {
            const querySnapshot = await getDocs(collection(db, "todos"));
            const todosData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setTodos(todosData);
        };
        fetchTodos();
    }, []);

    

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleAdd = async () => {
        const newTodo = { text };
        const docRef = await addDoc(collection(db, "todos"), newTodo);
        setTodos([...todos, { ...newTodo, id: docRef.id }]);
        setText('');
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "todos", id));
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="todo-container">
            <div className="input-container">
                <textarea rows="4" value={text} onChange={handleOnChange}></textarea>
                <button name="button" type="button" onClick={handleAdd}>Add</button>
            </div>
            <div className="todos-list">
                {todos.map((item) => {
                    return (
                        <div key={item.id} className="todo-item">
                            <div className="text">{item.text}</div>
                            <button name="button" type="button" onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    );
                })}
            <style jsx>{`
                .todo-container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f0f0f0;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .input-container {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-bottom: 20px;
                }
                textarea {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    resize: none;
                }
                button {
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                button:hover {
                    background-color: #0056b3;
                }
                .todos-list {
                    display: flex;
                    flex-direction: column;
                }
                .todo-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    margin-bottom: 10px;
                    background-color: white;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    transition: background-color 0.3s ease;
                }
                .todo-item:hover {
                    background-color: #e9ecef;
                }
                .text {
                    flex-grow: 1;
                    margin-right: 10px;
                }
            `}</style>
            </div>
        </div>
    );
}
