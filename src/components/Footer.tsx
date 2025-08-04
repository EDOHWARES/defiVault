import { Github, Twitter, MessageCircle, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Protocol",
      links: [
        { name: "Staking", href: "#" },
        { name: "Yield Farming", href: "#" },
        { name: "Governance", href: "#" },
        { name: "Analytics", href: "#" }
      ]
    },
    {
      title: "Developers",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "GitHub", href: "#", icon: ExternalLink },
        { name: "Bug Bounty", href: "#" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Discord", href: "#", icon: ExternalLink },
        { name: "Twitter", href: "#", icon: ExternalLink },
        { name: "Telegram", href: "#", icon: ExternalLink },
        { name: "Forum", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Brand Kit", href: "#" },
        { name: "Careers", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Discord", icon: MessageCircle, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:contact@defivault.fi" }
  ];

  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold gradient-text mb-4">DefiVault</div>
            <p className="text-foreground/70 mb-6 max-w-sm">
              The next generation of decentralized finance. Secure, efficient, 
              and community-driven DeFi protocols built for everyone.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:glow-primary transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      {link.icon && <link.icon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="glass-card p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-foreground/70">
                Get the latest updates on protocol developments, new features, and community events.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-background/50 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:glow-primary transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-foreground/60 text-sm">
              © 2024 DefiVault. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-6 p-4 rounded-lg bg-foreground/5 border border-white/10">
            <p className="text-xs text-foreground/60 leading-relaxed">
              <strong>Important Legal Notice:</strong> DefiVault is a decentralized protocol. 
              Cryptocurrency investments carry significant risks including potential total loss of capital. 
              Smart contracts may contain bugs or vulnerabilities. Always do your own research and 
              never invest more than you can afford to lose. This platform is not available to 
              residents of certain jurisdictions. By using this protocol, you acknowledge these 
              risks and confirm compliance with your local regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;