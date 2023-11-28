import React, { useState } from "react";
import bullet from "../assets/images/icon-list.svg";
import banner from "../assets/images/illustration-sign-up-desktop.svg";
import mobBanner from "../assets/images/illustration-sign-up-mobile.svg"




const Desktop = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);

    

    if (isValidEmail) {
      setSubscribed(true);
    }
  };

  const dismissMessage = () =>{
      setSubscribed(false)
    }
  return (
    <div className="bg-white flex flex-col  md:flex md:bg-CharcoalGrey h-screen font-Roboto">
      <img src={mobBanner}  className="md:hidden "></img>
      {subscribed ? (
        <div className="bg-white p-14 h-fit flex flex-col space-y-7  w-[480px] rounded-2xl md:m-auto  text-left justify-center ">
          <img className="w-14    " src={bullet} alt="bullet" ></img>
          <h1 className=' text-5xl font-bold'  >Thanks for subscribing</h1>
          <p>A confirmation email has been sent to <span className="font-bold"   > {email}</span>. Please open it and click the button
            inside to confirm your subscription.
          </p>
          <button className=" bg-DarkSlateGrey text-white p-5 rounded-lg font-bold hover:bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 cursor-pointe" onClick={dismissMessage}>Dismiss message</button>
        </div>
      ) : (
        <div className="flex justify-between gap-16 h-fit bg-white m-auto p-6 rounded-3xl">
          <div className="flex flex-col pl-6 mt-7">
            <h1 className="text-[50px] my-3 font-extrabold text-DarkSlateGrey">Stay Updated!</h1>
            <p className="max-w-[460px] text-lg mb-8  text-DarkSlateGrey font-normal"  >Join 60,000+ producs managers receiving monthly updates on:</p>
        <div className="flex flex-col space-y-3 text-lg  ">
          <div className="flex gap-4  text-DarkSlateGrey font-normal">
            <img src={bullet} alt="icon"></img>
            <p>Product discovery and building what matters</p>
          </div>

          <div className="flex gap-4  text-DarkSlateGrey font-normal">
            <img src={bullet} alt="icon"></img>
            <p>Measuring to ensure updates are a success</p>
          </div>

          <div className="flex gap-4  text-DarkSlateGrey font-normal">
            <img src={bullet} alt="icon"></img>
            <p>And much more</p>
          </div>
        </div>
            <form className="flex flex-col mt-10">
              <label htmlFor="email-address" className="font-bold mb-2">Email Address</label>
              <input
                className={`border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                ${
                  isValid ? 'border-gray-300' : 'border-red-500 bg-red-100 text-red-400'
                }`}
                placeholder="email@company.com"
                value={email}
                onChange={handleInputChange}
                type="email"
                name="email"
                id="email-address"
              />
              {!isValid && (
                <p className="absolute text-red-500 font-semibold text-sm mt-1  ml-[250px]   md:ml-[300px] ">
                  Please enter a valid email
                </p>
              )}
              {!subscribed && (
                <button className="mt-5 bg-DarkSlateGrey text-white p-5 rounded-lg font-bold hover:bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 cursor-pointer" onClick={validateEmail}>
                  Subscribe to monthly newsletter
                </button>
              )}
            </form>
          </div>
          <div>
            <img src={banner} alt="banner" className="hidden md:block" />
          </div>


        </div>
      )}
    
    </div>
  );
};

export default Desktop;

