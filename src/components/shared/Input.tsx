export default function Input({
	type,
	placeholder,
	label,
	value,
	onChange,
	name
}: {
	type: string
	placeholder: string
	label: string
	value: string
	onChange: React.ChangeEventHandler<HTMLInputElement>
	name: string
}) {
	return (
		<div className="gap-4 flex items-center justify-end w-full">
			<label className="w-[100px] flex justify-end">{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				className="p-2 pl-4 border border-gray-800 rounded-2xl w-full"
				value={value}
				onChange={onChange}
				name={name}
			/>
		</div>
	)
}
