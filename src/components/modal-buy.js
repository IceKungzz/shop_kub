import './css/modal_buy.css'
import { useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const ModalBuy =({status,close,product_id}) =>{

    const [getstatus, setGetstatus] = useState(status);
    const [homenumber, setHomenumber] = useState('')
    const [district, setDistrict] = useState('')
    const [districts, setDistricts] = useState('')
    const [province, setprovince] = useState('')
    const [phone, setPhone] = useState('')

    const data = {
        homenumber:homenumber,
        district:district,
        districts:districts,
        province:province,
        phone:phone
    }

    const Buy_order = async() =>{
        //ยิงapi เส้นนี้
        axios.post("",data).then(result =>{
            if(result.status === 200){
                Swal.fire({
                    title:"ซื้อสินค้า",
                    icon:"success",
                    text:"ซื้อสินค้าสำเร็จแล้ว",
                    confirmButtonText:"OK"
                }).then(res =>{
                    if(res.isConfirmed){
                        window.location.href="/cart"
                    }
                })
            }
        })
        
    }

    useEffect(()=>{
        setGetstatus(status)
    },[status])

    const closes = () =>{
        setGetstatus(false)
        close()
    }

    return(
        <div className="container-Modal_buy" style={{display: getstatus?'flex':'none' }}>
            <div className='bg-modal-buy'></div>
            <div className='detail-modal-buy'>
                <div className='header-detail-buy'><h3>กรอกรายละเอียด</h3></div>
                <div className='input-detail-buy'>
                    <div className='input-sub-buy'>
                        <label>บ้านเลขที่:</label>
                        <input type="text" placeholder='บ้านเลขที่' onChange={(e) => setHomenumber(e.target.value)}/>
                    </div>
                    <div className='input-sub-buy'>
                        <label>ตำบล:</label>
                        <input type="text" placeholder='ตำบล' onChange={(e) => setDistrict(e.target.value)}/>
                    </div>
                    <div className='input-sub-buy'>
                        <label>อำเภอ:</label>
                        <input type="text" placeholder='อำเภอ' onChange={(e) => setDistricts(e.target.value)}/>
                    </div>
                    <div className='input-sub-buy'>
                        <label>จังหวัด:</label>
                        <input type="text" placeholder='จังหวัด' onChange={(e) => setprovince(e.target.value)}/>
                    </div>

                    <div className='input-sub-buy'>
                        <label>เบอร์โทร:</label>
                        <input type="text" placeholder='เบอร์โทร' onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                </div>

                <div className='btn-order-buy'>
                    <button className='back' onClick={closes}>ย้อนกลับ</button>
                    <button className='buy' onClick={Buy_order}>สั่งซื้อสินค้า</button>
                </div>

            </div>
        </div>
    )
}

export default ModalBuy