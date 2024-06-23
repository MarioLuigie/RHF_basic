'use client'

import Input from '@/components/shared/Input'
import Button from '@/components/shared/Button'

export default function SignInForm() {
	
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('Submitted successfully!')
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='flex flex-col gap-5 items-end justify-center p-10'>
				<Input type="text" placeholder="Email" label="Email" isRequired={true} />
				<Input type="password" placeholder="Password" label="Password" isRequired={true} />
			</div>
			<Button label='Submit'/>
		</form>
	)
}
