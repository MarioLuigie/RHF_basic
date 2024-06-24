export default function Button({
	label,
	onClick,
	type,
	disabled,
}: {
	label: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	type?: 'button' | 'submit' | 'reset'
	disabled?: boolean
}) {
	return (
		<div className="flex-center p-5">
			<button
				disabled={disabled}
				type={type}
				className="flex-center p-3 w-full bg-gray-500 text-white rounded-2xl"
				onClick={onClick}
			>
				{label}
			</button>
		</div>
	)
}
