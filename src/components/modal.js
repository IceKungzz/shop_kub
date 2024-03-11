import './css/modal.css';
import { useState, useEffect } from 'react';

const Modal = ({ status, closee, product }) => {
    const [status_modal, setStatus_modal] = useState(status);
    const [products, setProducts] = useState(product)
    useEffect(() => {
        setStatus_modal(status)
        setProducts(product)

    }, [status,product]);

    const onClose = () => {
        setStatus_modal(false);
        closee();
    }

    let [count, setCount] = useState(0);

    const counts = () => {
        setCount(count + 1);
        if (count === 10) {
            setCount(count + 0);
        }
    }

    const Add =(count,item_name) =>{
        console.log(count+' ของ '+ item_name);
    }

    const re_counts = () => {
        setCount(count - 1);
        if (count === 0) {
            setCount(count);
        }
    }
    return (
        <div className="container-modal" style={{ display: status_modal ? 'flex' : 'none' }}>
            <div className="bg"></div>
            <div className="modal-content">
                <h3>รายการสินค้า</h3>

                {products.map((item,key) => {
                    return (
                        <div className="modal-detail" key={key}>
                            <div className="modal-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="modal-detail-sub">
                                <h4>{item.name}</h4>
                                <p>{item.detail}</p>
                                <div className="modal-btn-detail">
                                    <button onClick={counts}>+</button>
                                    <h5>{count}</h5>
                                    <button onClick={re_counts}>-</button>
                                </div>
                                <div className='btn-addcart'>
                                    <div className='add'>
                                        <button onClick={()=> Add(count,item.name)} >เพิ่มสินค้า</button>
                                    </div>
                                    <div className='return'>
                                        <button onClick={onClose}>ย้อนกลับ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}



            </div>
        </div>
    )
}

export default Modal;