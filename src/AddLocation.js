// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './App.css'
// // const AddLocation = () => {
// //     const [name, setName] = useState('');
// //     const [climaticCondition, setClimaticCondition] = useState('');
// //     const [message, setMessage] = useState(''); // State for success or error message
// //     const [error, setError] = useState(''); // State for error message
// //     const navigate = useNavigate(); // Initialize useNavigate

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.post('http://localhost:8080/api/locations/add', {
// //                 name,
// //                 climaticCondition
// //             });

// //             // Set success message
// //             setMessage('Location added successfully!');
// //             setError('');

// //             // Clear the form
// //             setName('');
// //             setClimaticCondition('');

// //             // Navigate to ViewLocationDetails page after a delay to let the message be visible
// //             setTimeout(() => {
// //                 navigate('/admin/locations');
// //             }, 2000); // Delay of 2 seconds

// //         } catch (error) {
// //             // Handle error message
// //             setError(error.response ? error.response.data : error.message);
// //             setMessage('');
// //         }
// //     };

// //     return (
// //         <div className="container mt-5">
// //             <h2 className='headings1'>Add Location</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label>Location Name</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         value={name}
// //                         onChange={(e) => setName(e.target.value)}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Climatic Condition</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         value={climaticCondition}
// //                         onChange={(e) => setClimaticCondition(e.target.value)}
// //                         required
// //                     />
// //                 </div>
// //                 <button type="submit" className="btn btn-success">Save</button>
// //             </form>

// //             {/* Display success message */}
// //             {message && (
// //                 <div className="alert alert-success mt-3">
// //                     {message}
// //                 </div>
// //             )}

// //             {/* Display error message */}
// //             {error && (
// //                 <div className="alert alert-danger mt-3">
// //                     {error}
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default AddLocation;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// const AddLocation = () => {
//     const [name, setName] = useState('');
//     const [climaticCondition, setClimaticCondition] = useState('');
//     const [message, setMessage] = useState(''); // State for success or error message
//     const [error, setError] = useState(''); // State for error message
//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/api/locations/add', {
//                 name,
//                 climaticCondition
//             });

//             // Set success message
//             setMessage('Location added successfully!');
//             setError('');

//             // Clear the form
//             setName('');
//             setClimaticCondition('');

//             // Navigate to ViewLocationDetails page after a delay to let the message be visible
//             setTimeout(() => {
//                 navigate('/admin/locations');
//             }, 2000); // Delay of 2 seconds

//         } catch (error) {
//             // Handle error message
//             setError(error.response ? error.response.data : error.message);
//             setMessage('');
//         }
//     };

//     return (
//         <div className="container d-flex justify-content-center align-items-center min-vh-100">
//             <div className="row w-100">
//                 <div className="col-md-8 col-lg-6">
//                 <h2 className="card-title text-center mb-4">Add Location</h2>

//                     <div className="card p-4 shadow-sm">
//                         <form onSubmit={handleSubmit}>
//                             <div className="form-group mb-3">
//                                 <label htmlFor="name">Location Name</label>
//                                 <input
//                                     id="name"
//                                     type="text"
//                                     className="form-control"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group mb-3">
//                                 <label htmlFor="climaticCondition">Climatic Condition</label>
//                                 <input
//                                     id="climaticCondition"
//                                     type="text"
//                                     className="form-control"
//                                     value={climaticCondition}
//                                     onChange={(e) => setClimaticCondition(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit" className="btn btn-success w-100">Save</button>
//                         </form>

//                         {/* Display success message */}
//                         {message && (
//                             <div className="alert alert-success mt-3">
//                                 {message}
//                             </div>
//                         )}

//                         {/* Display error message */}
//                         {error && (
//                             <div className="alert alert-danger mt-3">
//                                 {error}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddLocation;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// const AddLocation = () => {
//     const [name, setName] = useState('');
//     const [climaticCondition, setClimaticCondition] = useState('');
//     const [message, setMessage] = useState(''); // State for success or error message
//     const [error, setError] = useState(''); // State for error message
//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:8080/api/locations/add', {
//                 name,
//                 climaticCondition
//             });

//             // Set success message
//             setMessage('Location added successfully!');
//             setError('');

//             // Clear the form
//             setName('');
//             setClimaticCondition('');

//             // Navigate to ViewLocationDetails page after a delay to let the message be visible
//             setTimeout(() => {
//                 navigate('/admin/locations');
//             }, 2000); // Delay of 2 seconds

//         } catch (error) {
//             // Handle error message
//             setError(error.response ? error.response.data : error.message);
//             setMessage('');
//         }
//     };

//     return (
//         <div className="container d-flex justify-content-center align-items-center min-vh-100">
//             <div className="row w-100">
//                 <div className="col-md-8 col-lg-6">
//                 <h2 className="card-title text-center mb-4">Add Location</h2>

//                     <div className="card p-4 shadow-sm">
//                         <form onSubmit={handleSubmit}>
//                             <div className="form-group mb-3">
//                                 <label htmlFor="name">Location Name</label>
//                                 <input
//                                     id="name"
//                                     type="text"
//                                     className="form-control"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group mb-3">
//                                 <label htmlFor="climaticCondition">Climatic Condition</label>
//                                 <input
//                                     id="climaticCondition"
//                                     type="text"
//                                     className="form-control"
//                                     value={climaticCondition}
//                                     onChange={(e) => setClimaticCondition(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit" className="btn btn-success w-100">Save</button>
//                         </form>

//                         {/* Display success message */}
//                         {message && (
//                             <div className="alert alert-success mt-3">
//                                 {message}
//                             </div>
//                         )}

//                         {/* Display error message */}
//                         {error && (
//                             <div className="alert alert-danger mt-3">
//                                 {error}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddLocation;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const AddLocation = () => {
    const [name, setName] = useState('');
    const [climaticCondition, setClimaticCondition] = useState('');
    const [message, setMessage] = useState(''); // State for success or error message
    const [error, setError] = useState(''); // State for error message
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/locations/add', {
                name,
                climaticCondition
            });

            // Set success message
            setMessage('Location added successfully!');
            setError('');

            // Clear the form
            setName('');
            setClimaticCondition('');

            // Navigate to ViewLocationDetails page after a delay to let the message be visible
            setTimeout(() => {
                navigate('/admin/locations');
            }, 2000); // Delay of 2 seconds

        } catch (error) {
            // Handle error message
            setError(error.response ? error.response.data : error.message);
            setMessage('');
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
            <div className="row w-100">
          

                    <div className="card p-2 shadow-sm mx-auto">
                    <div className="col-md-7 col-lg-6" style={{ marginLeft: '350px', marginRight: '2%' }}>
          <center> <h2
  className="card-title text-center mb-4"
  style={{ fontSize: '2.5rem', color: 'red', width:'420px', textAlign: 'center', height:'100px' }}
>
  Add Location
</h2></center>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                             <b>  <label htmlFor="name">Location Name</label></b> 
                                <input
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mb-5">
                           <b>    <label htmlFor="climaticCondition">Climatic Condition</label></b> 
                                <input
                                    id="climaticCondition"
                                    type="text"
                                    className="form-control"
                                    value={climaticCondition}
                                    onChange={(e) => setClimaticCondition(e.target.value)}
                                    required
                                />
                            </div>
                         <center>   <button type="submit" className="btn btn-success w-100">Save</button></center>
                        </form>

                        {/* Display success message */}
                        {message && (
                            <div className="alert alert-success mt-3">
                                {message}
                            </div>
                        )}

                        {/* Display error message */}
                        {error && (
                            <div className="alert alert-danger mt-3">
                                {error}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddLocation;
