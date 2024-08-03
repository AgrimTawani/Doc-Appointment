import { useRef, useState } from "react";

const MedicalInfo = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
    insurance: "",
    insuranceNum: "",
    meds: "",
    allergies:"",
    history: "",
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
        insurance: "",
        insuranceNum: "",
        meds: "",
        allergies:"",
        history: "",
    });
    }



    return (
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col sm:flex-row gap-8 border-2 bg-[#0a102b] bg-opacity-70 p-10 mx-4 rounded-2xl'>

        
            <label className='flex flex-col h-full'>
            <span className='text-white font-medium mb-4'>Insurance Provider</span>
            <input
            type='text'
            name='insurance'
            value={form.insurance}
            onChange={handleChange}
            placeholder="Ex. LIC"
            className='py-4 px-6 text-black rounded-lg outline-none border-none font-medium w-full'
            />
        </label>
       

        
        <label className='flex flex-col h-full'>
            <span className='text-white font-medium mb-4'>Insurance Number</span>
            <input
            type='number'
            name='insuranceNum'
            value={form.insuranceNum}
            onChange={handleChange}
            placeholder="Ex. AE0123"
            className='py-4 px-6 text-black rounded-lg outline-none border-none font-medium w-full'
            />
        </label>

        
        <label className='flex flex-col h-full'>
            <span className='text-white font-medium mb-4'>Allergies (if any)</span>
            <input
            type='text'
            name='allergies'
            value={form.allergies}
            onChange={handleChange}
            placeholder="Ex. peanuts, penicillin, etc."
            className='py-4 px-6 text-black rounded-lg outline-none border-none font-medium w-full'
            />
        </label>
    

     
        <label className='flex flex-col h-full'>
            <span className='text-white font-medium mb-4'>Current Medications (if any)</span>
            <input
            type='text'
            name='meds'
            value={form.meds}
            onChange={handleChange}
            placeholder="Ex. Dolo"
            className='py-4 px-6 text-black rounded-lg outline-none border-none font-medium w-full'
            />
        </label>
       
        
        <div className='sm:-ml-[1090px] sm:w-[50%] sm:mt-[150px]'>
        <label className='flex flex-col w-full h-full'>
            <span className='text-white font-medium mb-4'>Family medical history / Past medical history</span>
            <textarea
            type='text'
            name='history'
            value={form.history}
            rows={4}
            onChange={handleChange}
            placeholder="Ex. mother had cancer, Nana had diabetes, I had TB, etc."
            className='py-4 px-6 text-black rounded-lg outline-none border-none font-medium w-full'
            />
        </label>
        </div>

    </form>
    )
}

export default MedicalInfo