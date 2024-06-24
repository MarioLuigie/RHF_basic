import Link from 'next/link'
import { nav } from '@/lib/navigation'
import SvgIcon from '../shared/SvgIcon'

type Ilink = {
	route: string
	label: string
	icon: string
}

const MenuItem = ({ link }: { link: Ilink }) => {
	return (
		<li>
			<Link
				href={link.route}
				className="flex flex-col justify-center items-center gap-2"
			>
				<SvgIcon path={link.icon} />
				<p>{link.label}</p>
			</Link>
		</li>
	)
}

export default function Menu() {
	return (
		<nav className='pr-5'>
			<ul className="flex gap-6">
				{nav.map((link) => (
					<MenuItem key={link.route} link={link} />
				))}
			</ul>
		</nav>
	)
}
