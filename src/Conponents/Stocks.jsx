import Layout from "./Layout"
import img from "../assets/img/ak.jpg"
 


 
 const Stocks = () => {
   return (
    <>
    <Layout>
        <div className="p-3 w-11/12 my-3 mx-auto rounded-2xl flex flex-wrap ">
            <div className="border relative items-center w-full p-1 rounded-xl shadow-xl mb-5">

                <div className="">Name:i phone</div>
                <div className=" absolute right-1 px-5 p-1 rounded-xl top-1 bg-red-600 text-slate-100">13%</div>
                <img src={img} className=" w-20 m-1" />
                <div className="">price:$500</div>
                <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, distinctio.</div>
                <div className="w-full flex gap-2 items-center place-content-end">
                    <button className=" bg-green-700 text-slate-100 p-2 rounded-lg">Add to chart</button>
                </div>

            </div>
            
            <div className=" border relative items-center w-full p-1 rounded-xl shadow-2xl">

                <div className="">Name:i phone</div>
                <div className=" absolute right-1 px-5 p-1 rounded-xl top-1 bg-red-600 text-slate-100">13%</div>
                <img src={img} className=" w-20 m-1" />
                <div className="">price:$500</div>
                <div className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem minus atque hic possimus explicabo doloremque sint veritatis, libero ab cupiditate.</div>
                <div className="w-full flex gap-2 items-center place-content-end">
                    <button className=" bg-green-700 text-slate-100 p-2 rounded-lg">Add to chart</button>
                </div>

            </div>
        </div>
    </Layout>
    </>
   )
 }
 
 export default Stocks
 
 