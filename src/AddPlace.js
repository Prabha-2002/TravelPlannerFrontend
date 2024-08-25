

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const AddPlace = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [timespend, setTimespend] = useState('');
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState(null); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            description,
            imageUrl,
            timespend,
            location: { id: parseInt(id, 10) }, // Ensure ID is sent as a number
        };

        try {
            const response = await axios.post(`http://localhost:8080/api/places/add`, payload);
            if (response.status === 200) {
                setSaved(true);
                setTimeout(() => {
                    navigate(`/admin/locations/${id}`);
                }, 1500);
            }
        } catch (error) {
            console.error("Error saving place:", error.response ? error.response.data : error.message);
            setError("Failed to save place. Please try again.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            
            <div className="custom-form-container border bg-black border-light rounded">
                <button 
                    className="custom-back-button cursor-pointer duration-200 hover:scale-125 active:scale-100" 
                    onClick={() => navigate('/admin/locations')}
                    title="Go Back"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                    </svg>
                </button>
                <br/>
                <br/>      <br/>
                <h2 className="text-center text-red-500 font-bold text-2xl mb-4">Add Place</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label className="form-label bg-black text-white p-2 w-50 rounded-top">Selected location's Id</label>
                        <input
                            type="text"
                            className="form-control"
                            value={id}
                            readOnly 
                        />
                    </div>
                    
                    <div className="form-group mb-3">
                        <label className="form-label bg-black text-black p-2 w-50 rounded-top">Enter the Place Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label bg-black text-black p-2 w-50 rounded-top">Enter the Description</label>
                        <textarea
                            className="form-control custom-textarea1"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label bg-black text-black p-2 w-50 rounded-top">Enter the Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label bg-black text-black p-3 w-50 rounded-top">Enter the Time Spent (in hrs)</label>
                        <input
                            type="text"
                            className="form-control"
                            value={timespend}
                            onChange={(e) => setTimespend(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                    {saved && <p className="mt-3 text-success">Saved!</p>}
                    {error && <p className="mt-3 text-danger">{error}</p>} {/* Display error message */}
                </form>
            </div>
        </div>
    );
};

export default AddPlace;
