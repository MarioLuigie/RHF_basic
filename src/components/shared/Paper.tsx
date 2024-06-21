export default function Paper({ children }: { children: React.ReactNode}) {
	return (
		<div className="flex flex-col items-center shadow-2xl rounded-[35px] w-[380px] pb-10">
			{children}
		</div>
	)
}
