import { 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  Lock, 
  BarChart3,
  Coins,
  Globe
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Multi-Layer Security",
      description: "Advanced smart contract audits, insurance protocols, and real-time monitoring ensure maximum fund protection.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Optimized Yields",
      description: "Dynamic yield farming strategies and auto-compounding mechanisms to maximize your returns across multiple protocols.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second transaction processing with minimal gas fees through our Layer 2 integration and optimized routing.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Governance Power",
      description: "Shape the future of DeFi through decentralized voting, proposal creation, and community-driven development.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Lock,
      title: "Non-Custodial",
      description: "Maintain full control of your assets with our non-custodial architecture. Your keys, your crypto, always.",
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time portfolio tracking, yield analytics, and performance insights to optimize your DeFi strategy.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Coins,
      title: "Multi-Asset Support",
      description: "Support for 100+ tokens across multiple chains with seamless cross-chain bridging and swapping.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Cross-Chain",
      description: "Seamlessly interact with protocols across Ethereum, Polygon, BSC, and other major blockchain networks.",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Experience the next generation of DeFi with our comprehensive suite of 
            advanced features designed for both beginners and power users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card p-6 hover:glow-primary transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`absolute inset-0 w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default FeaturesSection;