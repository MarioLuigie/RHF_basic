export default function Button({
	label,
	onClick,
}: {
	label: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
	return (
		<div className="flex-center p-5">
			<button className="flex-center p-3 w-full bg-gray-500 text-white rounded-2xl" onClick={onClick}>
				{label}
			</button>
		</div>
	)
}