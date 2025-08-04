import { Button } from "@/components/ui/button";
import { Vote, Users, TrendingUp, Clock } from "lucide-react";

const GovernanceSection = () => {
  const activeProposals = [
    {
      id: "DIP-001",
      title: "Increase Staking Rewards for ETH Pool",
      description: "Proposal to increase ETH staking rewards from 8% to 12% APY to attract more liquidity",
      status: "Active",
      votes: { for: 2340000, against: 580000 },
      timeLeft: "3 days",
      participants: 1247
    },
    {
      id: "DIP-002", 
      title: "Multi-Chain Expansion to Arbitrum",
      description: "Deploy protocol on Arbitrum network to reduce gas fees and improve user experience",
      status: "Active",
      votes: { for: 1890000, against: 234000 },
      timeLeft: "6 days",
      participants: 892
    }
  ];

  const governanceStats = [
    { label: "Total Proposals", value: "47", icon: Vote },
    { label: "Active Voters", value: "12.3K", icon: Users },
    { label: "Voting Power", value: "$45M", icon: TrendingUp },
    { label: "Avg Participation", value: "67%", icon: Clock }
  ];

  return (
    <section id="governance" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Decentralized <span className="gradient-text">Governance</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Shape the future of DeFi through transparent, community-driven governance. 
            Your voice, your vote, your protocol.
          </p>
        </div>

        {/* Governance Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {governanceStats.map((stat, index) => (
            <div key={stat.label} className="glass-card p-6 text-center hover:glow-primary transition-all duration-300">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Active Proposals */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center mb-8">Active Proposals</h3>
          
          {activeProposals.map((proposal) => {
            const totalVotes = proposal.votes.for + proposal.votes.against;
            const forPercentage = (proposal.votes.for / totalVotes) * 100;
            
            return (
              <div key={proposal.id} className="glass-card p-6 hover:glow-primary transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary font-mono text-sm">{proposal.id}</span>
                      <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                        {proposal.status}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{proposal.title}</h4>
                    <p className="text-foreground/70">{proposal.description}</p>
                  </div>
                  
                  <div className="lg:ml-8 mt-4 lg:mt-0 lg:text-right">
                    <div className="text-sm text-foreground/60 mb-1">Time Left</div>
                    <div className="font-semibold text-primary">{proposal.timeLeft}</div>
                    <div className="text-sm text-foreground/60 mt-2">{proposal.participants} voters</div>
                  </div>
                </div>

                {/* Voting Progress */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400">For: {(proposal.votes.for / 1000000).toFixed(1)}M votes</span>
                    <span className="text-red-400">Against: {(proposal.votes.against / 1000000).toFixed(1)}M votes</span>
                  </div>
                  
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500"
                      style={{ width: `${forPercentage}%` }}
                    ></div>
                  </div>
                  
                  <div className="text-center text-sm text-foreground/60">
                    {forPercentage.toFixed(1)}% in favor
                  </div>
                </div>

                {/* Vote Buttons */}
                <div className="flex gap-3">
                  <Button variant="default" className="flex-1">
                    Vote For
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Vote Against
                  </Button>
                  <Button variant="ghost">
                    Details
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="glass" size="lg">
            View All Proposals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;