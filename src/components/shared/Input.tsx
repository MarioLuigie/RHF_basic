import { UseFormRegisterReturn } from 'react-hook-form'

export default function Input({
	type,
	placeholder,
	label,
	register,
	errors,
}: {
	type: string
	placeholder: string
	label: string
	register: UseFormRegisterReturn
	errors: any
}) {
	return (
		<>
			<div className="gap-4 flex items-center justify-end w-full">
				<label className="w-[100px] flex justify-end">{label}</label>
				<div className="relative">
					<input
						{...register}
						type={type}
						placeholder={placeholder}
						className="p-2 pl-4 border border-gray-800 rounded-[50px] w-full"
					/>
					{errors && (
						<p className="text-red-400 text-xs w-full absolute bottom-[-20px] left-[17px] z-40">
							{errors.message}
						</p>
					)}
				</div>
			</div>
		</>
	)
}
