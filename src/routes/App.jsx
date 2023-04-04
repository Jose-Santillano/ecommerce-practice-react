import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//CSS.
import '../styles/components/App.css';

//Components.
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

//Context
import AppContext from '../context/AppContext';

//Custom Hooks
import useInitialState from '../hooks/useInitialState';

const App = () => {

    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route exact path="" element={<Home />} />
                        <Route exact path="/checkout" element={<Checkout />} />
                        <Route exact path="/checkout/information" element={<Information />} />
                        <Route exact path="/checkout/payment" element={<Payment />} />
                        <Route exact path="/checkout/success" element={<Success />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>               
                </Routes> 
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App