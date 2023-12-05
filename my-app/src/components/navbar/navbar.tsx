
import './navbar.css'
import { CgProfile } from "react-icons/cg";
import { Dropdown } from 'flowbite-react';
import { FaHouseUser } from "react-icons/fa"
import { IoIosSettings } from "react-icons/io";
import {CiLogout} from 'react-icons/ci'
import {Link} from "react-router-dom"


const CustomLabel = () => {
    return (
      <div className="text-gray-300 transition:1s flex items-center big-icon">
        <FaHouseUser />
      </div>
    );
  };

const Navbar = () => {

    return (
        <nav className=' justify-between flex navbar'>
                <Dropdown className='bg-neutral-700 enabled:hover:bg-neutral-800 dark:bg-neutral-800 dark:enabled:hover:bg-neutral-800 dark:focus:bg-neutral-800 dropdown-custom' label={<CustomLabel label="Dropdown" />} dismissOnClick={true}>
                    <Dropdown.Item className='text-sm focus:bg-neutral-700 text-neutral-400 hover:bg-gray-600  flex gap-1'><CgProfile /><Link to="/profile" >Profile</Link></Dropdown.Item>
                    <Dropdown.Item className='text-sm focus:bg-neutral-700 flex gap-1 hover:bg-gray-600 text-neutral-400'><IoIosSettings />Settings</Dropdown.Item>
                    <Dropdown.Item className='text-sm focus:bg-neutral-700 text-neutral-400 hover:bg-gray-600 flex gap-1'><CiLogout />Sign out</Dropdown.Item>
                </Dropdown>
        </nav>
    )
}

export default Navbar