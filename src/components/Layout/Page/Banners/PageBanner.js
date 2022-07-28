import PropTypes from 'prop-types';

function PageBanner({title, description, component, children}) {

    return (
        <>
            <div className='flex-1 flex flex-col justify-center page-gradient px-10'>
                <div className='flex flex-1 flex-col justify-center py-24'>
                    <h2 className='font-medium'>{title}</h2>
                    <h5>{description}</h5>
                    {children}
                </div>
                {component ?
                    (
                        <div className='flex flex-col '>
                            {component}
                        </div>
                    ) : ""}
            </div>
        </>
        
    )
}

PageBanner.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    component: PropTypes.element,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default PageBanner;