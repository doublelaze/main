import { Link } from "react-router-dom"




const Navbar = () => {
  return (
    <div>
        
    <div className="bg-slate-800 p-3">
        <div className="flex justify-between items-center w-11/12 mx-auto">
            <Link to="/" className=" text-slate-100  text-4xl italic font-semibold">super<span className=" text-pink-500">MART</span></Link>
            <div className=" text-slate-100 uppercase">home page</div>
            <div className=" flex items-center flex-row w-56 justify-between p-2">
                <Link to="/stocks" className=" italic text-slate-100 hover:bg-red-300 hover:text-slate-800 hover:px-2 py-1 rounded-lg">Stocks</Link>
                <Link to="/Users" className=" italic text-slate-100 hover:bg-red-300 hover:text-slate-800 hover:px-2 py-1 rounded-lg">login/sign up</Link>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Navbar
