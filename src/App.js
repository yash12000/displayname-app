import React, { useState } from 'react';
import './styles.css';

const App = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName && lastName) {
            setFullName(`${firstName} ${lastName}`);
        }
    };

    return (
        <div className="form-container">
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {fullName && (
                <div className="result">
                    <h2>Full Name: {fullName}</h2>
                </div>
            )}
        </div>
    );
};

export default App;
