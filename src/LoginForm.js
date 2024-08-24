// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const LoginForm = () => {
// //     const [loginType, setLoginType] = useState('admin');
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [error, setError] = useState('');
// //     const navigate = useNavigate();
// //     const handleLogin = async (e) => {
// //         e.preventDefault();
// //         setError('');

// //         try {
// //             const endpoint = loginType === 'admin'
// //                 ? 'http://localhost:8080/api/admins/login'
// //                 : 'http://localhost:8080/api/users/login';

// //             const response = await axios.post(endpoint, { email, password });

// //             console.log('Login successful:', response.data);

// //             if (loginType === 'admin') {
// //                 navigate('/dashboard');
// //             } else {
// //                 navigate('/userdashboard');
// //             }
// //         } catch (err) {
// //             setError('Login failed. Please check your credentials.');
// //             console.error('Login error:', err);
// //         }
// //     };


// //     return (
// //         <div className="login-form">
// //             <h2>Login</h2>
// //             <div>
// //                 <button onClick={() => setLoginType('admin')}>Admin</button>
// //                 <button onClick={() => setLoginType('user')}>User</button>
// //             </div>

// //             <form onSubmit={handleLogin}>
// //                 {loginType === 'admin' ? (
// //                     <>
// //                         <h3>Admin Login</h3>
// //                         <input
// //                             type="text"
// //                             placeholder="Admin Name"
// //                             value={name}
// //                             onChange={(e) => setName(e.target.value)}
// //                             required
// //                         />
// //                         <input
// //                             type="password"
// //                             placeholder="Password"
// //                             value={password}
// //                             onChange={(e) => setPassword(e.target.value)}
// //                             required
// //                         />
// //                     </>
// //                 ) : (
// //                     <>
// //                         <h3>User Login</h3>
// //                         <input
// //                             type="text"
// //                             placeholder="User Name"
// //                             value={name}
// //                             onChange={(e) => setName(e.target.value)}
// //                             required
// //                         />
// //                         <input
// //                             type="password"
// //                             placeholder="Password"
// //                             value={password}
// //                             onChange={(e) => setPassword(e.target.value)}
// //                             required
// //                         />
// //                     </>
// //                 )}
// //                 {error && <p className="error">{error}</p>}
// //                 <button type="submit">Login</button>
// //             </form>
// //             <p>
// //                 New user? <a href="/register">Register here</a>
// //             </p>
// //         </div>
// //     );
// // };

// // export default LoginForm;

// // ..................................................................
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './App.css';

// const LoginForm = () => {
//     const [loginType, setLoginType] = useState('admin');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');  // This can be used if you want to differentiate between admin and user by email
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');

//         try {
//             const endpoint = loginType === 'admin'
//                 ? 'http://localhost:8080/api/admins/login'
//                 : 'http://localhost:8080/api/users/login'; 

//             const response = await axios.post(endpoint, { name, password });

//             console.log('Login successful:', response.data);

//             if (loginType === 'admin') {
//                 navigate('/dashboard');
//             } else {
//                 navigate('/userdashboard');
//             }
//         } catch (err) {
//             setError('Login failed. Please check your credentials.');
//             console.error('Login error:', err);
//         }
//     };

//     return (
//         <div className="container d-flex justify-content-center align-items-center vh-100">
//             <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
//                 <h2 className="loginheading">LOGIN</h2>
//                 <div className="d-flex justify-content-around mb-4">
//                     <button
//                         onClick={() => setLoginType('admin')}
//                         className={`btn ${loginType === 'admin' ? 'btn-primary' : 'btn-outline-primary'}`}
//                     >
//                         Admin
//                     </button>
//                     <button
//                         onClick={() => setLoginType('user')}
//                         className={`btn ${loginType === 'user' ? 'btn-primary' : 'btn-outline-primary'}`}
//                     >
//                         User
//                     </button>
//                 </div>
//                 <form onSubmit={handleLogin}>
//                     {loginType === 'admin' ? (
//                         <>
//                             <h3><b>Admin Login</b></h3>
//                             <br></br>
//                             <div className="mb-3">
//                                 <input
//                                     type="text"
//                                     placeholder="Admin Name"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     className="form-control"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <input
//                                     type="password"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="form-control"
//                                     required
//                                 />
//                             </div>
//                         </>
//                     ) : (
//                         <>
//                             <h3><b>User Login</b></h3>
//                             <br></br>
//                             <div className="mb-3">
//                                 <input
//                                     type="text"
//                                     placeholder="User Name"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     className="form-control"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <input
//                                     type="password"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="form-control"
//                                     required
//                                 />
//                             </div>
//                         </>
//                     )}
//                     {error && <p className="text-danger">{error}</p>}
//                     <button type="submit" className="btn btn-primary w-100">
//                         Login
//                     </button>
//                 </form>
//                 <p className="text-center mt-3 text-red-bold">
//                     New user? For registration <h3 className='clickhere  '><a href="/register">Click here</a></h3>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;








// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const LoginForm = () => {
// //     const [loginType, setLoginType] = useState('admin');
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [error, setError] = useState('');
// //     const navigate = useNavigate();

// //     const handleLogin = async (e) => {
// //         e.preventDefault();
// //         setError('');

// //         try {
// //             const endpoint = loginType === 'admin'
// //                 ? 'http://localhost:8080/api/admins/login'
// //                 : 'http://localhost:8080/api/users/login';

// //             const response = await axios.post(endpoint, { email, password });

// //             console.log('Login successful:', response.data);

// //             if (loginType === 'admin') {
// //                 navigate('/dashboard');
// //             } else {
// //                 navigate('/userdashboard');
// //             }
// //         } catch (err) {
// //             setError('Login failed. Please check your credentials.');
// //             console.error('Login error:', err);
// //         }
// //     };

// //     return (
// //         <div className="container d-flex justify-content-center align-items-center vh-100">
// //             <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
// //                 <h2 className="text-center mb-4">Login</h2>
// //                 <div className="d-flex justify-content-around mb-4">
// //                     <button
// //                         onClick={() => setLoginType('admin')}
// //                         className={`btn-login-type ${loginType === 'admin' ? 'btn-primary' : 'btn-outline-primary'}`}
// //                     >
// //                         Admin
// //                     </button>
// //                     <button
// //                         onClick={() => setLoginType('user')}
// //                         className={`btn-login-type ${loginType === 'user' ? 'btn-primary' : 'btn-outline-primary'}`}
// //                     >
// //                         User
// //                     </button>
// //                 </div>
// //                 <form onSubmit={handleLogin}>
// //                     {loginType === 'admin' ? (
// //                         <>
// //                             <h3 className="text-red-bold">Admin Login</h3>
// //                             <div className="mb-3">
// //                                 <input
// //                                     type="text"
// //                                     placeholder="Admin Name"
// //                                     value={name}
// //                                     onChange={(e) => setName(e.target.value)}
// //                                     className="form-control"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div className="mb-3">
// //                                 <input
// //                                     type="password"
// //                                     placeholder="Password"
// //                                     value={password}
// //                                     onChange={(e) => setPassword(e.target.value)}
// //                                     className="form-control"
// //                                     required
// //                                 />
// //                             </div>
// //                         </>
// //                     ) : (
// //                         <>
// //                             <h3 className="text-red-bold">User Login</h3>
// //                             <div className="mb-3">
// //                                 <input
// //                                     type="text"
// //                                     placeholder="User Name"
// //                                     value={name}
// //                                     onChange={(e) => setName(e.target.value)}
// //                                     className="form-control"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div className="mb-3">
// //                                 <input
// //                                     type="password"
// //                                     placeholder="Password"
// //                                     value={password}
// //                                     onChange={(e) => setPassword(e.target.value)}
// //                                     className="form-control"
// //                                     required
// //                                 />
// //                             </div>
// //                         </>
// //                     )}
// //                     {error && <p className="text-danger">{error}</p>}
// //                     <button type="submit" className="btn-login-submit">
// //                         Login
// //                     </button>
// //                 </form>
// //                 <p className="text-center mt-3">
// //                     New user? <a href="/register">Register here</a>
// //                 </p>
// //             </div>
// //         </div>
// //     );
// // };

// // export default LoginForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const LoginForm = () => {
    const [loginType, setLoginType] = useState('admin');
    const [name, setName] = useState('');  // Use name for both admin and user
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
                                    type="text"  // Use text type for username
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
