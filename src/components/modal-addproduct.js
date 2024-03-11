import './css/modal_addproduct.css'
import { useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
const ModalAddproduct =({status,close}) =>{

    const [getstatus, setGetstatus] = useState(status);
    const [nameproduct,setNameproduct] = useState('');
    const [detailproduct,setDetailproduct] = useState('');
    const [priceproduct,setPriceproduct] = useState('');
    const [amountproduct,setAmountproduct] = useState('');
    const [imgsrc, setImgsrc] = useState('')
    const [errormsg, setErrormsg] = useState('')

    const data = {
        nameproduct:nameproduct,
        detailproduct:detailproduct,
        priceproduct:priceproduct,
        amountproduct:amountproduct,
        imgsrc:imgsrc,
    }


    const Add_product = () =>{
        //ยิงapi
        const formData = new FormData();
        formData.append('Book_images',imgsrc)
        axios.post("") .then(result=>{
            if(result.status ===200){
                Swal.fire({
                    title:"เพิ่มสินค้า",
                    icon:"success",
                    text:"เพิ่มสินค้าทั้งหมด",
                    confirmButtonText:"OK"
                }).then(res =>{
                    if(res.isConfirmed){
                        window.location.href = "admin"
                    }
                })
            }
        })
        
    }

    const onchangeImg = (event) =>{
        const file = event.target.files[0];
        const allowedTypes = ['image/jpeg','image/png','image/gif'];
        if(!file || !allowedTypes.includes(file.type)){
            setErrormsg('type image not correct')
            return;
        }
        setErrormsg()
        const render = new FileReader();
        render.onload = () =>{
            setImgsrc(file)
        }
        render.readAsDataURL(file);
            
    }


    

    useEffect(()=>{
        setGetstatus(status)
    },[status])

    const closes = () =>{
        setGetstatus(false)
        close()
    }

    return(
        <div className="container-Modal_addproduct" style={{display: getstatus?'flex':'none' }} >
            <div className='bg-addproduct'></div>
                <div className='con-detail-add-product'>
                    <h3>เพิ่มสินค้า</h3>
                    <div className='form-input-pro'>
                        <div className='input-pro'>
                            <label>ชื่อสินค้า</label>
                            <input type="text" placeholder="ชื่อสินค้า" 
                            onChange={(e)=>{setNameproduct(e.target.value)}}
                            />
                        </div>
                        <div className='input-pro'>
                            <label>รายละเอียด</label>
                            <input type="text" placeholder="รายละเอียดสินค้า"
                            onChange={(e)=>{setDetailproduct(e.target.value)}}
                            />
                        </div>
                        <div className='input-pro'>
                            <label>ราคา</label>
                            <input type="text" placeholder="ราคา"
                            onChange={(e)=>{setPriceproduct(e.target.value)}}
                            />
                        </div>
                        <div className='input-pro'>
                            <label>จำนวน</label>
                            <input type="text" placeholder="จำนวน"
                            onChange={(e)=>{setAmountproduct(e.target.value)}}
                            />
                        </div>
                        <div className='input-pro'>
                            <label>รูปสินค้า</label>
                            <input type="file" onChange={onchangeImg}/>
                        </div>
                        {errormsg && <p style={{color:'red'}}>{errormsg}</p>}
                    </div>
                    <div className='btn-add-product'>
                        <button className='add-pros' onClick={Add_product}>เพิ่มสินค้า</button>
                        <button className="back-pro" onClick={closes}>กลับ</button>
                    </div>
                </div>
        </div>
    )
}

export default ModalAddproduct