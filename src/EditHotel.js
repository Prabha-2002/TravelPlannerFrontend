// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const EditHotel = () => {
// //     const { id, locationId } = useParams();
// //     const navigate = useNavigate();
// //     const [hotel, setHotel] = useState({});
// //     const [error, setError] = useState('');
// //     const [success, setSuccess] = useState('');

// //     useEffect(() => {
// //         const fetchHotel = async () => {
// //             try {
// //                 const response = await axios.get(`http://localhost:8080/api/Hotels/${id}`);
// //                 setHotel(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching hotel details:', error.response ? error.response.data : error.message);
// //                 setError('Failed to fetch hotel details.');
// //             }
// //         };

// //         fetchHotel();
// //     }, [id]);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setHotel(prevHotel => ({
// //             ...prevHotel,
// //             [name]: value
// //         }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const HotelRequest = {
// //                 name: hotel.name,
// //                 rate: parseFloat(hotel.rate),   // Ensure rate is a float
// //                 rating: parseFloat(hotel.rating), // Ensure rating is a float
// //                 location: hotel.location,
// //                 imageUrl: hotel.imageUrl,
// //                 locationId: parseInt(locationId, 10) // Convert locationId to integer
// //             };

// //             console.log('Submitting data:', HotelRequest);  // Log the data

// //             await axios.put(`http://localhost:8080/api/Hotels/${id}`, HotelRequest);
// //             setSuccess('Hotel updated successfully.');
// //             setError('');
// //             navigate(`/admin/locations/${locationId}`);
// //         } catch (error) {
// //             console.error('Error updating hotel:', error.response ? error.response.data : error.message);
// //             setError('Failed to update hotel. Please try again.');
// //         }
// //     };

// //     return (
// //         <div className="container mt-5">
// //             <h2>Edit Hotel</h2>
// //             {error && <div className="alert alert-danger">{error}</div>}
// //             {success && <div className="alert alert-success">{success}</div>}
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label>Name</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="name"
// //                         value={hotel.name || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rate</label>
// //                     <input
// //                         type="number"
// //                         className="form-control"
// //                         name="rate"
// //                         value={hotel.rate || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rating</label>
// //                     <input
// //                         type="number"
// //                         step="0.1"
// //                         className="form-control"
// //                         name="rating"
// //                         value={hotel.rating || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Location</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="location"
// //                         value={hotel.location || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Image URL</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="imageUrl"
// //                         value={hotel.imageUrl || ''}
// //                         onChange={handleChange}
// //                     />
// //                 </div>
// //                 <button type="submit" className="btn btn-primary">Save Changes</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default EditHotel;


// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const EditHotel = () => {
// //     const { id, locationId } = useParams(); // Extract id and locationId from URL parameters
// //     const navigate = useNavigate();
// //     const [hotel, setHotel] = useState({});
// //     const [error, setError] = useState('');
// //     const [success, setSuccess] = useState('');

// //     // Log parameters to debug
// //     useEffect(() => {
// //         console.log('ID:', id);
// //         console.log('Location ID:', locationId);
// //     }, [id, locationId]);

// //     useEffect(() => {
// //         const fetchHotel = async () => {
// //             try {
// //                 const response = await axios.get(`http://localhost:8080/api/Hotels/${id}`);
// //                 setHotel(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching hotel details:', error.response ? error.response.data : error.message);
// //                 setError('Failed to fetch hotel details.');
// //             }
// //         };

// //         fetchHotel();
// //     }, [id]);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setHotel(prevHotel => ({
// //             ...prevHotel,
// //             [name]: value
// //         }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const HotelRequest = {
// //                 name: hotel.name,
// //                 rate: parseFloat(hotel.rate),
// //                 rating: parseFloat(hotel.rating),
// //                 location: hotel.location,
// //                 imageUrl: hotel.imageUrl,
// //                 locationId: parseInt(locationId, 10) // Ensure locationId is an integer
// //             };

// //             console.log('Submitting data:', HotelRequest); // Log data for debugging

// //             await axios.put(`http://localhost:8080/api/Hotels/${id}`, HotelRequest);
// //             setSuccess('Hotel updated successfully.');
// //             setError('');
// //             navigate(`/admin/locations/${locationId}`);
// //         } catch (error) {
// //             console.error('Error updating hotel:', error.response ? error.response.data : error.message);
// //             setError('Failed to update hotel. Please try again.');
// //         }
// //     };

