import { css } from '@emotion/css';

const Nav = () => {
	return (
		<nav
			className={css`
				display: flex;
				justify-content: space-between;
				margin: 15px 30px 0 30px;
				width: 1000px;
			`}>
			<h1>Delivery App</h1>
			<div
				className={css`
					display: flex;
					border: 1px solid black;
					width: 100px;
					height: 50px;
					margin-top: 10px;
					padding: 0 30px 0 30px;
					justify-content: space-around;
					align-items: center;
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
			</div>
		</nav>
	);
};

export default Nav;
