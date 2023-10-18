import { css } from '@emotion/css';
import { useState } from 'react';
import ProductList from './components/ProductList';

const Product = () => {
	const [productList, setProductList] = useState([
		{
			id: 1,
			name: '피자',
			price: 20000,
			count: 1,
		},
		{
			id: 2,
			name: '김치찌개',
			price: 9000,
			count: 2,
		},
		{
			id: 3,
			name: '자장면',
			price: 6500,
			count: 1,
		},
	]);

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
