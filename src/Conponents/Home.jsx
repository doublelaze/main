
import { useEffect, useState } from "react"
import Layout from "./Layout"




const Home = () => {
    const localData =JSON.parse(localStorage.getItem('data'))
    const [form, setForm] = useState({
        description: '',
        email: ''

    })
    const handleForms = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    useEffect (() => {
        if(!localData) {
            localStorage.setItem('data',JSON.stringify([]))
        }
    }, [localData]) 

    const SubmitForm = (event) => {
        event.preventDefault()
        const formdata = {
            ...form
        }

        localData.push(formdata)
        localStorage.setItem('data', JSON.stringify(localData))
    }

    return (

        <Layout>
            <div className=" items-center justify-center flex  h-[89vh] border relative">
                <div className="italic font-semibold text-6xl text-center  absolute top-0 p-4">
                    <div className=" text-slate-800">wel<span className="">come</span>
                        <p>to</p>
                        <p>super<span className="italic text-pink-500">MART</span></p>
                    </div>
                    <p className="text-2xl my-3">We make everythings available in the bulks,Kindly visit the stocks to check your choice.</p>
                </div>
                <div className="flex w-9/12 p-3 bg-slate-100 rounded-2xl absolute bottom-3 gap-10 justify-center overflow-hidden">
                    <div className=" w-[32%] text-slate-100  bg-slate-700 rounded-xl flex items-center justify-center">
                        <p className=" italic text-xl font-semibold p-2 items-center rounded-xl">Contact Us : 09014018056 / 09014018056 / 09061661674</p>
                    </div>
                    <div className=" w-[32%] text-slate-100  bg-slate-700 rounded-xl flex items-center justify-center">
                        <p className=" italic text-slate-100 text-xl font-semibold p-2 items-center  bg-slate-700  rounded-xl">Address : Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className=" w-[32%] text-slate-100  bg-slate-700 rounded-xl m-1">
                        <form onSubmit={SubmitForm} >
                            <div className=" m-2 p-2">
                                <div className="">how do you feel about us ?</div>
                                <input name="discription" value={form.description} onChange={handleForms} type="text" placeholder='discription' className="outline-none text-sm text-slate-800 rounded-xl p-2 w-full h-16" />
                            </div>
                            <div className=" m-2 p-2">
                                <div className="">Give a valid email to get back to you</div>
                                <input type="text" name="email" value={form.email} onChange={handleForms} placeholder="email" className="outline-none  text-slate-800 text-sm rounded-xl p-2 w-full" />
                            </div>
                            <div className="w-fit ml-auto">
                                <button className=" bg-slate-900 text-slate-100 p-2 mr-4 rounded-xl m-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
