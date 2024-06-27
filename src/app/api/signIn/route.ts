import { signInSchema } from '@/lib/utils/zod'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	//dodatkowo sprawdzam po stronie backendu czy dane otrzymane z frontendu
	//są zgodne ze schematem walidacji z Zod bo nie mozna ufać niczemu co przychodzi od klienta
	//result to obiekt zwrócony przez safeParse() i wygląda tak:
	// {
	//   success: boolean;
	//   data?: T; // dane typu zgodnego ze schematem
	//   error?: ZodError; // obiekt błędów, jeśli walidacja się nie powiodła
	// }

  //Obiekt błędów result.error jest instancją obiektu ZodError i dopiero ZodError zawiera pole errors które jest tablicą typu ZodIssue[]
  // interface ZodError {
  //   errors: ZodIssue[];
  // }
  
  // interface ZodIssue {
  //   path: (string | number)[]; - sciezka do pola danych ktore jest niepoprawne
  //   message: string; - wiadomosc błedu
  //   code: string; - kod błedu
  // }
  
	//struktura obiektu błędów czyli obiektu result.error:
	// {
	//   "errors": [
	//     {
	//       "message": "Invalid email address",
	//       "path": ["email"]
	//     },
	//     {
	//       "message": "Password must be at least 8 characters",
	//       "path": ["password"]
	//     }
	//   ]
	// }

	//!!!WAZNE W NOWYM ZOD RESULT.ERROR.ERRORS JEST ZASTĄPIONE RESULT.ERROR.ISSUES
					// 	const result = z
					//   .object({
					//     name: z.string(),
					//   })
					//   .safeParse({ name: 12 });

					// if (!result.success) {
					//   result.error.issues;
						/* [
								{
									"code": "invalid_type",
									"expected": "string",
									"received": "number",
									"path": [ "name" ],
									"message": "Expected string, received number"
								}
						] */
					// }
	
	const body: unknown = await req.json() //moja data z onSubmit

	const result = signInSchema.safeParse(body)

	// Jeżeli walidacja się nie powiodła, zwracam odpowiedź z błędami walidacji
	// Dostęp do tablicy błędów za pomocą result.error.errors - TEZ DZIAŁA ALE TERAZ result.error.issues
	// if(!result.success) {
	//   return NextResponse.json({ errors: result.error.issues }, { status: 400 }) - zwracam obiekt z tablicą błędów
	// }

	let zodErrors = {}

	if (!result.success) {
		result.error.issues.forEach((issue) => {
			zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
		})

	}

	let newData = {}

	if(result.success) {
		newData = result.data
	}
	
	// return NextResponse.json({ errors: result.error.errors }, { status: 400 })
	return NextResponse.json(
		Object.keys(zodErrors).length > 0 
		? { success: false, errors: zodErrors } 
		: { success: true, data: newData }
	)

	// return new Response(JSON.stringify({}), { status: 201 })
	// zamiast new Response uzywamy NextResponse
}
