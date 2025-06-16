"use client"
import {  SidebarClose, SidebarOpen } from "lucide-react"
import {
  
  Home,

  Image,
  Sparkle,
  ScanSearch,
  Rainbow,
  Camera,

  User,
  DoorClosedLocked,
} from "lucide-react"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const items = [
  { title: "Home", url: "/profile", icon: Home },
  { title: "Image Restore", url: "/image", icon: Image },
  { title: "Generative Fill", url: "#", icon: Sparkle },
  { title: "Object Remove", url: "#", icon: ScanSearch },
  { title: "Object Recolor", url: "#", icon: Rainbow },
  { title: "Background Remove", url: "#", icon: Camera },
]
const usr = [
  { title: "Profile", url: "/profile", icon: User },
  { title: "Buy Credits", url: "/buy", icon: DoorClosedLocked },
]

const Sideb = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) setCollapsed(true)
  }, [isMobile])

  return (
    <div
      className={`flex flex-col justify-between h-full bg-zinc-900/85 backdrop-blur-xl mt-10 border-r-2 border-gray-700 transition-all duration-300 ${
        collapsed ? "w-[64px]" : "w-[220px]"
      }`}
    >
      <div>
        {/* Toggle button */}
        <div className="flex justify-end p-2">
          <button

            onClick={() => setCollapsed((prev) => !prev)}
            className="text-white flex  hover:text-cyan-300 mt-5"
          >
            {collapsed?  <SidebarOpen  size={20}/>:   <SidebarClose  size={20}/>}
           
          
          </button>
        </div>

        {/* Menu items */}
        <nav>
          {items.map((item) => (
            <Link href={item.url} key={item.title}>
              <div
                className="flex items-center gap-3 p-4 pl-6 hover:bg-zinc-800 cursor-pointer transition-colors"
                onClick={() => isMobile && setCollapsed(true)}
              >
                <item.icon size={20} className="shrink-0" />
                {!collapsed && (
                  <span className="whitespace-nowrap">{item.title}</span>
                )}
              </div>
            </Link>
          ))}
        </nav>
      </div>

      <div>
        {usr.map((us) => (
          <Link href={us.url} key={us.title}>
            <div
              className="flex items-center gap-3 p-4 pl-6 hover:bg-zinc-800 cursor-pointer transition-colors"
              onClick={() => isMobile && setCollapsed(true)}
            >
              <us.icon size={20} className="shrink-0" />
              {!collapsed && (
                <span className="whitespace-nowrap">{us.title}</span>
              )}
            </div>
          </Link>
        ))}
        <Link href='/' >
            <div
              className="flex items-center gap-3 p-4 pl-6 hover:bg-zinc-800 cursor-pointer transition-colors"
              onClick={() => isMobile && setCollapsed(true)}
            >
              <DoorClosedLocked size={20} className="shrink-0" />
              {!collapsed && (
                <span className="whitespace-nowrap">Buy Credits</span>
              )}
            </div>
          </Link>
      </div>
    </div>
  )
}

export default Sideb
