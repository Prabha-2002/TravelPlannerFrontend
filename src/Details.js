// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import 'tailwindcss/tailwind.css';

// // const Details = () => {
// //     const { location } = useParams();
// //     const navigate = useNavigate();
// //     const [tripName, setTripName] = useState('');
// //     const [startDate, setStartDate] = useState('');
// //     const [endDate, setEndDate] = useState('');
// //     const [numberOfDays, setNumberOfDays] = useState('');

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const tripDetails = {
// //             location,
// //             tripName,
// //             startDate,
// //             endDate,
// //             numberOfDays: parseInt(numberOfDays, 10)
// //         };
    
// //         try {
// //             await axios.post('http://localhost:8080/api/trips/add', tripDetails);
// //             alert('Trip details saved successfully!');
// //             navigate('/suggestor', { state: { startDate, endDate, numberOfDays } });
// //         } catch (error) {
// //             console.error('Error saving trip details:', error);
// //         }
// //     };

// //     return (
// //         <div className="details p-4">
// //             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md">
// //                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
// //                     Trip Details
// //                 </span>
// //             </h1>
// //             <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
// //                 <div className="mb-4">
// //                     <label className="block text-gray-700">Trip Name</label>
// //                     <input
// //                         type="text"
// //                         value={tripName}
// //                         onChange={(e) => setTripName(e.target.value)}
// //                         className="w-full p-2 border border-gray-300 rounded-md"
// //                         required
// //                     />
// //                 </div>
// //                 <div className="mb-4">
// //                     <label className="block text-gray-700">Start Date</label>
// //                     <input
// //                         type="date"
// //                         value={startDate}
// //                         onChange={(e) => setStartDate(e.target.value)}
// //                         className="w-full p-2 border border-gray-300 rounded-md"
// //                         required
// //                     />
// //                 </div>
// //                 <div className="mb-4">
// //                     <label className="block text-gray-700">End Date</label>
// //                     <input
// //                         type="date"
// //                         value={endDate}
// //                         onChange={(e) => setEndDate(e.target.value)}
// //                         className="w-full p-2 border border-gray-300 rounded-md"
// //                         required
// //                     />
// //                 </div>
// //                 <div className="mb-4">
// //                     <label className="block text-gray-700">Number of Days</label>
// //                     <select
// //                         value={numberOfDays}
// //                         onChange={(e) => setNumberOfDays(e.target.value)}
// //                         className="w-full p-2 border border-gray-300 rounded-md"
// //                         required
// //                     >
// //                         <option value="">Select number of days</option>
// //                         <option value="1">1</option>
// //                         <option value="2">2</option>
// //                     </select>
// //                 </div>
// //                 <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
// //                     Save
// //                 </button>
// //             </form>
// //         </div>
// //     );
// // }

// // export default Details;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import 'tailwindcss/tailwind.css';

// // const Details = () => {
// //     const { location } = useParams();
// //     const navigate = useNavigate();
// //     const [tripName, setTripName] = useState('');
// //     const [startDate, setStartDate] = useState('');
// //     const [endDate, setEndDate] = useState('');
// //     const [numberOfDays, setNumberOfDays] = useState('');

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const tripDetails = {
// //             location,
// //             tripName,
// //             startDate,
// //             endDate,
// //             numberOfDays: parseInt(numberOfDays, 10)
// //         };
    
// //         try {
// //             await axios.post('http://localhost:8080/api/trips/add', tripDetails);
// //             alert('Trip details saved successfully!');
// //             navigate('/suggestor', { state: { location, startDate, endDate, numberOfDays } });
// //         } catch (error) {
// //             console.error('Error saving trip details:', error);
// //         }
// //     };

// //     return (
// //         <div className="details p-4">
// //             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md">
// //                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
// //                     Trip Details
// //                 </span>
// //             </h1>
// //             <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
// //                 <div className="mb-4">
// //                     <label className="block text-gray-700">Trip Name</label>
// //                     <input
// //                         type="text"
// //                         value={tripName}
// //                         onChange={(e) => setTripName(e.target.value)}
// //                         className="w-full p-2 border border-gray-300 rounded-md"
// //                         required
// //                     />
// //                 </div>
// //                 <div className="mb-4">
// //                     <label className="block text-gray-700">Start Date</label>
// //                     <input
// //                         type="date"
// //                         value={startDate}
// //                         onChange={(e) => setStartDate(e.target.value)}
// //                         className="w-full p-2 border border-gray-300 rounded-md"
// //                         required
// //                     />
// //                 </div>
// //                 <div className="mb-4">
// //                     <label className="block text-gray-700">End Date</label>
// //                     <input
// //                         type="date"
// //                         value={endDate}
// //                         onChange={(e) => setEndDate(e.target.value)}
// //                         className="w-full p-2 border border-gray-300 rounded-md"
// //                         required
// //                     />
// //                 </div>
// //                 <div className="mb-4">
// //                     <label className="block text-gray-700">Number of Days</label>
// //                     <select
// //                         value={numberOfDays}
// //                         onChange={(e) => setNumberOfDays(e.target.value)}
// //                         className="w-full p-2 border border-gray-300 rounded-md"
// //                         required
// //                     >
// //                         <option value="">Select number of days</option>
// //                         <option value="1">1</option>
// //                         <option value="2">2</option>
// //                     </select>
// //                 </div>
// //                 <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
// //                     Save
// //                 </button>
// //             </form>
// //         </div>
// //     );
// // }

// // export default Details;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';

// const Details = () => {
//     const { location } = useParams(); // Extract location ID from URL
//     const navigate = useNavigate();
//     const [tripName, setTripName] = useState('');
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [numberOfDays, setNumberOfDays] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const tripDetails = {
//             location,
//             tripName,
//             startDate,
//             endDate,
//             numberOfDays: parseInt(numberOfDays, 10)
//         };
    
//         try {
//             await axios.post('http://localhost:8080/api/trips/add', tripDetails);
//             alert('Trip details saved successfully!');
//             navigate('/suggestor', { state: { location, startDate, endDate, numberOfDays } });
//         } catch (error) {
//             console.error('Error saving trip details:', error);
//         }
//     };

//     return (
//         <div className="details p-4">
//             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
//                     Trip Details
//                 </span>
//             </h1>
//             <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Trip Name</label>
//                     <input
//                         type="text"
//                         value={tripName}
//                         onChange={(e) => setTripName(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Start Date</label>
//                     <input
//                         type="date"
//                         value={startDate}
//                         onChange={(e) => setStartDate(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">End Date</label>
//                     <input
//                         type="date"
//                         value={endDate}
//                         onChange={(e) => setEndDate(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Number of Days</label>
//                     <select
//                         value={numberOfDays}
//                         onChange={(e) => setNumberOfDays(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                         required
//                     >
//                         <option value="">Select number of days</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         {/* Add more options if needed */}
//                     </select>
//                 </div>
//                 <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
//                     Save
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Details;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';

// const Details = () => {
//     const { location } = useParams(); // Extract location ID from URL
//     const navigate = useNavigate();
//     const [tripName, setTripName] = useState('');
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [numberOfDays, setNumberOfDays] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const tripDetails = {
//             location,
//             tripName,
//             startDate,
//             endDate,
//             numberOfDays: parseInt(numberOfDays, 10)
//         };

//         try {
//             await axios.post('http://localhost:8080/api/trips/add', tripDetails);
//             navigate('/tripform', { state: { tripDetails, tripName } }); // Include tripName in state
//         } catch (error) {
//             console.error('Error saving trip details:', error);
//         }
//     };

//     return (
//         <div className="details p-4">
//             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
//                     Trip Details
//                 </span>
//             </h1>
//             <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Trip Name</label>
//                     <input
//                         type="text"
//                         value={tripName}
//                         onChange={(e) => setTripName(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Start Date</label>
//                     <input
//                         type="date"
//                         value={startDate}
//                         onChange={(e) => setStartDate(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">End Date</label>
//                     <input
//                         type="date"
//                         value={endDate}
//                         onChange={(e) => setEndDate(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Number of Days</label>
//                     <select
//                         value={numberOfDays}
//                         onChange={(e) => setNumberOfDays(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                         required
//                     >
//                         <option value="">Select number of days</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                     </select>
//                 </div>
//                 <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
//                     Save
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Details;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const Details = () => {
    const { location } = useParams(); // Extract location ID from URL
    const navigate = useNavigate();
    const [tripName, setTripName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [numberOfDays, setNumberOfDays] = useState('');

    // Function to calculate the number of days between two dates
    const calculateNumberOfDays = (start, end) => {
        if (start && end) {
            const startDate = new Date(start);
            const endDate = new Date(end);
            const differenceInTime = endDate.getTime() - startDate.getTime();
            const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
            return differenceInDays;
        }
        return '';
    };

    // Update numberOfDays whenever startDate or endDate changes
    useEffect(() => {
        const days = calculateNumberOfDays(startDate, endDate);
        setNumberOfDays(days);
    }, [startDate, endDate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tripDetails = {
            location,
            tripName,
            startDate,
            endDate,
            numberOfDays: parseInt(numberOfDays, 10)
        };

        try {
            await axios.post('http://localhost:8080/api/trips/add', tripDetails);
            navigate('/tripform', { state: { tripDetails, tripName } }); // Include tripName in state
        } catch (error) {
            console.error('Error saving trip details:', error);
        }
    };

    return (
        <div className="details p-4">
            <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                    Trip Details
                </span>
            </h1>
            <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700">Trip Name</label>
                    <input
                        type="text"
                        value={tripName}
                        onChange={(e) => setTripName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Number of Days</label>
                    <input
                        type="text"
                        value={numberOfDays}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded-md bg-gray-200"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                    Save
                </button>
            </form>
        </div>
    );
};

export default Details;
