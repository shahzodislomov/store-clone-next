import { amazonlogo } from '@/constants/amazonlogo';
import Link from 'next/link';
import React from 'react';

const SignInPage = () => {
	return (
		<div className='flex justify-center items-center min-h-screen '>
			<div className='border p-8 rounded shadow-md w-96'>
				<div className='flex justify-center mb-6'>
					<img src={amazonlogo} alt='Amazon Logo' className='h-10' />
				</div>
				<h1 className='text-2xl font-semibold mb-4'>Sign In</h1>
				<form>
					<div className='mb-4'>
						<label htmlFor='email' className='block text-sm font-bold mb-2'>
							Email address
						</label>
						<input
							type='email'
							id='email'
							className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500'
							placeholder='Enter your email'
						/>
					</div>
					<div className='mb-6'>
						<label htmlFor='password' className='block text-sm font-bold mb-2'>
							Password
						</label>
						<input
							type='password'
							id='password'
							className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500'
							placeholder='Enter your password'
						/>
					</div>
					<button
						type='submit'
						className='w-full bg-gradient-to-b from-yellow-300 to-yellow-500 text-black font-bold py-2 rounded focus:outline-none'
					>
						Sign In
					</button>
				</form>
				<p className='text-xs text-gray-600 mt-4'>
					By continuing, you agree to Charles' Amazon Clone Conditions of Use
					and Privacy Notice.
				</p>
				<div className='mt-4'>
					<p className='text-sm'>
						New to Amazon Clone?{' '}
						<Link href='/signup' className='text-blue-600 hover:underline'>
							Create an account
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;
