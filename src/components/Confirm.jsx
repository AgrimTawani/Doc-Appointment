import { Link } from "react-router-dom";

const Confirm = () => {
    return (
        <div className="bg-hero-bg bg-cover overflow-x-hidden absolute w-screen h-screen">
            <div className="flex flex-col mt-[50%] sm:mt-[10%] ml-[17%]  items-center rounded-xl border-2 p-10 justify-center bg-[#0a102b]/45 w-[70%] text-white">
                <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl mb-4">Thank you for booking an appointment with Dr. Sarah Jones.</p>
            <p className="text-xl my-4">We look forward to seeing you!</p>
        <Link to="/" className="text-white hover:scale-110 transition-transform bg-[#0a102b] p-3 rounded-2xl"><button>
        Go back to homepage </button></Link>
    </div>
    </div>
    )
}

export default Confirm
