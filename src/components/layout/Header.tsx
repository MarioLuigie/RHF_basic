import SvgIcon from '@/components/shared/SvgIcon'
import Logo from '/public/logo/Logo.svg'
import Menu from '@/components/layout/Menu'
import Link from 'next/link'
import { routes } from '@/lib/navigation'

export default function Header() {

  return (
    <header className="flex-between p-4 bg-zinc-100 z-40 shadow-md">
      <Link href={routes.HOME}><SvgIcon path={Logo.src} /></Link>
      <Menu />
    </header>
  )
}