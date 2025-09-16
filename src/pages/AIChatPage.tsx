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
      text: "Recommend anime like Demon Slayer",
      action: "recommendation"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Which episode did I leave off?",
      action: "progress"
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      text: "Summarize Attack on Titan S4",
      action: "summary"
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      text: "What's trending this season?",
      action: "trending"
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
    if (userMessage.toLowerCase().includes("recommend")) {
      return "Based on your love for Demon Slayer, I'd recommend:\n\n• **Jujutsu Kaisen** - Similar supernatural combat and great animation\n• **Chainsaw Man** - Dark action with incredible fight scenes\n• **Fire Force** - Unique powers and stunning visuals\n\nWould you like more details about any of these series?";
    }
    
    if (userMessage.toLowerCase().includes("episode") || userMessage.toLowerCase().includes("left off")) {
      return "Looking at your watch history:\n\n• **Attack on Titan** - You're on S4E15 'Battle of Heaven and Earth'\n• **Demon Slayer** - Last watched S3E8 'The Mu in Muichiro'\n• **Jujutsu Kaisen** - Caught up with S2E12 'Right and Wrong, Part 3'\n\nShould I continue any of these for you?";
    }
    
    return "I understand you're asking about anime! I'm here to help with recommendations, tracking your progress, episode summaries, and discovering new series. Could you be more specific about what you'd like to know?";
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
              AI Chat <span className="bg-gradient-primary bg-clip-text text-transparent">Assistant</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get personalized anime recommendations, episode summaries, and track your progress with AI
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
                      Recommendations
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