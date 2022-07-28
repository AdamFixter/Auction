import PropTypes from 'prop-types';

function AuctionThumbnail({title}) {
    return (
        <>
            <div className='flex flex-col rounded-xl bg-gray-600 p-3 shadow-lg mr-4 mt-4'>
                <div className='flex justify-center p-8'>
                    <div className="flex h-28 w-28">
                        <img className="object-cover w-full h-full" src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="test" />
                    </div>
                </div>
                
                <div className='flex-1 flex flex-col'>
                    <h6>Auction Name</h6>
                    <h6>Category</h6>
                    <p>Auction description</p>
                </div>
            </div>
        </>
    )
}

AuctionThumbnail.propTypes = {
    title: PropTypes.string
};

export default AuctionThumbnail;