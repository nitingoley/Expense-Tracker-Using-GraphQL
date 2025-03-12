import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import RadioButton from "../components/RadioButton";
import {useMutation} from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations/user.mutation";
import {toast} from "react-hot-toast";
export default function Signup() {
  const [signupData, setSignData] = useState({
    name: "",
    username: "",
    password: "",
    gender: "",
  });
  
  const [signup , {loading}] = useMutation(SIGN_UP , {
    refetchQueries: ['GetAuthenticatedUser'],
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(signupData);
    // if(!name || !username || !password || !gender) return toast.error("All fields are required");
    try {
      await signup({
        variables: {
          input:signupData
        }
      })
    } catch (error) {
      console.log("Error", error);
      toast.error("error occur during signup")
    }
  };
  
  const handleChange = (e)=>{
  const {name , value , type}=  e.target;

  if(type === "radio") {
    setSignData((prevData)=>({
      ...prevData,
      gender:value
    }));
  }else {
    setSignData((prevData)=>({
      ...prevData,
      [name]:value,
    }))
  }

  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex rouned-lg overflow-hidden z-50 bg-gray-300">
        <div className="w-full bg-gray-100 min-w-80 sm:min-w-96 flex items-center justify-center ">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-center">
              Sign Up
            </h1>
            <h2 className="text-sm font-semibold mb-6 text-gray-500 text-center">
              Join to keep track of your expenses
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <InputField
                label="Full Name"
                id="name"
                name="name"
                value={signupData.name}
                onChange={handleChange}
              />

              <InputField
                label="UserName"
                id="username"
                name="username"
                value={signupData.username}
                onChange={handleChange}
              />

              <InputField
                label="Password"
                id="password"
                name="password"
                value={signupData.password}
                onChange={handleChange}
              />

              <div className="flex gap-10">
                <RadioButton
                  id="male"
                  label="Male"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={signupData.gender === "male"}
                />
                <RadioButton
                  id="female"
                  label="Female"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={signupData.gender === "female"}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                 disabled={loading}
                >
                  {loading ? "Loading" : "SignUp"}
                 
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-black hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
