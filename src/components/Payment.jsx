import { css } from '@emotion/css';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Payment = () => {
	const { totalCount, setIsCart, setCartProductCount } = useContext(CartContext);

	const handleConfirm = () => {
		setIsCart(false);
		setCartProductCount(0);
	};

	return (
		<div
			className={css`
				position: fixed;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 300px;
				height: 150px;
				background-color: #0000003e;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				z-index: 2000;
			`}>
			<div>{totalCount} 결제 완료</div>
			<button
				onClick={handleConfirm}
				className={css`
					position: absolute;
					bottom: 10px;
					right: 10px;
				`}>
				확인
			</button>
		</div>
	);
};

export default Payment;
