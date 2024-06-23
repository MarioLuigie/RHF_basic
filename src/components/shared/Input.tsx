export default function Input({
	type,
	placeholder,
	label,
	value,
	onChange,
	name,
	error,
}: {
	type: string
	placeholder: string
	label: string
	value: string
	onChange: React.ChangeEventHandler<HTMLInputElement>
	name: string
	error: string
}) {
	return (
		<>
			<div className="gap-4 flex items-center justify-end w-full">
				<label className="w-[100px] flex justify-end">{label}</label>
				<div className="relative">
					<input
						type={type}
						placeholder={placeholder}
						className="p-2 pl-4 border border-gray-800 rounded-2xl w-full"
						value={value}
						onChange={onChange}
						name={name}
					/>
					<p className="text-red-400 text-xs w-full absolute bottom-[-25px] left-[17px] z-40">{error}</p>
				</div>
			</div>
		</>
	)
}
