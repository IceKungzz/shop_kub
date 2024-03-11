import Nav from "./nav-header"
import './css/shop.css'
import Modal from "./modal"
import { useState, useEffect } from 'react'
import mockup from './mockup'
import axios from "axios"

const Shop = () =>{
    const [status_open,setStatus_open] = useState(false);
    const [product, setProduct] = useState([])
    const [username, setUsername] = useState('')
   
    const [status, setStatus] = useState(false)


    
    const open = (item) =>{
        setStatus_open(!status_open);
        setProduct(item)
        
    }
    const close_modal = () =>{
        setStatus_open(false)
    }

    useEffect( ()=> {
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
                setStatus(false)
            }else{
                setStatus(true)
       
            }
        })
    },[])

    
    

    


    return(
        <div className="shop">
            <Nav user={username} role={status}  />
            <Modal status={status_open} closee={close_modal} product={product}/>
            <div className="shop-page">
                    <div className="search-main">
                        <h3>SHOP</h3><div className="search-input"><input type="text" placeholder="สินค้าที่ต้องการค้นหา"/><i className="fa fa-search" aria-hidden="true"></i></div>
                    </div>
                <div className="products">
                    {mockup.map((item,key) =>{
                        return(
                        <div key={key} className="product-item">
                           <img  src={item.img} alt=""/>
                           <h4>{item.name}</h4>
                           <h5>ราคา {item.price} บาท</h5>
                           <div className="btn-cart" onClick={() =>open([item])}>
                               <h6 >ดูข้อมูลสินค้า</h6>
                           </div>  
                        </div>   
                        
                    )})}
 
                </div>
            </div>
        </div>
    )
}

export default Shop





