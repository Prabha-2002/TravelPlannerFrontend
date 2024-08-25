import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Suggestor.css';  
import { FaCloud } from 'react-icons/fa';

const Suggestor = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [location, setLocation] = useState({});
    const [places, setPlaces] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const today = new Date().toISOString().split('T')[0];

    const [showRecommendorPlan, setShowRecommendorPlan] = useState(false);
    const [tripDetails, setTripDetails] = useState({
        location: '',
        tripName: '',
        startDate: '',
        endDate: '',
        numberOfDays: 0,
    });
    const [schedules, setSchedules] = useState([]);
    const [isEditable, setIsEditable] = useState(false);
    const [message, setMessage] = useState('');

    const fetchLocationDetails = async () => {
        try {
            const locationResponse = await axios.get(`http://localhost:8080/api/locations/${id}`);
            setLocation(locationResponse.data);

            const placesResponse = await axios.get(`http://localhost:8080/api/places/location/${id}`);
            setPlaces(placesResponse.data);

            const hotelsResponse = await axios.get(`http://localhost:8080/api/topportal/location/${id}`);
            setHotels(hotelsResponse.data);
        } catch (error) {
            setError('Error fetching details. Please try again later.');
        }
    };

    useEffect(() => {
        fetchLocationDetails();
    }, [id]);

    useEffect(() => {
        const { startDate, endDate } = tripDetails;
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            if (start <= end) {
                const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
                setTripDetails(prev => ({
                    ...prev,
                    numberOfDays: diffDays,
                }));
                const initialSchedules = [...Array(diffDays)].map((_, dayIndex) => ({
                    day: dayIndex + 1,
                    items: [],
                }));
                setSchedules(initialSchedules);
            } else {
                setTripDetails(prev => ({
                    ...prev,
                    numberOfDays: 0,
                }));
            }
        }
    }, [tripDetails.startDate, tripDetails.endDate]);

    useEffect(() => {
        if (tripDetails.numberOfDays > 0 && places.length > 0) {
            const totalPlaces = tripDetails.numberOfDays * 2; 
            const uniquePlaces = places.slice(0, totalPlaces);
            const updatedSchedules = schedules.map(scheduleDay => {
                const dayPlaces = uniquePlaces.slice(scheduleDay.day * 2 - 2, scheduleDay.day * 2);
                return {
                    ...scheduleDay,
                    items: dayPlaces.map(place => ({
                        time: place.timespend,
                        placeName: place.name,
                        description: place.description,
                    })),
                };
            });
            setSchedules(updatedSchedules);
        }
    }, [tripDetails.numberOfDays, places]);

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setTripDetails(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSaveRecommendorDetails = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/trips/add', tripDetails);
            console.log('Trip saved:', response.data);
            setShowRecommendorPlan(true);
            // setMessage('Trip details saved successfully!');
        } catch (error) {
            setError('Error saving trip details.');
        }
    };

    const handleEditSchedules = () => {
        setIsEditable(true);
    };

    const handleSaveSchedules = async () => {
        try {
            // Example logic to save schedules
            await axios.post('http://localhost:8080/api/schedules/save', schedules);
            console.log('Schedules saved:', schedules);
            setMessage('Schedules saved successfully!');
            setIsEditable(false);
        } catch (error) {
            console.error('Error saving schedules:', error);
            setError('Error saving schedules.');
        }
    };

    const handleCreateTripClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setShowRecommendorPlan(false);
    };

    const handleRecommendorPlanClick = () => {
        setShowModal(false);
        setShowRecommendorPlan(true);
        window.scrollTo(0, document.body.scrollHeight);
    };

    const handleCreateYourOwnTripClick = () => {
        // Navigate to the Details page with the location ID
        navigate(`/details/${id}`);
    };

    const handleCustomizeClick = () => {
        setIsEditable(true);
    };

    return (
        <div className="container mt-5">
            <h1 className="custom-header">
                {location.name || 'Location Details'}
            </h1>
            <div id='clouds' className="flex px-6 py-3">
                <FaCloud size={120} /> &nbsp; &nbsp;
                <span id='cloudt'>{location.climaticCondition}</span>
            </div>
            <br />
            <div className="text-center mb-4">
                <button className="custom-btn btn-2" onClick={handleCreateTripClick}>
                    <span className="text">Create Your Trip</span>
                </button>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {message && <div className="alert alert-success">{message}</div>}

            <section className="py-3 px-1 mt-5">
                <h2 className="trip-schedule-heading py-3">Must Watch Places</h2>
                <div className="row">
                    {places.length > 0 ? (
                        places.map((place) => (
                            <div className="col-md-4 mb-4" key={place.id}>
                                <div className="card h-100 shadow-lg modern-card">
                                    <img
                                        src={place.imageUrl}
                                        className="card-img-top"
                                        alt={place.name}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-success">
                                            {place.name}
                                        </h5>
                                        <p className="card-text">
                                            <strong>Description:</strong> {place.description}
                                        </p>
                                        <p className="card-text">
                                            <strong>Time To Spent: </strong> {place.timespend} hr
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No places available.</p>
                    )}
                </div>
            </section>

            <section className="mt-5">
                <h2 className="trip-schedule-heading py-3">Top Hotels</h2>
                <div className="row">
                    {hotels.length > 0 ? (
                        hotels.map((hotel) => (
                            <div className="col-md-4 mb-4" key={hotel.id}>
                                <div className="card h-100 shadow-lg modern-card">
                                    <img
                                        src={hotel.imageUrl}
                                        className="card-img-top"
                                        alt={hotel.name}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-primary">{hotel.name}</h5>
                                        <p className="card-text">
                                            <strong>Rate:</strong> Rs.{hotel.rate} <br />
                                            <strong>Rating:</strong> {hotel.rating}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No hotels available.</p>
                    )}
                </div>
            </section>

            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h2 className='select'>Select Your Plan</h2>
                        <div className="modal-buttons">
                            <button
                                className="btn btn-secondarya"
                                onClick={handleRecommendorPlanClick}
                            >
                                <span className='abcd'>Recommendor Plan</span>
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={handleCreateYourOwnTripClick}
                            >
                                <span className='abcd'>Create Your Own Trip Plan</span>
                            </button>
                            <button
                                className="btn btn-secondaryb"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showRecommendorPlan && (
                <div className="recommendor-plan-container">
                    <h2 className="trip-schedule-heading py-3">Recommendor Plan Details</h2>
                    
                <form onSubmit={(e) => { e.preventDefault(); handleSaveRecommendorDetails(); }} className="space-y-4">
                    <div className="form-group mb-3">
                        <label htmlFor="location" className="block bg-black text-white p-2 rounded-t-md">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            className="form-control bg-gray-200 p-2 rounded-b-md w-full"
                            value={tripDetails.location}
                            onChange={handleDateChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="tripName" className="block bg-black text-white p-2 rounded-t-md">Trip Name</label>
                        <input
                            type="text"
                            id="tripName"
                            name="tripName"
                            className="form-control bg-gray-200 p-2 rounded-b-md w-full"
                            value={tripDetails.tripName}
                            onChange={handleDateChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="startDate" className="block bg-black text-white p-2 rounded-t-md">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            className="form-control bg-gray-200 p-2 rounded-b-md w-full"
                            value={tripDetails.startDate}
                            onChange={handleDateChange}
                            min={today} // Restrict selection to today or later
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="endDate" className="block bg-black text-white p-2 rounded-t-md">End Date</label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            className="form-control bg-gray-200 p-2 rounded-b-md w-full"
                            value={tripDetails.endDate}
                            onChange={handleDateChange}
                            min={today}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="numberOfDays" className="block bg-black text-white p-2 rounded-t-md">Number of Days</label>
                        <input
                            type="number"
                            id="numberOfDays"
                            name="numberOfDays"
                            className="form-control bg-gray-200 p-2 rounded-b-md w-full"
                            value={tripDetails.numberOfDays}
                            readOnly
                        />
                    </div>
                    <button
                        type="button"
                        className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                        onClick={handleSaveRecommendorDetails}
                    >
                        Save
                    </button>
                </form>
                </div>
            )}

            {showRecommendorPlan && (
                <div className="schedule-container mt-4">
                    <h2 className="trip-schedule-heading">Trip Schedule</h2>
                    {schedules.map(scheduleDay => (
                        <div key={scheduleDay.day} className="card schedule-card mb-4">
                            <div className="card-body">
                                <h2 className="card-title">Day {scheduleDay.day}</h2>
                                {isEditable ? (
                                    <div>
                                        {scheduleDay.items.map((item, index) => (
                                            <div key={index} className="schedule-item mb-3">
                                                <div className="mb-2">
                                                    <label>Time:</label>
                                                    <input
                                                        type="text"
                                                        value={item.time}
                                                        onChange={(e) => {
                                                            const updatedItems = [...scheduleDay.items];
                                                            updatedItems[index].time = e.target.value;
                                                            setSchedules(schedules.map(day => day.day === scheduleDay.day ? { ...day, items: updatedItems } : day));
                                                        }}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="mb-2">
                                                    <label>Place:</label>
                                                    <input
                                                        type="text"
                                                        value={item.placeName}
                                                        onChange={(e) => {
                                                            const updatedItems = [...scheduleDay.items];
                                                            updatedItems[index].placeName = e.target.value;
                                                            setSchedules(schedules.map(day => day.day === scheduleDay.day ? { ...day, items: updatedItems } : day));
                                                        }}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="mb-2">
                                                    <label>Description:</label>
                                                    <input
                                                        type="text"
                                                        value={item.description}
                                                        onChange={(e) => {
                                                            const updatedItems = [...scheduleDay.items];
                                                            updatedItems[index].description = e.target.value;
                                                            setSchedules(schedules.map(day => day.day === scheduleDay.day ? { ...day, items: updatedItems } : day));
                                                        }}
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            className="btn btn-primary"
                                            onClick={handleSaveSchedules}
                                        >
                                            Save Schedules
                                        </button>
                                    </div>
                                ) : (
                                    scheduleDay.items.map((item, index) => (
                                        <div key={index} className="schedule-item">
                                        <div>
                                            <span className="label">Time:</span>
                                            <span className="value">{item.time}</span>
                                        </div>
                                        <div>
                                            <span className="label">Place:</span>
                                            <span className="value">{item.placeName}</span>
                                        </div>
                                        <div className="description">
                                            <strong>Description:</strong> {item.description}
                                        </div>
                                    </div>
                                    ))
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Suggestor;
