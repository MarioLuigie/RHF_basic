import SignInForm from '@/components/forms/SignInForm'
import Paper from '@/components/shared/Paper'

export default function SignIn() {
	return (
		<div className="flex-center gap-[20px] grow">
			<Paper>
				<p className="w-full p-5 text-[45px] font-bold text-gray-500">
					Sign in
				</p>
				<div className="w-full">
					<SignInForm />
				</div>
			</Paper>
		</div>
	)
}
