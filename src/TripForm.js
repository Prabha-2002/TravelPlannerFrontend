// // import React, { useState } from 'react';
// // import { useLocation } from 'react-router-dom';
// // import 'tailwindcss/tailwind.css';

// // const TripForm = () => {
// //     const location = useLocation();
// //     const tripDetails = location.state?.tripDetails || {};
// //     const [days, setDays] = useState(Array(tripDetails.numberOfDays).fill({ time: '', place: '', hotel: '' }));

// //     const handleChange = (index, e) => {
// //         const { name, value } = e.target;
// //         const updatedDays = [...days];
// //         updatedDays[index][name] = value;
// //         setDays(updatedDays);
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         console.log('Trip Form Data:', days);
// //         // Here you can send the form data to the backend or handle it as needed
// //     };

// //     return (
// //         <div className="trip-form p-4">
// //             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md">
// //                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
// //                     Trip Form
// //                 </span>
// //             </h1>
// //             <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
// //                 {days.map((day, index) => (
// //                     <div key={index} className="mb-4">
// //                         <h2 className="text-xl font-semibold mb-2">Day {index + 1}</h2>
// //                         <div className="mb-4">
// //                             <label className="block text-gray-700">Time</label>
// //                             <input
// //                                 type="text"
// //                                 name="time"
// //                                 value={day.time}
// //                                 onChange={(e) => handleChange(index, e)}
// //                                 className="w-full p-2 border border-gray-300 rounded-md"
// //                                 required
// //                             />
// //                         </div>
// //                         <div className="mb-4">
// //                             <label className="block text-gray-700">Place</label>
// //                             <input
// //                                 type="text"
// //                                 name="place"
// //                                 value={day.place}
// //                                 onChange={(e) => handleChange(index, e)}
// //                                 className="w-full p-2 border border-gray-300 rounded-md"
// //                                 required
// //                             />
// //                         </div>
// //                         <div className="mb-4">
// //                             <label className="block text-gray-700">Hotel</label>
// //                             <input
// //                                 type="text"
// //                                 name="hotel"
// //                                 value={day.hotel}
// //                                 onChange={(e) => handleChange(index, e)}
// //                                 className="w-full p-2 border border-gray-300 rounded-md"
// //                                 required
// //                             />
// //                         </div>
// //                     </div>
// //                 ))}
// //                 <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
// //                     Save
// //                 </button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default TripForm;


// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';

// const TripForm = () => {
//     const location = useLocation();
//     const tripDetails = location.state?.tripDetails || {};
    
//     // Initialize state with an array of objects for each day, each containing a list of field sets
//     const [days, setDays] = useState(
//         Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//     );

//     const handleChange = (dayIndex, fieldIndex, e) => {
//         const { name, value } = e.target;
//         const updatedDays = [...days];
//         updatedDays[dayIndex][fieldIndex][name] = value;
//         setDays(updatedDays);
//     };

//     const handleAddFields = (dayIndex) => {
//         const updatedDays = [...days];
//         updatedDays[dayIndex].push({ time: '', place: '', hotel: '' });
//         setDays(updatedDays);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Trip Form Data:', days);
//         // Here you can send the form data to the backend or handle it as needed
//     };

//     return (
//         <div className="trip-form p-4">
//             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
//                     Trip Form
//                 </span>
//             </h1>
//             <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
//                 {days.map((dayFields, dayIndex) => (
//                     <div key={dayIndex} className="mb-4">
//                         <div className="flex items-center justify-between">
//                             <h2 className="text-xl font-semibold mb-2">Day {dayIndex + 1}</h2>
//                             <button
//                                 type="button"
//                                 onClick={() => handleAddFields(dayIndex)}
//                                 className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
//                             >
//                                 +
//                             </button>
//                         </div>
//                         {dayFields.map((fieldSet, fieldIndex) => (
//                             <div key={fieldIndex} className="mb-4">
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Time</label>
//                                     <input
//                                         type="text"
//                                         name="time"
//                                         value={fieldSet.time}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Place</label>
//                                     <input
//                                         type="text"
//                                         name="place"
//                                         value={fieldSet.place}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Hotel</label>
//                                     <input
//                                         type="text"
//                                         name="hotel"
//                                         value={fieldSet.hotel}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//                 <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
//                     Save
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default TripForm;

    // Submit form data to backend
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         // Send POST request to backend
    //         const response = await axios.post('http://localhost:8080/api/trip-forms', {
    //             // Adjust the payload according to what your backend expects
    //             numberOfDays: tripDetails.numberOfDays,
    //             days: days.flat(), // Flatten the days array if required by your backend
    //         });
    //         console.log('Trip Form Data Saved:', response.data);
    //         alert('Trip Form saved successfully!');
    //     } catch (error) {
    //         console.error('Error saving Trip Form Data:', error);
    //         alert('Failed to save Trip Form.');
    //     }
    // };





    

// import React, { useState } from 'react';
// import axios from 'axios'; // Import Axios
// import { useLocation } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';

// const TripForm = () => {
//     const location = useLocation();
//     const tripDetails = location.state?.tripDetails || {};

//     // Initialize state with an array of objects for each day, each containing a list of field sets
//     const [days, setDays] = useState(
//         Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//     );

//     // Handle input changes
//     const handleChange = (dayIndex, fieldIndex, e) => {
//         const { name, value } = e.target;
//         const updatedDays = [...days];
//         updatedDays[dayIndex][fieldIndex][name] = value;
//         setDays(updatedDays);
//     };