// //     return (
// //         <div className="container mt-5">
// //             <h2>Edit Hotel</h2>
// //             {error && <div className="alert alert-danger">{error}</div>}
// //             {success && <div className="alert alert-success">{success}</div>}
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label>Name</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="name"
// //                         value={hotel.name || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rate</label>
// //                     <input
// //                         type="number"
// //                         className="form-control"
// //                         name="rate"
// //                         value={hotel.rate || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rating</label>
// //                     <input
// //                         type="number"
// //                         step="0.1"
// //                         className="form-control"
// //                         name="rating"
// //                         value={hotel.rating || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Location</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="location"
// //                         value={hotel.location || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Image URL</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="imageUrl"
// //                         value={hotel.imageUrl || ''}
// //                         onChange={handleChange}
// //                     />
// //                 </div>
// //                 <button type="submit" className="btn btn-primary">Save Changes</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default EditHotel;



// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const EditHotel = () => {
// //     const { id, locationId } = useParams(); // Extract id and locationId from URL parameters
// //     const navigate = useNavigate();
// //     const [hotel, setHotel] = useState({
// //         name: '',
// //         rate: '',
// //         rating: '',
// //         location: '',
// //         imageUrl: ''
// //     });
// //     const [error, setError] = useState('');
// //     const [success, setSuccess] = useState('');

// //     // Log parameters to debug
// //     useEffect(() => {
// //         console.log('ID:', id);
// //         console.log('Location ID:', locationId);
// //     }, [id, locationId]);

// //     // Fetch hotel details
// //     useEffect(() => {
// //         const fetchHotel = async () => {
// //             if (id) {
// //                 try {
// //                     const response = await axios.get(`http://localhost:8080/api/Hotels/${id}`);
// //                     setHotel(response.data);
// //                 } catch (error) {
// //                     console.error('Error fetching hotel details:', error.response ? error.response.data : error.message);
// //                     setError('Failed to fetch hotel details.');
// //                 }
// //             }
// //         };

// //         fetchHotel();
// //     }, [id]);

// //     // Handle input change
// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setHotel(prevHotel => ({
// //             ...prevHotel,
// //             [name]: value
// //         }));
// //     };

// //     // Handle form submission
// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const HotelRequest = {
// //                 name: hotel.name,
// //                 rate: parseFloat(hotel.rate),
// //                 rating: parseFloat(hotel.rating),
// //                 location: hotel.location,
// //                 imageUrl: hotel.imageUrl,
// //                 locationId: parseInt(locationId, 10) // Ensure locationId is an integer
// //             };

// //             console.log('Submitting data:', HotelRequest); // Log data for debugging

// //             await axios.put(`http://localhost:8080/api/Hotels/${id}`, HotelRequest);
// //             setSuccess('Hotel updated successfully.');
// //             setError('');
// //             // navigate(`/admin/locations/${locationId}`);
// //             navigate(`/admin/locations`);

// //         } catch (error) {
// //             console.error('Error updating hotel:', error.response ? error.response.data : error.message);
// //             setError('Failed to update hotel. Please try again.');
// //         }
// //     };

// //     return (
// //         <div className="container mt-5">
// //             <h2>Edit Hotel</h2>
// //             {error && <div className="alert alert-danger">{error}</div>}
// //             {success && <div className="alert alert-success">{success}</div>}
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label>Name</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="name"
// //                         value={hotel.name || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rate</label>
// //                     <input
// //                         type="number"
// //                         className="form-control"
// //                         name="rate"
// //                         value={hotel.rate || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rating</label>
// //                     <input
// //                         type="number"
// //                         step="0.1"
// //                         className="form-control"
// //                         name="rating"
// //                         value={hotel.rating || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Location</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="location"
// //                         value={hotel.location || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Image URL</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="imageUrl"
// //                         value={hotel.imageUrl || ''}
// //                         onChange={handleChange}
// //                     />
// //                 </div>
// //                 <button type="submit" className="btn btn-primary">Save Changes</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default EditHotel;







// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const EditHotel = () => {
// //     const { id, locationId } = useParams(); // Extract id and locationId from URL parameters
// //     const navigate = useNavigate();
// //     const [hotel, setHotel] = useState({
// //         name: '',
// //         rate: '',
// //         rating: '',
// //         location: '',
// //         imageUrl: ''
// //     });
// //     const [error, setError] = useState('');
// //     const [success, setSuccess] = useState('');

// //     useEffect(() => {
// //         console.log('ID:', id);
// //         console.log('Location ID:', locationId);
// //     }, [id, locationId]);

// //     useEffect(() => {
// //         const fetchHotel = async () => {
// //             if (id) {
// //                 try {
// //                     const response = await axios.get(`http://localhost:8080/api/Hotels/${id}`);
// //                     setHotel(response.data);
// //                 } catch (error) {
// //                     console.error('Error fetching hotel details:', error.response ? error.response.data : error.message);
// //                     setError('Failed to fetch hotel details.');
// //                 }
// //             }
// //         };

// //         fetchHotel();
// //     }, [id]);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setHotel(prevHotel => ({
// //             ...prevHotel,
// //             [name]: value
// //         }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const HotelRequest = {
// //                 name: hotel.name,
// //                 rate: parseFloat(hotel.rate),
// //                 rating: parseFloat(hotel.rating),
// //                 location: hotel.location,
// //                 imageUrl: hotel.imageUrl,
// //                 locationId: parseInt(locationId, 10) // Ensure locationId is an integer
// //             };

// //             console.log('Submitting data:', HotelRequest); // Log data for debugging

// //             const response = await axios.put(`http://localhost:8080/api/Hotels/${id}`, HotelRequest);
// //             if (response.status === 200) {
// //                 setSuccess('Hotel updated successfully.');
// //                 setError('');
// //                 navigate(`/admin/locations`);
// //             } else {
// //                 setError('Failed to update hotel. Server response was not successful.');
// //             }
// //         } catch (error) {
// //             console.error('Error updating hotel:', error.response ? error.response.data : error.message);
// //             setError('Failed to update hotel. Please try again.');
// //         }
// //     };

// //     return (
// //         <div className="container mt-5">
// //             <h2>Edit Hotel</h2>
// //             {error && <div className="alert alert-danger">{error}</div>}
// //             {success && <div className="alert alert-success">{success}</div>}
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label>Name</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="name"
// //                         value={hotel.name || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rate</label>
// //                     <input
// //                         type="number"
// //                         className="form-control"
// //                         name="rate"
// //                         value={hotel.rate || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rating</label>
// //                     <input
// //                         type="number"
// //                         step="0.1"
// //                         className="form-control"
// //                         name="rating"
// //                         value={hotel.rating || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Location</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="location"
// //                         value={hotel.location || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Image URL</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="imageUrl"
// //                         value={hotel.imageUrl || ''}
// //                         onChange={handleChange}
// //                     />
// //                 </div>
// //                 <button type="submit" className="btn btn-primary">Save Changes</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default EditHotel;


// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const EditHotel = () => {
// //     const { id, locationId } = useParams(); // Extract id and locationId from URL parameters
// //     const navigate = useNavigate();
// //     const [hotel, setHotel] = useState({
// //         name: '',
// //         rate: '',
// //         rating: '',
// //         location: '',
// //         imageUrl: ''
// //     });
// //     const [error, setError] = useState('');
// //     const [success, setSuccess] = useState('');

// //     useEffect(() => {
// //         console.log('ID:', id);
// //         console.log('Location ID:', locationId);
// //     }, [id, locationId]);

// //     useEffect(() => {
// //         const fetchHotel = async () => {
// //             if (id) {
// //                 try {
// //                     const response = await axios.get(`http://localhost:8080/api/Hotels/${id}`);
// //                     setHotel(response.data);
// //                 } catch (error) {
// //                     console.error('Error fetching hotel details:', error.response ? error.response.data : error.message);
// //                     setError('Failed to fetch hotel details.');
// //                 }
// //             }
// //         };

// //         fetchHotel();
// //     }, [id]);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setHotel(prevHotel => ({
// //             ...prevHotel,
// //             [name]: value
// //         }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             // Convert locationId to integer if it's not already
// //             const parsedLocationId = parseInt(locationId, 10);

