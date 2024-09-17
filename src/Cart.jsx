import ReactDOM from 'react-dom';
import BackDrop from './components/BackDrop';
import CartModal from './components/CartModal';

const Cart = () => {
	return (
		<div>
			{ReactDOM.createPortal(<BackDrop />, document.getElementById('backdrop-root'))}
			{ReactDOM.createPortal(<CartModal />, document.getElementById('cart-modal-root'))}
		</div>
	);
};

export default Cart;
