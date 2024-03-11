import './css/modal_update.css'
import { useState, useEffect } from 'react';


const ModalUpdate = ({status, close, data1}) => {
    const [getstatus, setGetstatus ] = useState(status);

    const [name, setName] = useState(data1.name);
    const [detail, setDetail] = useState(data1.detail);
    const [price, setPrice] = useState(data1.price);
    const [img, setImg] = useState(data1.img);
    const [amount, setAmount] = useState(data1.amount)

    useEffect(() => {
        setGetstatus(status);
        setAmount(data1.amount)
        setName(data1.name);
        setDetail(data1.detail);
        setPrice(data1.price);
        setImg(data1.img);
    }, [status, data1]);


    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    
    const handleChangeDetail = (event) => {
        setDetail(event.target.value);
    };
    
    const handleChangePrice = (event) => {
        setPrice(event.target.value);
    };
    const handleChangeAmount = (event) => {
        setAmount(event.target.value);
    };
    

    

    const closee = () => {
        setGetstatus(!getstatus);
        close();
    };

    return(
        <div className='container-update' style={{display: getstatus ? 'flex' : 'none'}}>
            <div className='bg-update'></div>
            <div className='detail-update'>
                <h2>แก้ไขข้อมูลสินค้า</h2>
                <div className='input-up'>
                    <div className='detail-img-left'>
                        <img src={img} alt=''/>
                        <input type="file" />
                    </div>
                    <div className='detail-data-right' >
                        <div className='detail-data'>
                            <label>ชื่อสินค้า</label>
                            <input type="text" value={name || ''} onChange={handleChangeName} />
                        </div>
                        <div className='detail-data'>
                            <label>รายละเอียด</label>
                            <input type="text"  value={detail || ''} onChange={handleChangeDetail}/>
                        </div>
                        <div className='detail-data'>
                            <label>ราคา</label>
                            <input type="text" value={price || ''} onChange={handleChangePrice}/>
                        </div>
                        <div className='detail-data'>
                            <label>จำนวน</label>
                            <input type="text" value={amount|| ''} onChange={handleChangeAmount}/>
                        </div>
                    </div>
                </div>
                <div className='btn-up'>
                        <button className='btn-update'>บันทึก</button>
                        <button className='btn-back' onClick={closee}>ย้อนกลับ</button>
                </div>

            </div>  
        </div>
    )
}

export default ModalUpdate;
