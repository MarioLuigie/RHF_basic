import SignInForm from '@/components/forms/SignInForm'
import Paper from '@/components/shared/Paper'

export default function SignIn() {
	return (
		<div className="flex-center gap-6 grow">
			<Paper>
				<p className="w-full p-5 text-[45px] font-bold text-gray-500">
					Sign in
				</p>
				<div className="pt-10">
					<SignInForm />
				</div>
			</Paper>
		</div>
	)
}
