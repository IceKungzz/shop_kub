import Nav from "./nav-header"
import './css/cart.css'
import { useState } from 'react';
import data_cart from './mockup-cart';
import ModalBuy from "./modal-buy";

const Cart = () => {

    const [checkStatuses, setCheckStatuses] = useState(data_cart.map(() => false));
    const [status_modal, setStatus_modal] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]); 

    
    const Add = (item_id) => {
        console.log(item_id);
    }

    const Del = (item_id) => {
        console.log(item_id);
    }

    const handleChangeCheckbox = (index,item_id) => {
        const newCheckStatuses = [...checkStatuses];
        newCheckStatuses[index] = !newCheckStatuses[index];
        setCheckStatuses(newCheckStatuses);
        if (newCheckStatuses[index]) {
            setCheckedItems([...checkedItems, item_id]);
        } else {
            setCheckedItems(checkedItems.filter(id => id !== item_id));
        }
    }

    const Buy_product = () => {
        // console.log(checkedItems);
        setStatus_modal(!status_modal);
        console.log('ในfn   '+status_modal);
    }
    // console.log('นอกfn   '+status_modal);
    const onclose = () =>{
        setStatus_modal(false);
    }
    return (
        <div>
            <Nav user='IceKungzz' />
            <ModalBuy status={status_modal} close={onclose} product_id={checkedItems}/>
            <div className="container-cart">
                <div className="search-cart">
                    <h3>รายการสินค้าใน CART</h3>
                    <div className="search-input">
                        <input type="text" placeholder="สินค้าที่ต้องการหา" />
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                </div>

                <div className="order-detail">
                    {data_cart.map((item, index) => (
                        <div className="order-sub" key={index}>
                            <div className="order-sub-left">
                                <input
                                    type="checkbox"
                                    checked={checkStatuses[index]}
                                    onChange={() => handleChangeCheckbox(index,item.id)}
                                />
                                <div className="img-detail-order">
                                    <img src={item.img} alt="" />
                                    <p>{item.name}</p>
                                </div>
                            </div>
                            <div className="order-sub-right">
                                <p className="price-order">{item.price * item.amount} บาท</p>
                                <div className="update-order">
                                    <button className="del" onClick={() => Del(item.id)}>-</button>
                                    <input type="text" defaultValue={item.amount} />
                                    <button className="addd" onClick={() => Add(item.id)}>+</button>
                                </div>
                                <div className="btn-order">
                                    <button>ลบสินค้า</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <footer>
                    <div className="detail-left">
                        <input type="checkbox" onChange={() => 
                            setCheckStatuses(checkStatuses.map(() => 
                            !checkStatuses.every(status => status)))} 
                            checked={checkStatuses.every(status => status)}
                            />
                        <h4>เลือกสินค้าทั้งหมด</h4>
                    </div>
                    <div className="detail-rigth">
                        <button onClick={() => Buy_product()} disabled={!checkStatuses.some(status=>status)}>สั่งซื้อ</button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Cart;
