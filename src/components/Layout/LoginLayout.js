import PropTypes from 'prop-types';
import { useContext } from 'react';
import AuthContext from '../Providers/Auth/AuthContext';
import FrameBar from '../Frame/FrameBar';
import SideBar from '../NavBar/SideBar';

function LoginLayout({children}) {
    const { isAuthorised } = useContext(AuthContext);
    return (
      <>
        <div className="flex flex-col h-screen">
          <FrameBar/>
          <div className="flex-1 flex overflow-hidden">
            { isAuthorised() ? <SideBar /> : "" }
              <div className='flex-1 flex page-gradient'>
                {children}
              </div>
              
          </div>
        </div>
      </>
    )
}

LoginLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default LoginLayout;