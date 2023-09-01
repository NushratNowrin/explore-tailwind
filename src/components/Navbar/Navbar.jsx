import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
	const routes = [
		{
			id: 1,
			name: "Home",
			path: "/",
		},
		{
			id: 2,
			name: "About",
			path: "/about",
		},
		{
			id: 3,
			name: "Products",
			path: "/products",
		},
		{
			id: 4,
			name: "Blog",
			path: "/blog",
		},
		{
			id: 5,
			name: "Contact",
			path: "/contact",
		},
	];

	return (
		<nav>
			<div className="p-5">
                <div onClick={() => setOpen(!open)} className="md:hidden">
                    <span>
                        {
                            open === true?
                            <XMarkIcon className="h-6 w-6 text-blue-500" />  :
                            <Bars3Icon className="h-6 w-6 text-blue-500" />
                        }
                    </span>
                </div>
            
				<ul className={`md:flex justify-center	items-center duration-500 bg-slate-300 p-2  ${open? '' : 'hidden'}`}>
					{routes.map((route) => (
						<li className='p-3 m-6 hover:bg-slate-700 hover:text-white'>
							<a href={route.path}>{route.name}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
