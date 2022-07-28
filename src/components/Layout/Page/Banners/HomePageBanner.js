import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import UpcomingAuctions from '../../../Auction/UpcomingAuctions';
import PageBanner from "./PageBanner";

function HomePageBanner({title, description}) {
    return (
        <>
            <PageBanner title={title} description={description}>
                <div className='flex'>
                    <Link to="/auctions" className='btn-primary'>View Auctions</Link>
                </div>
            </PageBanner>
        </>
    )
}

HomePageBanner.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    component: PropTypes.element
};
export default HomePageBanner;