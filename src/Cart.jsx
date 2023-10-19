import ReactDOM from 'react-dom';
import BackDrop from './components/BackDrop';
import CartModal from './components/CartModal';
import Payment from './components/Payment';
import { useContext } from 'react';
import CartContext from './context/CartContext';

const Cart = () => {
	const { isPay } = useContext(CartContext);
	return (
		<div>
			{ReactDOM.createPortal(<BackDrop />, document.getElementById('backdrop-root'))}
			{ReactDOM.createPortal(<CartModal />, document.getElementById('cart-modal-root'))}
			{ReactDOM.createPortal(isPay && <Payment />, document.getElementById('payment-root'))}
		</div>
	);
};

export default Cart;
