import Button from "components/Buttons/Button";
import AssortmentCard from "components/Cards/AssortmentCard"
import SectionTitle from "components/Typography/SectionTitle";

import { breadCard, breadCard2 } from "utils/assetsImports"

export default function MainAssortment () {

	const allCards = [
		{img: breadCard, title: 'Хлеб замороженный'},
		{img: breadCard2, title: 'Торты замороженные'},
		{img: breadCard, title: 'Тестовые изделия'},
	]
	
	return (
		<section className="MainAssortment mx-8 sm:mx-16 md:mx-20 flex flex-col gap-8 sm:gap-10 lg:gap-20">
			<SectionTitle>Основной ассортимент</SectionTitle>
			<div className="allCards flex flex-row flex-wrap sm:flex-nowrap gap-14 sm:gap-8 md:gap-12 lg:gap-24 mx-14 sm:mx-0">
				{allCards.map((item, id) => {
					return <AssortmentCard img={item.img} title={item.title} key={id}/>
				})}
			</div>
			<Button to="/catalog" position={'center'}>Показать все</Button>
		</section>
	)
}

