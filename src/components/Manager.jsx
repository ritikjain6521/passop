import { Text } from 'body-parser'
import React, { useEffect } from 'react'
import { useRef, useState, passwordref } from 'react'
import { v4 as uuidv4 } from 'uuid';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
  const ref = useRef()
  const passwordref = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])
  useEffect(() => {

    let password = localStorage.getItem("password");
    let passwordArray;
    if (password) {

      setpasswordArray(JSON.parse(password))

    }
  }, [])
  const showpassword = () => {
    passwordref.current.type = "text"
    console.log(ref.current.src)
    if (ref.current.src.includes("icons/Cross-eye.png")) {
      ref.current.src = "icons/eye.gif"
      passwordref.current.type = "password"
    }
    else {

      ref.current.src = "icons/Cross-eye.png"
      passwordref.current.type = "text"

    }
  }
  const savepassword = () => {  
    if(form.site.length >3 && form.username.length >3 && form.password.length >3){

      setpasswordArray([...passwordArray, {...form,id: uuidv4()}])
      localStorage.setItem("password", JSON.stringify([...passwordArray, {...form,id: uuidv4()}]))
      console.log(...passwordArray, form)
      setform({site:"",username:"",password:""})
      toast('Password saved', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    
    }
    else{
      toast('Error : Password saved');
      


    }
   
  }
  const editpassword = (id) => {
     console.log("editing password with id", id)
     setform(passwordArray.filter(i=>i.id===id)[0])
    setpasswordArray(passwordArray.filter(item=>item.id!==id))
    //localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
    //console.log(...passwordArray, form)
  }
  const deletingpassword = (id) => {
    console.log("Deleting password with id", id)
    let c= confirm("Do you want to delete this password")
    if(c){
      setpasswordArray(passwordArray.filter(item=>item.id!==id))
      localStorage.setItem("password", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
      toast('Password deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  
   
 }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const copyText =(text) =>{
    toast('copy to clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    navigator.clipboard.writeText(text)
  
  }
  return (
    <>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition="Bounce"
/>
{/* Same as */}
<ToastContainer />



      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-
[linear-gradient(to_right,#8080800a_1px,transparent_1px),
linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 
  m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 
  blur-[100px]"></div></div>
      <div className="p-3 md:my-button min-h-[88.2vh]">
        <h1 className='text-4xl font-bold text-center'>
          <span class='text-green-700' >/&lt;</span>
          <span>Pass</span><span class='text-green-500' >OP/&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center'> Our Own Password manager</p>
        <div class="flex flex-col p-4 text-black items-center  gap-8">
          <input value={form.site} onChange={handleChange} placeholder="Enter website Url" className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="" />
          <div className="flex  md:flex-row flex-col w-full justify-center gap-8">
            <input value={form.username} onChange={handleChange} placeholder="Enter the User Name" className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="" />
            <div className="relative">

              <input ref={passwordref} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name="password" id="" />
              <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showpassword}>

                <img ref={ref} className='p-1' width={30} src="/icons/eye.gif" alt="" />
              </span>
            </div>
          </div>
          <button onClick={savepassword} className='flex justify-center items-center gap-4 bg-green-300 rounded-full px-8 py-2 w-fit hover:bg-green-400 border-2 border-green-900'>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            >
            </lord-icon>
            Password</button>
        </div>
        <div className="password">
          <h2 className='font-blod text-2xl py-4'>Your password</h2>
          {passwordArray.length === 0 && <div>No password to show</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
            <thead className='bg-green-800 text-white '>
              <tr >
                <th className='py-2'>Site</th>
                <th className='py-2'>UserName</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Actions</th>

              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index) => {


                return <tr key={index}>
                  <td className='py-2 border-white 
                  text-center '>
                            <div className='flex items-center justify-center '>
                            <a href={item.site} target='_blank'>{item.site}</a>
                              <div className='size-7 cursor-pointer lordiconcopy'onClick={()=>{copyText(item.site)}}>
                      <lord-icon
                        style={{ "width": "25px", "hight": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover">
                      </lord-icon>
                    </div>
                    </div>
                  </td>
                  <td className='py-2 border-white text-center '>
                    
                  <div className='flex items-center justify-center '>
                    <a href={item.username} target='_blank'><span>{item.username}</span></a>
                     
                    <div className='size-7 cursor-pointer lordiconcopy 'onClick={()=>{copyText(item.username)}}>
                      <lord-icon
                        style={{ "width": "25px", "hight": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover">
                      </lord-icon>
                    </div>
                    </div>
                  </td>

                  <td className=' py-2  border-white text-center '>               
                  <div className='flex items-center justify-center lordiconcopy '>
                    <a href={item.password} target='_blank'><span>{item.password}</span></a>
                    <div className='size-7 cursor-pointer 'onClick={()=>{copyText(item.password)}}>
                      <lord-icon
                        style={{ "width": "25px", "hight": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover">
                      </lord-icon>
                    </div>
                    </div>
                  </td>
                  <td className=' py-2  border-white text-center '>               
                    <span className='cursor-pointer mx-1 'onClick={()=>{editpassword(item.id)}}><lord-icon
                        style={{ "width": "25px", "hight": "25px" }}
                        src="https://cdn.lordicon.com/gwlusjdu.json"
                        trigger="hover">
                      </lord-icon></span>
                      <span className='cursor-pointer mx-1'onClick={()=>{deletingpassword(item.id)}}><lord-icon
                        style={{ "width": "25px", "hight": "25px" }}
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover">
                      </lord-icon></span>
                    
                </td>
                  
                  

                </tr>
              })}
            </tbody>
          </table>}
        </div>
      </div>
    </>
  )
}

export default Manager
