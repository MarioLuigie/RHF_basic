import { z } from 'zod'

export const signInSchema = z
	.object({
		email: z.string().email({ message: 'Enter correct email address' }),
		password: z.string().min(8),
		confirmPassword: z.string().min(8),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'], // path wskazuje, gdzie umieścić błąd
	})

export type FormFieldsType = z.infer<typeof signInSchema>

//Metoda refine: Dodajesz niestandardową walidację, która sprawdza, czy pole password pasuje do pola confirmPassword. Jeśli nie, błąd jest przypisany do pola confirmPassword.
//używasz metody .refine() bezpośrednio na polu confirmPassword, podczas gdy powinna być użyta na poziomie całego obiektu, aby mieć dostęp do obu pól (password i confirmPassword). Metoda .refine() musi być użyta na schemacie obiektu, a nie na pojedynczym polu.

//NADPISANIE STRINGA Z ERROREM DOMYSLNEGO WŁASNYM STRINGIEM PRZEZ WYSŁANIE OBIEKTU Z POLEM MESSAGE
//		password: z.string().min(8), jakodrugii argument przesylasz stringa u wowczas zastepujesz domyslny string z bledem własnym
//		password: z.string().min(8, 'Error...'),
//import { z } from 'zod';
// const schema = z.object({
//   name: z.string().min(1, { message: "Name is required" }),
// });
