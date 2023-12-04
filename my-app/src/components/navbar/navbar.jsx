import React from 'react'
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
        <nav className='fixed mr-1 justify-between flex gap left-0 top-0 right-0 bottom-auto ml-64 pt-8 pb-8 navbar'>
            <div>
                <h1 className='text-lg text-2xl'>Dashboard</h1>
            </div>
            <div>
                <Dropdown className='bg-neutral-700 enabled:hover:bg-neutral-800 dark:bg-neutral-800 dark:enabled:hover:bg-neutral-800 dark:focus:bg-neutral-800 dropdown-custom' label={<CustomLabel label="Dropdown" />} dismissOnClick={true}>
                    <Dropdown.Item className='text-base focus:bg-neutral-700 text-neutral-400 hover:bg-gray-600  flex gap-2'><CgProfile /><Link to="/profile" >Profile</Link></Dropdown.Item>
                    <Dropdown.Item className='text-base focus:bg-neutral-700 flex gap-2 hover:bg-gray-600 text-neutral-400'><IoIosSettings />Settings</Dropdown.Item>
                    <Dropdown.Item className='text-base focus:bg-neutral-700 text-neutral-400 hover:bg-gray-600 flex gap-2'><CiLogout />Sign out</Dropdown.Item>
                </Dropdown>
            </div>

        </nav>
    )
}

export default Navbar