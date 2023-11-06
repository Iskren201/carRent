import { Navigation } from "./components";

import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";

import {
    CarsForRental,
    Contact,
    Hero,
    Services,
    Footer,
} from "./views";
import BookingCards from "./components/BookingCards";
import { About } from "./views/About";
import Login from "./components/Login";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/Login' element={<Login />} />
                    <Route path='/' element={<Hero />} />
                    <Route path='/CarsForRental' element={<CarsForRental />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/CarsForRental ' element={<CarsForRental />} />
                    <Route path='/Services' element={<Services />} />
                    <Route path='/Booking' element={<BookingCards />} />
                    <Route path='/About' element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
