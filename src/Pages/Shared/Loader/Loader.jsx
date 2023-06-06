import { RingLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className='h-[70vh] flex flex-col justify-center items-center'>
            
            <RingLoader color="#a430c1" />
        </div>
    );
};

export default Loader;