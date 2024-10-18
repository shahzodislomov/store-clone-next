'use client';

import Navbar from '@/components/Navbar/Navbar';
import ProductList from '@/components/productlist/ProductList';
import { dataFetch } from '@/redux/slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
	const {products, status, loading} = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(dataFetch());
	}, []);

	if (!products) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<Navbar />
			<div className='grid grid-cols-3 gap-10 mt-10'>
			{products.map((item, idx) => (
				<ProductList item={item} key={idx}/>
			))}
			</div>
		</>
	);
}
