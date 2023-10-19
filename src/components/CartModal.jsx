import { css } from '@emotion/css';
import CartProduct from './CartProduct';
import CartInfo from './CartInfo';

const CartModal = () => {
	return (
		<div
			className={css`
				position: fixed;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 80%;
				height: 80%;
				overflow-y: auto;
				background-color: white;
				z-index: 100;
			`}>
			<CartProduct />
			<CartInfo />
		</div>
	);
};

export default CartModal;
