

'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Play, LayoutGrid, Radio, ListMusic, Music, User, Disc, Clock, BarChart2 } from 'lucide-react'
import { LogOut } from "lucide-react"
import SidebarLinks from "./SidebarLinks"



const menuItems = [
  { section: 'Discover', items: [
    { name: 'Listen Now', icon: Play, path: '/listen-now' },
    { name: 'Browse', icon: LayoutGrid, path: '/browse' },
    { name: 'Radio', icon: Radio, path: '/radio' },
  ]},
  { section: 'Library', items: [
    { name: 'Playlists', icon: ListMusic, path: '/playlists' },
    { name: 'Songs', icon: Music, path: '/songs' },
    { name: 'Made for You', icon: User, path: '/made-for-you' },
    { name: 'Artists', icon: User, path: '/artists' },
    { name: 'Albums', icon: Disc, path: '/albums' },
  ]},
  { section: 'Playlists', items: [
    { name: 'Recently Added', icon: Clock, path: '/recently-added' },
    { name: 'Recently Played', icon: Clock, path: '/recently-played' },
    { name: 'Top Songs', icon: BarChart2, path: '/top-songs' },
    { name: 'Top Albums', icon: BarChart2, path: '/top-albums' },
    { name: 'Top Artists', icon: BarChart2, path: '/top-artists' },
  ]},
]



const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-52 py-10 border-r  fixed  border-white/15 bg-white/5 text-white   h-screen">
        <div className="relative ">
        {menuItems.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-sm font-bold mb-2 border-b border-white/20">{section.section}</h2>
          <ul>
            {section.items.map((item, itemIndex) => {
              const isActive = pathname === item.path
              return (
                <li key={itemIndex} className="mb-1">
                  <Link href={item.path} className={`flex items-center p-2 rounded-md ${isActive ? 'bg-zinc-800' : 'hover:bg-zinc-800'}`}>
                    <item.icon className="w-7 h- mr-3" />
                    <span className={`text-sm ${isActive ? 'font-semibold' : ''}`}>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
        </div>
    </div>
  )
}

export default Sidebar