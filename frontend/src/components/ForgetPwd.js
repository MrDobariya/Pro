import React from 'react'

function ForgetPwd() {

    const fetchApi = async()=>{
        // console.log("api",)
        const responce = await fetch(`localhost:3000/forgot`,{
            method: "POST",
            body: JSON.stringify(""),
            headers: {'Content-Type': 'application/json' },
          })
        // const responce = await fetch(`${url}/auth/forgot_password`,{
        //     method: "POST",
        //     body: JSON.stringify(obj),
        //     headers: {'Content-Type': 'application/json' },
        //   })
}
  return (
    <div className='main'>
      <form onSubmit={fetchApi}>
        <h1>Forget Pwd</h1>
        <label>EMmail:-</label>
        <input type='text' value="" placeholder='tnsin' id='emailFiled'/>
        <label>pwd:-</label>
        <input type='text' value="" placeholder='tnsin' id='pwdFiled'/>
        <button type='submit' id='btnSubmit'>submit</button>
      </form>
    </div>
  )
}

export default ForgetPwd
