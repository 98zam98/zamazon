import { FC } from 'react'
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../state/hooks';
import Remove_from_cart from './Remove_from_cart';

const Cart_screen: FC = () => {
    const nav = useNavigate();

    // apploading is used to see the whole loading state for debug
    // s here is short for state 
    const cart = useAppSelector(s => s.cart.cart_items);

    return (
        <div className='cart_screen' >
            <Helmet><title>cart</title></Helmet>
            <h1 className="feat">your shopping cart</h1>
            <div className="cart_main">
                <div className="cart_products">
                    {
                        cart.length
                            ? cart.map(
                                i => {
                                    return (
                                        <div className="product" key={(i as any)['slug']}>
                                            <img src={(i as any).prod['image']} alt={(i as any).prod['name']} />
                                            <div className="info">
                                                <div className="name_price">
                                                    <p className="name">
                                                        {(i as any).prod['name']}
                                                    </p>
                                                    <p className="price">
                                                        ${(i as any).prod['price']}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <Remove_from_cart product={i} />
                                            </div>
                                        </div>
                                    )
                                }
                            ) :
                            <div className="error cart_action">empty</div>
                    }
                </div>
                <div className="cart_action">
                    <div className="total">Total items : {
                        cart.reduce((sum, i) => sum + 1, 0)
                    }</div>
                    <div className="total">Total price : ${
                        cart.reduce((sum, i) => sum + (i as any).prod['price'], 0)
                    }</div>
                    <div className="">
                        <button
                            onClick={
                                () => { nav('/signin?redirect=/shipping'); }
                            }
                        >checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Cart_screen