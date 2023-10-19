import { css } from '@emotion/css';

const CartProductList = () => {
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
				<span>피자</span>
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
					<span>20000원 </span>
					<span>x</span>
					<input type="text" value={1} />
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
				<button>-</button>
				<button>+</button>
			</div>
		</li>
	);
};

export default CartProductList;
