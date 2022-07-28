import { Fragment, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react'
import AuthContext from '../Providers/Auth/AuthContext';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function FrameProfile(props) {
    const { user, signOut } = useContext(AuthContext);
    
    return (
        <Menu as="div" className="relative my-1">
            <div className='mr-4'>
                <Menu.Button className="flex items-center">
                <h5 className='text-xs hidden lg:block'>{user.username}</h5>
                <img
                    className="h-7 w-7 ml-3 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className='py-1 border-b-2 border-gray-600/50'>
                    <Menu.Item>
                        {({ active }) => (
                        <a  href="#"
                            onClick={() => signOut()}
                            className={classNames(active ? 'bg-gray-600' : '', 'block px-4 py-2 text-sm text-white-100')}
                        >
                            Sign out
                        </a>
                        )}
                    </Menu.Item>
                   
                </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default FrameProfile;