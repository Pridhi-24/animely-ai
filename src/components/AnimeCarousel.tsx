import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Play } from "lucide-react";
import aotPoster from "@/assets/anime-poster-aot.jpg";
import demonSlayerPoster from "@/assets/anime-poster-demon-slayer.jpg";
import jjkPoster from "@/assets/anime-poster-jjk.jpg";

const AnimeCarousel = () => {
  const featuredAnime = [
    {
      title: "Attack on Titan",
      rating: 9.0,
      status: "Completed",
      poster: aotPoster,
      genre: "Action, Drama"
    },
    {
      title: "Demon Slayer",
      rating: 8.7,
      status: "Ongoing",
      poster: demonSlayerPoster,
      genre: "Action, Supernatural"
    },
    {
      title: "Jujutsu Kaisen",
      rating: 8.9,
      status: "Ongoing", 
      poster: jjkPoster,
      genre: "Action, Supernatural"
    }
  ];

  return (
    <div className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Featured</span> Anime
          </h2>
          <p className="text-muted-foreground">Discover the most popular anime series</p>
        </div>
        
        <div className="flex space-x-6 animate-slide-x">
          {featuredAnime.map((anime, index) => (
            <Card key={index} className="min-w-[300px] bg-gradient-card border-border hover:border-primary transition-all hover:glow-primary group cursor-pointer">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={anime.poster} 
                  alt={anime.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg truncate">{anime.title}</h3>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{anime.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{anime.genre}</p>
                <div className="flex items-center justify-between">
                  <Badge variant={anime.status === "Ongoing" ? "default" : "secondary"} className={
                    anime.status === "Ongoing" 
                      ? "bg-gradient-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }>
                    {anime.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeCarousel;