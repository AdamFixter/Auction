import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AuctionCard(props) {
    const {
        ID, title, description, image, imageAlt
    } = props.data;
    return (
        <>
        <div className='flex flex-grow flex-col border lg:flex-row lg:max-h-60 p-2 my-1 bg-gray-600'>
            <div className="flex h-52">
                <img className="object-cover w-full h-full" src={image} alt={imageAlt} />
            </div>

            <div className='flex-1 flex-col flex p-5 lg:flex-row'>
                <div className='flex flex-1 flex-col'>
                    <div>
                        <span className="bg-red-500 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">LIVE NOW</span>
                        <time dateTime="2022-02-22T09-30-00Z">17 - 22 Feb 2022 09:30 GMT</time>
                    </div>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className='flex justify-center items-start m-2'>
                    <Link to={`/auctions/${ID}`} className='btn-primary m-0'>
                        View Auction
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

AuctionCard.propTypes = {
    data: PropTypes.object
};

export default AuctionCard;
