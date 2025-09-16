import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  Bot, 
  Send, 
  Sparkles, 
  MessageCircle, 
  Search,
  Clock,
  Star,
  TrendingUp
} from "lucide-react";

const AIChatPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm your anime AI assistant. I can help you with recommendations, episode summaries, track your progress, and answer any anime-related questions. What would you like to know?",
      timestamp: "Just now"
    }
  ]);

  const quickActions = [
    {
      icon: <Search className="w-4 h-4" />,
      text: "Recommend anime like Attack on Titan",
      action: "recommendation"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Which episode did I leave off?",
      action: "progress"
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      text: "Summarize Demon Slayer Season 3",
      action: "summary"
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      text: "What's trending this season?",
      action: "trending"
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: "Best romance anime 2024",
      action: "romance"
    },
    {
      icon: <Bot className="w-4 h-4" />,
      text: "Rate Jujutsu Kaisen for me",
      action: "rating"
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: "user",
        content: message,
        timestamp: "Just now"
      };
      
      setMessages([...messages, newMessage]);
      setMessage("");
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: "ai",
          content: generateAIResponse(message),
          timestamp: "Just now"
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const generateAIResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("recommend") || message.includes("suggestion")) {
      if (message.includes("demon slayer") || message.includes("tanjiro")) {
        return "🔥 Based on Demon Slayer, perfect recommendations:\n\n• **Jujutsu Kaisen** - Dark supernatural battles with incredible animation\n• **Attack on Titan** - Intense action and emotional storytelling  \n• **Fire Force** - Unique fire powers and stunning visuals\n• **Chainsaw Man** - Gritty action with amazing fight choreography\n• **Tokyo Ghoul** - Dark themes with supernatural elements\n\n💡 Want detailed reviews or trailers for any of these?";
      }
      if (message.includes("romance") || message.includes("love")) {
        return "💕 Romance anime recommendations:\n\n• **Your Name (Kimi no Na wa)** - Beautiful love story across time\n• **Weathering With You** - Stunning romance with supernatural elements\n• **A Silent Voice** - Emotional journey about redemption and love\n• **Toradora!** - Classic romantic comedy with great character development\n• **Horimiya** - Sweet slice-of-life romance\n• **Violet Evergarden** - Beautiful and emotional storytelling\n\nWhich type of romance appeals to you most? 😊";
      }
      if (message.includes("action") || message.includes("battle")) {
        return "⚔️ Epic action anime recommendations:\n\n• **One Piece** - Epic adventures and incredible world-building\n• **Naruto/Boruto** - Classic ninja action with deep lore\n• **Dragon Ball Super** - Legendary battles and power-ups\n• **My Hero Academia** - Superhero action with heart\n• **Mob Psycho 100** - Unique animation and psychic battles\n• **Hunter x Hunter** - Strategic battles and complex storytelling\n\n🎯 Want me to rank these by animation quality or story depth?";
      }
      return "✨ Popular anime recommendations right now:\n\n• **Frieren: Beyond Journey's End** - Philosophical fantasy masterpiece\n• **Chainsaw Man** - Dark action with incredible animation\n• **Spy x Family** - Wholesome family comedy with action\n• **Cyberpunk: Edgerunners** - Stunning cyberpunk tragedy\n• **Bocchi the Rock!** - Music and social anxiety done perfectly\n• **Lycoris Recoil** - Girls with guns and great friendship\n\nTell me your favorite genres for more targeted suggestions! 🎌";
    }
    
    if (message.includes("episode") || message.includes("left off") || message.includes("progress")) {
      return "📺 Your current anime progress:\n\n• **Attack on Titan Final Season** - You're on Episode 15 'Battle of Heaven and Earth'\n   Next: The final confrontation begins! Epic battles await! 🔥\n\n• **Demon Slayer Swordsmith Village** - Last watched Episode 8\n   Next: Tanjiro's new training arc continues! ⚔️\n\n• **Jujutsu Kaisen Season 2** - Caught up with Episode 12\n   Status: Shibuya Incident arc - prepare for emotional damage! 😭\n\n🎬 Which one should we continue watching together?";
    }
    
    if (message.includes("summary") || message.includes("recap")) {
      if (message.includes("attack on titan") || message.includes("aot")) {
        return "📖 Attack on Titan Season 4 Summary:\n\n🏝️ **Part 1**: Marley arc reveals the truth about Titans and the outside world\n⚔️ **Part 2**: War for Paradis begins, Eren's true plan unfolds\n🌍 **Final Part**: The Rumbling starts - Eren begins destroying the world\n\n💔 **Key moments**: Sasha's death, Eren's betrayal, alliance formation\n🔮 **Where you are**: Final battle to stop Eren and save humanity\n\nReady for the emotional finale? It's going to be intense! 😱";
      }
      return "📚 I can provide detailed summaries for any anime series! Just tell me which one:\n\n• Attack on Titan (any season)\n• Demon Slayer (any arc) \n• Jujutsu Kaisen (any season)\n• Naruto/Boruto\n• One Piece (any arc)\n• My Hero Academia\n• And hundreds more!\n\n🎯 Which anime summary do you need?";
    }
    
    if (message.includes("trending") || message.includes("popular") || message.includes("season")) {
      return "🔥 Currently trending anime (Fall 2024):\n\n**🏆 Top Airing:**\n• Frieren: Beyond Journey's End - Fantasy masterpiece\n• Spy x Family Season 2 - Family comedy perfection\n• Jujutsu Kaisen Season 2 - Shibuya Incident chaos\n\n**📈 Rising Stars:**\n• 16bit Sensation: Another Layer - Nostalgic gaming anime\n• Goblin Slayer II - Dark fantasy returns\n• Captain Tsubasa Season 2 - Soccer anime revival\n\n**🎭 Genres dominating:**\n• Isekai still strong with new creative twists\n• Slice-of-life having a major comeback\n• Dark fantasy gaining massive popularity\n\nWhat genre interests you most? 🎌";
    }
    
    if (message.includes("character") || message.includes("waifu") || message.includes("best")) {
      return "👥 Let's talk characters! Here are some fan favorites:\n\n**🔥 Most Popular (2024):**\n• Makima (Chainsaw Man) - Complex and terrifying\n• Yor Forger (Spy x Family) - Assassin mom perfection\n• Power (Chainsaw Man) - Chaotic blood fiend\n• Frieren (Frieren) - Immortal elf with depth\n\n**⚔️ Best Protagonists:**\n• Tanjiro (Demon Slayer) - Pure-hearted demon slayer\n• Senku (Dr. Stone) - Science genius\n• Thorfinn (Vinland Saga) - Character development king\n\nWho's your favorite anime character? I'd love to discuss! 😊";
    }
    
    if (message.includes("rating") || message.includes("score") || message.includes("review")) {
      return "⭐ Here are my anime ratings (based on community consensus):\n\n**🏆 Perfect 10/10:**\n• Fullmetal Alchemist: Brotherhood - Storytelling masterpiece\n• Attack on Titan (overall) - Incredible plot twists\n• Your Name - Visual and emotional perfection\n\n**🔥 Solid 9/10:**\n• Demon Slayer - Amazing animation, simple story\n• Jujutsu Kaisen - Great power system and characters\n• Spy x Family - Wholesome perfection\n\n**📊 Want detailed reviews?** I can break down:\n• Animation quality • Story depth • Character development\n• Music/soundtrack • Emotional impact • Rewatchability\n\nWhich anime should I review in detail? 🎭";
    }

    if (message.includes("manga") || message.includes("read")) {
      return "📚 Manga recommendations & updates:\n\n**🔥 Must-read manga:**\n• One Piece - Epic ongoing adventure (1000+ chapters!)\n• Berserk - Dark fantasy masterpiece\n• Chainsaw Man Part 2 - Currently releasing weekly\n• Jujutsu Kaisen - Ahead of anime, intense battles\n\n**📖 Manga vs Anime status:**\n• Attack on Titan - Manga completed, anime caught up\n• Demon Slayer - Manga finished, anime ongoing\n• My Hero Academia - Manga ending soon, anime behind\n\n**✨ Hidden gems:**\n• Hell's Paradise - Unique art and story\n• Dandadan - Supernatural comedy gold\n• Kaiju No. 8 - Monster action perfection\n\nWant reading order or where to start? 📖";
    }
    
    return "🎌 I'm your anime AI assistant! I can help with:\n\n🔍 **Recommendations** - Tell me what you like!\n📺 **Episode tracking** - 'Where did I leave off?'\n📚 **Summaries & recaps** - Any series, any season\n📊 **Ratings & reviews** - Detailed anime analysis\n🔥 **Trending shows** - What's hot right now\n👥 **Character discussions** - Favorite characters\n📖 **Manga updates** - Reading recommendations\n\n💡 **Try asking:**\n• 'Recommend anime like Naruto'\n• 'Summarize Demon Slayer season 3'\n• 'What's trending this season?'\n• 'Best romance anime 2024'\n\nWhat anime topic interests you most? 😊";
  };

  const handleQuickAction = (actionText: string) => {
    setMessage(actionText);
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full glow-primary mb-4">
              <Bot className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Anime AI <span className="bg-gradient-primary bg-clip-text text-transparent">Assistant</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your personal otaku companion! Get anime recommendations, episode summaries, 
              character discussions, and track your anime journey with advanced AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Actions Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>Try these popular requests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-left h-auto p-3 hover:bg-primary/10 hover:border-primary border border-transparent"
                      onClick={() => handleQuickAction(action.text)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-primary mt-0.5">{action.icon}</div>
                        <span className="text-sm leading-relaxed">{action.text}</span>
                      </div>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle>AI Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground border-0">
                      <Star className="w-3 h-3 mr-1" />
                      Smart Recommendations
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-gradient-secondary text-secondary-foreground border-0">
                      <Clock className="w-3 h-3 mr-1" />
                      Progress Tracking
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground border-0">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Episode Summaries
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground border-0">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending Analysis
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-card border-border h-[600px] flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex items-start space-x-3 ${
                        msg.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <Avatar className={`w-8 h-8 ${msg.type === "ai" ? "bg-gradient-primary" : "bg-gradient-secondary"}`}>
                        <AvatarFallback className="text-white text-sm">
                          {msg.type === "ai" ? <Bot className="w-4 h-4" /> : "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`max-w-[80%] ${msg.type === "user" ? "text-right" : ""}`}>
                        <div
                          className={`rounded-lg p-4 ${
                            msg.type === "user"
                              ? "bg-primary text-primary-foreground ml-auto"
                              : "bg-muted/20 border border-border"
                          }`}
                        >
                          <p className="whitespace-pre-line leading-relaxed">{msg.content}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">{msg.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="border-t border-border p-4">
                  <div className="flex space-x-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask me anything about anime..."
                      className="flex-1 bg-muted/20 border-border focus:border-primary"
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      variant="gradient"
                      disabled={!message.trim()}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    AI responses are generated for demonstration purposes
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatPage;