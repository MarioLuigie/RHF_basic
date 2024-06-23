export default function Input({
	type,
	placeholder,
	label,
	isRequired,
}: {
	type: string
	placeholder: string
	label: string
	isRequired: boolean
}) {
	return (
		<div className="gap-4 flex items-center justify-end w-full">
			<label className="w-[100px] flex justify-end">{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				className="p-2 pl-4 border border-gray-800 rounded-[50px] w-full"
				required={isRequired}
			/>
		</div>
	)
}
