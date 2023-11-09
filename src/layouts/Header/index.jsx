import { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useOnHoverOutside } from '../../hooks/useOnHoverOutside';
import Navlink from '../../components/UI/Navlink';
import Button from '../../components/UI/Button';
import Banner from './Banner';

import * as cs from '../../utils/constants';
const Header = () => {

	const headerRef = useRef(null);
	const dropdownRef = useRef(null);

	const closeHoverDropdown = () => {
		setShowDropdown(false);
	};
	useOnHoverOutside(dropdownRef, closeHoverDropdown);

	const location = useLocation();
	const isHomePage = location.pathname === '/';

	return (
		<header
			className="relative flex justify-center bg-transparent"
			ref={headerRef}
		>
			<Banner />
			<div
				className={`z-10 container ${
					isHomePage ? 'absolute' : ''
				} mx-auto py-6 flex flex-wrap justify-center items-center md:justify-between  ease-in-out duration-200`}
			>
				<div className="w-full flex flex-col md:flex-row lg:flex-row justify-space md:justify-around items-center mx-auto">
					<nav className="pb-6">
						<div className="flex items-center justify-center">
							<Link to="/">
								<img
									src={cs.logo01}
									alt="logo"
									className="h-12"
								/>
							</Link>
						</div>
					</nav>
					<nav className="flex justify-end items-center gap-8 relative">
						<div className="hidden lg:block lg:order-1">
							<Navlink
								className="flex flex-row gap-6 text-white capitalize font-bold text-xl font-raj"
								items={cs.navbarList}
							/>
						</div>

						<div className="flex flex-wrap gap-6 order-2">
							<Button
								type="link"
								link="/contact"
								className=" hidden lg:inline-flex text-white bg-greenBtn hover:bg-[#699403] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 font-raj"
							>
								GET A QUOTE
							</Button>

						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
