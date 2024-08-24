// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './App.css'; // Ensure this imports your custom styles
// import 'bootstrap/dist/css/bootstrap.min.css';

// const AddHotel = () => {
//     const navigate = useNavigate();

//     // State variables
//     const [name, setName] = useState('');
//     const [rate, setRate] = useState('');
//     const [rating, setRating] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const [locationId, setLocationId] = useState(''); // Location ID
//     const [tripId, setTripId] = useState(''); // Trip ID
//     const [locations, setLocations] = useState([]); // To fetch locations
//     const [trips, setTrips] = useState([]); // To fetch trips
//     const [error, setError] = useState(null); // State to handle errors

//     useEffect(() => {
//         // Fetch locations and trips from the API (replace with your actual API endpoints)
//         const fetchData = async () => {
//             try {
//                 const locationsResponse = await axios.get('http://localhost:8080/api/locations/all');
//                 setLocations(locationsResponse.data);
                
//                 const tripsResponse = await axios.get('http://localhost:8080/api/trips/all');
//                 setTrips(tripsResponse.data);
//             } catch (error) {
//                 console.error('Error fetching locations or trips:', error);
//                 setError('Error fetching locations or trips.');
//             }
//         };

//         fetchData();
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const hotelData = {
//             name,
//             rate: parseFloat(rate), // Ensure rate is a number
//             rating: parseFloat(rating), // Ensure rating is a number
//             location: { id: parseInt(locationId) }, // Use ID for location
//             imageUrl,
//             trip: { id: parseInt(tripId) }  // Use ID for trip
//         };

//         try {
//            const response= await axios.post('http://localhost:8080/api/topportal/add', hotelData);
//            if (response.status === 200) {
//             alert("success");
//            }
           
//         } catch (error) {
//             console.error('Error saving hotel:', error);
//             setError(error.response?.data?.message || 'Error saving hotel.');
//         }
//     };

//     return (
//         <div className="container d-flex justify-content-center align-items-center vh-100">
//             <div className="form-container p-4 border border-light rounded vh-190">
//                 <h2 className="text-center text-danger fw-bold mb-4">Add Hotel</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group mb-3">
//                         <label className="form-label">Hotel Name</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group mb-3">
//                         <label className="form-label">Rate (in Rupees)</label>
//                         <input
//                             type="number"
//                             step="0.01" // Allows decimal values
//                             className="form-control"
//                             value={rate}
//                             onChange={(e) => setRate(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group mb-3">
//                         <label className="form-label">Rating (Out of 5)</label>
//                         <input
//                             type="number"
//                             step="0.1" // Allows decimal values
//                             className="form-control"
//                             value={rating}
//                             onChange={(e) => setRating(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group mb-3">
//                         <label className="form-label">Image URL</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={imageUrl}
//                             onChange={(e) => setImageUrl(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group mb-3">
//                         <label className="form-label">Location</label>
//                         <select
//                             className="form-control"
//                             value={locationId}
//                             onChange={(e) => setLocationId(e.target.value)}
//                             required
//                         >
//                             <option value="">Select Location</option>
//                             {locations.map((loc) => (
//                                 <option key={loc.id} value={loc.id}>
//                                     {loc.id}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className="form-group mb-3">
//                         <label className="form-label">Trip </label>
//                         <select
//                             className="form-control"
//                             // value={tripId}
//                             onChange={(e) => setTripId(e.target.value)}
//                         >
//                             <option value="">Select Trip</option>
//                             {trips.map((trip,index) => (
//                                 <option key={trip.index} value={trip.id}>
//                                     {trip.id}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                     <button type="submit" className="btn btn-success">
//                         <span>Save</span>
//                     </button>
//                     {error && <p className="mt-3 text-danger">{error}</p>} {/* Display error message */}
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddHotel;

// 123456789###########################



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
// import './App.css'; // Import your custom styles

// const AddHotel = () => {
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [rate, setRate] = useState('');
//     const [rating, setRating] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const [locationId, setLocationId] = useState('');
//     const [tripId, setTripId] = useState('');
//     const [locations, setLocations] = useState([]);
//     const [trips, setTrips] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchOptions = async () => {
//             try {
//                 const locationsResponse = await axios.get('http://localhost:8080/api/locations/all');
//                 setLocations(locationsResponse.data);

//                 const tripsResponse = await axios.get('http://localhost:8080/api/trips/all');
//                 setTrips(tripsResponse.data);
//             } catch (error) {
//                 setError('Error fetching locations or trips');
//             }
//         };

//         fetchOptions();
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const newTopPortal = {
//             name,
//             rate: parseFloat(rate),
//             rating: parseFloat(rating),
//             imageUrl,
//             location: { id: parseInt(locationId) },
//             trip: { id: parseInt(tripId) }
//         };

//         try {
//             await axios.post('http://localhost:8080/api/topportal/add', newTopPortal);
//             // navigate('/admin/topportals');
//         alert("rehtj");
//         } catch (error) {
//             setError('Error adding Hotel');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2 className="text-center mb-4">Add TopPortal</h2>
//             {error && <div className="alert alert-danger">{error}</div>}
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Rate</label>
//                     <input
//                         type="number"
//                         step="0.01"
//                         className="form-control"
//                         value={rate}
//                         onChange={(e) => setRate(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Rating</label>
//                     <input
//                         type="number"
//                         step="0.1"
//                         className="form-control"
//                         value={rating}
//                         onChange={(e) => setRating(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Image URL</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={imageUrl}
//                         onChange={(e) => setImageUrl(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Location ID</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         value={locationId}
//                         onChange={(e) => setLocationId(e.target.value)}
//                         placeholder="Enter Location ID"
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Trip ID</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         value={tripId}
//                         onChange={(e) => setTripId(e.target.value)}
//                         placeholder="Enter Trip ID"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-success">Add TopPortal</button>
//             </form>
//         </div>
//     );
// };


// export default AddHotel;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
// import './App.css'; // Import your custom styles

// const AddHotel = () => {
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [rate, setRate] = useState('');
//     const [rating, setRating] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const [locationId, setLocationId] = useState('');
//     const [tripId, setTripId] = useState('');
//     const [locations, setLocations] = useState([]);
//     const [trips, setTrips] = useState([]);
//     const [error, setError] = useState(null);
//     const [validLocationId, setValidLocationId] = useState(true); // State to validate location ID

//     useEffect(() => {
//         const fetchOptions = async () => {
//             try {
//                 const locationsResponse = await axios.get('http://localhost:8080/api/locations/all');
//                 setLocations(locationsResponse.data);

//                 const tripsResponse = await axios.get('http://localhost:8080/api/trips/all');
//                 setTrips(tripsResponse.data);
//             } catch (error) {
//                 setError('Error fetching locations or trips');
//             }
//         };

//         fetchOptions();
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // Validate location ID
//         const locationExists = locations.some(loc => loc.id === parseInt(locationId));
//         if (!locationExists) {
//             setValidLocationId(false);
//             return;
//         }
//         setValidLocationId(true);

//         const newTopPortal = {
//             name,
//             rate: parseFloat(rate),
//             rating: parseFloat(rating),
//             imageUrl,
//             location: { id: parseInt(locationId) },
//             trip: { id: parseInt(tripId) }
//         };

//         try {
//             await axios.post('http://localhost:8080/api/topportal/add', newTopPortal);
//             alert("TopPortal added successfully");
//             navigate('/admin/locations'); // Navigate to the desired route on success
//         } catch (error) {
//             setError('Error adding Hotel');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2 className="text-center mb-4">Add TopPortal</h2>
//             {error && <div className="alert alert-danger">{error}</div>}
//             {!validLocationId && <div className="alert alert-warning">Invalid Location ID. Please select a valid location.</div>}
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Rate</label>
//                     <input
//                         type="number"
//                         step="0.01"
//                         className="form-control"
//                         value={rate}
//                         onChange={(e) => setRate(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Rating</label>
//                     <input
//                         type="number"
//                         step="0.1"
//                         className="form-control"
//                         value={rating}
//                         onChange={(e) => setRating(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Image URL</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={imageUrl}
//                         onChange={(e) => setImageUrl(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Location ID</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         value={locationId}
//                         onChange={(e) => setLocationId(e.target.value)}
//                         placeholder="Enter Location ID"
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Trip ID</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         value={tripId}
//                         onChange={(e) => setTripId(e.target.value)}
//                         placeholder="Enter Trip ID"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-success">Add TopPortal</button>
//             </form>
//         </div>
//     );
// };

// export default AddHotel;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
// import './App.css'; // Import your custom styles

// const AddHotel = () => {
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [rate, setRate] = useState('');
//     const [rating, setRating] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const [locationId, setLocationId] = useState('');
//     const [tripId, setTripId] = useState('');
//     const [locations, setLocations] = useState([]);
//     const [trips, setTrips] = useState([]);
//     const [error, setError] = useState(null);
//     const [validLocationId, setValidLocationId] = useState(true); // State to validate location ID

//     useEffect(() => {
//         const fetchOptions = async () => {
//             try {
//                 const locationsResponse = await axios.get('http://localhost:8080/api/locations/all');
//                 setLocations(locationsResponse.data);

//                 const tripsResponse = await axios.get('http://localhost:8080/api/trips/all');
//                 setTrips(tripsResponse.data);
//             } catch (error) {
//                 setError('Error fetching locations or trips');
//             }
//         };

//         fetchOptions();
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // Validate location ID
//         const locationExists = locations.some(loc => loc.id === parseInt(locationId));
//         if (!locationExists) {
//             setValidLocationId(false);
//             return;
//         }
//         setValidLocationId(true);

//         const newTopPortal = {
//             name,
//             rate: parseFloat(rate),
//             rating: parseFloat(rating),
//             imageUrl,
//             location: { id: parseInt(locationId) },
//             trip: { id: parseInt(tripId) }
//         };

//         try {
//             await axios.post('http://localhost:8080/api/topportal/add', newTopPortal);
//             alert("TopPortal added successfully");
//             navigate('/admin/locations'); // Navigate to the desired route on success
//         } catch (error) {
//             setError('Error adding Hotel');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2 className="text-center mb-4">Add TopPortal</h2>
//             {error && <div className="alert alert-danger">{error}</div>}
//             {!validLocationId && <div className="alert alert-warning">Invalid Location ID. Please select a valid location.</div>}
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group mb-3">
//                     <label className="form-label bg-black text-white p-2 rounded-top">Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label bg-black text-white p-2 rounded-top">Rate</label>
//                     <input
//                         type="number"
//                         step="0.01"
//                         className="form-control"
//                         value={rate}
//                         onChange={(e) => setRate(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label bg-black text-white p-2 rounded-top">Rating</label>
//                     <input
//                         type="number"
//                         step="0.1"
//                         className="form-control"
//                         value={rating}
//                         onChange={(e) => setRating(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label bg-black text-white p-2 rounded-top">Image URL</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={imageUrl}
//                         onChange={(e) => setImageUrl(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label bg-black text-white p-2 rounded-top">Location ID</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         value={locationId}
//                         onChange={(e) => setLocationId(e.target.value)}
//                         placeholder="Enter Location ID"
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label bg-black text-white p-2 rounded-top">Trip ID</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         value={tripId}
//                         onChange={(e) => setTripId(e.target.value)}
//                         placeholder="Enter Trip ID"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-success">Add TopPortal</button>
//             </form>
//         </div>
//     );
// };

// export default AddHotel;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
// import './App.css'; // Import your custom styles

// const AddHotel = () => {
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [rate, setRate] = useState('');
//     const [rating, setRating] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const [locationId, setLocationId] = useState('');
//     const [tripId, setTripId] = useState('');
//     const [locations, setLocations] = useState([]);
//     const [trips, setTrips] = useState([]);
//     const [error, setError] = useState(null);
//     const [validLocationId, setValidLocationId] = useState(true); // State to validate location ID

//     useEffect(() => {
//         const fetchOptions = async () => {
//             try {
//                 const locationsResponse = await axios.get('http://localhost:8080/api/locations/all');
//                 setLocations(locationsResponse.data);

//                 const tripsResponse = await axios.get('http://localhost:8080/api/trips/all');
//                 setTrips(tripsResponse.data);
//             } catch (error) {
//                 setError('Error fetching locations or trips');
//             }
//         };

//         fetchOptions();
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // Validate location ID
//         const locationExists = locations.some(loc => loc.id === parseInt(locationId));
//         if (!locationExists) {
//             setValidLocationId(false);
//             return;
//         }
//         setValidLocationId(true);

//         const newTopPortal = {
//             name,
//             rate: parseFloat(rate),
//             rating: parseFloat(rating),
//             imageUrl,
//             location: { id: parseInt(locationId) },
//             trip: { id: parseInt(tripId) }
//         };

//         try {
//             await axios.post('http://localhost:8080/api/topportal/add', newTopPortal);
//             alert("TopPortal added successfully");
//             navigate('/admin/locations'); // Navigate to the desired route on success
//         } catch (error) {
//             setError('Error adding Hotel');
//         }
//     };

//     return (
//         <div className="container d-flex justify-content-center align-items-center vh-100">
//             <div className="custom-form-container border bg-black border-light rounded">
//                 {/* Back Button */}
//                 <button 
//                     className="custom-back-button cursor-pointer duration-200 hover:scale-125 active:scale-100" 
//                     onClick={() => navigate('/admin/locations')}
//                     title="Go Back"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
//                         <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
//                     </svg>
//                 </button>
                
//                 <h2 className="text-center text-danger fw-bold mb-4">Add TopPortal</h2>
                
//                 {error && <div className="alert alert-danger">{error}</div>}
//                 {!validLocationId && <div className="alert alert-warning">Invalid Location ID. Please select a valid location.</div>}

//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group mb-3">
//                         <label className="form-label bg-black text-white p-2 rounded-top">Name</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group mb-3">
//                         <label className="form-label bg-black text-white p-2 rounded-top">Rate</label>
//                         <input
//                             type="number"
//                             step="0.01"
//                             className="form-control"
//                             value={rate}
//                             onChange={(e) => setRate(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group mb-3">
//                         <label className="form-label bg-black text-white p-2 rounded-top">Rating</label>
//                         <input
//                             type="number"
//                             step="0.1"
//                             className="form-control"
//                             value={rating}
//                             onChange={(e) => setRating(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group mb-3">
//                         <label className="form-label bg-black text-white p-2 rounded-top">Image URL</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={imageUrl}
//                             onChange={(e) => setImageUrl(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group mb-3">
//                         <label className="form-label bg-black text-white p-2 rounded-top">Location ID</label>
//                         <input
//                             type="number"
//                             className="form-control"
//                             value={locationId}
//                             onChange={(e) => setLocationId(e.target.value)}
//                             placeholder="Enter Location ID"
//                             required
//                         />
//                     </div>
//                     <div className="form-group mb-3">
//                         <label className="form-label bg-black text-white p-2 rounded-top">Trip ID</label>
//                         <input
//                             type="number"
//                             className="form-control"
//                             value={tripId}
//                             onChange={(e) => setTripId(e.target.value)}
//                             placeholder="Enter Trip ID"
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-success">
//                         Add TopPortal
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddHotel;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional, if you use Bootstrap elsewhere
import './App.css'; // Optional, if you have any other custom styles

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
    const [validLocationId, setValidLocationId] = useState(true); // State to validate location ID

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

        // Validate location ID
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
            navigate('/admin/locations'); // Navigate to the desired route on success
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
