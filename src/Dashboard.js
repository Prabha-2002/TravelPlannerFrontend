// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         // Implement logout logic here, such as clearing tokens or user session
//         // Navigate to the login page
//         navigate('/login');
//     };

//     return (
//         <div className="min-h-screen flex flex-col">
//             {/* Navbar */}
//             <nav className="bg-gray-100 border-b border-gray-300 p-4">
//                 <div className="container mx-auto flex items-center justify-between">
//                     <h1 className="text-2xl font-bold text-blue-600">TRIP PLANNER</h1>
//                     <div className="flex space-x-2">
//                         <button className="text-blue-600 hover:text-blue-800 focus:outline-none px-3 py-2 rounded-md border border-blue-500 hover:bg-blue-100 w-56" onClick={() => navigate('/admin/users')}>
//                             Manage Locations </button>
//                     </div>

//                     <button
//                         className="text-blue-600 hover:text-blue-800 focus:outline-none "
//                         onClick={() => navigate('/admin/users')}
//                     >
//                         View Customers
//                     </button>
//                     <button
//                         className="text-blue-600   py7 hover:text-blue-800 focus:outline-none"
//                         onClick={handleLogout}
//                     >
//                         Logout
//                     </button>
//                 </div>

//             </nav >

//             {/* Main Content */}
//             < main className="flex-1 p-8" >
//                 <div className="container mx-auto max-w-4xl">
//                     <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
//                         <h2 className="text-3xl font-bold text-red-600 mb-4   text-center"  >TRIP PLANNER</h2>
//                         <p className="text-lg text-gray-700 mb-4 text-center">
//                             Welcome to Trip Planner, your ultimate travel companion. Our platform is designed to help you plan your perfect trips with ease.
//                             Whether you are looking to explore new destinations, manage your travel itinerary, or find the best accommodations, Trip Planner
//                             has got you covered. With a user-friendly interface and powerful features, we aim to make your travel planning process as smooth
//                             and enjoyable as possible. Discover exciting travel options, get personalized recommendations, and keep track of all your travel
//                             details in one place. Embark on your journey with confidence and let Trip Planner be your guide to unforgettable travel experiences.
//                         </p>
//                         <div className="flex justify-center space-x-4 mt-4">
//                             <button
//                                 className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transform transition-transform hover:scale-105"
//                                 onClick={() => navigate('/admin/users')}
//                             >
//                                 View User Details
//                             </button>
//                             <button
//                                 className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transform transition-transform hover:scale-105"
//                                 onClick={() => navigate('/admin/locations')}
//                             >
//                                 View Location Details
//                             </button>
//                         </div>
//                     </div>

//                     {/* Features Section */}
//                     <div className="bg-gray-100 p-6 rounded-lg">
//                         <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Features</h3>
//                         <ul className="list-disc list-inside text-gray-700 space-y-2">
//                             <li>Explore new destinations with detailed information.</li>
//                             <li>Manage and customize your travel itinerary.</li>
//                             <li>Receive personalized travel recommendations.</li>
//                             <li>Track and organize all your travel details in one place.</li>
//                         </ul>
//                     </div>
//                 </div>
//             </main >

//             {/* Footer */}
//             < footer className="bg-gray-200 border-t border-gray-300 p-4 mt-8" >
//                 <div className="container mx-auto text-center text-gray-600">
//                     <p>&copy; {new Date().getFullYear()} Trip Planner. All rights reserved.</p>
//                     <p className="mt-2">For support, please contact <a href="mailto:support@tripplanner.com" className="text-blue-600 hover:text-blue-800">support@tripplanner.com</a></p>
//                 </div>
//             </footer >
//         </div >
//     );
// };

// export default Dashboard;

///// ***********************************************************

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './App.css'
// const Dashboard = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         // Implement logout logic here, such as clearing tokens or user session
//         // Navigate to the login page
//         navigate('/login');
//     };

//     return (
//         <div className="min-h-screen flex flex-col">
//             {/* New Navbar */}
//             <nav className="bg-gray-200 border-b border-gray-300 p-4   fixed top-0 left-0 right-0 z-10">
//                 <div className="container mx-auto flex items-center justify-between">
//                     <h1 className="text-2xl font-bold text-gray-800 ml-5">TRIP PLANNER</h1>
//                     <div className="flex space-x-4">
//                         <button
//                             className="bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none w-36"
//                             onClick={() => navigate('/admin/users')}
//                         >
//                             Manage Locations
//                         </button>
//                         <button
//                             className="bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none w-36"
//                             onClick={() => navigate('/admin/users')}
//                         >
//                             View Customers
//                         </button>
//                         <button
//                             className="bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none w-36"
//                             onClick={handleLogout}
//                         >
//                             Logout
//                         </button>
//                     </div>
//                 </div>
//             </nav>

