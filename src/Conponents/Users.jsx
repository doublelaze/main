import Layout from "./Layout"
import { useEffect, useState } from "react"
import { SwalAlert } from "./func.js"




const Users = () => {
  const localData = JSON.parse(localStorage.getItem('user'))
  const [Form, setForm] = useState({
    name: "",
    pass:'',
  })
  
  const [Forms, setForms] = useState({
    repass:'',
    mypass:'',
    myname:''
  })

useEffect (() => {
     if(!localData) {
      localStorage.setItem('user', JSON.stringify([]))
     }
}, [localData])

  const handleForm = e => {
/*     console.log(Event) */
    setForm({
      ...Form,
      [e.target.name]:e.target.value
    })
  }

  
  const handleForms = e => {
    /*     console.log(Event) */
        setForms({
          ...Forms,
          [e.target.name]:e.target.value
        })
      }
  
  const Submit1 = e => {
    e.preventDefault()
    if(!Form.name)return SwalAlert('Request Failed', 'name field is empty', 'warning')
    if(!Form.pass)return SwalAlert('Request Failed', 'password field is empty', 'warning') 
    {(Form.pass , Form.name)&& SwalAlert('approved',`welcome ${Form.name}`, 'success')}   
            
    const formdata = {
      ...Form
    }
    localData.push(formdata)
    localStorage.setItem('user',JSON.stringify(localData))
    setForm({
      name:'',
      pass:'',
    })
 
  }

  const Submit2 = e => {
    e.preventDefault()
    if(!Forms.myname)return SwalAlert('Request Failed', 'name field is empty', 'warning')
    if(!Forms.repass)return SwalAlert('Request Failed', 're-type your password', 'warning')
    if(!Forms.mypass)return SwalAlert('Request Failed', 'password field is empty', 'warning')
    {(Forms.mypass !== Forms.repass)? SwalAlert('failed', 'your password must match', 'warning'):SwalAlert('approved', `welcome mr ${Forms.myname}`, 'success')}

    const formsData = {
      ...Forms
    }
    localData.push(formsData)
    localStorage.setItem('user', JSON.stringify(localData))
    setForms({
    repass:'',
    mypass:'',
    myname:''

    })
  }

  return (
    <Layout>
      <div className="flex items-center justify-between mx-[8%] bg-slate-600 p-6 rounded-3xl mt-10">
        <form onSubmit={Submit1} className=" bg-slate-200 p-3 rounded-lg  w-10/12 max-w-[45%]">
          <div className="">
            <div className="text-right capitalize text-sm p-1">Already have account sign in here</div>
            <input type="text" name="name" value={Form.name} onChange={handleForm} placeholder="name/email" className=" outline-none w-full rounded-lg p-1" />
          </div>

          <div className="">
            <div className="text-right capitalize text-sm p-1">password</div>
            <input type="text" name="pass" value={Form.pass} onChange={handleForm} placeholder="password" className=" outline-none w-full rounded-lg p-1" />
          </div>
          <div className="w-fit ml-auto">
            <button className="bg-green-700 capitalize p-2 my-2 rounded-lg ">login</button>
          </div>

        </form>

        <form onSubmit={Submit2} className="bg-slate-200 p-3 rounded-lg w-10/12 max-w-[45%]">
        
          <div className="">
            <div className="text-right capitalize text-sm p-1">create a new account</div>
            <input type="text" name="myname" value={Forms.myname} onChange={handleForms} placeholder="name/email" className=" outline-none w-full rounded-lg p-1" />
          </div>

          <div className="">
            <div className="text-right capitalize text-sm p-1">password</div>
            <input type="text" name="mypass" value={Forms.mypass} onChange={handleForms} placeholder="password" className=" outline-none w-full rounded-lg p-1" />
          </div>

          <div className="">
            <div className="text-right capitalize text-sm p-1">re-enter your password</div>
            <input type="text" name="repass" value={Forms.repass} onChange={handleForms} placeholder="password" className=" outline-none w-full rounded-lg p-1" />
          </div>

          <div className="w-fit ml-auto">
            <button className="bg-green-700 capitalize p-2 my-2 rounded-lg" >sign-in</button>
          </div>

        </form>

      </div>
    </Layout>
  )
}

export default Users