//     // Add a new set of fields for the day
//     const handleAddFields = (dayIndex) => {
//         const updatedDays = [...days];
//         updatedDays[dayIndex].push({ time: '', place: '', hotel: '' });
//         setDays(updatedDays);
//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Flatten the days array if required by your backend
//             const response = await axios.post('http://localhost:8080/api/trip-forms', {
//                 numberOfDays: tripDetails.numberOfDays,
//                 days: days.flat(), // Ensure this matches your backend model
//             });
//             console.log('Trip Form Data Saved:', response.data);
//             alert('Trip Form saved successfully!');
//         } catch (error) {
//             console.error('Error saving Trip Form Data:', error);
//             alert('Failed to save Trip Form.');
//         }
//     };
    
//     return (
//         <div className="trip-form p-4">
//             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
//                     Trip Form
//                 </span>
//             </h1>
//             <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
//                 {days.map((dayFields, dayIndex) => (
//                     <div key={dayIndex} className="mb-4">
//                         <div className="flex items-center justify-between">
//                             <h2 className="text-xl font-semibold mb-2">Day {dayIndex + 1}</h2>
//                             <button
//                                 type="button"
//                                 onClick={() => handleAddFields(dayIndex)}
//                                 className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
//                             >
//                                 +
//                             </button>
//                         </div>
//                         {dayFields.map((fieldSet, fieldIndex) => (
//                             <div key={fieldIndex} className="mb-4">
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Time</label>
//                                     <input
//                                         type="text"
//                                         name="time"
//                                         value={fieldSet.time}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Place</label>
//                                     <input
//                                         type="text"
//                                         name="place"
//                                         value={fieldSet.place}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Hotel</label>
//                                     <input
//                                         type="text"
//                                         name="hotel"
//                                         value={fieldSet.hotel}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//                 <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
//                     Save
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default TripForm;

// *****the below is the final code******************

// import React, { useState } from 'react';
// import axios from 'axios'; // Import Axios
// import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
// import 'tailwindcss/tailwind.css';

// const TripForm = () => {
//     const location = useLocation();
//     const navigate = useNavigate(); // Use useNavigate instead of useHistory
//     const tripDetails = location.state?.tripDetails || {};

//     const [days, setDays] = useState(
//         Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//     );
//     const [savedTripId, setSavedTripId] = useState(null);

//     const handleChange = (dayIndex, fieldIndex, e) => {
//         const { name, value } = e.target;
//         const updatedDays = [...days];
//         updatedDays[dayIndex][fieldIndex][name] = value;
//         setDays(updatedDays);
//     };

//     const handleAddFields = (dayIndex) => {
//         const updatedDays = [...days];
//         updatedDays[dayIndex].push({ time: '', place: '', hotel: '' });
//         setDays(updatedDays);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/api/trip-forms', {
//                 numberOfDays: tripDetails.numberOfDays,
//                 days: days.flat(), // Ensure this matches your backend model
//             });
//             setSavedTripId(response.data.id);
//             console.log('Trip Form Data Saved:', response.data);
//             alert('Trip Form saved successfully!');
//         } catch (error) {
//             console.error('Error saving Trip Form Data:', error);
//             alert('Failed to save Trip Form.');
//         }
//     };

//     const getLink = () => {
//         if (savedTripId) {
//             return `${window.location.origin}/trip-form/${savedTripId}`;
//         }
//         return '';
//     };

//     return (
//         <div className="trip-form p-4">
//             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
//                     Trip Form
//                 </span>
//             </h1>
//             <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
//                 {days.map((dayFields, dayIndex) => (
//                     <div key={dayIndex} className="mb-4">
//                         <div className="flex items-center justify-between">
//                             <h2 className="text-xl font-semibold mb-2">Day {dayIndex + 1}</h2>
//                             <button
//                                 type="button"
//                                 onClick={() => handleAddFields(dayIndex)}
//                                 className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
//                             >
//                                 +
//                             </button>
//                         </div>
//                         {dayFields.map((fieldSet, fieldIndex) => (
//                             <div key={fieldIndex} className="mb-4">
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Time</label>
//                                     <input
//                                         type="text"
//                                         name="time"
//                                         value={fieldSet.time}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Place</label>
//                                     <input
//                                         type="text"
//                                         name="place"
//                                         value={fieldSet.place}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Hotel</label>
//                                     <input
//                                         type="text"
//                                         name="hotel"
//                                         value={fieldSet.hotel}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//                 <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
//                     Save
//                 </button>
//             </form>
//             {savedTripId && (
//                 <div className="mt-4 text-center">
//                     <a
//                         href={getLink()}
//                         className="text-blue-500 hover:underline"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         Get Link
//                     </a>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TripForm;
// *************************************************
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';

// const TripForm = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const tripDetails = location.state?.tripDetails || {};

//     const [days, setDays] = useState(
//         Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//     );
//     const [savedTripId, setSavedTripId] = useState(null);

//     const handleChange = (dayIndex, fieldIndex, e) => {
//         const { name, value } = e.target;
//         const updatedDays = [...days];
//         updatedDays[dayIndex][fieldIndex][name] = value;
//         setDays(updatedDays);
//     };

