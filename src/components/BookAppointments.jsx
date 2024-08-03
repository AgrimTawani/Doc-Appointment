import { useNavigate, Link } from "react-router-dom";
import {doctor} from "../assets";
import { useRef, useState } from "react";
import MedicalInfo from "./MedicalInfo";
import CheckBoxes from "./CheckBoxes";

const BookAppointments = () => {

    const navigate = useNavigate();
    const personalRef = useRef();
    const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    phone:"",
    address: "",
    });

    const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
        ...form,
        [name]: value,
    });
    };

    const handleSubmit = (e) =>{
    e.preventDefault();
        setForm({
          name: "",
          email: "",
          age: "",
          phone:"",
          address: "",
      });

    navigate('/thank-you');
    }


    return (
    <div className="bg-hero-bg bg-cover overflow-x-hidden absolute w-screen h-screen">
        <div className="w-fit  flex flex-row justify-start"> 
            
            <img src={doctor} className=" hover:cursor-pointer sm:mx-[100px] m-10 sm:mt-10 sm:w-[3%] w-[6%] "/>
            

        <Link to="/" className="flex items-center">
            <h4 className="font-plus-jakarta-sans text-white font-bold scale-125 text-xl -ml-[15px] sm:-ml-[80px] hover:cursor-pointer ">
                PediaPulse
            </h4>
        </Link>
        </div>

        <div className="w-[80%] ml-[90px]">
        <div className="">
        <h1 className="text-white font-roboto font-bold text-3xl absolute top-[14%] left-[23%] sm:left-[7%]">Personal information.</h1>
        <form ref={personalRef} onSubmit={handleSubmit} className='mt-12 flex flex-col sm:flex-row gap-8 border-2 bg-[#0a102b] bg-opacity-70 p-10 mx-4 rounded-2xl'>

        
            <label className='flex flex-col h-full'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className='py-4 px-6 text-black rounded-lg outline-none border-none font-medium w-full'
            />
        </label>
       

        
        <label className='flex flex-col h-full'>
            <span className='text-white font-medium mb-4'>Your Age</span>
            <input
            type='number'
            name='age'
            value={form.age}
            onChange={handleChange}
            placeholder="What's your age?"
            className='py-4 px-6 text-black rounded-lg outline-none border-none font-medium w-full'
            />
        </label>

        
        <label className='flex flex-col w-[300px] h-full'>
            <span className='text-white font-medium mb-4'>Your Phone Number</span>
            <input
            type='number'
            name='phone'
            value={form.phone}
            onChange={handleChange}
            placeholder="What's your phone number?"
            className='py-4 px-6 text-black rounded-lg outline-none border-none font-medium w-full'
            />
        </label>
    

     
        <label className='flex flex-col h-full'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="What's your Email?"
            className='py-4 px-6 text-black rounded-lg outline-none border-none font-medium w-full'
            />
        </label>
       
        
        <div className='sm:-ml-[1150px] sm:w-[50%] sm:mt-[150px]'>
        <label className='flex flex-col w-full h-full'>
            <span className='text-white font-medium mb-4'>Your Address</span>
            <textarea
            type='text'
            name='address'
            value={form.address}
            rows={4}
            onChange={handleChange}
            placeholder="What's your address?"
            className='py-4 px-6 text-black rounded-lg outline-none border-none font-medium w-full'
            />
        </label>
        </div>

    </form>
    <div>
    <h1 className="text-white font-roboto font-bold text-3xl absolute top-[127%] left-[23%] sm:top-[80%] sm:left-[7%]">Medical information.</h1>
    </div>
    <div className="mt-[90px]">
        <MedicalInfo/>
    </div>
            </div>
        </div>

        <div>
        <h1 className="text-white font-roboto font-bold text-3xl mt-9 ml-[100px]">Consent and Privacy.</h1>

        <div>
            <CheckBoxes />
        </div>


        <div className="absolute sm:top-[160%] sm:left-[40%] ">
            <button
            type='submit'
            onClick={handleSubmit}
            className='text-white text-xl mt-3 rounded-xl p-4 hover:bg-[#141f54] hover:scale-110 transition-transform border-2 bg-[#0f1840] w-[170px] mb-5'
            >
                Submit
            </button>
        </div>

        </div>
    </div>
    )
}

export default BookAppointments