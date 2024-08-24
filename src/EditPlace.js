// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const EditPlace = () => {
//     const { id } = useParams(); // Get the place ID from the URL
//     const navigate = useNavigate();
//     const [place, setPlace] = useState({});
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const [locationId, setLocationId] = useState(''); // State for locationId
//     const [error, setError] = useState(null); // Added error state to handle errors

//     useEffect(() => {
//         const fetchPlace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/places/${id}`);
//                 const placeData = response.data;
//                 setPlace(placeData);
//                 setName(placeData.name);
//                 setDescription(placeData.description);
//                 setImageUrl(placeData.imageUrl);
//                 setLocationId(placeData.locationId); // Set locationId for navigation
//             } catch (error) {
//                 console.error("Error fetching place details:", error);
//                 setError("Failed to fetch place details.");
//             }
//         };

//         fetchPlace();
//     }, [id]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const updatedPlace = {
//             name,
//             description,
//             imageUrl,
//         };

//         try {
//             const response = await axios.put(`http://localhost:8080/api/places/${id}`, updatedPlace);
//             if (response.status === 200) {
//                 alert("Place updated successfully!");
//                 navigate(`/admin/locations/${locationId}`); // Navigate back to location details page with the correct locationId
//             } else {
//                 setError("Failed to update place. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error updating place:", error);
//             setError("Failed to update place. Please try again.");
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Edit Place</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Place Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Description</label>
//                     <textarea
//                         className="form-control"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Image URL</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={imageUrl}
//                         onChange={(e) => setImageUrl(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-success">Save</button>
//                 {error && <p className="mt-3 text-danger">{error}</p>}
//             </form>
//         </div>
//     );
// };

