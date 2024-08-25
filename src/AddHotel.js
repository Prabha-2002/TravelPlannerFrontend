
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

const AddHotel = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [rate, setRate] = useState('');
    const [rating, setRating] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [locationId, setLocationId] = useState('');
    const [tripId, setTripId] = useState('');
    const [locations, setLocations] = useState([]);
    const [trips, setTrips] = useState([]);
    const [error, setError] = useState(null);
    const [validLocationId, setValidLocationId] = useState(true); 

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const locationsResponse = await axios.get('http://localhost:8080/api/locations/all');
                setLocations(locationsResponse.data);

                const tripsResponse = await axios.get('http://localhost:8080/api/trips/all');
                setTrips(tripsResponse.data);
            } catch (error) {
                setError('Error fetching locations or trips');
            }
        };

        fetchOptions();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const locationExists = locations.some(loc => loc.id === parseInt(locationId));
        if (!locationExists) {
            setValidLocationId(false);
            return;
        }
        setValidLocationId(true);

        const newTopPortal = {
            name,
            rate: parseFloat(rate),
            rating: parseFloat(rating),
            imageUrl,
            location: { id: parseInt(locationId) },
            trip: { id: parseInt(tripId) }
        };

        try {
            await axios.post('http://localhost:8080/api/topportal/add', newTopPortal);
            alert("Hotel added successfully");
            navigate('/admin/locations'); 
        } catch (error) {
            setError('Error adding Hotel');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <br/> <br/>

            <div className="relative bg-black text-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                
                <button 
                    className="absolute top-[0rem] left-0 bg-transparent border-none cursor-pointer p-2 z-10"
                    onClick={() => navigate('/admin/locations')}
                    title="Go Back"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="stroke-blue-300">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                    </svg>
                </button>
                <br/> <br/>

                <h2 className="text-center text-red-500 font-bold text-2xl mb-4">Add Hotel</h2> <br/> <br/>

                {error && <div className="alert alert-danger mb-4 p-2 bg-red-500 text-white rounded">{error}</div>}
                {!validLocationId && <div className="alert alert-warning mb-4 p-2 bg-yellow-500 text-white rounded">Invalid Location ID. Please select a valid location.</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group">
                        <label className="block bg-black text-white p-2 rounded-t-md">Name</label>
                        <input
                            type="text"
                            className="form-control bg-white-800 text-black p-2 rounded-b-md w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="block bg-black text-white p-2 rounded-t-md">Rate</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control bg-white-800 text-black p-2 rounded-b-md w-full"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="block bg-black text-white p-2 rounded-t-md">Rating</label>
                        <input
                            type="number"
                            step="0.1"
                            className="form-control bg-white-800 text-black p-2 rounded-b-md w-full"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="block bg-black text-white p-2 rounded-t-md">Image URL</label>
                        <input
                            type="text"
                            className="form-control bg-white-800 text-black p-2 rounded-b-md w-full"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="block bg-black text-white p-2 rounded-t-md">Location ID</label>
                        <input
                            type="number"
                            className="form-control bg-white-800 text-black p-2 rounded-b-md w-full"
                            value={locationId}
                            onChange={(e) => setLocationId(e.target.value)}
                            placeholder="Enter Location ID"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="block bg-black text-white p-2 rounded-t-md">Trip ID</label>
                        <input
                            type="number"
                            className="form-control bg-white-800 text-black p-2 rounded-b-md w-full"
                            value={tripId}
                            onChange={(e) => setTripId(e.target.value)}
                            placeholder="Enter Trip ID"
                            required
                        />
                    </div>
                    <center>
                    <button type="submit" className="btn bg-green-500 text-white p-2 rounded hover:bg-green-600">
                        Add 
                    </button>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default AddHotel;
