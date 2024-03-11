import './css/list-order.css'

import { NavLink } from 'react-router-dom'

const Listorder = () =>{
    return(
        <div>
           
            <div className='container-listorder'>
                <div className='header-list'>
                    <h3>รายการคำสั่งซื้อ</h3>
                    <NavLink to='/admin' className="btn btn-primary">กลับไปหน้าadmin</NavLink>
                </div>
                <div className='detail-container'>
                    <table className=" table-dark table-hover">
                    <thead>
                        <tr>
                            <th>รายการที่</th>
                            <th>สินค้า</th>
                            <th>ราคา</th>
                            <th>จำนวน</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody className='tdd'>
                        <tr>
                            <td>1</td>
                            <td>หนังสือสอน React</td>
                            <td>500 บาท</td>
                            <td>1</td>
                            <td><button className='btn-danger'>ลบรายการ</button></td>
                        </tr>

                    </tbody>
                </table>
                </div>

            </div>
        </div>
    )
}

export default Listorder