
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
    return (
        <div>
            <h1>Trip Form Details</h1>
            <pre>{JSON.stringify(tripFormData, null, 2)}</pre>
        </div>
    );
};

export default DayFormDetails;
