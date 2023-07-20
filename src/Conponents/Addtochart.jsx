
import { useEffect, useState } from "react"
import { SwalAlert } from "./func.js"



const Addtochart = () => {    const localData  = JSON.parse(localStorage.getItem('prod'))
const [forms, setForms] = useState({
    title: '',
    price:  '',
    product: '',
    aval: ''
})

useEffect(() => {
    if(!localData) {
        localStorage.setItem('prod', JSON.stringify([]))
    }
}, [localData])

const [agree, setAgree] = useState(false)

const handleForms = e => {
    setForms({
        ...forms,
        [e.target.name]: e.target.value
    })
}
const productfunc= e => {
    e.preventDefault()
    if(!forms.title) return SwalAlert('Request Failed', 'product type is required', 'warning')
    if(!forms.price) return SwalAlert('Request Failed', 'price is required', 'warning')
    if(!forms.product) return SwalAlert('Request Failed', 'product is required', 'warning')
    if(!forms.aval) return SwalAlert('Request Failed', 'specify if product is available or not', 'warning')
    if(!agree) return SwalAlert('Request Failed', 'agree to our terms and policies', 'error')
    const formdata = {
        ...forms
    }

    localData.push(formdata) 
    localStorage.setItem('prod', JSON.stringify(localData))
    setForms({
        title: '',
        price:  '',
        product: '',
        aval: ''
    })
    setAgree(false)
  }
return (
  <div className=" bg-slate-100 w-11/12 p-3 max-w-xl shadow-xl  mx-auto mt-2 rounded-lg"> <div className="">
                <div className="">book a product</div>
            </div>
            <form onSubmit={productfunc}>
                <div className="mb-3">
                    <div className="text-right capitalize text-sm">product type</div>
                    <input name="title" value={forms.title} onChange={handleForms} type="text" placeholder="type" className="outline-none border text-sm rounded-md w-full p-2" />
                </div>
                <div className="mb-3">
                    <div className="text-right capitalize text-sm">price</div>
                    <input  name="price" value={forms.price} onChange={handleForms} type="number,string" placeholder="price" className="outline-none border text-sm rounded-md w-full p-2" />
                </div>
                <div className="mb-3">
                    <div className="text-right capitalize text-sm">product</div>
                    <input  name="product" value={forms.product} onChange={handleForms} type="text" placeholder="product" className="outline-none border text-sm rounded-md w-full p-2" />
                </div>
                <div className="mb-3">
                    <div className="text-right capitalize text-sm">availability</div>
                    <select  name="aval" value={forms.aval} onChange={handleForms} className="outline-none border text-sm rounded-md w-full p-2">
                        <option value="">--Select--</option>
                        <option value="yes">YES</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="text-sm">
                        <input type="checkbox" checked={agree} onChange={event => setAgree(event.target.checked)} className="mr-4" />
                        By clicking the button below you accept our terms and policies
                    </label>
                </div>
                <div className="w-fit ml-auto">
                    <button className="py-2.5 px-5 bg-slate-800 text-slate-100 rounded-full capitalize">buy</button>
                </div>
            </form>     
        

  </div>
 )
}

export default Addtochart
