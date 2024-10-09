""

import Header from "@/components/shared/headers/header"
import Sidebar from "@/components/shared/sidebars/Sidebar"



const Dashboardlayout = ({
    children
}:{children:React.ReactNode}) => {
  return (
    <main className="flex">
        <Header />
    <div className="lg:flex hidden lg:w-64 py-16 relative">
        <Sidebar />
    </div>
       <section className="py-16 w-full h-screen ">{children}</section>
   </main>
  )
}

export default Dashboardlayout