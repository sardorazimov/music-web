
"use client";

import {
  Clapperboard,
  Compass,
  Heart,
  Home,
  MessageCircle,
  PlusSquare,
  Search,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { name: "Home", href: "/dashboard/home", icon: Home },
  {
    name: "Search",
    href: "/dashboard/search",
    icon: Search,
    hideOnMobile: true,
  },
  { name: "Explore", href: "/dashboard/explore", icon: Compass },
  {
    name: "Reels",
    href: "/dashboard/reels",
    icon: Clapperboard,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: MessageCircle,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: Heart,
    hideOnMobile: true,
  },
  {
    name: "Create",
    href: "/dashboard/create",
    icon: PlusSquare,
  },
];
const SidebarLinks = () => {
    const pathname = usePathname();
  return (
    <div>
        {links.map((link) => {
            const LinkIcon = link.icon;
            const isActive = pathname === link.href;
            return (
                <Link 
                  key={link.name}
                 href={link.href}
                 className={buttonVariants({
                    variant: isActive ? "active" : "hover",
                    className: cn(" md:!justify-start space-x-2 md:!my-1.5 !px-3 w-full", {"hidden md:flex": link.hideOnMobile}),
                    size:'lg',
                 })}
                > 
                <LinkIcon className="w-6" />
                <p className={`${cn("hidden lg:block",{
                    "font-extra-bold": isActive,
                })}`}>
                    {link.name}
                </p>
            </Link>
            )
        })}
    </div>
  )
}

export default SidebarLinks