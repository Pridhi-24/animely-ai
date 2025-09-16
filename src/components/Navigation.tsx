import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg glow-primary"></div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AnimeVerse
            </span>
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
          <a href="/profile" className="text-muted-foreground hover:text-primary transition-colors">Profile</a>
          <a href="/ai-chat" className="text-muted-foreground hover:text-primary transition-colors">AI Chat</a>
          <a href="/community" className="text-muted-foreground hover:text-primary transition-colors">Community</a>
          <Button variant="outline-primary">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;