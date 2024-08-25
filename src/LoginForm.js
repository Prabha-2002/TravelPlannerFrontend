import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const LoginForm = () => {
    const [loginType, setLoginType] = useState('admin');
    const [name, setName] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const endpoint = loginType === 'admin'
            
                ? 'http://localhost:8080/api/admins/login'
                : 'http://localhost:8080/api/users/login'; 

            const response = await axios.post(endpoint, { name, password });

            console.log('Login successful:', response.data);

            if (loginType === 'admin') {
                navigate('/dashboard');
            } else {
                navigate('/userdashboard');
            }
        } catch (err) {
            setError('Login failed. Please check your credentials.');
            console.error('Login error:', err);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="loginheading">LOGIN</h2>
                <div className="d-flex justify-content-around mb-4">
                    <button
                        onClick={() => setLoginType('admin')}
                        className={`btn ${loginType === 'admin' ? 'btn-primary' : 'btn-outline-primary'}`}
                    >
                        Admin
                    </button>
                    <button
                        onClick={() => setLoginType('user')}
                        className={`btn ${loginType === 'user' ? 'btn-primary' : 'btn-outline-primary'}`}
                    >
                        User
                    </button>
                </div>
                <form onSubmit={handleLogin}>
                    {loginType === 'admin' ? (
                        <>
                            <h3><b>Admin Login</b></h3>
                            <br></br>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Admin Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <h3><b>User Login</b></h3>
                            <br></br>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="User Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </>
                    )}
                    {error && <p className="text-danger">{error}</p>}
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
                <p className="text-center mt-3 text-red-bold">
                    New user? For registration <h3 className='clickhere  '><a href="/register">Click here</a></h3>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
