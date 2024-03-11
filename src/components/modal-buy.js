import './css/modal_buy.css'
import { useState, useEffect} from 'react';


const ModalBuy =({status,close,product_id}) =>{

    const [getstatus, setGetstatus] = useState(status);
    console.log(product_id);

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
                        <input type="text" placeholder='บ้านเลขที่'/>
                    </div>
                    <div className='input-sub-buy'>
                        <label>ตำบล:</label>
                        <input type="text" placeholder='ตำบล'/>
                    </div>
                    <div className='input-sub-buy'>
                        <label>อำเภอ:</label>
                        <input type="text" placeholder='อำเภอ'/>
                    </div>
                    <div className='input-sub-buy'>
                        <label>จังหวัด:</label>
                        <input type="text" placeholder='จังหวัด'/>
                    </div>

                    <div className='input-sub-buy'>
                        <label>เบอร์โทร:</label>
                        <input type="text" placeholder='เบอร์โทร'/>
                    </div>
                </div>

                <div className='btn-order-buy'>
                    <button className='back' onClick={closes}>ย้อนกลับ</button>
                    <button className='buy'>สั่งซื้อสินค้า</button>
                </div>

            </div>
        </div>
    )
}

export default ModalBuy