//     const handleAddFields = (dayIndex) => {
//         const updatedDays = [...days];
//         updatedDays[dayIndex].push({ time: '', place: '', hotel: '' });
//         setDays(updatedDays);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/api/trip-forms', {
//                 numberOfDays: tripDetails.numberOfDays,
//                 days: days.flat(),
//             });
//             setSavedTripId(response.data.id);
//             console.log('Trip Form Data Saved:', response.data);
//             alert('Trip Form saved successfully!');
//         } catch (error) {
//             console.error('Error saving Trip Form Data:', error);
//             alert('Failed to save Trip Form.');
//         }
//     };

//     const handleViewPlan = () => {
//         if (savedTripId) {
//             navigate(`/view-your-trip-details/${savedTripId}`);
//         }
//     };

//     return (
//         <div className="trip-form p-4">
//             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
//                     Trip Form
//                 </span>
//             </h1>
//             <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
//                 {days.map((dayFields, dayIndex) => (
//                     <div key={dayIndex} className="mb-4">
//                         <div className="flex items-center justify-between">
//                             <h2 className="text-xl font-semibold mb-2">Day {dayIndex + 1}</h2>
//                             <button
//                                 type="button"
//                                 onClick={() => handleAddFields(dayIndex)}
//                                 className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
//                             >
//                                 +
//                             </button>
//                         </div>
//                         {dayFields.map((fieldSet, fieldIndex) => (
//                             <div key={fieldIndex} className="mb-4">
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Time</label>
//                                     <input
//                                         type="text"
//                                         name="time"
//                                         value={fieldSet.time}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Place</label>
//                                     <input
//                                         type="text"
//                                         name="place"
//                                         value={fieldSet.place}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Hotel</label>
//                                     <input
//                                         type="text"
//                                         name="hotel"
//                                         value={fieldSet.hotel}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//                 <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
//                     Save
//                 </button>
//             </form>
//             {savedTripId && (
//                 <div className="mt-4 text-center">
//                     <button
//                         onClick={handleViewPlan}
//                         className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//                     >
//                         View Your Plan
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TripForm;


// ###################################################################################################
// safe recap code//////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';


// const TripForm = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const tripDetails = location.state?.tripDetails || {};

//     const [days, setDays] = useState(
//         Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//     );
//     const [savedTripId, setSavedTripId] = useState(null);

//     const handleChange = (dayIndex, fieldIndex, e) => {
//         const { name, value } = e.target;
//         const updatedDays = [...days];
//         updatedDays[dayIndex][fieldIndex][name] = value;
//         setDays(updatedDays);
//     };

//     const handleAddFields = (dayIndex) => {
//         const updatedDays = [...days];
//         updatedDays[dayIndex].push({ time: '', place: '', hotel: '' });
//         setDays(updatedDays);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/api/trip-forms', {
//                 numberOfDays: tripDetails.numberOfDays,
//                 days: days.flat(), // Ensure this matches your backend model
//             });
//             setSavedTripId(response.data.id);
//             console.log('Trip Form Data Saved:', response.data);
//             alert('Trip Form saved successfully!');
//             navigate(`/trip-form/${response.data.id}`);
//         } catch (error) {
//             console.error('Error saving Trip Form Data:', error);
//             alert('Failed to save Trip Form.');
//         }
//     };

//     return (
//         <div className="trip-form p-4">
//             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
//                     Trip Form
//                 </span>
//             </h1>
//             <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
//                 {days.map((dayFields, dayIndex) => (
//                     <div key={dayIndex} className="mb-4">
//                         <div className="flex items-center justify-between">
//                             <h2 className="text-xl font-semibold mb-2">Day {dayIndex + 1}</h2>
//                             <button
//                                 type="button"
//                                 onClick={() => handleAddFields(dayIndex)}
//                                 className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 "
//                             >
//                                 +
//                             </button>
//                         </div>
//                         {dayFields.map((fieldSet, fieldIndex) => (
//                             <div key={fieldIndex} className="mb-4">
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Time</label>
//                                     <input
//                                         type="text"
//                                         name="time"
//                                         value={fieldSet.time}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Place</label>
//                                     <input
//                                         type="text"
//                                         name="place"
//                                         value={fieldSet.place}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700">Hotel</label>
//                                     <input
//                                         type="text"
//                                         name="hotel"
//                                         value={fieldSet.hotel}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-2 border border-gray-300 rounded-md"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//                 <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
//                     Save
//                 </button>
//             </form>
//             {savedTripId && (
//                 <div className="mt-4 text-center">
//                     <button
//                         onClick={() => navigate(`/trip-form/${savedTripId}`)}
//                         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                     >
//                         View Your Plan
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TripForm;


//  @@@@@@@@@@@@@@@@@@@@@@@@@ the down is the foinal @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// const TripForm = () => {
//     const location = useLocation();
//     const tripDetails = location.state?.tripDetails || {};

//     const [days, setDays] = useState(
//         Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//     );
//     const [savedTripId, setSavedTripId] = useState(null);

//     useEffect(() => {
//         if (tripDetails.numberOfDays !== undefined) {
//             setDays(
//                 Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//             );
//         }
//     }, [tripDetails]);

//     const handleChange = (dayIndex, fieldIndex, e) => {
//         const { name, value } = e.target;
//         const updatedDays = [...days];
//         updatedDays[dayIndex][fieldIndex][name] = value;
//         setDays(updatedDays);
//     };

