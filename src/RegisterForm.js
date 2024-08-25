import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
        if (!name.trim()) errors.name = 'Name is required.';
        if (!/^[a-zA-Z\s]+$/.test(name)) errors.name = 'Name can only contain letters and spaces.';
        
        if (!email.trim()) errors.email = 'Email is required.';
        if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email address is invalid.';
        
        if (!password) errors.password = 'Password is required.';
        if (password.length < 6) errors.password = 'Password must be at least 6 characters long.';
        if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) errors.password = 'Password must include both letters and numbers.';
        
        if (!gender) errors.gender = 'Gender is required.';
        
        if (!age) errors.age = 'Age is required.';
        if (!/^\d+$/.test(age) || age < 1 || age > 120) errors.age = 'Age must be a number between 1 and 120.';

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        
        if (!validate()) return; 

        try {
            const response = await axios.post('http://localhost:8080/api/users/register', { name, email, password, gender, age });
            console.log('Registration successful:', response.data);
            navigate('/');
        } catch (err) {
            setError('Registration failed. Please try again.');
            console.error('Registration error:', err);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
                {/* <h2 className="text-center mb-4"></h2> */}
                <h2 className="loginheading">Register</h2>
<br></br>
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                        />
                        {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                        />
                        {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                        />
                        {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                    </div>
                    <div className="mb-3">
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className={`form-select ${formErrors.gender ? 'is-invalid' : ''}`}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {formErrors.gender && <div className="invalid-feedback">{formErrors.gender}</div>}
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className={`form-control ${formErrors.age ? 'is-invalid' : ''}`}
                        />
                        {formErrors.age && <div className="invalid-feedback">{formErrors.age}</div>}
                    </div>
                    {error && <p className="text-danger text-center">{error}</p>}
                    <button type="submit" className="btn btn-primary w-100">
                        Register
                    </button>
                </form>
                <p className="text-center mt-3">
                    Already have an account? <a href="/" className="link"><h3 className='clickhere ' >Login here</h3></a></p>
            </div>
        </div>
    );
};

export default RegisterForm;
