import { css } from '@emotion/css';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Nav = () => {
	const { setIsCart } = useContext(CartContext);
	const handleCartClick = () => {
		setIsCart(true);
	};

	return (
		<nav
			className={css`
				display: flex;
				justify-content: space-between;
				margin: 15px 30px 0 30px;
				width: 1000px;
			`}>
			<h1>Delivery App</h1>
			<button
				onClick={handleCartClick}
				className={css`
					display: flex;
					border: 1px solid black;
					width: 150px;
					height: 50px;
					margin-top: 10px;
					padding: 0 30px 0 30px;
					justify-content: space-around;
					align-items: center;
					cursor: pointer;
				`}>
				<span>장바구니</span>
				<div
					className={css`
						border: 1px solid black;
						border-radius: 50%;
						background-color: #ffff00a6;
						width: 20px;
						text-align: center;
					`}>
					1
				</div>
			</button>
		</nav>
	);
};

export default Nav;
