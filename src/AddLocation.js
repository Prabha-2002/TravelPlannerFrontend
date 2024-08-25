import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const AddLocation = () => {
    const [name, setName] = useState('');
    const [climaticCondition, setClimaticCondition] = useState('');
    const [message, setMessage] = useState(''); 
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/locations/add', {
                name,
                climaticCondition
            });

            setMessage('Location added successfully!');
            setError('');

            setName('');
            setClimaticCondition('');

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

                        {message && (
                            <div className="alert alert-success mt-3">
                                {message}
                            </div>
                        )}
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