// //             // Check if parsedLocationId is valid
// //             if (isNaN(parsedLocationId)) {
// //                 throw new Error('Invalid location ID.');
// //             }

// //             const HotelRequest = {
// //                 name: hotel.name,
// //                 rate: parseFloat(hotel.rate),
// //                 rating: parseFloat(hotel.rating),
// //                 location: hotel.location,
// //                 imageUrl: hotel.imageUrl,
// //                 locationId: parsedLocationId // Ensure locationId is an integer
// //             };

// //             console.log('Submitting data:', HotelRequest); // Log data for debugging

// //             const response = await axios.put(`http://localhost:8080/api/Hotels/${id}`, HotelRequest);

// //             if (response.status === 200) {
// //                 setSuccess('Hotel updated successfully.');
// //                 setError('');
// //                 navigate(`/admin/locations`);
// //             } else {
// //                 setError('Failed to update hotel. Server response was not successful.');
// //             }
// //         } catch (error) {
// //             console.error('Error updating hotel:', error.response ? error.response.data : error.message);
// //             setError('Failed to update hotel. Please try again.');
// //         }
// //     };

// //     return (
// //         <div className="container mt-5">
// //             <h2>Edit Hotel</h2>
// //             {error && <div className="alert alert-danger">{error}</div>}
// //             {success && <div className="alert alert-success">{success}</div>}
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label>Name</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="name"
// //                         value={hotel.name || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rate</label>
// //                     <input
// //                         type="number"
// //                         className="form-control"
// //                         name="rate"
// //                         value={hotel.rate || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rating</label>
// //                     <input
// //                         type="number"
// //                         step="0.1"
// //                         className="form-control"
// //                         name="rating"
// //                         value={hotel.rating || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Location</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="location"
// //                         value={hotel.location || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Image URL</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="imageUrl"
// //                         value={hotel.imageUrl || ''}
// //                         onChange={handleChange}
// //                     />
// //                 </div>
// //                 <button type="submit" className="btn btn-primary">Save Changes</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default EditHotel;



// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const EditHotel = () => {
// //     const { id, locationId } = useParams(); // Extract id and locationId from URL parameters
// //     const navigate = useNavigate();
// //     const [hotel, setHotel] = useState({
// //         name: '',
// //         rate: '',
// //         rating: '',
// //         location: '',
// //         imageUrl: ''
// //     });
// //     const [error, setError] = useState('');
// //     const [success, setSuccess] = useState('');

// //     useEffect(() => {
// //         console.log('ID:', id);
// //         console.log('Location ID:', locationId);
// //     }, [id, locationId]);

// //     useEffect(() => {
// //         const fetchHotel = async () => {
// //             if (id) {
// //                 try {
// //                     const response = await axios.get(`http://localhost:8080/api/Hotels/${id}`);
// //                     setHotel(response.data);
// //                 } catch (error) {
// //                     console.error('Error fetching hotel details:', error.response ? error.response.data : error.message);
// //                     setError('Failed to fetch hotel details.');
// //                 }
// //             }
// //         };

// //         fetchHotel();
// //     }, [id]);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setHotel(prevHotel => ({
// //             ...prevHotel,
// //             [name]: value
// //         }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             // Convert locationId to integer if it's not already
// //             const parsedLocationId = parseInt(locationId, 10);

// //             // Check if parsedLocationId is valid
// //             if (isNaN(parsedLocationId)) {
// //                 throw new Error('Invalid location ID.');
// //             }

// //             const HotelRequest = {
// //                 name: hotel.name,
// //                 rate: parseFloat(hotel.rate),
// //                 rating: parseFloat(hotel.rating),
// //                 location: hotel.location,
// //                 imageUrl: hotel.imageUrl,
// //                 locationId: parsedLocationId // Ensure locationId is an integer
// //             };

// //             console.log('Submitting data:', HotelRequest); // Log data for debugging

// //             // const response = await axios.put(`http://localhost:8080/api/Hotels/${id}`, HotelRequest);
// //             const response = await axios.put(`http://localhost:8080/api/Hotels/${id}`, HotelRequest);

