import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../Hooks/useLogout';

const LogoutButton = () => {
  const {loading, logout}=useLogout();
  return (
    <div className='mt-auto text-gray-200'>
      <BiLogOut className='w-6 h-6 text-white cursor-pointer'
      onClick={logout}
      />
    </div>
  )
}

export default LogoutButton
