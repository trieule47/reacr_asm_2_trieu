import React, { useState } from 'react'

export default function LoginView() {
    const [username,SetUsername] = useState('');
    const [pass, SetPass] = useState('');

    const handleUsernameChange = (e)=> {
        SetUsername(e.target.value)
    }

    const handlePassChange = (e)=> {
        SetPass(e.target.value)
    }

    return (
    <div >
        <h3>Username</h3><input type="text" onChange={()=>handleUsernameChange}/>
        <h3>Password</h3><input type="text" onChange={()=>handlePassChange}/>
    </div>
  )
}