//     const handleAddFields = (dayIndex) => {
//         const updatedDays = [...days];
//         updatedDays[dayIndex].push({ time: '', place: '', hotel: '' });
//         setDays(updatedDays);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/api/trip-forms', {
//                 numberOfDays: days.length,
//                 days: days.flat(),
//             });
//             setSavedTripId(response.data.id);
//             alert('Trip Form saved successfully!');
//         } catch (error) {
//             console.error('Error saving Trip Form Data:', error);
//             alert('Failed to save Trip Form.');
//         }
//     };

//     const downloadPDF = async () => {
//         const formElement = document.getElementById('trip-form-container');
//         if (!formElement) return;

//         const canvas = await html2canvas(formElement, {
//             useCORS: true,
//             scale: 2, // Increase scale to improve quality
//             scrollX: 0,
//             scrollY: -window.scrollY
//         });
//         const imgData = canvas.toDataURL('image/png');

//         // Create a new PDF document and add the image
//         const pdf = new jsPDF({
//             orientation: 'portrait',
//             unit: 'px',
//             format: [canvas.width, canvas.height] // Set the PDF size to match the canvas size
//         });
//         pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

//         // Save the PDF
//         pdf.save('trip-form.pdf');
//     };

//     return (
//         <div className="trip-form p-4" >
//             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md mb-6">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
//                     Trip Form
//                 </span>
//             </h1>
//             <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-lg"   id="trip-form-container">
//                 {days.map((dayFields, dayIndex) => (
//                     <div key={dayIndex} className="mb-6 border p-4 rounded-md shadow-sm">
//                         <div className="flex items-center justify-between mb-4">
//                             <h2 className="text-xl font-semibold">Day {dayIndex + 1}</h2>
//                             <button
//                                 type="button"
//                                 onClick={() => handleAddFields(dayIndex)}
//                                 className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
//                             >
//                                 +
//                             </button>
//                         </div>
//                         {dayFields.map((fieldSet, fieldIndex) => (
//                             <div key={fieldIndex} className="mb-4">
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Time</label> <br></br>
//                                     <input
//                                         type="text"
//                                         name="time"
//                                         value={fieldSet.time}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter time"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Place</label> <br></br>
//                                     <input
//                                         type="text"
//                                         name="place"
//                                         value={fieldSet.place}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter place"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Hotel</label> <br></br>
//                                     <input
//                                         type="text"
//                                         name="hotel"
//                                         value={fieldSet.hotel}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter hotel"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//                 <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
//                     Save
//                 </button>
//             </form>
//             {savedTripId && (
//                 <div className="mt-6 text-center">
//                     <button
//                         onClick={downloadPDF}
//                         className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600"
//                     >
//                         Download PDF
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TripForm;
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// const TripForm = () => {
//     const location = useLocation();
//     const tripDetails = location.state?.tripDetails || {};

//     const [days, setDays] = useState(
//         Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//     );
//     const [savedTripId, setSavedTripId] = useState(null);
//     const [showCard, setShowCard] = useState(false);
//     const cardRef = useRef(null);

//     useEffect(() => {
//         if (tripDetails.numberOfDays !== undefined) {
//             setDays(
//                 Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//             );
//         }
//     }, [tripDetails]);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (cardRef.current && !cardRef.current.contains(event.target)) {
//                 setShowCard(false);
//             }
//         };

//         if (showCard) {
//             document.addEventListener('mousedown', handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [showCard]);

//     const handleChange = (dayIndex, fieldIndex, e) => {
//         const { name, value } = e.target;
//         const updatedDays = [...days];
//         updatedDays[dayIndex][fieldIndex][name] = value;
//         setDays(updatedDays);
//     };

//     const handleAddFields = (dayIndex) => {
//         const updatedDays = [...days];
//         updatedDays[dayIndex].push({ time: '', place: '', hotel: '' });
//         setDays(updatedDays);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/api/trip-forms', {
//                 numberOfDays: days.length,
//                 days: days.flat(),
//             });
//             setSavedTripId(response.data.id);
//             alert('Trip Form saved successfully!');
//         } catch (error) {
//             console.error('Error saving Trip Form Data:', error);
//             alert('Failed to save Trip Form.');
//         }
//     };

//     const downloadPDF = async () => {
//         const formElement = document.getElementById('trip-form-container');
//         if (!formElement) return;

//         const canvas = await html2canvas(formElement, {
//             useCORS: true,
//             scale: 2, // Increase scale to improve quality
//             scrollX: 0,
//             scrollY: -window.scrollY
//         });
//         const imgData = canvas.toDataURL('image/png');

//         // Create a new PDF document and add the image
//         const pdf = new jsPDF({
//             orientation: 'portrait',
//             unit: 'px',
//             format: [canvas.width, canvas.height] // Set the PDF size to match the canvas size
//         });
//         pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

//         // Save the PDF
//         pdf.save('trip-form.pdf');
//     };

//     const handleView = () => {
//         setShowCard(true);
//     };

