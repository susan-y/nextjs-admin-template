'use client'

import Link from 'next/link'
import {SvgIcon} from '@mui/material'
import {useRef} from 'react'

interface NavBarItemProps {
  href: string
  icon: any
  title: string
}

export default function NavBarItem({item}: {item: NavBarItemProps}) {
  const linkRef = useRef(null)
  const onDivClick = () => {
    if (linkRef.current) {
      linkRef.current.click()
    }
  }

  return (
    <div
      className="
                  flex
                  flex-row 
                  gap-2 
                  p-4
                  my-1
                  cursor-pointer
                  hover:bg-slate-200
                  hover:bg-opacity-20"
      onClick={onDivClick}>
      <Link href={item.href} ref={linkRef}>
        <div className="flex flex-row gap-2 items-center">
          <SvgIcon component={item.icon} inheritViewBox />
          <div>{item.title}</div>
        </div>
      </Link>
    </div>
  )
}
