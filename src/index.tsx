import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import HouseDetails from "./pages/HouseDetails";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/search/:name" element={<SearchResults />} />
            <Route path="/house/:name" element={<HouseDetails />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
