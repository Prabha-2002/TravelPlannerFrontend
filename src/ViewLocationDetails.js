// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ViewLocationDetails = () => {
//     const [locations, setLocations] = useState([]);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchLocations = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/api/locations/all');
//                 console.log('Fetched data:', response.data); // Log the response data

//                 // Process the response data to avoid deep nesting
//                 const processData = (data) => {
//                     return data.map(item => ({
//                         id: item.id,
//                         name: item.name,
//                         // Extract other relevant properties if necessary
//                     }));
//                 };

//                 // Check if response data is an array
//                 if (Array.isArray(response.data)) {
//                     setLocations(processData(response.data));
//                 } else {
//                     console.error('Unexpected data format:', response.data);
//                     setError('Unexpected data format received from the server.');
//                 }
//             } catch (error) {
//                 console.error('Error fetching locations:', error);
//                 setError('Failed to fetch locations. Please try again.');
//             }
//         };

//         fetchLocations();
//     }, []);

//     const handleAddLocation = () => {
//         navigate('/admin/add-location');
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Location Details</h2>
//             <button className="btn btn-success mb-3" onClick={handleAddLocation}>
//                 Add Location
//             </button>

//             {error && <div className="alert alert-danger">{error}</div>}

//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {locations.length > 0 ? (
//                         locations.map(location => (
//                             <tr key={location.id}>
//                                 <td>{location.name}</td>
//                                 <td>
//                                     <button
//                                         className="btn btn-primary"
//                                         onClick={() => navigate(`/admin/locations/${location.id}`)}
//                                     >
//                                         View Details
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="2">No locations available.</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ViewLocationDetails;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ViewLocationDetails.css'; // Import the custom CSS file for additional styling
const ViewLocationDetails = () => {
    const [locations, setLocations] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement logout logic here
        navigate('/login');
    };

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/locations/all');
                console.log('Fetched data:', response.data); // Log the response data

                const processData = (data) => {
                    return data.map(item => ({
                        id: item.id,
                        name: item.name,
                    }));
                };

                if (Array.isArray(response.data)) {
                    setLocations(processData(response.data));
                } else {
                    console.error('Unexpected data format:', response.data);
                    setError('Unexpected data format received from the server.');
                }
            } catch (error) {
                console.error('Error fetching locations:', error);
                setError('Failed to fetch locations. Please try again.');
            }
        };

        fetchLocations();
    }, []);

    const handleAddLocation = () => {
        navigate('/admin/add-location');
    };

    const handleDelete = async (locationId) => {
        if (window.confirm('Are you sure you want to delete this location?')) {
            try {
                await axios.delete(`http://localhost:8080/api/locations/${locationId}`);
                setLocations(locations.filter(location => location.id !== locationId));
            } catch (error) {
                console.error('Error deleting location:', error);
                setError('Failed to delete location. Please try again.');
            }
        }
    };

    return (
        <div className="container mt-5">
              {/* <nav className="bg-gray-200 border-b border-gray-300 p-4 fixed top-0 left-0 right-0 z-10">
                <div className="container mx-auto flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800 ml-5">TRIP PLANNER</h1>
                    <div className="flex space-x-4">
                        <button
                            className="bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none w-36"
                            onClick={() => navigate('/admin/location')}
                        >
                            Manage Locations
                        </button>
                        <button
                            className="bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none w-36"
                            onClick={() => navigate('/admin/users')}
                        >
                            View Customers
                        </button>
                        <button
                            className="bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none w-36"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
            <br/>
            <br/> <br/> <br/> */}
              <button 
            className="fullback"
            onClick={() => navigate('/dashboard')} // Navigate to /admin/locations on click
        >
            <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
            </svg>
            <span>Back</span>
        </button>
            <h2 className='headingtop'>Location Details</h2> <br /><br/>
            <button className="btn btn-success mb-3" onClick={handleAddLocation}>
                Add Location
            </button> <br/><br/>

            {error && <div className="alert alert-danger">{error}</div>}

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.length > 0 ? (
                        locations.map(location => (
                            <tr key={location.id}>
                                <td>{location.id}</td>
                                <td>{location.name}</td>
                                <td>
                                    <button
                                        className="btn btn-primary me-2"
                                        onClick={() => navigate(`/admin/locations/${location.id}`)}
                                    >
                                        View Details
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(location.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No locations available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ViewLocationDetails;
