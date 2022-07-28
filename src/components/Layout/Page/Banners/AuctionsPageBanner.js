import PropTypes from 'prop-types';
import PageBanner from "./PageBanner";

function AuctionsPageBanner({title, description}) {
    return (
        <PageBanner title={title} description={description} />
    )
}

AuctionsPageBanner.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    component: PropTypes.element
};
export default AuctionsPageBanner;