import { css } from '@emotion/css';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartProductList = ({ product }) => {
	const { addProductList, setAddProductList } = useContext(CartContext);

	const handleCalculate = (option) => {
		const index = addProductList.findIndex((item) => item.id === product.id);
		if (index !== -1) {
			const updatedProductList = [...addProductList];

			if (option === 'plus') {
				updatedProductList[index].count += 1;
			} else if (option === 'minus' && updatedProductList[index].count >= 2) {
				updatedProductList[index].count -= 1;
			}

			setAddProductList(updatedProductList);
		}
	};

	return (
		<li
			className={css`
				display: flex;
				justify-content: space-between;
				align-items: center;
				list-style: none;
				width: 95%;
				border: 1px solid black;
				margin: 30px 60px 0 0;
				padding: 10px;
			`}>
			<div>
				<span>{product.name}</span>
				<div
					className={css`
						margin-top: 10px;
						& span {
							margin-right: 10px;
						}
						& input {
							width: 50px;
						}
					`}>
					<span>{product.price}원 </span>
					<span>x</span>
					<input type="text" value={product.count} />
				</div>
			</div>
			<div
				className={css`
					margin-right: 10px;
					& button {
						margin-left: 10px;
						width: 30px;
					}
				`}>
				<button onClick={() => handleCalculate('minus')}>-</button>
				<button onClick={() => handleCalculate('plus')}>+</button>
			</div>
		</li>
	);
};

export default CartProductList;
