import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Input from './Input';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setError(null);
        try {
            await login(username, password);
            navigate('/');
        } catch (err) {
            setError('Login failed. Please try again.');
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
            <h2>Login</h2>
            {error && <div className="auth-error">{error}</div>}
            <form className="auth-form" onSubmit={handleSubmit}>
                <Input
                    name="username"
                    type="text"
                    label="Username"
                    value={username}
                    handleChange={handleChange}
                    required={true}
                    placeholder="Enter your username"
                />
                <Input
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    handleChange={handleChange}
                    required={true}
                    placeholder="Enter your password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}