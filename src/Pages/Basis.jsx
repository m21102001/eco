import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillShopping } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../Pages/Basis.css'
import { useCart } from './JS-Files/Hooks';
const Basis = () => {
    const { totalCountV } = useCart();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid d-flex justify-content-between align-items-center">

                    <div className="d-flex align-items-center gap-2" >
                        <Link className='text-decoration-none' to={'/Product'}>
                            <AiOutlineShoppingCart size={28} color="Skyblue" />
                            <span style={{ fontWeight: "bold", fontSize: "20px", color: 'whitesmoke' }}>MyShop</span>
                        </Link>
                    </div>
                    <Link to={'/Cart'}>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <button className='CartIcon'>
                                <AiFillShopping size={42} color="Skyblue" />
                                {totalCountV >= 0 && (
                                    <span style={{
                                        position: 'absolute',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        top: '60%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: 'black',
                                    }}>
                                        {totalCountV}
                                    </span>
                                )}
                            </button>
                        </div>
                    </Link>
                </div >
            </nav >
        </>

    )
}

export default Basis