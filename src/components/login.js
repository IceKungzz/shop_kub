import './css/login.css'

const Login = () =>{
    return(
        <div>
                <div className='form'>
                    <div className='box-input'>
                        <h1>Login</h1>
                        <div className='form-input'>
                            <label>Email</label>
                            <input type="email" placeholder="email"/>
                        </div>
                        <div className='form-input'>
                            <label>Password</label>
                            <input type="password" placeholder="password"/>
                        </div>
                        <div className='btn-login'>
                            <button>Login</button>
                        </div>
                        <p>สมัครสมาชิก</p><b>ลืมรหัสผ่าน</b>
                    </div>
                </div>
        </div>
    )
}

export default Login