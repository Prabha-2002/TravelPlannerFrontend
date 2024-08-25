import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaCloud } from 'react-icons/fa';
import './App.css'

const locationIdMapping = {
    'trichy': 1,
    'ooty': 2
};

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-400">
                            Welcome to Trip Planner, your ultimate travel companion. Our platform is designed to help you plan your perfect trips with ease. 
                            Whether you are looking to explore new destinations, manage your travel itinerary, or find the best accommodations, Trip Planner 
                            has got you covered. With a user-friendly interface and powerful features, we aim to make your travel planning process as smooth 
                            and enjoyable as possible. Discover exciting travel options, get personalized recommendations, and keep track of all your travel 
                            details in one place. Embark on your journey with confidence and let Trip Planner be your guide to unforgettable travel experiences.
                        </p>
                    </div>

                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="/" className="hover:text-gray-400">Home</a></li>
                            <li className="mb-2"><a href="/about" className="hover:text-gray-400">About Us</a></li>
                            <li className="mb-2"><a href="/services" className="hover:text-gray-400">Services</a></li>
                            <li className="mb-2"><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul>
                            <li className="mb-2">📍 123 Travel Lane, Wanderlust City, TR</li>
                            <li className="mb-2">📞 (123) 456-7890</li>
                            <li className="mb-2">✉️ contact@tripplanner.com</li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="mt-8 flex justify-center">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        <FaPinterestP size={20} />
                    </a>
                </div>

                <div className="mt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Trip Planner. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const Userdashboard = () => {
    const [locations, setLocations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [highlight, setHighlight] = useState(false);
    const searchInputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/locations/names');
                setLocations(response.data);
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };

        fetchLocations();
    }, []);

    useEffect(() => {
        setFilteredLocations(
            locations.filter(location =>
                location.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, locations]);

    const handleLocationClick = (location) => {
        const locationId = locationIdMapping[location.toLowerCase()];
        if (locationId) {
            navigate(`/suggestor/${locationId}`);
        } else {
            console.error('Location ID not found');
        }
    };

    const handleClickHere = () => {
        if (searchInputRef.current) {
            searchInputRef.current.scrollIntoView({ behavior: 'smooth' });
            setHighlight(true);
            setShowMessage(true);
            setTimeout(() => {
                setHighlight(false);
                setShowMessage(false);
            }, 3000);
        }
    };

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="relative w-screen">
            <nav className="bg-white bg-opacity-75 p-4 flex justify-between items-center shadow-md z-50">
                <h1 className="text-4xl font-bold text-blue-600">Trip Planner</h1>
                <div className="flex items-center">
                    <span className="mr-2 text-gray-800">Search for a city:</span>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for a city"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`rounded-full border-2 p-2 pl-4 pr-8 focus:outline-none focus:border-blue-600 transition-all duration-300 ${
                                highlight ? 'border-blue-600 bg-blue-100' : 'border-gray-300'
                            }`}
                            ref={searchInputRef}
                        />
                        {searchTerm && filteredLocations.length > 0 && (
                            <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                {filteredLocations.map((location, index) => (
                                    <li
                                        key={index}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleLocationClick(location)}
                                    >
                                        {location}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {showMessage && (
                            <div className="absolute mt-12 w-full bg-blue-100 border border-blue-200 text-blue-700 rounded-md p-2 text-sm shadow-lg">
                                Please search here
                            </div>
                        )}
                    </div>
                    <button
                        onClick={handleLogout}
                        className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            <div className="pt-0">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://www.fraseryachts.com/uploads/wp-content/uploads/original/Screenshot_2017_05_11_15_59.01.png" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Travel-Images-For-Desktop.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://www.uniqueideas.site/wp-content/uploads/50-affordable-family-friendly-summer-trips.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>

                <div className="w-full bg-white">
                    <div className="w-full">
                        <div className="bg-white text-center transform transition-transform duration-300 hover:scale-105 mx-auto">
                            <div>
                                <h2 className="text-3xl w-full py-6 font-bold text-black">
                                    About Trip Planner
                                </h2>
                            </div>
                            <div className="bg-white p-6 mx-auto max-w-4xl">
                                <p className="text-gray-800">
                                    Our Trip Planner helps you find the best destinations for your travels. Whether you're looking for adventure or relaxation, our planner provides recommendations based on your preferences and past travel experiences. Plan your perfect trip with ease!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-3xl py-3 w-full font-bold mb-6 text-center text-gray-900">Customer Reviews</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-130 hover:shadow-xl">
                                <div className="flex items-center mb-2">
                                    <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
                                    <span className="ml-2 text-gray-600">5 out of 5</span>
                                </div>
                                <p className="text-gray-700">
                                    "Amazing experience! The trip planner was spot-on with its recommendations and made our vacation memorable."
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-130 hover:shadow-xl">
                                <div className="flex items-center mb-2">
                                    <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
                                    <span className="ml-2 text-gray-600">5 out of 5</span>
                                </div>
                                <p className="text-gray-700">
                                    "Fantastic service! The recommendations were perfect, and the planning process was smooth and enjoyable."
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-130 hover:shadow-xl">
                                <div className="flex items-center mb-2">
                                    <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
                                    <span className="ml-2 text-gray-600">5 out of 5</span>
                                </div>
                                <p className="text-gray-700">
                                    "Highly recommend! The trip planner helped us discover hidden gems and plan our itinerary effectively."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white-100 py-12">
                        <div className="max-w-4xl mx-auto flex items-center justify-center gap-1">
                            <p className="text-2xl py-3 px-4 font-semibold text-gray-900">
                                Looking for trip advice?
                            </p>
                            <button
                                onClick={handleClickHere}
                                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-4 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
                                id="textq"
                            >
                                <span className="relative">
                                    <span className="absolute inset-0 bg-blue-800 opacity-20 -z-10 transition-all duration-300"></span>
                                    <span className="relative">Click Here</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Userdashboard;
