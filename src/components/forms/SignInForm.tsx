'use client'
import { useState } from 'react'

import Input from '@/components/shared/Input'
import Button from '@/components/shared/Button'

export default function SignInForm() {
	const initData = {
		email: '',
		password: '',
	}

	const [data, setData] = useState(initData)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setData(initData)
		console.log('Form submitted successfully!', data)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col gap-6 items-end justify-center p-5">
				<Input
					type="email"
					placeholder="Email"
					label="Email"
					value={data.email}
					onChange={handleChange}
					name="email"
				/>
				<Input
					type="password"
					placeholder="Password"
					label="Password"
					value={data.password}
					onChange={handleChange}
					name="password"
				/>
			</div>
			<Button label='Submit' />
		</form>
	)
}
