import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuctionContext from '../../../Providers/Auctions/AuctionContext';
// import { useParams } from 'react-router-dom';
import PageBanner from "./PageBanner";

function AuctionsDetailsBanner({title, description}) {
    const { auctions, getAuction } = useContext(AuctionContext);
    const [ auction, setAuction ] = useState({});
    const { id } = useParams("id");


    useEffect(() => {
        let a = getAuction(id);
        setAuction(a);
    }, [auctions]);

    return (
        <PageBanner title={auction.title} description={auction.description} />
    )
}

AuctionsDetailsBanner.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    component: PropTypes.element
};
export default AuctionsDetailsBanner;