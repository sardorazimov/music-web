import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import { Heart, Search, SkipBack, SkipForward, Play, Pause, Repeat, Shuffle, Mic2, ListMusic, Laptop2, Volume } from 'lucide-react'

interface Song {
  title: string
  artist: string
  duration: string
  image: string
}

const songList: Song[] = [
  { title: "Ale Inang Porlab Tua", artist: "Jack Marpaung, Hilman Padang", duration: "6:00", image: "/placeholder.svg?height=40&width=40" },
  { title: "Modom", artist: "Jack Marpaung, Hilman Padang", duration: "7:28", image: "/placeholder.svg?height=40&width=40" },
  { title: "Panikkotan", artist: "Jack Marpaung, Hilman Padang", duration: "6:39", image: "/placeholder.svg?height=40&width=40" },
  { title: "Sai Ingot Ma Ale Hasian", artist: "Jack Marpaung, Hilman Padang", duration: "3:34", image: "/placeholder.svg?height=40&width=40" },
]

export default function Component() {
  const [isPlaying, setIsPlaying] = React.useState(false)

  return (
    <div className="flex h-screen text-white bg-black">
      {/* Left Sidebar */}
      <div className="w-64 p-6 bg-gray-900">
        <h2 className="mb-4 text-xl font-bold">Kitaplığın</h2>
        <Input type="search" placeholder="Search..." className="mb-4" />
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Heart className="mr-2 h-4 w-4" /> Beğenilen Şarkılar
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gradient-to-b from-gray-900 to-black">
        <h1 className="mb-4 text-3xl font-bold">En çok dinlenen sonuç</h1>
        <div className="flex items-center mb-6 space-x-4">
          <img src="/placeholder.svg?height=64&width=64" alt="Album cover" className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-bold">Poralab</h2>
            <p className="text-gray-400">Single • Uzmir, Mira</p>
          </div>
          <Button className="ml-auto bg-green-500 hover:bg-green-600">
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
        </div>
        <h2 className="mb-4 text-xl font-bold">Şarkılar</h2>
        <ScrollArea className="h-[calc(100vh-300px)]">
          {songList.map((song, index) => (
            <div key={index} className="flex items-center py-2 hover:bg-gray-800">
              <img src={song.image} alt={`${song.title} cover`} className="w-10 h-10 mr-4" />
              <div className="flex-1">
                <p className="font-medium">{song.title}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
              <span className="text-sm text-gray-400">{song.duration}</span>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 p-6 bg-gray-900">
        <img src="/placeholder.svg?height=240&width=240" alt="Current track" className="w-full mb-4" />
        <h2 className="text-xl font-bold">Poralab</h2>
        <p className="text-gray-400">Uzmir, Mira</p>
      </div>

      {/* Player Controls */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg?height=56&width=56" alt="Now playing" className="w-14 h-14" />
          <div>
            <p className="font-medium">Poralab</p>
            <p className="text-sm text-gray-400">Uzmir, Mira</p>
          </div>
          <Heart className="h-5 w-5 text-green-500" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-2">
            <Shuffle className="h-5 w-5" />
            <SkipBack className="h-5 w-5" />
            <Button
              className="bg-white text-black rounded-full p-2 hover:bg-gray-200"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            <SkipForward className="h-5 w-5" />
            <Repeat className="h-5 w-5" />
          </div>
          <div className="flex items-center w-full max-w-md">
            <span className="text-xs mr-2">1:07</span>
            <Slider className="flex-1" />
            <span className="text-xs ml-2">3:30</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Mic2 className="h-5 w-5" />
          <ListMusic className="h-5 w-5" />
          <Laptop2 className="h-5 w-5" />
          <div className="flex items-center">
            <Volume className="h-5 w-5 mr-2" />
            <Slider className="w-24" />
          </div>
        </div>
      </div>
    </div>
  )
}