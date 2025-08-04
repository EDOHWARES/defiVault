import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Github, 
  MessageCircle, 
  Twitter,
  FileText,
  Video,
  Users,
  ExternalLink
} from "lucide-react";

const DocsSection = () => {
  const resourceCategories = [
    {
      title: "Documentation",
      icon: BookOpen,
      description: "Comprehensive guides and API references",
      links: [
        { name: "Getting Started", url: "#", icon: FileText },
        { name: "API Reference", url: "#", icon: FileText },
        { name: "Smart Contracts", url: "#", icon: FileText },
        { name: "Integration Guide", url: "#", icon: FileText }
      ]
    },
    {
      title: "Developer Resources",
      icon: Github,
      description: "Open source code and development tools",
      links: [
        { name: "GitHub Repository", url: "#", icon: Github },
        { name: "SDK & Libraries", url: "#", icon: FileText },
        { name: "Bug Bounty", url: "#", icon: FileText },
        { name: "Audit Reports", url: "#", icon: FileText }
      ]
    },
    {
      title: "Community",
      icon: Users,
      description: "Connect with our growing community",
      links: [
        { name: "Discord Server", url: "#", icon: MessageCircle },
        { name: "Twitter", url: "#", icon: Twitter },
        { name: "Telegram", url: "#", icon: MessageCircle },
        { name: "Forum", url: "#", icon: MessageCircle }
      ]
    },
    {
      title: "Learning",
      icon: Video,
      description: "Tutorials and educational content",
      links: [
        { name: "Video Tutorials", url: "#", icon: Video },
        { name: "DeFi Academy", url: "#", icon: BookOpen },
        { name: "Webinars", url: "#", icon: Video },
        { name: "Blog Posts", url: "#", icon: FileText }
      ]
    }
  ];

  const communityStats = [
    { platform: "Discord", members: "25K+", icon: MessageCircle },
    { platform: "Twitter", members: "48K+", icon: Twitter },
    { platform: "GitHub", members: "156", icon: Github },
    { platform: "Telegram", members: "12K+", icon: MessageCircle }
  ];

  return (
    <section id="docs" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Documentation & <span className="gradient-text">Community</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Everything you need to get started, from comprehensive documentation 
            to an active community ready to help.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat) => (
            <div key={stat.platform} className="glass-card p-6 text-center hover:glow-primary transition-all duration-300">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">{stat.members}</div>
              <div className="text-sm text-foreground/60">{stat.platform}</div>
            </div>
          ))}
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {resourceCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card p-8 hover:glow-primary transition-all duration-500 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                  <p className="text-foreground/60 text-sm">{category.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {category.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group/link"
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="w-4 h-4 text-foreground/60 group-hover/link:text-primary transition-colors" />
                      <span className="text-foreground/80 group-hover/link:text-foreground transition-colors">
                        {link.name}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-foreground/40 group-hover/link:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="glass-card p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Join thousands of developers and users building the future of decentralized finance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="gap-2">
              <BookOpen className="w-5 h-5" />
              Read Documentation
            </Button>
            <Button variant="glass" size="lg" className="gap-2">
              <MessageCircle className="w-5 h-5" />
              Join Discord
            </Button>
            <Button variant="glass" size="lg" className="gap-2">
              <Github className="w-5 h-5" />
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default DocsSection;