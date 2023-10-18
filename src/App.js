import { css } from '@emotion/css';
import Nav from './components/Nav';
import Product from './Product';

function App() {
	return (
		<main className={css`
			width: 1000px;
			margin: auto;
		`}>
			<Nav />
			<Product />
		</main>
	);
}

export default App;
