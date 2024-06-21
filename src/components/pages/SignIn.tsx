import SignInForm from '@/components/forms/SignInForm'
import Paper from '@/components/shared/Paper'

export default function SignIn() {
	return (
		<div className="flex-center gap-6 ">
			<Paper>
				<p className="w-full bg-black p-5 text-[45px] font-bold text-white">
					Sign in
				</p>
				<div className="pt-10">
					<SignInForm />
				</div>
			</Paper>
		</div>
	)
}
