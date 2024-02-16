import {useState} from 'react'
import {Link} from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import useSignup from '../../Hooks/useSignup'

const SignUp = () => {
    const[inputs,setInputs]=useState({
       fullName:'',
       username:'',
       password:'',
       confirmPassword:'',
       gender:''
    })
    const{loading,signup}=useSignup();   //custom hook

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(inputs);
        await signup(inputs);

    }
    const handleCheckBoxChange=(gender)=>{
        setInputs({...inputs,gender});
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Sign Up
        <span className='text-blue-500'> ChatApp</span>
       </h1>


       <form onSubmit={handleSubmit}>
        <div>
       <label className='label p-2'> 
                <span className='text-base label-text text-gray-300'>
                 Full Name
                </span>
            </label>
            <input type='text' placeholder='Enter fullname' className='w-full input input-bordered h-10'
              value={inputs.fullName}
              onChange={(e)=>setInputs({...inputs, fullName:e.target.value})}
            />
            </div>
            <div>
            <label className='label p-2'> 
                <span className='text-base label-text text-gray-300'>
                 Username
                </span>
            </label>
            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'
            value={inputs.username}
            onChange={(e)=>setInputs({...inputs, username:e.target.value})}
            />
            </div> 

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-300'>Password</span>
                </label>
                <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10'
                value={inputs.password}
                onChange={(e)=>setInputs({...inputs, password:e.target.value})}
                />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-300'>Confirm Password</span>
                </label>
                <input type='text' placeholder='Confirm Password' className='w-full input input-bordered h-10'
                value={inputs.confirmPassword}
                onChange={(e)=>setInputs({...inputs, confirmPassword:e.target.value})}
                />
            </div>
            <GenderCheckbox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>
            <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block p-2 text-gray-300'>
                Already have an account?
            </Link>
            <div>
            <button className='btn btn-block btn-sm mt-2'>SignUp</button>
            </div>
       </form>
      </div>
    </div>
  )
}

export default SignUp
