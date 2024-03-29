import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCookie } from '../utils/cookies';

const RenderComponent = () => {
    const [myths, setMyths] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch('https://mythbuster.onrender.com/myths');
            const data = await response.json();
            setMyths(data.data || []);
        } catch (error) {
            console.error('Error fetching myths:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id,userid) => {
        try {
            if(getCookie("UserId") == userid ){
                console.log(getCookie("UserId") , userid)   
                await axios.delete(`https://mythbuster.onrender.com/myths/${id}`);
                setMyths(myths.filter(myth => myth._id !== id));
                toast.success('Myth deleted successfully');

            }else{
                toast.error(`Login as the ${"Post's Owner to Delete"}`);

            }
        } catch (error) {
            console.error('Error deleting myth:', error);
            toast.error('Error deleting myth');
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-32">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="flex justify-center text-black items-center mt-32 w-[50%] m-auto">
            <div className="flex flex-col">
                {myths.map((myth, index) => (
                    <div key={index} className="mb-6 p-4 bg-white rounded-md shadow-lg">
                        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                            <img
                                src={myth.Image}
                                alt=""
                                className="object-cover item w-20 h-20 md:w-40 md:h-auto rounded-md"
                            />
                            <div className="flex-1">
                                <h1 className="text-lg text-center md:text-left md:text-3xl font-bold">{myth.Title}</h1>
                                <p className="mt-2 text-sm">{myth.Description}</p>
                            </div>
                        </div>
                        <div className='flex justify-evenly items-center md:flex-row flex-col'>
                            <div className="flex gap-4 mt-4 md:flex-row flex-col">
                                <button className='flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'>
                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>
                                    <span>{myth.Likes}</span>
                                </button>
                                <button className='flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'>
                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
                                    <span>{myth.Comments.length}</span>
                                </button>
                            </div>
                            <div className='flex gap-4 mt-3 md:ml-[300px] md:flex-row flex-col'>
                                <Link to={`/update/${myth._id}`}>
                                    <button className='btn btn-primary'>Update</button>
                                </Link>
                                <button className='btn btn-danger' onClick={() => handleDelete(myth._id,myth.UserId)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default RenderComponent;
