import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="float absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"></div>
        <div className="float absolute top-40 right-20 w-32 h-32 rounded-full bg-accent/10 blur-2xl" style={{ animationDelay: '1s' }}></div>
        <div className="float absolute bottom-40 left-20 w-24 h-24 rounded-full bg-primary/5 blur-xl" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              The Future of{" "}
              <span className="gradient-text">Decentralized Finance</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Experience next-generation DeFi protocols with maximum security, 
              optimal yields, and seamless governance participation.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto my-12">
            <div className="glass-card p-6 text-center hover:glow-primary transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">High Yields</h3>
              <p className="text-sm text-foreground/70">Up to 15% APY on staked assets</p>
            </div>
            <div className="glass-card p-6 text-center hover:glow-primary transition-all duration-300">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Secure Protocol</h3>
              <p className="text-sm text-foreground/70">Audited smart contracts</p>
            </div>
            <div className="glass-card p-6 text-center hover:glow-primary transition-all duration-300">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Instant Swaps</h3>
              <p className="text-sm text-foreground/70">Zero-slippage trading</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="gap-2 pulse-glow">
              Launch App
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="lg">
              Read Docs
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
              <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;