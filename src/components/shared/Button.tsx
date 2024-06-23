export default function Button({ label }: { label: string }) {
	return (
		<div className="flex-center p-5">
			<button className="flex-center p-3 w-full bg-black text-white rounded-2xl">{label}</button>
		</div>
	)
}
