export default function Button({
	label,
	onClick,
  type
}: {
	label: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: "button" | "submit" | "reset"
}) {
	return (
		<div className="flex-center p-5">
			<button type={type} className="flex-center p-3 w-full bg-gray-500 text-white rounded-2xl" onClick={onClick}>
				{label}
			</button>
		</div>
	)
}