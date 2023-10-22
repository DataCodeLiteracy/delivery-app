import { css } from '@emotion/css';
import CartProductList from './CartProductList';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartProduct = () => {
	const { addProductList } = useContext(CartContext);

	return (
		<ul
			className={css`
				display: flex;
				flex-direction: column;
			`}>
			{addProductList.map((product) => (
				<CartProductList key={product.id} product={product} />
			))}
		</ul>
	);
};

export default CartProduct;
