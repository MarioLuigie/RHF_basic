'use client'

import Input from '@/components/shared/Input'
import Button from '@/components/shared/Button'

import { useForm, SubmitHandler } from 'react-hook-form'

// Określenie typu dla pól/inputów formularza
type FormFields = {
	email: string
	password: string
}

export default function SignInForm() {
	// Zbudowanie instancji obiektu formularza z react hook form 'const form = useForm<FormFields>()'
	// Podłączenie pól.inputów do form za pomocą register, register przyjmuje name dla inputa
	const { register, handleSubmit } = useForm<FormFields>()

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-5 items-end justify-center p-10">
				<Input
					register={register('email')}
					type="text"
					placeholder="Email"
					label="Email"
				/>
				<Input
					register={register('password')}
					type="password"
					placeholder="Password"
					label="Password"
				/>
			</div>
			<Button label="Submit" />
		</form>
	)
}
