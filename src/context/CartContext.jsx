import React, { useState } from 'react';

const CartContext = React.createContext({
	productList: [],
	addProductList: [],
	isCart: false,
	isPay: false,
	totalCount: 0,
	setIsPay: () => {},
	setIsCart: () => {},
	setProductList: () => {},
	setAddProductList: () => {},
	setTotalCount: () => {},
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
	const [isPay, setIsPay] = useState(false);
	const [cartProductCount, setCartProductCount] = useState(0);
	const [totalCount, setTotalCount] = useState(0);

	return (
		<CartContext.Provider
			value={{
				productList: productList,
				addProductList: addProductList,
				setAddProductList: setAddProductList,
				isCart: isCart,
				setIsCart: setIsCart,
				isPay: isPay,
				setIsPay: setIsPay,
				setProductList: setProductList,
				cartProductCount: cartProductCount,
				setCartProductCount: setCartProductCount,
				totalCount: totalCount,
				setTotalCount: setTotalCount,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContext;
