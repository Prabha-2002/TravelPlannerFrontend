import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DayFormCard from './DayFormCard';

const ViewYourTripDetails = () => {
    const { tripId } = useParams();
    const [tripData, setTripData] = useState(null);
    const [selectedDayForm, setSelectedDayForm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTripData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/trip-forms/${tripId}`);
                setTripData(response.data);
                                const dayFormPromises = response.data.days.map(day => 
                    axios.get(`http://localhost:8080/api/day-forms/${day.id}`)
                );
                const dayFormResponses = await Promise.all(dayFormPromises);
                setTripData(prevData => ({
                    ...prevData,
                    days: dayFormResponses.map(res => res.data)
                }));
                
                setLoading(false);
            } catch (error) {
                console.error('Error fetching trip data:', error);
                setError('Failed to fetch trip data.');
                setLoading(false);
            }
        };

        fetchTripData();
    }, [tripId]);

    const handleViewAsCard = (data) => {
        setSelectedDayForm(data);
    };

    const handleCloseCard = () => {
        setSelectedDayForm(null);
    };

    const handleDownload = (data) => {
        console.log('Downloading:', data);
        // Implement file download logic
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `day-form-${data.id}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="trip-details p-4">
            <h1 className="text-center text-4xl font-bold mb-4">Trip Details</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Time</th>
                        <th className="py-2 px-4 border-b">Place</th>
                        <th className="py-2 px-4 border-b">Hotel</th>
                        <th className="py-2 px-4 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tripData?.days?.map((item, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b">{item.time}</td>
                            <td className="py-2 px-4 border-b">{item.place}</td>
                            <td className="py-2 px-4 border-b">{item.hotel}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => handleViewAsCard(item)}
                                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mr-2"
                                >
                                    View as Card
                                </button>
                                <button
                                    onClick={() => handleDownload(item)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                                >
                                    Download
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedDayForm && (
                <DayFormCard data={selectedDayForm} onClose={handleCloseCard} />
            )}
        </div>
    );
};

export default ViewYourTripDetails;
