import { Link } from "react-router-dom";
import AuctionThumbnail from "../../components/Auction/AuctionThumbnail";

function Home() {
    return (
        <>
            <div className='flex justify-between'>
                <h5>Upcoming Auctions</h5>
                <Link to="/auctions" className="hover: px-2 bg-gray-700">See all</Link>
            </div>
            <div className='flex flex-wrap'>
                <AuctionThumbnail />
                <AuctionThumbnail />
                <AuctionThumbnail />
                <AuctionThumbnail />
                <AuctionThumbnail />
                <AuctionThumbnail />
                <AuctionThumbnail />
                <AuctionThumbnail />
            </div>
        </>
    )
}

export default Home;