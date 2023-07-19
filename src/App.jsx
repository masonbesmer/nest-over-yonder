import { useState, useEffect } from "react";
import Listing from "./components/Listing";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Filter from "./components/Filter";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:pattern" element={<SearchPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/listing/:id" element={<ListingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout/:id" element={<CheckoutPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <Filter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
