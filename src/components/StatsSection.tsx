import { useEffect, useState } from "react";

const StatsSection = () => {
  const [stats, setStats] = useState({
    tvl: 1250000000,
    apy: 12.5,
    users: 45000,
    volume: 850000000
  });

  // Animate counters on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        tvl: prev.tvl + Math.random() * 1000000,
        apy: Number((prev.apy + (Math.random() - 0.5) * 0.1).toFixed(2)),
        users: prev.users + Math.floor(Math.random() * 10),
        volume: prev.volume + Math.random() * 500000
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number, decimals = 0) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(decimals)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(decimals)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(decimals)}K`;
    return `$${num.toFixed(decimals)}`;
  };

  const statCards = [
    {
      title: "Total Value Locked",
      value: formatNumber(stats.tvl, 2),
      change: "+12.5%",
      positive: true
    },
    {
      title: "Average APY",
      value: `${stats.apy}%`,
      change: "+0.3%",
      positive: true
    },
    {
      title: "Active Users",
      value: stats.users.toLocaleString(),
      change: "+8.2%",
      positive: true
    },
    {
      title: "24h Volume",
      value: formatNumber(stats.volume, 1),
      change: "+24.1%",
      positive: true
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Live Protocol <span className="gradient-text">Statistics</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Real-time metrics showcasing the growth and adoption of our DeFi ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => (
            <div key={stat.title} className="glass-card p-6 hover:glow-primary transition-all duration-300 group">
              <div className="text-center">
                <h3 className="text-foreground/60 text-sm font-medium mb-2">{stat.title}</h3>
                <div className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className={`text-sm flex items-center justify-center gap-1 ${
                  stat.positive ? 'text-green-400' : 'text-red-400'
                }`}>
                  <span>{stat.change}</span>
                  <span className="text-foreground/40">24h</span>
                </div>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default StatsSection;