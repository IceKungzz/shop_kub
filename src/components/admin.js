import Nav from "./nav-header"
import './css/admin.css'
import data from './mockup';
import { useState,useEffect} from 'react';
import axios from "axios";
import ModalAddproduct from "./modal-addproduct";
import ModalUpdate from "./modal_update";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Admin = () =>{

    const [status, setStatus] = useState(false)
    const [status_update, setStatus_update] = useState(false)
    const [data1, setData1] = useState([])
    const [username, setUsername] = useState('')
    const [statuss, setStatuss] = useState(false)
    

    useEffect(()=> {
        const token = localStorage.getItem("token")
        let config = {
            headers:{
                "Authorization":"Bearer "+token
            }
        }
        axios.post("http://localhost:5543/auth",{},config)
        .then(result =>{
            setUsername(result.data.Showuser.username);
            if(result.data.Showuser.role === 'user'){
                window.location.href= '/login'
                setStatuss(false)
            }else{
                setStatuss(true)
            }
        })
    },[])


    const Del_pro = (id) =>{
        axios.delete(`/${id}`).then(res =>{
            if(res.status===200){
                Swal.fire({
                    title:"ลบสินค้า",
                    icon:"success",
                    text:"ลบสินค้าสำเร็จ",
                    confirmButtonText:"OK",
                })
            }
        })
    }

    const open =() =>{
        setStatus(!status)
    }
    const close =() =>{
        setStatus(false)
    }
    const open_update =(item) =>{
        setStatus_update(!status_update)
        setData1(item)
        
    }
    const close_update =() =>{
        setStatus_update(false)
    }
    return(
        <div>
            <Nav user={username} role ={statuss}/>
            <ModalAddproduct status={status} close={close}/>
            <ModalUpdate status={status_update} close={close_update} data1={data1}/>
            <div className="container-admin">
                <div className="header-admin-btn">
                        <h3>รายการสินค้าทั้งหมด</h3>
                        <div className="admin-btn">
                                <button className="add-pro" onClick={open}>เพิ่มสินค้า</button>
                                <NavLink to='/orderlist' className="order">รายการสั่งซื้อ</NavLink>
                        </div>
                </div>

                <div className="detail-product-all">
                    {data.map((item,index)=>{
                        return(
                            <div className="product-detail" key={index}>
                                <div className="detail-left-admin">
                                    <img src={item.img} alt=""/>
                                    <div className="detail-pro">
                                        <h2>{item.name}</h2>
                                        <p>{item.detail}</p>
                                    </div>
                                </div>
                                <div className="detail-rigth-admin">
                                    <p>ราคาเล่มละ {item.price}</p>
                                    <button className="down" onClick={() =>Del_pro(item.id)}>ลบสินค้า</button>
                                    <button className="up" onClick={()=>open_update(item)}>แก้ไขสินค้า</button>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Admin