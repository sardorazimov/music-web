'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Play, LayoutGrid, Radio, ListMusic, Music, User, Disc, Clock, BarChart2, MenuIcon, Link } from 'lucide-react'
import { usePathname } from "next/navigation";

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
   

const MobileMenu = () => {
    const pathname = usePathname();
  return (
    <div className="">
      <Sheet >
        <SheetTrigger asChild>
            <MenuIcon className="w-7 text-white transition-opacity cursor-pointer" />
        </SheetTrigger>
        <SheetContent side={"left"} className="w-52 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>

        </SheetHeader>
        <div className="w-full py-10  flex     h-screen">
        <div className="w-full">
        {menuItems.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-md text-center font-bold mb-2 border-b border-white/20">{section.section}</h2>
          <ul>
            {section.items.map((item, itemIndex) => {
              const isActive = pathname === item.path
              return (
                <li key={itemIndex} className="mb-1">
                  <Link href={item.path} className={`flex items-center p-2 rounded-md ${isActive ? 'bg-zinc-800' : 'hover:bg-zinc-800'}`}>
                    <item.icon className="w-10 h-10  mr-3 text-yellow-50" />
                    <span className={`text-md ${isActive ? 'font-semibold' : ''}`}>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
        </div>
    </div>
        </SheetContent>
     </Sheet> 
    </div>
  )
}

export default MobileMenu