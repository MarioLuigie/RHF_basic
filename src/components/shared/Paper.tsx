export default function Paper({ children }: { children: React.ReactNode}) {
	return (
		<div className="flex flex-col items-center shadow-2xl rounded-[35px] w-[450px] p-10">
			{children}
		</div>
	)
}
