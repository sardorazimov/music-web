import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "../ui/input"
import { Search } from "lucide-react"


const Banner = () => {
  return (
    <div className="flex w-full  justify-between">
    <Tabs defaultValue="Music"  className="lg:w-96">
     <TabsList>
      <TabsTrigger value="Music">Music</TabsTrigger>
      <TabsTrigger value="Radio">Radio</TabsTrigger>
      <TabsTrigger value="Podcast">Podcast</TabsTrigger>
      <TabsTrigger value="Live">Live</TabsTrigger>
     </TabsList>
    </Tabs>
    {/* Desktop Banner */}
    <div className="lg:flex hidden gap-5">
        <Input type="text" placeholder="Search" className="lg:w-96  h-9 rounded-xl " />
        <button className="bg-green-500 text-white py-2 px-4 rounded-xl">Search</button>
    </div>
    {/* Mobile Banner */}
    <div className="lg:hidden  flex justify-end cursor-pointer">
        <Search  size={27}/>
    </div>
    {/* Example */}
   {/* <div className="flex justify-end -mt-10 mx-5 ">
    <input type="text" placeholder="Uzmir Listing" className="lg:w-96  h-9 rounded-xl " />
   </div> */}
    </div>
  )
}

export default Banner