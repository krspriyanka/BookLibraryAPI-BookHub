import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to the BookHub Library, Type in the name of any book in the search bar to find a summary and see whether you'd like the read.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header