//     return (
//         <div className="trip-form p-4">
//             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md mb-6">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
//                     Trip Form
//                 </span>
//             </h1>
//             <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-lg" id="trip-form-container">
//                 {days.map((dayFields, dayIndex) => (
//                     <div key={dayIndex} className="mb-6 border p-4 rounded-md shadow-sm">
//                         <div className="flex items-center justify-between mb-4">
//                             <h2 className="text-xl font-semibold">Day {dayIndex + 1}</h2>
//                             <button
//                                 type="button"
//                                 onClick={() => handleAddFields(dayIndex)}
//                                 className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
//                             >
//                                 +
//                             </button>
//                         </div>
//                         {dayFields.map((fieldSet, fieldIndex) => (
//                             <div key={fieldIndex} className="mb-4">
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Time</label> <br />
//                                     <input
//                                         type="text"
//                                         name="time"
//                                         value={fieldSet.time}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter time"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Place</label> <br />
//                                     <input
//                                         type="text"
//                                         name="place"
//                                         value={fieldSet.place}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter place"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Hotel</label> <br />
//                                     <input
//                                         type="text"
//                                         name="hotel"
//                                         value={fieldSet.hotel}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter hotel"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//                 <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
//                     Save
//                 </button>
//             </form>
//             {savedTripId && (
//                 <div className="mt-6 text-center">
//                     <button
//                         onClick={downloadPDF}
//                         className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 mr-4"
//                     >
//                         Download PDF
//                     </button>
//                     <button
//                         onClick={handleView}
//                         className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
//                     >
//                         View
//                     </button>
//                 </div>
//             )}
//             {showCard && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
//                     <div ref={cardRef} className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//                         <h2 className="text-2xl font-semibold mb-4">Trip Details</h2>
//                         <div>
//                             {days.map((dayFields, dayIndex) => (
//                                 <div key={dayIndex} className="mb-4">
//                                     <h3 className="text-xl font-semibold">Day {dayIndex + 1}</h3>
//                                     {dayFields.map((fieldSet, fieldIndex) => (
//                                         <div key={fieldIndex} className="mb-2">
//                                             <p><strong>Time:</strong> {fieldSet.time}</p>
//                                             <p><strong>Place:</strong> {fieldSet.place}</p>
//                                             <p><strong>Hotel:</strong> {fieldSet.hotel}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TripForm;



// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';

// const TripForm = () => {
//     const location = useLocation();
//     const tripDetails = location.state?.tripDetails || {};

//     const [days, setDays] = useState(
//         Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//     );
//     const [savedTripId, setSavedTripId] = useState(null);
//     const [showCard, setShowCard] = useState(false);
//     const cardRef = useRef(null);

//     useEffect(() => {
//         if (tripDetails.numberOfDays !== undefined) {
//             setDays(
//                 Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//             );
//         }
//     }, [tripDetails]);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (cardRef.current && !cardRef.current.contains(event.target)) {
//                 setShowCard(false);
//             }
//         };

//         if (showCard) {
//             document.addEventListener('mousedown', handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [showCard]);

//     const handleChange = (dayIndex, fieldIndex, e) => {
//         const { name, value } = e.target;
//         const updatedDays = [...days];
//         updatedDays[dayIndex][fieldIndex][name] = value;
//         setDays(updatedDays);
//     };

//     const handleAddFields = (dayIndex) => {
//         const updatedDays = [...days];
//         updatedDays[dayIndex].push({ time: '', place: '', hotel: '' });
//         setDays(updatedDays);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/api/trip-forms', {
//                 numberOfDays: days.length,
//                 days: days.flat(),
//             });
//             setSavedTripId(response.data.id);
//             alert('Trip Form saved successfully!');
//         } catch (error) {
//             console.error('Error saving Trip Form Data:', error);
//             alert('Failed to save Trip Form.');
//         }
//     };

//     const downloadPDF = async () => {
//         if (!cardRef.current) return;

//         // Hide the download icon
//         const button = cardRef.current.querySelector('.download-icon');
//         if (button) button.style.display = 'none';

//         const canvas = await html2canvas(cardRef.current, {
//             useCORS: true,
//             scale: 2, // Increase scale to improve quality
//             scrollX: 0,
//             scrollY: -window.scrollY
//         });
//         const imgData = canvas.toDataURL('image/png');

//         // Create a new PDF document and add the image
//         const pdf = new jsPDF({
//             orientation: 'portrait',
//             unit: 'px',
//             format: [canvas.width, canvas.height] // Set the PDF size to match the canvas size
//         });
//         pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

//         // Save the PDF
//         pdf.save('trip-details.pdf');

//         // Show the download icon again
//         if (button) button.style.display = 'block';
//     };

//     const handleView = () => {
//         setShowCard(true);
//     };

