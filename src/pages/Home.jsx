import { Gradient, GradientMobile } from 'components/Gradient'

import StartBlock from 'components/Main/StartBlock'
import MainAssortment from 'components/Main/MainAssortment';
import Advantages from 'components/Main/Advantages';
import Form from 'components/Main/Form';
import Sale from 'components/Main/Sale';
import BakeForYou from 'components/Main/BakeForYou';

export default function Home() {
	return (
		<>
			<Gradient />
			<GradientMobile />
			
			<StartBlock />
			<MainAssortment />
			<Advantages />
			<BakeForYou />
			<Sale />
			<Form />
		</>
	)
}
