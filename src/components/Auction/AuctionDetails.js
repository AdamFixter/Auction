import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuctionContext from "../Providers/Auctions/AuctionContext";

function AuctionDetails() {
    const { auctions, getAuction } = useContext(AuctionContext);
    const [ auction, setAuction ] = useState({});
    const { id } = useParams("id");


    useEffect(() => {
        let a = getAuction(id);
        setAuction(a);
    }, [auctions]);


    return (
        <>
        <div className='flex flex-grow flex-col border lg:flex-row lg:max-h-60 p-2 my-1 bg-gray-600'>
            <div className="flex h-52">
                <img className="object-cover w-full h-full" src={auction.image} alt="" />
            </div>

            <div className='flex-1 flex-col flex p-5 lg:flex-row'>
                <div className='flex flex-1 flex-col'>
                    <div>
                        <span className="bg-red-500 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">LIVE NOW</span>
                        <time dateTime="2022-02-22T09-30-00Z">17 - 22 Feb 2022 09:30 GMT</time>
                    </div>
                    <h5>{auction.title}</h5>
                    <p>{auction.description}</p>
                </div>
                <div className='flex justify-center items-start m-2'>
                    <Link to={`/auctions/${id}`} className='btn-primary m-0'>
                        Bid
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default AuctionDetails;