//     return (
//         <div className="trip-form p-4">
//             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md mb-6">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
//                     Trip Form
//                 </span>
//             </h1>
//             <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-lg" id="trip-form-container">
//                 {days.map((dayFields, dayIndex) => (
//                     <div key={dayIndex} className="mb-6 border p-4 rounded-md shadow-sm">
//                         <div className="flex items-center justify-between mb-4">
//                             <h2 className="text-xl font-semibold">Day {dayIndex + 1}</h2>
//                             <button
//                                 type="button"
//                                 onClick={() => handleAddFields(dayIndex)}
//                                 className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
//                             >
//                                 +
//                             </button>
//                         </div>
//                         {dayFields.map((fieldSet, fieldIndex) => (
//                             <div key={fieldIndex} className="mb-4">
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Time</label> <br />
//                                     <input
//                                         type="text"
//                                         name="time"
//                                         value={fieldSet.time}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter time"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Place</label> <br />
//                                     <input
//                                         type="text"
//                                         name="place"
//                                         value={fieldSet.place}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter place"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Hotel</label> <br />
//                                     <input
//                                         type="text"
//                                         name="hotel"
//                                         value={fieldSet.hotel}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter hotel"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//                 <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
//                     Save
//                 </button>
//             </form>
//             {savedTripId && (
//                 <div className="mt-6 text-center">
//                     <button
//                         onClick={handleView}
//                         className="view-button bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
//                     >
//                         View
//                     </button>
//                 </div>
//             )}
//             {showCard && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
//                     <div ref={cardRef} className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//                         <h2 className="text-2xl font-semibold mb-4 flex items-center">
//                             Trip Details
//                             <button
//                                 onClick={downloadPDF}
//                                 className="download-icon absolute  right-9 text-gray-500  hover:text-gray-700"
//                             >
//                                 <FontAwesomeIcon icon={faDownload} />
//                             </button>
//                         </h2>
//                         <div>
//                             {days.map((dayFields, dayIndex) => (
//                                 <div key={dayIndex} className="mb-4">
//                                     <h3 className="text-xl font-semibold">Day {dayIndex + 1}</h3>
//                                     {dayFields.map((fieldSet, fieldIndex) => (
//                                         <div key={fieldIndex} className="mb-2">
//                                             <p><strong>Time:</strong> {fieldSet.time}</p>
//                                             <p><strong>Place:</strong> {fieldSet.place}</p>
//                                             <p><strong>Hotel:</strong> {fieldSet.hotel}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TripForm;

// ///////////#$%^#$%^///////////////////////////////
// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';

// const TripForm = () => {
//     const location = useLocation();
//     const tripDetails = location.state?.tripDetails || {};

//     const [days, setDays] = useState(
//         Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//     );
//     const [savedTripId, setSavedTripId] = useState(null);
//     const [showCard, setShowCard] = useState(false);
//     const cardRef = useRef(null);

//     useEffect(() => {
//         if (tripDetails.numberOfDays !== undefined) {
//             setDays(
//                 Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//             );
//         }
//     }, [tripDetails]);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (cardRef.current && !cardRef.current.contains(event.target)) {
//                 setShowCard(false);
//             }
//         };

//         if (showCard) {
//             document.addEventListener('mousedown', handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [showCard]);

//     const handleChange = (dayIndex, fieldIndex, e) => {
//         const { name, value } = e.target;
//         const updatedDays = [...days];
//         updatedDays[dayIndex][fieldIndex][name] = value;
//         setDays(updatedDays);
//     };

//     const handleAddFields = (dayIndex) => {
//         const updatedDays = [...days];
//         updatedDays[dayIndex].push({ time: '', place: '', hotel: '' });
//         setDays(updatedDays);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/api/trip-forms', {
//                 numberOfDays: days.length,
//                 days: days.flat(),
//             });
//             setSavedTripId(response.data.id);
//             alert('Trip Form saved successfully!');
//         } catch (error) {
//             console.error('Error saving Trip Form Data:', error);
//             alert('Failed to save Trip Form.');
//         }
//     };

//     const downloadPDF = async () => {
//         if (!cardRef.current) return;

//         // Hide the download icon
//         const button = cardRef.current.querySelector('.download-icon');
//         if (button) button.style.display = 'none';

//         const canvas = await html2canvas(cardRef.current, {
//             useCORS: true,
//             scale: 2, // Increase scale to improve quality
//             scrollX: 0,
//             scrollY: -window.scrollY
//         });
//         const imgData = canvas.toDataURL('image/png');

//         // Create a new PDF document and add the image
//         const pdf = new jsPDF({
//             orientation: 'portrait',
//             unit: 'px',
//             format: [canvas.width, canvas.height] // Set the PDF size to match the canvas size
//         });
//         pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

//         // Save the PDF
//         pdf.save('trip-details.pdf');

//         // Show the download icon again
//         if (button) button.style.display = 'block';
//     };

//     const handleView = () => {
//         setShowCard(true);
//     };

//     return (
//         <div className="trip-form p-4">
//             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md mb-6">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
//                     Trip Form
//                 </span>
//             </h1>
//             <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-lg" id="trip-form-container">
//                 {days.map((dayFields, dayIndex) => (
//                     <div key={dayIndex} className="mb-6 border p-4 rounded-md shadow-sm">
//                         <div className="grid grid-cols-4 items-center mb-4">
//                             <h2 className="text-xl font-semibold col-span-2">Day {dayIndex + 1}</h2>
//                             <button
//                                 type="button"
//                                 onClick={() => handleAddFields(dayIndex)}
//                                 className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 col-span-1"
//                             >
//                                 +
//                             </button>
//                         </div>
//                         {dayFields.map((fieldSet, fieldIndex) => (
//                             <div key={fieldIndex} className="mb-4">
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Time</label> <br />
//                                     <input
//                                         type="text"
//                                         name="time"
//                                         value={fieldSet.time}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter time"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Place</label> <br />
//                                     <input
//                                         type="text"
//                                         name="place"
//                                         value={fieldSet.place}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter place"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Hotel</label> <br />
//                                     <input
//                                         type="text"
//                                         name="hotel"
//                                         value={fieldSet.hotel}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter hotel"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//                 <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
//                     Save
//                 </button>
//             </form>
//             {savedTripId && (
//                 <div className="mt-6 flex justify-center">
//                     <button
//                         onClick={handleView}
//                         className="view-button bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//                     >
//                         View
//                     </button>
//                 </div>
//             )}
//             {showCard && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
//                     <div ref={cardRef} className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col">
//                         <div className="flex-1">
//                             <h2 className="text-2xl font-semibold mb-4">Trip Details</h2>
//                             <div>
//                                 {days.map((dayFields, dayIndex) => (
//                                     <div key={dayIndex} className="mb-4">
//                                         <h3 className="text-xl font-semibold">Day {dayIndex + 1}</h3>
//                                         {dayFields.map((fieldSet, fieldIndex) => (
//                                             <div key={fieldIndex} className="mb-2">
//                                                 <p><strong>Time:</strong> {fieldSet.time}</p>
//                                                 <p><strong>Place:</strong> {fieldSet.place}</p>
//                                                 <p><strong>Hotel:</strong> {fieldSet.hotel}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <button
//                             onClick={downloadPDF}
//                             className="download-icon bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mb-4 self-center"
//                         >
//                             <FontAwesomeIcon icon={faDownload} />
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TripForm;

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';

