import React from 'react';

const DayFormCard = ({ data, onClose }) => {
    if (!data) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-semibold mb-4">Day Details</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Time</h3>
                    <p>{data.time}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Place</h3>
                    <p><strong>{data.place?.name}</strong></p>
                    <p>{data.place?.address}</p>
                    <p>{data.place?.description}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Hotel</h3>
                    <p><strong>{data.hotel?.name}</strong></p>
                    <p>{data.hotel?.address}</p>
                    <p>{data.hotel?.description}</p>
                    <p>Contact: {data.hotel?.contact}</p>
                </div>
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default DayFormCard;
