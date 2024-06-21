import Header from "../../components/layout/Header"
import Main from "../../components/layout/Main"
import Footer from "../../components/layout/Footer"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col justify-between min-h-screen scroll-m-4">
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}
