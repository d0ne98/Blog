import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Input from './Input';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { register } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        
        event.preventDefault();
        setError(null);
        try {
            await register(username, password);
            navigate('/');
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    function handleChange(event) {
        
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            {error && <div className="auth-error">{error}</div>}
            <form className="auth-form" onSubmit={handleSubmit}>
                <Input
                    name="username"
                    type="text"
                    label="Username"
                    value={username}
                    handleChange={handleChange}
                    required={true}
                    placeholder="Choose a username"
                />
                <Input
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    handleChange={handleChange}
                    required={true}
                    placeholder="Choose a password"
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}