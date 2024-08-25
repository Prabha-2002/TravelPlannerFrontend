import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // or './tailwind.css'
import './App.css'
import Dashboard from './Dashboard';
import ViewUserDetails from './ViewUserDetails';
import ViewLocationDetails from './ViewLocationDetails';
import AddLocation from './AddLocation';
import LocationDetails from './LocationDetails';
import AddHotel from './AddHotel';
import AddPlace from './AddPlace';
import EditPlace from './EditPlace';  
import './Suggestor.css'
import EditHotel from './EditHotel';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Userdashboard from './Userdashboard';
import Details from './Details';
import Suggestor from './Suggestor';
import Userdetails from './Userdetails';
import TripForm from './TripForm';
import DayFormDetails from './DayFormDetails';
import ViewYourTripDetails from './ViewYourTripDetails';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>

      
      <Route path="/admin/users" element={<Userdetails />} />
            <Route path="/register" element={<RegisterForm />} /> */}
             <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
<Route path="/userdashboard" element={<Userdashboard />} />

<Route path="/details/:id" element={<Details />} />
                <Route path="/tripform" element={<TripForm />} />
<Route path="/suggestor/:id" element={<Suggestor />} />
            <Route path="/admin/users" element={<ViewUserDetails />} />
            <Route path="/admin/locations" element={<ViewLocationDetails />} />
            <Route path="/admin/add-location" element={<AddLocation />} />
            <Route path="/admin/locations/:id" element={<LocationDetails />} />
            <Route path="/admin/locations/:id/add-place" element={<AddPlace />} />
            <Route path="/admin/locations/:id/add-hotel" element={<AddHotel />} />
            <Route path="/admin/places/:id/edit/:locationId" element={<EditPlace />} />
                 <Route path="/trip-form/:tripId/day/:dayFormId" element={<DayFormDetails />} />

 <Route path="/admin/hotels/:id/:locationId" element={<EditHotel />} />


                        <Route path="/admin/places/:id/edit" element={<EditPlace />} />  

            <Route path="/register" element={<RegisterForm />} />
            <Route path="/trip-form/:id" element={<DayFormDetails />} />
            <Route path="/view-your-trip-details/:tripId" element={<ViewYourTripDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
