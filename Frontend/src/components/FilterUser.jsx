import axios from "axios";
import { useEffect, useState } from "react";

const FilterUser = () => {
  const [newMyth, setNewMyth] = useState([]);
  const [users, setUsers] = useState(null);
  const [filterValue, setFilterValue] = useState("All Post");

  const getUsers = () => {
    axios
      .get(`https://mythbuster.onrender.com/api/auth`)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://mythbuster.onrender.com/myths/`)
        .then((res) => {
          setNewMyth(res.data.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
    getUsers();
  }, []);

  const onFilterValue = (e) => {
    setFilterValue(e.target.value);
  };



  return (
    <div className="bg-white h-screen">
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700       shadow-none">
        <div className="flex h-[30vh]  mb-5 items-center justify-center flex-col">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Find Post By User
          </h4>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <select
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  onChange={(e) => onFilterValue(e)}
                  by
                  default
                >
                  <option value="All Post">All Post</option>
                  {users &&
                    users.map((user, id) => (
                      <option value={user._id} key={id}>
                        {user.fullname}
                      </option>
                    ))}
                </select>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Select User
                </label>
              </div>
            </div>
          </form>
        </div>

      </div>

      <div className="flex justify-center bg-white text-black items-center w-[50%] m-auto">
        <div className="flex flex-col bg-white h-screen">
        {newMyth
          .filter((myth) => filterValue === "All Post" || myth.UserId == filterValue)
          .map((myth,id) => {
            return (
              <div key={id} className="mb-6 p-4 bg-white h-full rounded-md shadow-lg">
              <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                <img
                  src={myth.Image}
                  alt=""
                  className="object-cover item w-20 h-20 md:w-40 md:h-auto rounded-md"
                />
                <div className="flex-1">
                  <h1 className="text-lg text-center md:text-left md:text-3xl font-bold">
                    {myth.Title}
                  </h1>
                  <p className="mt-2 text-sm">{myth.Description}</p>
                </div>
              </div>
              <div className="flex justify-evenly items-center md:flex-row flex-col">
                <div className="flex gap-4 mt-4 md:flex-row flex-col">
                  <button className="flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                    </svg>
                    <span>{myth.Likes}</span>
                  </button>
                  <button className="flex items-center gap-1  sm:text-lg border border-gray-300 px-3 py-1 rounded-full bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path>
                    </svg>
                    <span>{myth.Comments.length}</span>
                  </button>
                </div>
              
              </div>
            </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
};

export default FilterUser;
