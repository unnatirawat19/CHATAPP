import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {

    const [username,setUsername]=useState("");
    const [passowrd,setPassword]=useState("");
    
    const {loading,login}=useLogin();

    const handleSubmit=async(e)=>{
         e.preventDefault();
         await login(username,passowrd);
    }

  return (
    <div className="flex flex-col justify-center min-w-96 max-auto items-center">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-900">
                Login 
                <span className="text-white"> ChatApp</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                    <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}/>
                </div>

                <div>
                    <label className="label">
                     <span className=" text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
                    value={passowrd}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <Link to="/signup" className="text-sm hover:underline hover:font-bold hover:text-violet-500-500 mt-2 inline-block">
                    {"Don't"} have an account?
                </Link>
                <div>
                    <button className="bg-zinc-800 hover:text-gray-900 text-white btn btn-block btn-sm mt-2"
                    disabled={loading}>
                        {loading ? <span className="loading loading-spinner"></span> : "Log In"}
                    </button>
                </div>
            </form>

        </div>
    </div>
  ) 
}

export default Login


// const Login = () => {
//     return (
//       <div className="flex flex-col justify-center min-w-96 max-auto items-center">
//           <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//               <h1 className="text-3xl font-semibold text-center text-gray-900">
//                   Login 
//                   <span className="text-white"> ChatApp</span>
//               </h1>
//               <form>
//                   <div>
//                       <label className="label p-2">
//                       <span className="text-base label-text">Username</span>
//                       </label>
//                       <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"/>
//                   </div>
  
//                   <div>
//                       <label className="label">
//                        <span className=" text-base label-text">Password</span>
//                       </label>
//                       <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"/>
//                   </div>
//                   <a href="#" className="text-sm hover:underline hover:font-bold hover:text-violet-500-500 mt-2 inline-block">
//                       {"Don't"} have an account?
//                   </a>
//                   <div>
//                       <button className="bg-zinc-800 hover:text-gray-900 text-white btn btn-block btn-sm mt-2">Login</button>
//                   </div>
//               </form>
  
//           </div>
//       </div>
//     ) 
//   }
  
//   export default Login