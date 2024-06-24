import { z } from 'zod'

export const signInSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(8),
		confirmPassword: z.string().min(8),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'], // path wskazuje, gdzie umieścić błąd
	})

export type FormFieldsType = z.infer<typeof signInSchema>
