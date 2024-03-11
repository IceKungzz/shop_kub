import './css/login.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'


const Register = () =>{


    const [email, setEmail] = useState()
    const [user, setUser] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const data = {
        Username:user,
        Password:password,
        Email:email,
        Phonenumber:phone
    }

    const register = () =>{
        axios.post("http://localhost:5543/register",data).then(result =>{
            if(result.status === 200){
                Swal.fire({
                    title:"Register Success",
                    icon:"success",
                    text:"register success fully",
                    confirmButtonText:"OK"
                }).then(result =>{
                    if(result.isConfirmed){
                        window.location.href="/login"
                    }    
                    
                })
            }
        })
        
    
    }


    return(
        <div>
                <div className='form'>
                    <div className='box-input'>
                        <h1>Register</h1>
 
                        <div className='form-input'>
                            <label>Username</label>
                            <input type="text" placeholder="user" onChange={(e) => setUser(e.target.value)}/>
                        </div>
                        <div className='form-input'>
                            <label>Password</label>
                            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className='form-input'>
                            <label>Email</label>
                            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='form-input'>
                            <label>Phonenumber</label>
                            <input type="text" placeholder="phone" onChange={(e) => setPhone(e.target.value)}/>
                        </div>

                        <div className='btn-login'>
                            <button onClick={register}>Register</button>
                        </div>
                        <NavLink to='/login'>เข้าสู่ระบบ</NavLink>
                    </div>
                </div>
        </div>
    )
}

export default Register