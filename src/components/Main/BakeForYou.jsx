import SectionTitle from 'components/Typography/SectionTitle'
import Title from 'components/Typography/Title'
import { bake } from 'utils/assetsImports'

export default function BakeForYou() {
	return (
		<section className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-32 md:gap-56 mx-8 sm:mx-16 md:mx-20 my-20 items-center'>
			<div className='flex flex-col items-center'>
				<SectionTitle>Мы выпекаем для вас</SectionTitle>
				<SectionTitle>Только что из духовки</SectionTitle>
				<p className='text-xl text-center mt-10'>
					Мы используем качественные материалы, которые получаем
					непосредственно от фермеров. наши спонсоры - опытные люди в
					пищевой отрасли. Поэтому качество и вкус производимых нами
					продуктов гарантированы. Это так вкусно, что вы должны
					попробовать!
				</p>
			</div>
			<div
				className='w-full h-[160px] sm:h-[300px] bg-cover bg-no-repeat bg-center'
				style={{ backgroundImage: `url("${bake}")` }}
			></div>
		</section>
	)
}
