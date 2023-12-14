import Button from "components/Buttons/Button";
import SectionTitle from "components/Typography/SectionTitle";


export default function Sale () {
	
	return (
		<section className="bg-[#FBEDCD] w-full py-20 flex flex-col gap-10 items-center px-8 sm:px-16 md:px-20">
			<SectionTitle>При заказе товара весом более 5 КГ</SectionTitle>
			<h5 className="text-brown text-xl">Пожалуйста делайте заказ за за несколько дней заранее чтобы не было ошибок и недопониманий. Спасибо!</h5>
			<Button link='/catalog'>Заказать</Button>
		</section>
	)
}

