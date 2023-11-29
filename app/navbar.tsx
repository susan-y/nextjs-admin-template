'use client'

import HomeIcon from '@mui/icons-material/Home'
import AppsIcon from '@mui/icons-material/Apps'
import SettingsIcon from '@mui/icons-material/Settings'
import {usePathname} from 'next/navigation'

import NavBarItem from './navbaritem'

const menuData = [
  {
    title: 'Dashboard',
    icon: HomeIcon,
    href: '/admin'
  },
  {
    title: 'Playground',
    icon: AppsIcon,
    href: '/admin/playground'
  },

  {
    title: 'Settings',
    icon: SettingsIcon,
    href: '/admin/settings'
  }
]

export default function NavBar() {
  const pathname = usePathname()
  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <aside className=" bg-slate-700 text-white">
      <nav className="navMenu ">
        <ul className="list-none p-0 m-0">
          {menuData.map((item, index) => (
            <li
              key={index}
              className={
                isActive(item.href)
                  ? 'text-blue-300 font-semibold bg-opacity-20 bg-black'
                  : ''
              }>
              <NavBarItem item={item}></NavBarItem>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
