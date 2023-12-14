import SectionTitle from "components/Typography/SectionTitle";
import del from 'assets/del.png'
export default function About() {
	return (
		<div className="about mt-10 flex flex-col gap-6 sm:gap-10 px-8 sm:px-16 md:px-20">
			<SectionTitle>О нас</SectionTitle>
			<p className="text-xl sm:text-2xl">
				Мы - пекарня, специализирующаяся на производстве
				высококачественных замороженных хлебов, тортов, выпечки и теста.
			</p>
			<p className="text-xl sm:text-2xl">
				Наша миссия - предложить свежие и вкусные продукты, которые
				можно легко приготовить в домашних условиях. Мы используем
				только натуральные ингредиенты и тщательно следим за качеством
				нашей продукции.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center justify-items-center ">
				<img src={del} alt="del" />
				<h5 className="w-2/3 text-2xl sm:text-3xl font-medium">Мы доставим нашу выпечку в любую точку Беларуси, ведь наши точки продаж находятся по всей стране! </h5>
			</div>
			<p className="text-xl sm:text-2xl">
				У нас вы найдете широкий выбор хлеба, включая различные виды
				зернового хлеба, багеты и булочки. Наши торты отличаются нежным
				вкусом и прекрасным оформлением, идеальны для любого особого
				случая. Мы также предлагаем ассортимент выпечки - пироги,
				печенье, кексы и многое другое.
			</p>
			<p className="text-xl sm:text-2xl">
				Если вы хотите приготовить свежую выпечку дома, наше
				замороженное тесто станет идеальным выбором. Оно готово к
				использованию и будет давать отличные результаты каждый раз.
			</p>
			<p className="text-xl sm:text-2xl">
				Мы гордимся нашими продуктами и стремимся обеспечить наших
				клиентов высоким качеством и отличным сервисом.
			</p>
		</div>
	)
}
