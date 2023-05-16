import React, { useState } from "react";
import {AiFillEye ,AiFillEyeInvisible} from "react-icons/ai"
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {db} from "../firebase"
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword,setShowPassword]=useState(false);
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
  });
  const { name,email, password } = formData;
  const navigate=useNavigate();
  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };
  const onSubmit= async(event)=>{
      event.preventDefault()
      try {
        const auth=getAuth();
        const userCredential= await createUserWithEmailAndPassword(auth,email,password);
        updateProfile(auth.currentUser,{
          displayName:name
        })
        const user=userCredential.user;
        const formDataCopy ={...formData}
        delete formDataCopy.password
        formDataCopy.timestamp=serverTimestamp();
        await setDoc(doc(db,"users",user.UID),formDataCopy)
        navigate("/")
        }
       catch (error) {
        console.log(error)
      }

  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-5 font-bold">sign up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-10 max-w-6xl mx-auto gap-12">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="photo"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form onSubmit={onSubmit}>
          <input
              className="w-full px-4 py-2 text-xl mb-6 text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="full name"
            />
            <input
              className="w-full px-4 py-2 text-xl mb-6 text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="email address"
            />
            <div className="relative mb-6">
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type={showPassword ?"text":"password"}
              id="password"
              value={password}
              onChange={onChange}
              placeholder="password"
            />
            {showPassword ?( <AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=>!prevState)}/>):(<AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=>!prevState)}/>)}
            
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">have an account?<Link to={"/sign-in"} className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">Sign in</Link></p>
              <p><Link to={"/forgot-password"} className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">Forgot password ?</Link></p>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-600 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-700">Sign up</button>
          <div  className="flex items-center my-4 before:border-t  before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300  ">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <OAuth/>
          </form>
          

        </div>
      </div>
    </section>
  );
};

export default SignUp;
