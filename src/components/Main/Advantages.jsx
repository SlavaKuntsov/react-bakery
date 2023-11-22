import AdvantageCard from "components/Cards/AdvantageCard";
import SectionTitle from "components/Typography/SectionTitle";

import { adv1, adv2, adv3 } from "utils/assetsImports"; 

export default function Advantages () {

	const allIcons = [
		{icon: adv1, title: 'Естественно', text: 'С заботой о вас! Мы используем только натуральные продукты'},
		{icon: adv2, title: 'Просто', text: 'Все гениальное — просто. Все наши продукты отражают эту идеологию и были созданы с этой идеей'},
		{icon: adv3, title: 'С любовью', text: 'Все, что мы делаем, сделано с любовью и заботой о покупателе. Строгий контроль качества продуктов'},
	]
	
	return (
		<section className="advantages flex flex-col gap-20 mt-10">
			<SectionTitle>Преимущества</SectionTitle>
			<div className="iconsGroup flex flex-wrap gap-20 justify-center">
				{allIcons.map((item, id) => {
					return <AdvantageCard 
						key={id}
						icon={item.icon}
						title={item.title}
						text={item.text}
					/>
				})}
			</div>
		</section>
	)
}

