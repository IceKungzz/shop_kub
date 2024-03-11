import './css/login.css'
import axios from 'axios';
import Swal from 'sweetalert2'
import {useState} from 'react'
import { NavLink } from 'react-router-dom';

const Login = () =>{

    const [user ,setUser] = useState('');
    const [password, setPassword] = useState('');
    const data = {
        Username:user,
        Password:password
    }
    
    const  login = () =>{
        axios.post('http://localhost:5543/login',data).then(result => {
            if(result.status=== 200){
                localStorage.setItem("token",result.data.token)
                console.log(result.data.token);
                Swal.fire({
                    title:"Login Success",
                    icon:"success",
                    text:"login success fully",
                    confirmButtonText:"OK"
                }).then(result =>{
                    if(result.isConfirmed){
                        window.location.href="/shop"
                        
                        

                    }
                })
            }
        })
        

    }


    return(
        <div>
                <div className='form'>
                    <div className='box-input'>
                        <h1>Login</h1>
                        <div className='form-input'>
                            <label>User</label>
                            <input type="text" placeholder="username" onChange={(e) => setUser(e.target.value)}/>
                        </div>
                        <div className='form-input'>
                            <label>Password</label>
                            <input type="password" placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className='btn-login'>
                            <button onClick={login}>Login</button>
                        </div>
                        <NavLink to='/register'>สมัครสมาชิก</NavLink><b>ลืมรหัสผ่าน</b>
                    </div>
                </div>
        </div>
    )
}

export default Login