// //             if (response.status === 200) {
// //                 setSuccess('Hotel updated successfully.');
// //                 setError('');
// //                 navigate(`/admin/locations`);
// //             } else {
// //                 setError('Failed to update hotel. Server response was not successful.');
// //             }
// //         } catch (error) {
// //             console.error('Error updating hotel:', error.response ? error.response.data : error.message);
// //             setError('Failed to update hotel. Please try again.');
// //         }
// //     };

// //     return (
// //         <div className="container mt-5">
// //             <h2>Edit Hotel</h2>
// //             {error && <div className="alert alert-danger">{error}</div>}
// //             {success && <div className="alert alert-success">{success}</div>}
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label>Name</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="name"
// //                         value={hotel.name || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rate</label>
// //                     <input
// //                         type="number"
// //                         className="form-control"
// //                         name="rate"
// //                         value={hotel.rate || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rating</label>
// //                     <input
// //                         type="number"
// //                         step="0.1"
// //                         className="form-control"
// //                         name="rating"
// //                         value={hotel.rating || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Location</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="location"
// //                         value={hotel.location || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Image URL</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="imageUrl"
// //                         value={hotel.imageUrl || ''}
// //                         onChange={handleChange}
// //                     />
// //                 </div>
// //                 <button type="submit" className="btn btn-primary">Save Changes</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default EditHotel;


// // *********************************************************************************************************************

// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const EditHotel = () => {
// //     const { id, locationId } = useParams(); // Extract id and locationId from URL parameters
// //     const navigate = useNavigate();
// //     const [hotel, setHotel] = useState({
// //         name: '',
// //         rate: '',
// //         rating: '',
// //         location: '',
// //         imageUrl: ''
// //     });
// //     const [error, setError] = useState('');
// //     const [success, setSuccess] = useState('');

// //     useEffect(() => {
// //         const fetchHotel = async () => {
// //             if (id) {
// //                 try {
// //                     const response = await axios.get(`http://localhost:8080/api/Hotels/${id}`);
// //                     setHotel(response.data);
// //                 } catch (error) {
// //                     console.error('Error fetching hotel details:', error.response ? error.response.data : error.message);
// //                     setError('Failed to fetch hotel details.');
// //                 }
// //             }
// //         };

// //         fetchHotel();
// //     }, [id]);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setHotel(prevHotel => ({
// //             ...prevHotel,
// //             [name]: value
// //         }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         // try {
// //             // const parsedLocationId = parseInt(locationId, 10);
// //             // if (isNaN(parsedLocationId)) {
// //             //     throw new Error('Invalid location ID.');
// //             // }

// //             const HotelRequest = {
// //                 name: hotel.name,
// //                 rate: parseFloat(hotel.rate),
// //                 rating: parseFloat(hotel.rating),
// //                 location: hotel.location,
// //                 imageUrl: hotel.imageUrl,
// //                 // locationId: parsedLocationId
// //             };

// //             console.log('Submitting data:', HotelRequest);

// //             const response = await axios.put(`http://localhost:8080/api/Hotels/${id}`, hotel);

// //             // if (response.status === 200) {
// //             //     setSuccess('Hotel updated successfully.');
// //             //     setError('');
// //             //     navigate(`/admin/locations`);
// //         //     } else {
// //         //         setError(`Failed to update hotel. Server response: ${response.statusText}`);
// //         //     }
// //         // } catch (error) {
// //         //     console.error('Error updating hotel:', error.response ? error.response.data : error.message);
// //         //     setError('Failed to update hotel. Please try again.');
// //         // }
// //     };

