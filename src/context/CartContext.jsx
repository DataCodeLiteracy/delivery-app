import React, { useState } from 'react';

const CartContext = React.createContext({
	productList: [],
	addProductList: [],
	isCart: false,
	setIsCart: () => {},
	setProductList: () => {},
	setAddProductList: () => {},
});

export const CartContextProvider = (props) => {
	const [productList, setProductList] = useState([
		{
			id: 1,
			name: '피자',
			price: 20000,
			count: 1,
		},
		{
			id: 2,
			name: '김치찌개',
			price: 9000,
			count: 1,
		},
		{
			id: 3,
			name: '자장면',
			price: 6500,
			count: 1,
		},
	]);
	const [addProductList, setAddProductList] = useState([]);

	const [isCart, setIsCart] = useState(false);
	const [cartProductCount, setCartProductCount] = useState(0);

	return (
		<CartContext.Provider
			value={{
				productList: productList,
				addProductList: addProductList,
				setAddProductList: setAddProductList,
				isCart: isCart,
				setIsCart: setIsCart,
				setProductList: setProductList,
				cartProductCount: cartProductCount,
				setCartProductCount: setCartProductCount,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContext;
