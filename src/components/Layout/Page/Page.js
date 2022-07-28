import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import ConditionalWrapper from '../../ConditionalWrapper';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Providers/Auth/AuthContext';

function Page({title, component, Banner, layout}) {
    const { isAuthorised, user } = useContext(AuthContext);
    const navigate = useNavigate();
    Banner = Banner ? <Banner title={title} description="Test Description"/> : "";

    useEffect(() => {
        if (!isAuthorised()) {
            navigate("/login");
        }
    }, [user])


    return (
        <>
            <ConditionalWrapper condition={layout} wrapper={layout}>
                <div className='w-full overflow-auto'>
                    <div className='flex flex-1 flex-col h-full'>
                        {Banner}
                        <div className='flex-1 flex flex-col mx-10'>
                            {component}
                        </div>
                    </div>
                </div>
            </ConditionalWrapper>
        </>

    )
}

Page.propTypes = {
    title: PropTypes.string,
    component: PropTypes.element,
    Banner: PropTypes.elementType,
    layout: PropTypes.elementType
};

export default Page;

