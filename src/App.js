import { css } from '@emotion/css';
import Nav from './components/Nav';
import Product from './Product';
import { useState } from 'react';
import Cart from './Cart';

function App() {
	const [isCart, setIsCart] = useState(false);

	return (
		<main
			className={css`
				width: 1000px;
				margin: auto;
			`}>
			{isCart && <Cart />}
			<Nav setIsCart={setIsCart} />
			<Product />
		</main>
	);
}

export default App;
