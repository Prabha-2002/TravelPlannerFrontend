import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './App.css'; // Import your custom styles
import { FaCloud } from 'react-icons/fa';

const LocationDetails = () => {
    const { id } = useParams(); // Location ID from URL
    const navigate = useNavigate();
    const [location, setLocation] = useState({});
    const [places, setPlaces] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(null);
    const [showConfirmCard, setShowConfirmCard] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const fetchLocationDetails = async () => {
        if (!id) {
            setError("Invalid location ID.");
            return;
        }

        try {
            // Fetch location details
            const locationResponse = await axios.get(`http://localhost:8080/api/locations/${id}`);
            setLocation(locationResponse.data);

            // Fetch places associated with the location
            const placesResponse = await axios.get(`http://localhost:8080/api/places/location/${id}`);
            setPlaces(placesResponse.data);

            // Fetch hotels associated with the location
            const hotelsResponse = await axios.get(`http://localhost:8080/api/topportal/location/${id}`); // Adjusted endpoint
            setHotels(hotelsResponse.data);
        } catch (error) {
            console.error("Error fetching location details:", error.response ? error.response.data : error.message);
            setError('Error fetching details. Please try again later.');
        }
    };

    useEffect(() => {
        fetchLocationDetails();
    }, [id]);


    const handleDeleteHotel = async (hotelId) => {
        setItemToDelete({ type: 'hotel', id: hotelId });
        setShowConfirmCard(true);
    };
    const handleDeletePlace = async (placeId) => {
        setItemToDelete({ type: 'place', id: placeId });
        setShowConfirmCard(true);
    };
    
    const confirmDelete = async () => {
        if (!itemToDelete) return;
    
        try {
            if (itemToDelete.type === 'place') {
                await axios.delete(`http://localhost:8080/api/places/${itemToDelete.id}`);
                setPlaces(places.filter(place => place.id !== itemToDelete.id));
            } else if (itemToDelete.type === 'hotel') {
                await axios.delete(`http://localhost:8080/api/topportal/${itemToDelete.id}`);
                setHotels(hotels.filter(hotel => hotel.id !== itemToDelete.id));
            }
            setShowConfirmCard(false);
            setItemToDelete(null);
        } catch (error) {
            console.error('Error deleting item:', error);
            setError('Failed to delete item. Please try again.');
        }
    };

    const cancelDelete = () => {
        setShowConfirmCard(false);
        setItemToDelete(null);
    };

    return (
        
        <div className="container mt-5">
            <button 
            className="fullback"
            onClick={() => navigate('/admin/locations')} // Navigate to /admin/locations on click
        >
            <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
            </svg>
            <span>Back</span>
        </button>
            {/* <center>
                <h1 className="header-red123">
                    {location.name || 'Location Details'}
                </h1>
            </center>
            <div className="mb-4">
                <button
                    className="btn btn-success btn-custom me-2"
                    onClick={() => navigate(`/admin/locations/${id}/add-place`)}
                >
                    <span>Add Place</span>
                </button>
                <button
                    className="btn btn-success btn-custom"
                    onClick={() => navigate(`/admin/locations/${id}/add-hotel`)}
                >
                    <span>Add Hotel</span>
                </button>
            </div> */}
          <div className="container mx-auto px-4 py-6">
                {/* Flex container for heading and cloud icon */}
                <div className="flex items-center justify-center mb-8">
                    <h1 className="text-4xl font-bold text-center text-red-600">
                        {location.name || 'Location Details'}
                    </h1> 
               
                </div>

                {/* Buttons */}
                <div className="mb-4 flex justify-center gap-2">
                    <button
                        className="btn btn-success btn-custom"
                        onClick={() => navigate(`/admin/locations/${id}/add-place`)}
                    >
                        <span>Add Place</span>
                    </button>
                    <button
                        className="btn btn-success btn-custom"
                        onClick={() => navigate(`/admin/locations/${id}/add-hotel`)}
                    >
                        <span>Add Hotel</span>
                    </button>
                </div>
            </div>

            {/* <div className="mb-4 flex justify-center gap-2"> */}
<div  id='cloud'   className="flex px-6 py-3">
<FaCloud size={120} value={location.climaticCondition} /> &nbsp; &nbsp;
    <span id='cloudt'>{location.climaticCondition}</span>
</div>

            {/* <a  target="_blank" rel="noopener noreferrer" id='cloud'  className="text-gray-400 hover:text-white mx-2"  >
                        <FaCloud size={30} />
                    </a> </div> */}
            {error && <div className="alert alert-danger">{error}</div>}

            <h1 className="header-red section-header mt-5">
                Must Watch Places
            </h1> <br></br><br></br>
            <div className="row">
                {places.length > 0 ? (
                    places.map((place) => (
                        <div className="col-md-4 mb-4" key={place.id}>
                            <div className="card h-100">
                                <img
                                    src={place.imageUrl}
                                    className="card-img-top"
                                    alt={place.name}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">
                                        <strong>Place Name: </strong>
                                        {place.name}
                                    </h5>
                                    <p className="card-text justify-content ">
                                        <strong>Description: </strong> {place.description}
                                    </p>
                                    <p className="card-text">
                                        <strong>Time To Spent: </strong> {place.timespend} hr
                                    </p>
                                    <div className="mt-auto">
                                        <button
                                            className="btn btn-primary w-100 mb-2"
                                            onClick={() => navigate(`/admin/places/${place.id}/edit`)}
                                        >
                                            <span>Edit</span>
                                        </button>
                                        <button
                                            className="btn btn-danger w-100"
                                            onClick={() => handleDeletePlace(place.id)}
                                        >
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No places available.</p>
                )}
            </div>

            <h1 className="header-red section-header mt-5">
                Top Hotels
            </h1>
            <div className="row">
                {hotels.length > 0 ? (
                    hotels.map((hotel) => (
                        <div className="col-md-4 mb-4" key={hotel.id}>
                            <div className="card h-100">
                                <img
                                    src={hotel.imageUrl}
                                    className="card-img-top"
                                    alt={hotel.name}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{hotel.name}</h5>
                                    <p className="card-text">
                                        <strong>Rate:</strong> Rs.{hotel.rate}<br />
                                        <strong>Rating:</strong> {hotel.rating} <br />
                                    </p>
                                    <div className="mt-auto">
                                        <button
                                            className="btn btn-primary w-100 mb-2"
                                            onClick={() => navigate(`/admin/hotels/${hotel.id}/edit`)}
                                        >
                                            <span>Edit</span>
                                        </button>
                                        <button
                                            className="btn btn-danger w-100"
                                            onClick={() => handleDeleteHotel(hotel.id)}
                                        >
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hotels available.</p>
                )}
            </div>

            {/* Confirmation Card */}
            {showConfirmCard && (
                <div className="confirm-card">
                    <div className="confirm-card-body">
                        <div className="confirm-card-header">
                            <h4 className="confirm-card-title">Confirm Delete</h4>
                        </div>
                        <p>Are you sure you want to delete this {itemToDelete?.type}?</p>
                        <br></br>
                        <div className="confirm-card-footer">
                            <button className="btn btn-danger" onClick={confirmDelete}>Yes, Delete</button>
                            <button className="btn btn-secondary" onClick={cancelDelete}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LocationDetails;
