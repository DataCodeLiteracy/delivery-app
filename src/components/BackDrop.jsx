import { css } from '@emotion/css';

const BackDrop = () => {
	return (
		<div
			className={css`
				position: fixed;
				background: rgba(0, 0, 0, 0.75);
				width: 100%;
				height: 100vh;
				z-index: 10;
			`}></div>
	);
};

export default BackDrop;
