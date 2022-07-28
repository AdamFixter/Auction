import PropTypes from 'prop-types';
import { Disclosure } from '@headlessui/react'
import { MdMinimize, MdOutlineCrop32, MdClose } from "react-icons/md";
import FrameButton from './FrameButton';
import FrameProfile from './FrameProfile';
import FrameSearch from './FrameSearch';
import { useContext } from 'react';
import AuthContext from '../Providers/Auth/AuthContext';

function FrameBar() {
  const { isAuthorised } = useContext(AuthContext);
  return (
    <>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="flex">
            <div className="flex flex-1 items-center">
              {/* left */}
              <div className="sm:flex-1 my-1">
                <div className="flex items-center">
                  <img
                    className="w-5 mx-3"
                    src="./assets/favicons/favicon-32x32.png"
                    alt="Workflow"
                  />
                  <h6 className='text-xs'>Adam&apos;s Auction</h6>
                </div>
              </div>

              { isAuthorised() ? <FrameSearch /> : "" }

              {/* right */}
              <div className='flex-1 flex justify-end h-full'>
              { isAuthorised() ? <FrameProfile /> : "" }
                <div>
                  <FrameButton id="app-minimize" icon={MdMinimize}/>
                  <FrameButton id="app-maximize" icon={MdOutlineCrop32}/>
                  <FrameButton id="app-close" icon={MdClose} iconHover="group-hover:text-white-50" className="hover:bg-red-500" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              
            </div>
          </div> */}
        </>
      )}
    </Disclosure>
    </>
  )
}

FrameBar.propTypes = {
  authorised: PropTypes.bool
}

export default FrameBar;