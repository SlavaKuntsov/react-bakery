import Button from "components/Buttons/Button";
import AssortmentCard from "components/Cards/AssortmentCard"
import SectionTitle from "components/Typography/SectionTitle";

import { breadCard, cakeCard, doughCard } from "utils/assetsImports"

export default function MainAssortment () {

	const allCards = [
		{img: breadCard, link: '/catalog/bread', title: 'Хлеб замороженный'},
		{img: cakeCard, link: '/catalog/cake', title: 'Торты замороженные'},
		{img: doughCard, link: '/catalog/dough', title: 'Тестовые изделия'},
	]
	
	return (
		<section className="MainAssortment mx-8 sm:mx-16 md:mx-20 flex flex-col gap-8 sm:gap-10 lg:gap-20 z-10">
			<SectionTitle>Основной ассортимент</SectionTitle>
			<div className="allCards flex flex-row flex-wrap sm:flex-nowrap gap-14 sm:gap-8 md:gap-12 lg:gap-24 mx-14 sm:mx-0">
				{allCards.map((item, id) => {
					return <AssortmentCard img={item.img} title={item.title} link={item.link} key={id}/>
				})}
			</div>
			<Button to="/catalog" position={'center'}>Показать все</Button>
		</section>
	)
}

