const ProductList = ({ product }) => {
	return (
		<li>
			<div>
				<span>{product.name}</span>
				<span>{product.price}원</span>
			</div>
			<div>
				<div>
					<span>{product.count}</span>
					<input type="text" />
				</div>
				<button>추가하기</button>
			</div>
		</li>
	);
};

export default ProductList;
