import { css } from '@emotion/css';
import { useContext } from 'react';
import { useState } from 'react';
import CartContext from '../context/CartContext';

const ProductList = ({ product }) => {
	const { productList, setProductList, addProductList, setAddProductList, setCartProductCount } =
		useContext(CartContext);
	const [productCount, setProductCount] = useState(1);

	const countHandler = (e) => {
		setProductCount(e.target.value);
	};

	const handleClick = (e) => {
		setProductCount(Number(productCount));
		if (isNaN(productCount) || productCount === 0) {
			alert('0 또는 문자는 입력할 수 없습니다.');
			setProductCount(1);
		}

		const updatedProductList = [...productList];

		const index = updatedProductList.findIndex((item) => item.id === product.id);

		if (index !== -1) {
			updatedProductList[index].count = parseInt(productCount, 10);

			setProductList(updatedProductList);
			const isProductInCart = addProductList.some((item) => item.id === product.id);
			if (!isProductInCart) {
				setAddProductList([...addProductList, updatedProductList[index]]);
				setCartProductCount((prevCount) => prevCount + 1);
			}
		}
	};

	return (
		<li
			className={css`
				display: flex;
				justify-content: space-between;
				border: 1px solid black;
				padding: 10px;
				list-style: none;
				margin: 20px;
			`}>
			<div
				className={css`
					display: flex;
					flex-direction: column;
					line-height: 30px;
				`}>
				<span>{product.name}</span>
				<span>{product.price}원</span>
			</div>
			<div
				className={css`
					display: flex;
					flex-direction: column;
					line-height: 30px;
				`}>
				<div>
					<span>수량</span>
					<input
						type="text"
						value={productCount}
						onChange={countHandler}
						className={css`
							text-align: center;
							margin-left: 10px;
						`}
					/>
				</div>
				<button
					onClick={handleClick}
					className={css`
						width: 80%;
						margin: 5px 0 0 30px;
					`}>
					추가하기
				</button>
			</div>
		</li>
	);
};

export default ProductList;
