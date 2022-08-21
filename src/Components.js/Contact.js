import React from 'react'

export default function Contact() {
  return (
    <div>
       <div >
                      <h1 className='text-blue-600 text-center'>Contact Us</h1>
                    
                    
                  </div>

                  <div>
                      <form className="grid justify-center">
                          <div>
                              <div>
                                  <input type="text" name="firstName" id="" className='bg-slate-200 px-2 pr-20 w-200 h-10 my-2 rounded-lg flex justify-center items-center text-white text-lg' placeholder="First Name"/>
                              </div>
                              <div>
                                  <input type="text" name="lastName" id=""  className='bg-slate-200 px-2 pr-20 w-200 h-10 my-2 rounded-lg flex justify-center items-center text-white text-lg' placeholder="Last Name" />
                              </div>
                          </div>
                          <div>
                              <div>
                                  <input type="number" name="phone" id="" className='bg-slate-200 px-2 pr-20 w-200 h-10 my-2 rounded-lg flex justify-center items-center text-white text-lg' placeholder="Phone Number"/>
                              </div>
                              <div>
                                  <input type="email" name="email" id=""  className='bg-slate-200 px-2 pr-20 w-200 h-10 my-2 rounded-lg flex justify-center items-center text-white text-lg' placeholder="Email ID"/> 
                              </div>
                          </div>
                          <div className="row">
                                <div>
                                <input type="text" name="address" id="" className='bg-slate-200 px-2 w-200 pr-20 h-10 my-2 rounded-lg flex justify-center items-center text-white text-lg' placeholder="Address"/>
                                 </div>
                          </div>
                          <div className="row">
                                <div>
                                <input className='bg-slate-200 px-2 w-200 h-10 my-2 rounded-lg flex justify-center pr-20 pb-10 pt-10 items-center text-white text-lg' type="text" name="message" id="" placeholder="Enter our Message"/>
                                </div>
                          </div>
                                     <center><button className='bg-violet-700 hover:bg-violet-800 transition w-100 pl-5 pr-5 lg:max-w-[100px] h-12 rounded-lg mb-5 flex items-center	align-items-center justify-center items-center text-white text-lg'>Submit</button></center>
                      </form>
                  </div>
    </div>
  )
}
