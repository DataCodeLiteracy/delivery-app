import { css } from '@emotion/css';
import Nav from './components/Nav';
import Product from './Product';
import Cart from './Cart';
import { useContext } from 'react';
import CartContext from './context/CartContext';

function App() {
	const { isCart } = useContext(CartContext);

	return (
		<main
			className={css`
				width: 1000px;
				margin: auto;
			`}>
			{isCart && <Cart />}
			<Nav />
			<Product />
		</main>
	);
}

export default App;