// export default EditPlace;
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const EditPlace = () => {
//     const { id, locationId } = useParams();
//     const navigate = useNavigate();
//     const [place, setPlace] = useState({});
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     useEffect(() => {
//         const fetchPlace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/places/${id}`);
//                 setPlace(response.data);
//             } catch (error) {
//                 console.error('Error fetching place details:', error.response ? error.response.data : error.message);
//                 setError('Failed to fetch place details.');
//             }
//         };

//         fetchPlace();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setPlace(prevPlace => ({
//             ...prevPlace,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`http://localhost:8080/api/places/${id}`, place);
//             setSuccess('Place updated successfully.');
//             setError('');
//             navigate(`/admin/locations`);
//         } catch (error) {
//             console.error('Error updating place:', error.response ? error.response.data : error.message);
//             setError('Failed to update place. Please try again.');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Edit Place</h2>
//             {error && <div className="alert alert-danger">{error}</div>}
//             {success && <div className="alert alert-success">{success}</div>}
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="name"
//                         value={place.name || ''}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Description</label>
//                     <textarea
//                         className="form-control"
//                         name="description"
//                         value={place.description || ''}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Image URL</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="imageUrl"
//                         value={place.imageUrl || ''}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Save Changes</button>
//             </form>
//         </div>
//     );
// };

// // export default EditPlace;
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const EditPlace = () => {
//     const { id, locationId } = useParams();
//     const navigate = useNavigate();
//     const [place, setPlace] = useState({});
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     useEffect(() => {
//         const fetchPlace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/places/${id}`);
//                 setPlace(response.data);
//             } catch (error) {
//                 console.error('Error fetching place details:', error.response ? error.response.data : error.message);
//                 setError('Failed to fetch place details.');
//             }
//         };

//         fetchPlace();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setPlace(prevPlace => ({
//             ...prevPlace,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`http://localhost:8080/api/places/${id}`, place);
//             setSuccess('Place updated successfully.');
//             setError('');
//             setTimeout(() => {
//                 navigate(`/admin/locations`);
//             }, 1500);
//         } catch (error) {
//             console.error('Error updating place:', error.response ? error.response.data : error.message);
//             setError('Failed to update place. Please try again.');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Edit Place</h2>
//             {error && <div className="alert alert-danger">{error}</div>}
//             {success && <div className="alert alert-success">{success}</div>}
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Place Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="name"
//                         value={place.name || ''}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Description</label>
//                     <textarea
//                         className="form-control"
//                         name="description"
//                         value={place.description || ''}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Image URL</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="imageUrl"
//                         value={place.imageUrl || ''}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label className="form-label">Time Spent (in hrs)</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="timespend"
//                         value={place.timespend || ''}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Save Changes</button>
//             </form>
//         </div>
//     );
// };

// export default EditPlace;


// tjeytughdtrfytguhdrfytguh///////////////////////
// 




// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const EditPlace = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [place, setPlace] = useState({});
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     useEffect(() => {
//         const fetchPlace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/places/${id}`);
//                 setPlace(response.data);
//             } catch (error) {
//                 console.error('Error fetching place details:', error.response ? error.response.data : error.message);
//                 setError('Failed to fetch place details.');
//             }
//         };

//         fetchPlace();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setPlace(prevPlace => ({
//             ...prevPlace,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`http://localhost:8080/api/places/${id}`, place);
//             setSuccess('Place updated successfully.');
//             setError('');
//             setTimeout(() => {
//                 navigate(`/admin/locations`);
//             }, 1500);
//         } catch (error) {
//             console.error('Error updating place:', error.response ? error.response.data : error.message);
//             setError('Failed to update place. Please try again.');
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center  py-6 px-4">
//             <div className="w-full max-w-lg p-8 bg-black shadow-lg rounded-lg border border-gray-200">
//                 <h2 className="text-3xl font-bold text-center text-black-600 mb-8">Edit Place</h2>
//                 {error && <div className="mb-4 p-3 bg-red-200 text-red-700 rounded-md">{error}</div>}
//                 {success && <div className="mb-4 p-3 bg-green-200 text-green-700 rounded-md">{success}</div>}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="form-group">
//                         <label className="block text-sm font-medium text-gray-700">Place Name</label>
//                         <input
//                             type="text"
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                             name="name"
//                             value={place.name || ''}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label className="block text-sm font-medium text-gray-700">Description</label>
//                         <textarea
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                             name="description"
//                             value={place.description || ''}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label className="block text-sm font-medium text-gray-700">Image URL</label>
//                         <input
//                             type="text"
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                             name="imageUrl"
//                             value={place.imageUrl || ''}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label className="block text-sm font-medium text-gray-700">Time Spent (in hrs)</label>
//                         <input
//                             type="text"
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                             name="timespend"
//                             value={place.timespend || ''}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                         Save Changes
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default EditPlace;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPlace = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [place, setPlace] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const fetchPlace = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/places/${id}`);
                setPlace(response.data);
            } catch (error) {
                console.error('Error fetching place details:', error.response ? error.response.data : error.message);
                setError('Failed to fetch place details.');
            }
        };

        fetchPlace();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlace(prevPlace => ({
            ...prevPlace,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/places/${id}`, place);
            setSuccess('Place updated successfully.');
            setError('');
            setTimeout(() => {
                navigate(`/admin/locations`);
            }, 1500);
        } catch (error) {
            console.error('Error updating place:', error.response ? error.response.data : error.message);
            setError('Failed to update place. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen  py-6 px-4">
            <div className="relative bg-black p-6 rounded-lg shadow-lg border border-gray-200 w-full max-w-lg">
                <button
                    className="absolute top-[0rem] left-0 bg-transparent border-none cursor-pointer py-2 z-10"
                    onClick={() => navigate('/admin/locations')}
                    title="Go Back"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="stroke-blue-300">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                    </svg>
                </button>
                <br/><br/>

                <h2 className="text-center text-red-500 font-bold text-2xl mb-4">Edit Place</h2>
                
                {error && <div className="mb-4 p-3 bg-red-200 text-red-700 rounded-md">{error}</div>}
                {success && <div className="mb-4 p-3 bg-green-200 text-green-700 rounded-md">{success}</div>}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-group mb-3">
                        <label className="block bg-black text-white p-2 rounded-t-md">Place Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-200 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                            name="name"
                            value={place.name || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="block bg-black text-white p-2 rounded-t-md">Description</label>
                        <textarea
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-200 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                            name="description"
                            value={place.description || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="block bg-black text-white p-2 rounded-t-md">Image URL</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-200 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                            name="imageUrl"
                            value={place.imageUrl || ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="block bg-black text-white p-2 rounded-t-md">Time Spent (in hrs)</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-200 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                            name="timespend"
                            value={place.timespend || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditPlace;
