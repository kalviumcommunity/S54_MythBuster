import { useState } from "react"
// import axios from "axios"
const AddPost = () => {

    const [newMyth,setNewMyth] = useState({
        Title: "",
        Description:"",
        Image:"",
        Likes: 0
    })

    const Submit = async (e) => {
        e.preventDefault()
        try {
          const response = await fetch('http://localhost:5000/myths',{
            method: "POST",
            headers: {"Content-Type" :"application/json"},
            body: JSON.stringify(newMyth)
          });
          const data = await response.json();
          console.log(data)
        } catch (error) {
          console.error('Error fetching myths:', error);
        }
      };
    // const Submit = (e) =>{
    //     e.preventDefault()
    //     axios.post("https://mythbuster.onrender.com/",newMyth)
    //       .then(res => console.log(res.data) )
    //       .catch(err => console.error(err));
    // }
  return (
    <div className="flex justify-center items-center h-screen text-white">
         <form className="flex flex-col gap-5 bg-blue-400 w-[50vw] items-center justify-center p-10 rounded-md" onSubmit={Submit}>
            <h2 className="text-2xl font-semibold">Add User</h2>
            <div className="mb-2">
            <label htmlFor="">Title</label>
            <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                onChange={(e) => setNewMyth({ ...newMyth, Title: e.target.value })}
                />
            </div>
            <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
                type="text"
                placeholder="Enter Age"
                className="form-control"
                onChange={(e) => setNewMyth({ ...newMyth, Description: e.target.value })}

            />
            </div>
            <div className="mb-2">
            <label htmlFor="">Image Url</label>
            <input
                type="text"
                placeholder="Enter Email"
                className="form-control"
                onChange={(e) => setNewMyth({ ...newMyth, Image: e.target.value })}
            />
            </div>
            <button className="btn btn-success text-white">Submit</button>
      </form>
    </div>
  )
}

export default AddPost