// //     return (
// //         <div className="container mt-5">
// //             <h2>Edit Hotel</h2>
// //             {error && <div className="alert alert-danger">{error}</div>}
// //             {success && <div className="alert alert-success">{success}</div>}
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label>Name</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="name"
// //                         value={hotel.name || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rate</label>
// //                     <input
// //                         type="number"
// //                         className="form-control"
// //                         name="rate"
// //                         value={hotel.rate || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Rating</label>
// //                     <input
// //                         type="number"
// //                         step="0.1"
// //                         className="form-control"
// //                         name="rating"
// //                         value={hotel.rating || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Location</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="location"
// //                         value={hotel.location || ''}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Image URL</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         name="imageUrl"
// //                         value={hotel.imageUrl || ''}
// //                         onChange={handleChange}
// //                     />
// //                 </div>
// //                 <button type="submit" className="btn btn-primary">Save Changes</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default EditHotel;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const EditHotel = () => {
//     const { id } = useParams(); // Extract id from URL parameters
//     const navigate = useNavigate();
//     const [hotel, setHotel] = useState({
//         name: '',
//         rate: '',
//         rating: '',
//         location: '',
//         imageUrl: ''
//     });
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     useEffect(() => {
//         const fetchHotel = async () => {
//             if (id) {
//                 try {
//                     const response = await axios.get(`http://localhost:8080/api/Hotel/id`);
//                     setHotel(response.data);
//                 } catch (error) {
//                     console.error('Error fetching hotel details:', error.response ? error.response.data : error.message);
//                     setError('Failed to fetch hotel details.');
//                 }
//             }
//         };

//         fetchHotel();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setHotel(prevHotel => ({
//             ...prevHotel,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const HotelRequest = {
//                 name: hotel.name,
//                 rate: parseFloat(hotel.rate),
//                 rating: parseFloat(hotel.rating),
//                 location: hotel.location,
//                 imageUrl: hotel.imageUrl
//             };

//             console.log('Submitting data:', HotelRequest);

//             const response = await axios.put(`http://localhost:8080/api/Hotels/${id}`, HotelRequest);

//             if (response.status === 200) {
//                 setSuccess('Hotel updated successfully.');
//                 setError('');
//                 setTimeout(() => navigate(`/admin/locations`), 2000);
//             } else {
//                 setError(`Failed to update hotel. Server response: ${response.statusText}`);
//             }
//         } catch (error) {
//             console.error('Error updating hotel:', error.response ? error.response.data : error.message);
//             setError('Failed to update hotel. Please try again.');
//         }
//     };

//     return (
//         <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
//             <div className="text-center mb-4">
//                 <h2 className="font-weight-bold">Edit Hotel</h2>
//             </div>
//             <div className="card p-4 shadow-sm" style={{ maxWidth: '600px', width: '100%' }}>
//                 {error && <div className="alert alert-danger">{error}</div>}
//                 {success && <div className="alert alert-success">{success}</div>}
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group mb-3">
//                         <label htmlFor="name">Name</label>
//                         <input
//                             id="name"
//                             type="text"
//                             className="form-control"
//                             name="name"
//                             value={hotel.name || ''}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group mb-3">
//                         <label htmlFor="rate">Rate</label>
//                         <input
//                             id="rate"
//                             type="number"
//                             className="form-control"
//                             name="rate"
//                             value={hotel.rate || ''}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group mb-3">
//                         <label htmlFor="rating">Rating</label>
//                         <input
//                             id="rating"
//                             type="number"
//                             step="0.1"
//                             className="form-control"
//                             name="rating"
//                             value={hotel.rating || ''}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group mb-3">
//                         <label htmlFor="location">Location</label>
//                         <input
//                             id="location"
//                             type="text"
//                             className="form-control"
//                             name="location"
//                             value={hotel.location || ''}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group mb-3">
//                         <label htmlFor="imageUrl">Image URL</label>
//                         <input
//                             id="imageUrl"
//                             type="text"
//                             className="form-control"
//                             name="imageUrl"
//                             value={hotel.imageUrl || ''}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary w-100">Save Changes</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default EditHotel;


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
// import './App.css'; // Import your custom styles

// const EditHotel = () => {
//     const { id } = useParams(); // Get the hotel ID from URL parameters
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
//         const fetchData = async () => {
//             try {
//                 // Fetch the hotel details
//                 const hotelResponse = await axios.get(`http://localhost:8080/api/Hotel/${id}`);
//                 const hotel = hotelResponse.data;
//                 setName(hotel.name);
//                 setRate(hotel.rate);
//                 setRating(hotel.rating);
//                 setImageUrl(hotel.imageUrl);
//                 setLocationId(hotel.location.id);
//                 setTripId(hotel.trip.id);

//                 // Fetch locations and trips for dropdowns (if needed)
//                 const locationsResponse = await axios.get('http://localhost:8080/api/locations/all');
//                 setLocations(locationsResponse.data);

//                 const tripsResponse = await axios.get('http://localhost:8080/api/trips/all');
//                 setTrips(tripsResponse.data);
//             } catch (error) {
//                 setError('Error fetching hotel details or options');
//             }
//         };

//         fetchData();
//     }, [id]);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const updatedHotel = {
//             name,
//             rate: parseFloat(rate),
//             rating: parseFloat(rating),
//             imageUrl,
//             location: { id: parseInt(locationId) },
//             trip: { id: parseInt(tripId) }
//         };

//         try {
//          await axios.put(`http://localhost:8080/api/Hotel/${id}`, updatedHotel);
//             navigate('/admin/locations'); // Navigate to a different page or show success message
//         } catch (error) {
//             setError('Error updating top portal');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2 className="text-3xl font-bold text-center text-black-600 mb-8">Edit Hotel</h2>

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
//                 <button type="submit" className="btn btn-success">Update TopPortal</button>
//             </form>
//         </div>
//     );
// };

// export default EditHotel;



import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported if needed
import './App.css'; // Import your custom styles if any

const EditHotel = () => {
    const { id } = useParams(); // Get the hotel ID from URL parameters
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the hotel details
                const hotelResponse = await axios.get(`http://localhost:8080/api/topportal/${id}`);
                const hotel = hotelResponse.data;
                setName(hotel.name);
                setRate(hotel.rate);
                setRating(hotel.rating);
                setImageUrl(hotel.imageUrl);
                setLocationId(hotel.location.id);
                setTripId(hotel.trip.id);

                // Fetch locations and trips for dropdowns (if needed)
                const locationsResponse = await axios.get('http://localhost:8080/api/locations/all');
                setLocations(locationsResponse.data);

                const tripsResponse = await axios.get('http://localhost:8080/api/trips/all');
                setTrips(tripsResponse.data);
            } catch (error) {
                setError('Error fetching hotel details or options');
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedTopPortal = {
            name,
            rate: parseFloat(rate),
            rating: parseFloat(rating),
            imageUrl,
            location: { id: parseInt(locationId) },
            trip: { id: parseInt(tripId) }
        };

        try {
            await axios.put(`http://localhost:8080/api/topportal/${id}`, updatedTopPortal);
            alert("Edited successfully");
            navigate('/admin/locations'); // Navigate to a different page or show success message
        } catch (error) {
            setError('Error updating top portal');
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen  p-6">
            <div className="relative bg-black p-6 rounded-lg shadow-lg w-full max-w-lg">
                {/* Back Button */}
                <button
                    className="absolute top-[0rem] left-0 bg-transparent border-none cursor-pointer p-2 z-10"
                    onClick={() => navigate('/admin/locations')}
                    title="Go Back"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="stroke-blue-300">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                    </svg>
                </button> <br/><br/>

                <h2 className="text-center text-red-500 font-bold text-2xl mb-4">Edit Hotel</h2>

                {error && <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group mb-3">
                        <label className="block bg-black text-white p-2 rounded-t-md">Name</label>
                        <input
                            type="text"
                            className="form-control bg-gray-200 p-2 rounded-b-md w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="block bg-black text-white p-2 rounded-t-md">Rate</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control bg-gray-200 p-2 rounded-b-md w-full"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="block bg-black text-white p-2 rounded-t-md">Rating</label>
                        <input
                            type="number"
                            step="0.1"
                            className="form-control bg-gray-200 p-2 rounded-b-md w-full"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="block bg-black text-white p-2 rounded-t-md">Image URL</label>
                        <input
                            type="text"
                            className="form-control bg-gray-200 p-2 rounded-b-md w-full"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="block bg-black text-white p-2 rounded-t-md">Location ID</label>
                        <input
                            type="number"
                            className="form-control bg-gray-200 p-2 rounded-b-md w-full"
                            value={locationId}
                            onChange={(e) => setLocationId(e.target.value)}
                            placeholder="Enter Location ID"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="block bg-black text-white p-2 rounded-t-md">Trip ID</label>
                        <input
                            type="number"
                            className="form-control bg-gray-200 p-2 rounded-b-md w-full"
                            value={tripId}
                            onChange={(e) => setTripId(e.target.value)}
                            placeholder="Enter Trip ID"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
                        Update 
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditHotel;
