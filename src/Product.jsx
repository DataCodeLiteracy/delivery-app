import { css } from '@emotion/css';
import ProductList from './components/ProductList';
import { useContext } from 'react';
import CartContext from './context/CartContext';

const Product = () => {
	const { productList } = useContext(CartContext);
	return (
		<ul
			className={css`
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 1000px;
				height: 500px;
				border: 1px solid black;
			`}>
			{productList.map((product) => (
				<ProductList key={product.id} product={product} />
			))}
		</ul>
	);
};

export default Product;