// const TripForm = () => {
//     const location = useLocation();
//     const { tripDetails, tripName } = location.state || {}; // Destructure tripName from state

//     const [days, setDays] = useState(
//         Array(tripDetails?.numberOfDays || 0).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//     );
//     const [savedTripId, setSavedTripId] = useState(null);
//     const [showCard, setShowCard] = useState(false);
//     const cardRef = useRef(null);

//     useEffect(() => {
//         if (tripDetails?.numberOfDays !== undefined) {
//             setDays(
//                 Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
//             );
//         }
//     }, [tripDetails]);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (cardRef.current && !cardRef.current.contains(event.target)) {
//                 setShowCard(false);
//             }
//         };

//         if (showCard) {
//             document.addEventListener('mousedown', handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [showCard]);

//     const handleChange = (dayIndex, fieldIndex, e) => {
//         const { name, value } = e.target;
//         const updatedDays = [...days];
//         updatedDays[dayIndex][fieldIndex][name] = value;
//         setDays(updatedDays);
//     };

//     const handleAddFields = (dayIndex) => {
//         const updatedDays = [...days];
//         updatedDays[dayIndex].push({ time: '', place: '', hotel: '' });
//         setDays(updatedDays);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/api/trip-forms', {
//                 numberOfDays: days.length,
//                 days: days.flat(),
//             });
//             setSavedTripId(response.data.id);
//             alert('Trip Form saved successfully!');
//         } catch (error) {
//             console.error('Error saving Trip Form Data:', error);
//             alert('Failed to save Trip Form.');
//         }
//     };

//     const downloadPDF = async () => {
//         if (!cardRef.current) return;

//         const button = cardRef.current.querySelector('.download-icon');
//         if (button) button.style.display = 'none';

//         const canvas = await html2canvas(cardRef.current, {
//             useCORS: true,
//             scale: 2,
//             scrollX: 0,
//             scrollY: -window.scrollY
//         });
//         const imgData = canvas.toDataURL('image/png');

//         const pdf = new jsPDF({
//             orientation: 'portrait',
//             unit: 'px',
//             format: [canvas.width, canvas.height]
//         });
//         pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

//         pdf.save('trip-details.pdf');

//         if (button) button.style.display = 'block';
//     };

//     const handleView = () => {
//         setShowCard(true);
//     };

