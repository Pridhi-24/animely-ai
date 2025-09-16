import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import profileBanner from "@/assets/profile-banner-anime.jpg";
import aotPoster from "@/assets/anime-poster-aot.jpg";
import demonSlayerPoster from "@/assets/anime-poster-demon-slayer.jpg";
import jjkPoster from "@/assets/anime-poster-jjk.jpg";
import { 
  Heart, 
  Star, 
  Calendar, 
  Users, 
  MessageCircle, 
  TrendingUp,
  Award,
  Play,
  Clock,
  Target
} from "lucide-react";

const ProfilePage = () => {
  const userStats = [
    { label: "Anime Watched", value: "247", icon: <Play className="w-4 h-4" /> },
    { label: "Episodes", value: "3,247", icon: <Clock className="w-4 h-4" /> },
    { label: "Watch Time", value: "1,623h", icon: <Target className="w-4 h-4" /> },
    { label: "Following", value: "156", icon: <Users className="w-4 h-4" /> }
  ];

  const personalityBadges = [
    { name: "Action Hero", color: "bg-gradient-secondary", description: "Loves high-energy battles" },
    { name: "Romantic Dreamer", color: "bg-gradient-primary", description: "Enjoys heartfelt stories" },
    { name: "Weekend Binger", color: "bg-gradient-accent", description: "Marathon watching pro" }
  ];

  const currentlyWatching = [
    { title: "Attack on Titan", episode: "S4E15", progress: 75, cover: aotPoster },
    { title: "Demon Slayer", episode: "S3E8", progress: 60, cover: demonSlayerPoster },
    { title: "Jujutsu Kaisen", episode: "S2E12", progress: 90, cover: jjkPoster }
  ];

  const recentActivity = [
    {
      type: "completed",
      text: "Completed watching Chainsaw Man",
      time: "2 hours ago",
      rating: 5
    },
    {
      type: "started", 
      text: "Started watching Frieren: Beyond Journey's End",
      time: "1 day ago"
    },
    {
      type: "review",
      text: "Wrote a review for Your Name",
      time: "2 days ago",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      {/* Profile Header */}
      <div className="relative pt-16">
        {/* Banner */}
        <div className="h-64 relative overflow-hidden" style={{
          backgroundImage: `url(${profileBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="absolute inset-0 bg-gradient-primary/40"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-end space-x-6">
              <Avatar className="w-24 h-24 border-4 border-background glow-primary">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="text-2xl bg-gradient-primary text-primary-foreground">AK</AvatarFallback>
              </Avatar>
              <div className="flex-1 pb-2">
                <h1 className="text-3xl font-bold text-white">Akira_Kurosawa</h1>
                <p className="text-white/80">Anime enthusiast • Tokyo, Japan</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-white/80 text-sm">156 Following</span>
                  <span className="text-white/80 text-sm">892 Followers</span>
                </div>
              </div>
            <Button variant="outline-primary">
              <Users className="w-4 h-4 mr-2" />
              Follow
            </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats Cards */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {userStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="text-primary">{stat.icon}</div>
                      <span className="text-muted-foreground">{stat.label}</span>
                    </div>
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Personality Badges */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Personality Badges
                </CardTitle>
                <CardDescription>AI-generated based on your viewing habits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {personalityBadges.map((badge, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/20 border border-border">
                    <Badge className={`${badge.color} text-white border-0 mb-2`}>
                      {badge.name}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Currently Watching */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Currently Watching
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentlyWatching.map((anime, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-16 h-20 rounded-lg flex-shrink-0 overflow-hidden">
                      <img 
                        src={anime.cover} 
                        alt={anime.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{anime.title}</h4>
                      <p className="text-sm text-muted-foreground">{anime.episode}</p>
                      <Progress value={anime.progress} className="mt-2 h-2" />
                      <p className="text-xs text-muted-foreground mt-1">{anime.progress}% complete</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="activity" className="space-y-6">
              <TabsList className="bg-muted/20 border border-border">
                <TabsTrigger value="activity">Activity Feed</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="lists">Lists</TabsTrigger>
                <TabsTrigger value="friends">Friends</TabsTrigger>
              </TabsList>

              <TabsContent value="activity" className="space-y-6">
                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/10 border border-border">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          {activity.type === 'completed' && <Star className="w-5 h-5 text-primary-foreground" />}
                          {activity.type === 'started' && <Play className="w-5 h-5 text-primary-foreground" />}
                          {activity.type === 'review' && <MessageCircle className="w-5 h-5 text-primary-foreground" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.text}</p>
                          {activity.rating && (
                            <div className="flex items-center space-x-1 mt-2">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < activity.rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                                />
                              ))}
                            </div>
                          )}
                          <p className="text-sm text-muted-foreground mt-2">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle>My Reviews</CardTitle>
                    <CardDescription>Share your thoughts on anime you've watched</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-8">
                      Reviews and ratings will appear here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="lists">
                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle>My Lists</CardTitle>
                    <CardDescription>Organize your anime with custom lists</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-8">
                      Custom anime lists will appear here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="friends">
                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle>Friends</CardTitle>
                    <CardDescription>Connect with fellow anime fans</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-8">
                      Friend connections will appear here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;