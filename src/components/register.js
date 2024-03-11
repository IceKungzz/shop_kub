import './css/login.css'

const Register = () =>{
    return(
        <div>
                <div className='form'>
                    <div className='box-input'>
                        <h1>Register</h1>
                        <div className='form-input'>
                            <label>Email</label>
                            <input type="email" placeholder="email"/>
                        </div>
                        <div className='form-input'>
                            <label>User</label>
                            <input type="text" placeholder="email"/>
                        </div>
                        <div className='form-input'>
                            <label>Phone</label>
                            <input type="text" placeholder="email"/>
                        </div>
                        <div className='form-input'>
                            <label>Password</label>
                            <input type="password" placeholder="password"/>
                        </div>
                        <div className='btn-login'>
                            <button>Register</button>
                        </div>
                        <p>เข้าสู่ระบบ</p>
                    </div>
                </div>
        </div>
    )
}

export default Register