//     return (
//         <div className="trip-form p-4">
//             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md mb-6">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
//                     Trip Form
//                 </span>
//             </h1>
//             <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-lg" id="trip-form-container">
//                 {days.map((dayFields, dayIndex) => (
//                     <div key={dayIndex} className="mb-6 border p-4 rounded-md shadow-sm">
//                         <div className="grid grid-cols-7 py-1 items-center mb-4">
//                             <h2 className="text-xl font-semibold col-span-2">Day {dayIndex + 1}</h2>
//                             <button
//                                 type="button"
//                                 onClick={() => handleAddFields(dayIndex)}
//                                 className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 col-span-1"
//                             >
//                                 +
//                             </button>
//                         </div>
//                         {dayFields.map((fieldSet, fieldIndex) => (
//                             <div key={fieldIndex} className="mb-4">
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Time</label> <br />
//                                     <input
//                                         type="text"
//                                         name="time"
//                                         value={fieldSet.time}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter time"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Place</label> <br />
//                                     <input
//                                         type="text"
//                                         name="place"
//                                         value={fieldSet.place}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter place"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-medium">Hotel</label> <br />
//                                     <input
//                                         type="text"
//                                         name="hotel"
//                                         value={fieldSet.hotel}
//                                         onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
//                                         className="w-full p-1 border border-gray-300 rounded-md"
//                                         placeholder="Enter hotel"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//                 <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
//                     Save
//                 </button>
//             </form>
//             {savedTripId && (
//                 <div className="mt-6 flex justify-center">
//                     <button
//                         onClick={handleView}
//                         className="view-button bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//                     >
//                         View
//                     </button>
//                 </div>
//             )}
//             {showCard && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
//                     <div ref={cardRef} className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col">
//                         <div className="flex-1">
//                             <h2 className="text-2xl font-semibold mb-4 text-center">
//                                 {tripName} 
//                             </h2>
//                             <div>
//                                 {days.map((dayFields, dayIndex) => (
//                                     <div key={dayIndex} className="mb-4">
//                                         <h3 className="text-xl font-semibold">Day {dayIndex + 1}</h3>
//                                         {dayFields.map((fieldSet, fieldIndex) => (
//                                             <div key={fieldIndex} className="mb-2">
//                                                 <p><strong>Time:</strong> {fieldSet.time}</p>
//                                                 <p><strong>Place:</strong> {fieldSet.place}</p>
//                                                 <p><strong>Hotel:</strong> {fieldSet.hotel}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <button
//                             onClick={downloadPDF}
//                             className="download-icon bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mb-4 self-center"
//                         >
//                             <FontAwesomeIcon icon={faDownload} />
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TripForm;


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const TripForm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { tripDetails, tripName } = location.state || {};

    const [days, setDays] = useState(
        Array(tripDetails?.numberOfDays || 0).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
    );
    const [savedTripId, setSavedTripId] = useState(null);
    const [viewableDayIndex, setViewableDayIndex] = useState(null);
    const [showCard, setShowCard] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        if (tripDetails?.numberOfDays !== undefined) {
            setDays(
                Array(tripDetails.numberOfDays).fill(null).map(() => [{ time: '', place: '', hotel: '' }])
            );
        }
    }, [tripDetails]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setShowCard(false);
            }
        };

        if (showCard) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCard]);

    const handleChange = (dayIndex, fieldIndex, e) => {
        const { name, value } = e.target;
        const updatedDays = [...days];
        updatedDays[dayIndex][fieldIndex][name] = value;
        setDays(updatedDays);
    };

    const handleAddFields = (dayIndex) => {
        const updatedDays = [...days];
        updatedDays[dayIndex].push({ time: '', place: '', hotel: '' });
        setDays(updatedDays);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/trip-forms', {
                numberOfDays: days.length,
                days: days.flat(),
            });
            setSavedTripId(response.data.id);
            alert('Trip Form saved successfully!');
        } catch (error) {
            console.error('Error saving Trip Form Data:', error);
            alert('Failed to save Trip Form.');
        }
    };

    const downloadPDF = async () => {
        if (!cardRef.current) return;

        const button = cardRef.current.querySelector('.download-icon');
        if (button) button.style.display = 'none';

        const canvas = await html2canvas(cardRef.current, {
            useCORS: true,
            scale: 2,
            scrollX: 0,
            scrollY: -window.scrollY
        });
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [canvas.width, canvas.height]
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

        pdf.save('trip-details.pdf');

        if (button) button.style.display = 'block';
    };

    const handleView = (dayIndex) => {
        setViewableDayIndex(dayIndex);
        setShowCard(true);
    };

    return (
        <div className="trip-form p-4">
            <div className="grid grid-cols-8 items-center mb-4">
                {/* Button Column */}
                <div className="col-span-0 flex justify-start">
                    <button
                        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md  hover:bg-blue-600"
                        onClick={() => navigate('/dashboard')}
                    >
                        <svg height="16" width="18" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                        </svg>
                        <span className="ml-2">Back</span>
                    </button>
                </div>
                {/* Heading Column */}
                <div className="col-span-6 flex justify-center">
                    <h1 className="text-center text-3xl font-bold bg-white p-2 rounded-md">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                            Trip Form
                        </span>
                    </h1>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-lg" id="trip-form-container">
                {days.map((dayFields, dayIndex) => (
                    <div key={dayIndex} className="mb-6 border p-4 rounded-md shadow-sm relative">
                        <div className="grid grid-cols-7 items-center mb-4">
                            <h2 className="text-xl font-semibold col-span-2">Day {dayIndex + 1}</h2>
                            <button
                                type="button"
                                onClick={() => handleAddFields(dayIndex)}
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 col-span-1"
                            >
                                +
                            </button>
                            {savedTripId && (
                                <button
                                    type="button"
                                    onClick={() => handleView(dayIndex)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 col-span-2 ml-4"
                                >
                                    View
                                </button>
                            )}
                        </div>
                        {dayFields.map((fieldSet, fieldIndex) => (
                            <div key={fieldIndex} className="mb-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium">Time</label>
                                    <input
                                        type="text"
                                        name="time"
                                        value={fieldSet.time}
                                        onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        placeholder="Enter time"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium">Place</label>
                                    <input
                                        type="text"
                                        name="place"
                                        value={fieldSet.place}
                                        onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        placeholder="Enter place"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium">Hotel</label>
                                    <input
                                        type="text"
                                        name="hotel"
                                        value={fieldSet.hotel}
                                        onChange={(e) => handleChange(dayIndex, fieldIndex, e)}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        placeholder="Enter hotel"
                                        required
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
                    Save
                </button>
            </form>
            {showCard && viewableDayIndex !== null && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div ref={cardRef} className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col">
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold mb-4 text-center">
                                {tripName} - Day {viewableDayIndex + 1}
                            </h2>
                            <div>
                                {days[viewableDayIndex].map((fieldSet, fieldIndex) => (
                                    <div key={fieldIndex} className="mb-2">
                                        <p><strong>Time:</strong> {fieldSet.time}</p>
                                        <p><strong>Place:</strong> {fieldSet.place}</p>
                                        <p><strong>Hotel:</strong> {fieldSet.hotel}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={downloadPDF}
                            className="download-icon bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mb-4 self-center"
                        >
                            <FontAwesomeIcon icon={faDownload} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TripForm;

