import Navigation from 'components/Nav/Navigation'
import Title from 'components/Typography/Title'

export default function Footer() {
	return (
		<div className='bg-[#FBEDCD] flex flex-col mt-28'>
			<div className="top flex flex-wrap gap-10 items-center justify-evenly px-10 py-10">
				<Title link='/'>Белорусский вкус</Title>
				<ul className='hidden sm:flex flex-row gap-12 md:gap-16 lg:gap-24 text-xl lg:text-2xl'>
					<Navigation isMenu={false} />
				</ul>
			</div>
			<hr className='h-[1px] w-full bg-[rgba(74, 29, 31, 0.22)]'/>
			<div className="bottom pt-10 px-10 pb-20 font-medium">
				<h5>© 2023 Белорусский вкус. Все права защищены.</h5>
			</div>
		</div>
	)
}
