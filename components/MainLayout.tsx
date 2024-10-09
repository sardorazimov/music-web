import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function MainLayout() {
  const featuredArtists = [
    { title: "React Rendezvous", artist: "Ethan Byte", image: "/images/elina.jpg" },
    { title: "Async Awakenings", artist: "Nina Netcode", image: "/images/elina.jpg" },
    { title: "The Art of Reusability", artist: "Lena Logic", image: "/images/elina.jpg" },
    { title: "Stateful Symphony", artist: "Beth Binary", image: "/images/elina.jpg" },
  ]

  const personalPlaylists = [
    { title: "Chill Vibes", image: "/images/yunka.jpg" },
    { title: "Coding Focus", image: "/images/yunka.jpg" },
    { title: "Acoustic Afternoons", image: "/images/yunka.jpg" },
    { title: "Jazz Essentials", image: "/images/yunka.jpg" },
    { title: "Rock Classics", image: "/images/yunka.jpg" },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold mb-4">Featured Artists</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 ">
        {featuredArtists.map((artist, index) => (
          <Card key={index} className="bg-white/10 border-none cursor-pointer hover:bg-white/15">
            <CardContent className="p-4">
              <img
                src={artist.image}
                alt={artist.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="font-semibold text-lg">{artist.title}</h3>
              <p className="text-zinc-400">{artist.artist}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Made for You</h2>
      <p className="text-zinc-400 mb-4">Your personal playlists. Updated daily.</p>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border border-zinc-800">
        <div className="flex w-max space-x-4 p-4 ">
          {personalPlaylists.map((playlist, index) => (
            <Card key={index} className="w-[150px] bg-white/10 border-none cursor-pointer hover:bg-white/15">
              <CardContent className="p-4">
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className="w-full h-[150px] object-cover mb-2 rounded-md"
                />
                <h4 className="font-medium text-sm whitespace-normal">{playlist.title}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}