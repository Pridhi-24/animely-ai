import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-anime-tracker.jpg";
import { MessageCircle, Users, Zap, Heart, Star, TrendingUp, Bot } from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbot Assistant",
      description: "Get anime recommendations, episode summaries, and track your progress with AI"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Profiles",
      description: "Rich profiles with personality badges, activity feeds, and dynamic backgrounds"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Interactive Clubs",
      description: "Join discussions, chat with spoiler filters, and connect with fellow fans"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Recommendations",
      description: "AI-powered suggestions based on your watch history and friend activity"
    }
  ];

  const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Anime Tracked", value: "15K+" },
    { label: "AI Conversations", value: "2M+" },
    { label: "Communities", value: "500+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg glow-primary"></div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AnimeVerse
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/profile" className="text-muted-foreground hover:text-primary transition-colors">Profile</a>
            <a href="/ai-chat" className="text-muted-foreground hover:text-primary transition-colors">AI Chat</a>
            <a href="/community" className="text-muted-foreground hover:text-primary transition-colors">Community</a>
            <Button variant="outline-primary">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="anime-slide-up">
              <Badge className="mb-4 bg-gradient-primary text-primary-foreground border-0">
                Next-Gen Anime Tracking
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Your Anime Universe
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Powered by AI
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Track, discover, and connect with fellow anime fans. Get AI recommendations, 
                build your personality profile, and join the ultimate anime social network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="gradient" className="text-primary-foreground">
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline-primary">
                  Explore Features
                </Button>
              </div>
            </div>
            <div className="relative anime-float">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-3xl"></div>
              <img 
                src={heroImage} 
                alt="AnimeVerse AI-powered anime tracking platform"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">AnimeVerse</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience anime tracking like never before with AI assistance and social features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:border-primary transition-all hover:glow-primary group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground mb-4 group-hover:glow-primary transition-all">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Join the <span className="bg-gradient-primary bg-clip-text text-transparent">Community</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start tracking your anime, connect with fans, and discover your next favorite series with AI
          </p>
          <Button size="lg" variant="gradient">
            Get Started - It's Free!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg glow-primary"></div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AnimeVerse
              </span>
            </div>
            <p className="text-muted-foreground">© 2024 AnimeVerse. Built with love for anime fans.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;