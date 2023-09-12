import { Drawer } from 'antd'
import { useState } from 'react'

import { HamburgerIcon } from '@chakra-ui/icons'

import Links from './Links'

export default function Nav() {
	const [menuOpen, isMenuOpen] = useState(false)

	const [open, setOpen] = useState(false)
	const showDrawer = () => {
		setOpen(true)
	}
	const onClose = () => {
		setOpen(false)
	}

	return (
		<nav className='flex flex-row justify-between items-center w-full md:px-40 py-6 bg-white'>
			<h2 className='text-3xl xl:text-4xl font-semibold inline md:block text-center w-full md:w-auto'>
				Белорусский вкус
			</h2>

			<ul className='md:flex hidden flex-row gap-16 lg:gap-24 text-2xl'>
				<Links isMenu={false}/>
			</ul>

			<div className='absolute md:hidden right-4'>
				<HamburgerIcon
					boxSize={34}
					onClick={showDrawer}
				/>

			</div>

			<Drawer placement='right' onClose={onClose} open={open}>
				<ul className='flex flex-col gap-14'>
					<Links isMenu={true}/>
				</ul>
			</Drawer>

			{/* <div 
				className='openMenu w-full h-full'
				style={{ }}
			>

			</div> */}
		</nav>
	)
}
