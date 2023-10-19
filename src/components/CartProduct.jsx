import { css } from '@emotion/css';
import CartProductList from './CartProductList';

const CartProduct = () => {
	return (
		<ul
			className={css`
				display: flex;
				flex-direction: column;
			`}>
			<CartProductList />
			<CartProductList />
			<CartProductList />
			<CartProductList />
		</ul>
	);
};

export default CartProduct;
