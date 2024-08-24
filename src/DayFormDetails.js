// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';

// const DayFormDetails = () => {
//     const { id } = useParams();
//     const [tripForm, setTripForm] = useState(null);

//     useEffect(() => {
//         const fetchTripForm = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/trip-forms/${id}`);
//                 setTripForm(response.data);
//             } catch (error) {
//                 console.error('Error fetching Trip Form Data:', error);
//             }
//         };

//         fetchTripForm();
//     }, [id]);

//     if (!tripForm) return <div>Loading...</div>;

//     return (
//         <div className="day-form-details p-4">
//             <h1 className="text-center text-4xl font-bold bg-white p-2 rounded-md">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
//                     Trip Form Details
//                 </span>
//             </h1>
//             <div className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
//                 <h2 className="text-2xl font-semibold mb-4">Trip Details</h2>
//                 <p className="mb-4"><strong>Number of Days:</strong> {tripForm.numberOfDays}</p>
//                 {tripForm.days.map((day, index) => (
//                     <div key={index} className="mb-4">
//                         <h3 className="text-xl font-semibold mb-2">Day {index + 1}</h3>
//                         {day.map((fieldSet, fieldIndex) => (
//                             <div key={fieldIndex} className="mb-4">
//                                 <p><strong>Time:</strong> {fieldSet.time}</p>
//                                 <p><strong>Place:</strong> {fieldSet.place}</p>
//                                 <p><strong>Hotel:</strong> {fieldSet.hotel}</p>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default DayFormDetails;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DayFormDetails = () => {
    const { id } = useParams(); // Extract ID from the route parameters
    const [tripFormData, setTripFormData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTripForm = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/trip-forms/${id}`);
                setTripFormData(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching Trip Form Data:', err);
                setError('Failed to fetch Trip Form data.');
                setLoading(false);
            }
        };

        fetchTripForm();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    // Render your trip form details here
    return (
        <div>
            <h1>Trip Form Details</h1>
            {/* Example rendering */}
            <pre>{JSON.stringify(tripFormData, null, 2)}</pre>
        </div>
    );
};

export default DayFormDetails;
