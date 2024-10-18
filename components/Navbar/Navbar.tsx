import { amazonlogo } from '@/constants/amazonlogo';
import { MdOutlineShoppingCart } from 'react-icons/md';
import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
	const cart = useSelector(state => state.cart)
	return (
		<>
			<div className='flex items-center justify-between bg-gray-800 p-4 text-white'>
				<div>
					<img src={amazonlogo} alt='amazon logo' width={100} />
				</div>
				<div className='flex-1 mx-4'>
					<input
						type='search'
						placeholder='Search product'
						className='w-full p-2 rounded-md  text-white'
					/>
				</div>
				<div className='flex flex-col items-center mx-2'>
					<Link href={'/signin'}>
						<p className='text-sm'>Hello, guest</p>
						<p className='font-bold text-white'>Sign in</p>
					</Link>
				</div>
				<div className='flex flex-col items-center mx-2'>
					<p className='text-sm'>Returns</p>
					<p className='font-bold text-white'>& Orders</p>
				</div>
				<Link href={'/cart'}>
				<div className='relative flex flex-col items-center mx-2'>
					<div className='flex items-center'>
						<div className='flex items-center justify-center w-6 h-6 bg-yellow-400 text-black font-bold rounded-full'>
							{cart.length}
						</div>
						<MdOutlineShoppingCart size={24} className='ml-2' />
					</div>
					<p className='font-bold text-white'>Cart</p>
				</div>
				</Link>
			</div>
		</>
	);
};

export default Navbar;
