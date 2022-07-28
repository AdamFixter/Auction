import { HashRouter, Routes, Route } from 'react-router-dom';

import Page from "../../components/Layout/Page/Page";

import AuthProvider from '../../components/Providers/Auth/AuthProvider';
import AuctionProvider from '../../components/Providers/Auctions/AuctionProvider';

import HomePageBanner from '../../components/Layout/Page/Banners/HomePageBanner';
import AuctionsPageBanner from '../../components/Layout/Page/Banners/AuctionsPageBanner';
import AuctionDetails from '../../components/Auction/AuctionDetails';

import Login from "../login/Login";
import Auctions from "../auctions/Auctions";
import Home from '../home/Home';
import AuctionsDetailsBanner from '../../components/Layout/Page/Banners/AuctionsDetailsBanner';
import PageLayout from '../../components/Layout/PageLayout';
import LoginLayout from '../../components/Layout/LoginLayout';


function App() {
  return (
    <>
      <AuthProvider>
        <AuctionProvider>
          <HashRouter>
            <Routes>
              <Route path="/">
                <Route index element={
                  <Page title="Adam's Auctions"
                        layout={PageLayout} 
                        Banner={HomePageBanner}
                        component={<Home />}/>
                } />
                <Route path="/login" element={
                  <Page title="Login"
                        layout={LoginLayout}
                        component={<Login />}/>
                } />
                <Route path="/auctions" element={
                  <Page title="Auctions"
                        layout={PageLayout} 
                        Banner={AuctionsPageBanner}
                        component={<Auctions />}/>
                } />
                <Route path="/auctions/:id" element={
                  <Page layout={PageLayout}
                        Banner={AuctionsDetailsBanner}
                        component={<AuctionDetails />}/>
                }/>
              </Route>
            </Routes>
          </HashRouter>
        </AuctionProvider>
      </AuthProvider>
    </>
  );
}

export default App;