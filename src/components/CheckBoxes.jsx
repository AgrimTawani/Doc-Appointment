import { useState } from 'react';

const CheckBoxes = () => {
  const [form, setForm] = useState({
    privacy: false,
    terms: false,
    newsletter: false
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setForm({
      ...form,
      [name]: checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', form);
  };

return (
    <form onSubmit={handleSubmit} className=' absolute top-[247%] sm:top-[145%] mb-3 left-10 flex flex-col gap-4 p-10 mx-7 rounded-xl text-lg'>

    <div className=''>
    <label className='flex items-center mt-2'>
        <input
          type='checkbox'
          name='privacy'
          checked={form.privacy}
          onChange={handleChange}
          className='mr-2'
        />
        <span className='text-white font-medium'>I accept the privacy policy</span>
    </label>

    <label className='flex items-center mt-2'>
        <input
          type='checkbox'
          name='terms'
          checked={form.terms}
          onChange={handleChange}
          className='mr-2'
        />
        <span className='text-white font-medium'>I agree to the terms and conditions</span>
    </label>

    <label className='flex items-center mt-2'>
        <input
          type='checkbox'
          name='newsletter'
          checked={form.newsletter}
          onChange={handleChange}
          className='mr-2'
        />
        <span className='text-white font-medium'>I want to receive the newsletter</span>
    </label>
    </div>
    </form>
  );
};

export default CheckBoxes;