//             {/* Main Content */}
//             <main className="flex-1 p-21">
//                 <div className="container mx-auto max-w-4xl">
//                     <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
//                         <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">TRIP PLANNER</h2>
//                         <p className="text-lg text-gray-700 mb-4 text-center">
//                             Welcome to Trip Planner, your ultimate travel companion. Our platform is designed to help you plan your perfect trips with ease.
//                             Whether you are looking to explore new destinations, manage your travel itinerary, or find the best accommodations, Trip Planner
//                             has got you covered. With a user-friendly interface and powerful features, we aim to make your travel planning process as smooth
//                             and enjoyable as possible. Discover exciting travel options, get personalized recommendations, and keep track of all your travel
//                             details in one place. Embark on your journey with confidence and let Trip Planner be your guide to unforgettable travel experiences.
//                         </p>
//                         <div className="flex justify-center space-x-4 mt-4">
//                             <button
//                                 className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transform transition-transform hover:scale-105"
//                                 onClick={() => navigate('/admin/users')}
//                             >
//                                 View User Details
//                             </button>
//                             <button
//                                 className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transform transition-transform hover:scale-105"
//                                 onClick={() => navigate('/admin/locations')}
//                             >
//                                 View Location Details
//                             </button>
//                         </div>
//                     </div>

//                     {/* Features Section */}
//                     <div className="bg-gray-100 p-6 rounded-lg">
//                         <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Features</h3>
//                         <ul className="list-disc list-inside text-gray-700 space-y-2">
//                             <li>Explore new destinations with detailed information.</li>
//                             <li>Manage and customize your travel itinerary.</li>
//                             <li>Receive personalized travel recommendations.</li>
//                             <li>Track and organize all your travel details in one place.</li>
//                         </ul>
//                     </div>
//                 </div>
//             </main>

//             {/* Footer */}
//             <footer className="bg-gray-200 border-t border-gray-300 p-4 mt-8fixed  left-0 right-0">
//                 <div className="container mx-auto text-center text-gray-600">
//                     <p>&copy; {new Date().getFullYear()} Trip Planner. All rights reserved.</p>
//                     <p className="mt-2">For support, please contact <a href="mailto:support@tripplanner.com" className="text-gray-800 hover:text-gray-600">support@tripplanner.com</a></p>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Dashboard;

//////////////////////////////////////////////////////////
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement logout logic here
        navigate('/');
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* New Navbar */}
            <nav className="bg-gray-200 border-b border-gray-300 p-4 fixed top-0 left-0 right-0 z-10">
                <div className="container mx-auto flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800 ml-5">TRIP PLANNER</h1>
                    <div className="flex space-x-4">
                        <button
                            className="bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none w-36"
                            onClick={() => navigate('/admin/locations')}
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
            <br/><br/> <br/> <br/>

            {/* Main Content */}
            <main className="flex-1 p-8 pt-21 pb-9"> {/* Add pt-16 for spacing below the fixed navbar and pb-24 for space above the fixed footer */}
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">TRIP PLANNER</h2>
                        <p className="text-lg text-gray-700 mb-4 text-center">
                            Welcome to Trip Planner, your ultimate travel companion. Our platform is designed to help you plan your perfect trips with ease.
                            Whether you are looking to explore new destinations, manage your travel itinerary, or find the best accommodations, Trip Planner
                            has got you covered. With a user-friendly interface and powerful features, we aim to make your travel planning process as smooth
                            and enjoyable as possible. Discover exciting travel options, get personalized recommendations, and keep track of all your travel
                            details in one place. Embark on your journey with confidence and let Trip Planner be your guide to unforgettable travel experiences.
                        </p>
                        {/* <div className="flex justify-center space-x-4 mt-4">
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transform transition-transform hover:scale-105"
                                onClick={() => navigate('/admin/users')}
                            >
                                View User Details
                            </button>
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transform transition-transform hover:scale-105"
                                onClick={() => navigate('/admin/locations')}
                            >
                                View Location Details
                            </button>
                        </div> */}
                    </div>

                    {/* Features Section */}
                    {/* <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Features</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Explore new destinations with detailed information.</li>
                            <li>Manage and customize your travel itinerary.</li>
                            <li>Receive personalized travel recommendations.</li>
                            <li>Track and organize all your travel details in one place.</li>
                        </ul>
                    </div> */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Features</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-4">
        <li className="pl-2">Explore new destinations with detailed information.</li>
        <li className="pl-2">Manage and customize your travel itinerary.</li>
        <li className="pl-2">Receive personalized travel recommendations.</li>
        <li className="pl-2">Track and organize all your travel details in one place.</li>
    </ul>
</div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-200 border-t border-gray-300 p-4 fixed bottom-0 left-0 right-0">
                <div className="container mx-auto text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Trip Planner. All rights reserved.</p>
                    <p className="mt-2">For support, please contact <a href="mailto:support@tripplanner.com" className="text-gray-800 hover:text-gray-600">support@tripplanner.com</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;
