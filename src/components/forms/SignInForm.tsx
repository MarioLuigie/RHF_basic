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
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({
		defaultValues: {
			email: 'test@test.com',
			password: 'test',
		},
	})

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000))
			console.log(data)
			throw new Error()
		} catch (err) {
			console.error(err)
			//Złapanie błedu na wskazanego pola
			setError('email', {
				message: 'Backend: This email is already taken',
			})
			//Złapanie błędu dla całego formularza
			// setError('root', {
			// 	message: 'This form is invalid',
			// })
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-10 items-end justify-center p-10 relative">
				<Input
					register={register('email', {
						required: 'Email is required!',
						validate: (value) => {
							if (!value.includes('@')) {
								return 'Email must include @'
							} else {
								return true
							}
						},
					})}
					type="text"
					placeholder="Email"
					label="Email"
					errors={errors.email}
				/>
				<Input
					register={register('password', {
						required: 'Password is required!',
						minLength: { value: 8, message: 'Enter min 8 characters!' },
					})}
					type="password"
					placeholder="Password"
					label="Password"
					errors={errors.password}
				/>
				{/* {errors.root && (
					<p className="text-red-400 text-xs w-full absolute bottom-0 left-0 text-center z-40">
						{errors.root.message}
					</p>
				)} */}
			</div>
			<Button
				disabled={isSubmitting}
				label={isSubmitting ? 'Submitting...' : 'Submit'}
				type="submit"
			/>
		</form>
	)
}

// WALIDACJA poprzez przesyłanie obiektu walidacji jako 2 argument po name w register
// wlasciwosc validate pozwala przeprowadzic wlasna walidacje
// return (
// 	<form onSubmit={handleSubmit(onSubmit)}>
// 		<div className="flex flex-col gap-5 items-end justify-center p-10">
// 			<Input
// 				register={register('email', {
//           	required: true,
//           	pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//						validate: (value) => value.includes('@)
//				})}
// 				type="text"
// 				placeholder="Email"
// 				label="Email"
// 			/>
// 			<Input
// 				register={register('password', {
//						required: true,
//						pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/
//				})}
// 				type="password"
// 				placeholder="Password"
// 				label="Password"
// 			/>
// 		</div>
// 		<Button label="Submit" type="submit" />
// 	</form>
// )
// }

// 1. Przechwycenie błędu z backendu dla konkretnego pola formularza (okreslenie name)
//			setError('email', {
//			message: 'This email is already taken',
//			})
// Wykorzystanie funkcji setError() z useForm w celu przechwycenia errora z backendu kiedy backend zawiedzie
// i zapisanie go do stanu błędu w useForm

// 2. Przechwycenie błędu z backendu dla całego formularza (ogólne)
//			setError('root', {
//			message: 'This form is invalid',
//			})

// OKREŚLENIE WARTOŚCI DOMYŚLNYCH DLA FORMULARZA
// const {
// } = useForm<FormFields>({
// 	defaultValues: {
// 		email: 'abc',
// 		password: '123',
// 	},
// })

// defaultValues to keyword/słowo kluczowe


// @HOOKFORM/RESOLVERS
//@hookform/resolvers polega na ułatwieniu walidacji danych formularza poprzez integrację z popularnymi bibliotekami walidacyjnymi. Dzięki temu możesz korzystać z zaawansowanych schematów walidacyjnych, które są łatwe do zdefiniowania i utrzymania.
//@hookform/resolvers oferuje gotowe do użycia integracje z popularnymi bibliotekami walidacyjnymi, takimi jak:
//Zod: Nowoczesna biblioteka o zwięzłej składni, która zyskuje na popularności.
//Dzięki @hookform/resolvers możesz z łatwością podłączyć wybraną bibliotekę walidacyjną do React Hook Form bez potrzeby ręcznego pisania logiki walidacyjnej. Resolvers zapewniają, że walidacja będzie przebiegać w sposób płynny i zintegrowany.


// ZOD INSTALACJA
