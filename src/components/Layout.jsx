import React from 'react';
import { Outlet } from 'react-router-dom';

//Components.
import Header from './Header';
import Footer from './Footer';

//CSS.
import '../styles/components/Layout.css';

const Layout = () => {
    return (
        <div className="Main">
            <Header />
                <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;