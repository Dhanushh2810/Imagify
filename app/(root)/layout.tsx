
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Sideb from "@/components/Sideb"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row  flex-1 overflow-hidden">
    {/* Sidebar */}
    <div className=" h-full">
      <Sideb />
    </div>

    {/* Page content */}
    <div className="flex-1 mt-16 overflow-y-auto p-6">
      {children}
    </div>
  </div>
  )
}