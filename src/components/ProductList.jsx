import { css } from '@emotion/css';

const ProductList = ({ product }) => {
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
						value={product.count}
						className={css`
							text-align: center;
							margin-left: 10px;
						`}
					/>
				</div>
				<button
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
