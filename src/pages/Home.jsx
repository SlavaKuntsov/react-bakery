import StartBlock from 'components/Main/StartBlock'
import { Gradient, GradientMobile } from 'components/Gradient'
import MainAssortment from '../components/Main/MainAssortment';
import Advantages from 'components/Main/Advantages';

export default function Home() {
	return (
		<>
			{/* <Gradient /> */}
			<GradientMobile />
			<StartBlock />
			<MainAssortment />
			<Advantages />
		</>
	)
}
