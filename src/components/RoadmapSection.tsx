import { CheckCircle, Circle, Clock } from "lucide-react";

const RoadmapSection = () => {
  const roadmapItems = [
    {
      quarter: "Q4 2024",
      title: "Protocol Launch",
      description: "Core DeFi protocol deployment with basic staking and yield farming",
      status: "completed",
      features: ["Smart Contract Deployment", "Basic Staking", "Yield Farming", "Security Audits"]
    },
    {
      quarter: "Q1 2025",
      title: "Governance & Multi-Chain",
      description: "Decentralized governance implementation and expansion to Layer 2 networks",
      status: "in-progress",
      features: ["DAO Governance", "Polygon Integration", "Cross-chain Bridge", "Mobile App Beta"]
    },
    {
      quarter: "Q2 2025",
      title: "Advanced Features",
      description: "Advanced DeFi features including lending protocols and derivatives",
      status: "upcoming",
      features: ["Lending Protocol", "Synthetic Assets", "Options Trading", "Insurance Pools"]
    },
    {
      quarter: "Q3 2025",
      title: "Ecosystem Expansion",
      description: "Integration with major DeFi protocols and institutional features",
      status: "upcoming",
      features: ["Institutional Dashboard", "API & SDKs", "Third-party Integrations", "Advanced Analytics"]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case "in-progress":
        return <Clock className="w-6 h-6 text-primary animate-pulse" />;
      default:
        return <Circle className="w-6 h-6 text-foreground/40" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-400 bg-green-400/10";
      case "in-progress":
        return "border-primary bg-primary/10";
      default:
        return "border-foreground/20 bg-foreground/5";
    }
  };

  return (
    <section id="roadmap" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Development <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Our journey to revolutionize DeFi through continuous innovation and 
            community-driven development.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-foreground/20 transform md:-translate-x-1/2"></div>

          {/* Roadmap Items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div 
                key={item.quarter}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 w-12 h-12 rounded-full border-2 ${getStatusColor(item.status)} flex items-center justify-center transform md:-translate-x-1/2 z-10`}>
                  {getStatusIcon(item.status)}
                </div>

                {/* Content Card */}
                <div className={`glass-card p-6 ml-16 md:ml-0 md:w-5/12 hover:glow-primary transition-all duration-500 ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary font-semibold">{item.quarter}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.status === 'completed' ? 'bg-green-400/20 text-green-400' :
                      item.status === 'in-progress' ? 'bg-primary/20 text-primary' :
                      'bg-foreground/10 text-foreground/60'
                    }`}>
                      {item.status.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-foreground/70 mb-4">{item.description}</p>
                  
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          item.status === 'completed' ? 'bg-green-400' :
                          item.status === 'in-progress' ? 'bg-primary' :
                          'bg-foreground/40'
                        }`}></div>
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl float" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default RoadmapSection;