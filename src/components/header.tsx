import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { AccountMenu } from './accountMenu'
import { NavLink } from './navLink'
import { ThemeToggle } from './theme/themeToggle'
import { Separator } from './ui/separator'

export interface HeaderProps { }

export function Header(props: HeaderProps) {
  return (
    <div className="border-b">
      <header className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h4 w-4" />
            Início
          </NavLink>

          <NavLink to="/ordes">
            <UtensilsCrossed className="h4 w-4" />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </header>
    </div>
  )
}