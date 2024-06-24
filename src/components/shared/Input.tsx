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
			<div className="gap-2 flex flex-col w-full">
				<label className="w-[200px] flex justify-start text-sm text-gray-500">
					{label}
				</label>
				<div className="relative">
					<input
						{...register}
						type={type}
						placeholder={placeholder}
						className="p-2 pl-4 border rounded-[50px] w-full shadow-xl focus:outline-none focus:ring-gray-500 focus:border-gray-500"
					/>
					{errors && (
						<p className="text-red-400 text-xs w-full absolute top-[45px] left-[17px] z-40">
							{errors.message}
						</p>
					)}
				</div>
			</div>
		</>
	)
}
