'use client'
import { useState } from 'react'

import Input from '@/components/shared/Input'
import Button from '@/components/shared/Button'

interface IinitData {
	email: string
	password: string
}

interface IinitErrors {
	email: string
	password: string
}

export default function SignInForm() {
	const initData = {
		email: '',
		password: '',
	}
// Init errors tablica stringów albo obiektem, ktorego pola posiadaja tablice stringów
	const initErrors = {
		email: '',
		password: '',
	}

	const [data, setData] = useState<IinitData>(initData)
	const [errors, setErrors] = useState<IinitErrors>(initErrors)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setErrors(initErrors)

		if(!data.email.includes('@')) {
			setErrors((prev) => ({...prev, email: 'Email must include @'}))
			return
		}

		if(data.password.length < 8) {
			setErrors((prev) => ({...prev, password: 'Enter min 8 characters'}))
			return
		}


		setData(initData)
		console.log('Form submitted successfully!', data)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col gap-10 items-end justify-center p-5 pb-20">
				<Input
					type="text"
					placeholder="Email"
					label="Email"
					value={data.email}
					onChange={handleChange}
					name="email"
					error={errors.email}
				/>
				<Input
					type="password"
					placeholder="Password"
					label="Password"
					value={data.password}
					onChange={handleChange}
					name="password"
					error={errors.password}
				/>
			</div>
			<Button label='Submit' />
		</form>
	)
}
