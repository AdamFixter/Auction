import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import AuctionContext from './AuctionContext';

function AuctionProvider({ children }) {
    const [auctions, setAuctions ] = useState([]);

    window.app.on(window.app.channels.AUCTION_GET_ALL, auctions => setAuctions(auctions));


    useEffect(() => {
        window.app.auctions.getAll();
    }, []);

    useEffect(() => {
        console.log(auctions);
    }, [auctions]);

    const updateAuction = (auction) => {
        let foundIndex = auctions.findIndex(a => a.ID === auction.ID);
        auctions[foundIndex] = auction;
    }
    const getAuction = (id) => {
        return auctions.find(a => a.ID == id);
    }

    const value = {
        auctions,
        setAuctions,

        updateAuction,
        getAuction
    }


    return (
        <AuctionContext.Provider value={value}>
            {children}
        </AuctionContext.Provider>
    )
}

AuctionProvider.propTypes = {
    children: PropTypes.node
}

export default AuctionProvider;
