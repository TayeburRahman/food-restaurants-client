import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../useCartHook';


const CartHeader = () => {
    const { cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance } = useCart()
    const checkoutNavigate = useNavigate()
    const handleNavigate = () => {
        checkoutNavigate("/checkout")
    }

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)

    return (
        <div style={{ marginTop: 150 }}>
            <div className="container">
                <div className="">
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h3 className="mb-3">Checkout or add some items to your cart</h3>
                            {
                                cartItems.length >= 1 && (
                                    <button className="btn btn-sm btn-success" onClick={() => handleCartClearance()}>Clear Cart</button>
                                )
                            }
                        </div>
                        <div className=" offset-md-2 col-md-4">
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold">Cart Subtotal</td>
                                            <td>{totalPrice} Tk.</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Shipping and Handling</td>
                                            <td>Free Shipping</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Order Total</td>
                                            <td>{totalPrice} Tk.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table border text-center">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="col">IMAGE</th>
                                    <th scope="col">PRODUCT</th>
                                    <th scope="col">PRICE</th>
                                    <th scope="col">QUANTITY</th>
                                    <th scope="col">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((item) => <tr key={Math.random()}>
                                        <td style={{ width: 80 }}>
                                            <img src={item.makingPic1} alt="img" className="img-fluid" />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button onClick={() => handleAddProduct(item)} className="btn btn-sm btn-secondary me-2">+</button>
                                            {item.quantity}
                                            <button onClick={() => handleRemoveProduct(item)} className="btn btn-sm btn-secondary ms-2">-</button>
                                        </td>
                                        <td>{item ? item.price * item.quantity : ""}</td>
                                    </tr>)
                                }
                                {/* {
                                    cartItems.map((singleData, index) => <CartSingle singleData={singleData} plus={handlePlus} minus={handleMinus} key={Math.random()} i={index + 1} />)
                                }  */}
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex justify-content-between">
                        <form className="d-flex">
                            <input className="form-control me-2" type="text" placeholder=" Coupon Code " aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Apply</button>
                        </form>
                        <button onClick={() => handleNavigate()} className="btn btn-sm btn-success">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartHeader;