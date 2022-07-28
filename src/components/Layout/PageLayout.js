import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Providers/Auth/AuthContext';
import FrameBar from '../Frame/FrameBar';
import SideBar from '../NavBar/SideBar';

function PageLayout({children}) {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.authorised) {
      navigate("/login");
    }
  }, [user]);
    return (
      <>
        <div className="flex flex-col h-screen">
          <FrameBar />
          <div className="flex-1 flex overflow-hidden">
            <SideBar />
            <div className='flex-1 flex bg-gray-700'>
              {children}
            </div>
          </div>
        </div>
      </>
    )
}

PageLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default PageLayout;