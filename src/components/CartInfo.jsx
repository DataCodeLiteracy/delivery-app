import { css } from '@emotion/css';

const CartInfo = () => {
	return (
		<div
			className={css`
				display: flex;
				justify-content: space-between;
				width: 90%;
				height: 15%;
				margin: auto;
				padding: 10px;
			`}>
			<div>전체금액</div>
			<div
				className={css`
					display: flex;
					flex-direction: column;
					text-align: right;
					& span {
						margin-right: 10px;
					}
				`}>
				<span>20000원</span>
				<div
					className={css`
						margin-top: 5px;
						& button {
							margin-right: 10px;
							width: 50px;
							cursor: pointer;
						}
					`}>
					<button>취소</button>
					<button>결제</button>
				</div>
			</div>
		</div>
	);
};

export default CartInfo;
