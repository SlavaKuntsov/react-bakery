import { Input } from 'antd'
import Button from 'components/Buttons/Button'
import SectionTitle from 'components/Typography/SectionTitle'
import { useState } from 'react'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Form() {

	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [tel, setTel] = useState()

	return (
		<section className='form flex flex-col gap-10 items-center px-8 sm:px-16 md:px-20'>
			<SectionTitle>Связаться с нами</SectionTitle>
			<h5 className='text-xl'>Для дополнительной информации, полного каталога и заказа</h5>
			<form className="flex flex-col gap-4">
				<Input 
					placeholder='Имя' 
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<Input 
					type='email' 
					placeholder='E-mail' 
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<PhoneInput
					country={'by'}
					value={tel}
					onChange={phone => setTel(phone)}
				/>
			</form>
			<div onClick={() => {setEmail(''); setName(''), setTel('+375')}}><Button>Отправить</Button></div>
			
		</section>
	)
}
