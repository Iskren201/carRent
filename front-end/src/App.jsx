import { Navigation } from "./components";

import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";

import {
    CarsForRental,
    Contact,
    Hero,
    Services,
    Footer,
} from "./views";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Hero />} />
                    <Route path='/CarsForRental' element={<CarsForRental />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/CarsForRental ' element={<CarsForRental />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
