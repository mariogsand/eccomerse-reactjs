import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import NewPassword from '@pages/NewPassword';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import SendEmail from '@pages/SendEmail';
import Login from '@pages/Login';
import CreateAccount from '@pages/CreateAccount';
import MyAccount from '@pages/MyAccount';
import CheckOut from '@pages/CheckOut';
import Orders from '@pages/Orders';
import PasswordRecovery from '@pages/PasswordRecovery';
import '@styles/global.css';
import {AppContext} from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

const App = () => {
    const initialState = useInitialState(); 
    return(
        <AppContext.Provider value={initialState}>
          <BrowserRouter>
              <Layout>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route exact path="/login" element={<Login />} />
                      <Route exact path="/password-recovery" element={<PasswordRecovery />} />
                      <Route exact path="send-email" element={<SendEmail />} />
                      <Route exact path="/new-password" element={<NewPassword />} />
                      <Route exact path="/my-account" element={<MyAccount />} />
                      <Route exact path="/create-account" element={<CreateAccount />} />
                      <Route exact path="/checkout" element={<CheckOut />} />
                      <Route exact path="/orders" element={<Orders />} />
                      <Route path="*" element={<NotFound />} />
                  </Routes>
              </Layout>
          </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App; 


