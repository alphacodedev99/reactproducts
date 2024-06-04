import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';
import logo from '../assets/logo.png';

function NavbarComponent() {
	const [toggle, setToggle] = useState(false);

	function handleToggle() {
		setToggle(!toggle);
	}
	return (
		<div className='h-[120px] flex items-center justify-between px-[20px]'>
			<img src={logo} alt='logo' className='w-[100px] h-[100px]' />

			{/* desktop view */}
			<ul className='items-center gap-[10px] hidden lg:flex'>
				<li className='text-[20px] text-mainBlue'>Home</li>
				<li className='text-[20px] text-mainBlue'>About</li>
				<li className='text-[20px] text-mainBlue'>Contact</li>
			</ul>

			{/* FOR MOBILE VIEW */}
			<div className='flex lg:hidden'>
				<TiThMenu
					size={40}
					onClick={handleToggle}
					className='cursor-pointer'
				/>

				{/* NOVI ELEMENT */}
				{toggle && (
					<div className='absolute top-0 left-0 bottom-[50%] right-0  bg-mainBlue '>
						<IoMdClose
							size={40}
							className='position absolute top-[20px] right-[20px]'
							onClick={handleToggle}
						/>
						<ul className='items-center gap-[10px] flex flex-col mt-[100px]'>
							<li className='text-[20px] text-mainGray'>Home</li>
							<li className='text-[20px] text-mainGray'>About</li>
							<li className='text-[20px] text-mainGray'>Contact</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}

export default NavbarComponent;
