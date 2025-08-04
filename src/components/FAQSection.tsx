import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is DefiVault and how does it work?",
      answer: "DefiVault is a next-generation DeFi protocol that offers optimized yield farming, secure staking, and decentralized governance. Our smart contracts automatically compound your rewards and optimize yield strategies across multiple protocols to maximize returns while maintaining security."
    },
    {
      question: "How secure is the protocol?",
      answer: "Security is our top priority. Our smart contracts have been audited by leading security firms including CertiK and ConsenSys Diligence. We also implement multi-signature wallets, time-locked upgrades, and maintain a $5M bug bounty program. All funds remain non-custodial, meaning you always maintain control of your assets."
    },
    {
      question: "What are the fees and how are they calculated?",
      answer: "We charge a 2% performance fee on generated yields only - no fees on your principal. Gas fees depend on network congestion and are paid directly to validators. Our Layer 2 integration significantly reduces transaction costs compared to mainnet operations."
    },
    {
      question: "Which blockchains and tokens are supported?",
      answer: "Currently, we support Ethereum mainnet and Polygon, with plans to expand to Arbitrum and Optimism in Q2 2025. We support 100+ major tokens including ETH, WBTC, USDC, USDT, DAI, and many more. Cross-chain bridging allows seamless asset movement between supported networks."
    },
    {
      question: "How does governance work?",
      answer: "DefiVault is governed by DVT token holders through a decentralized autonomous organization (DAO). Token holders can create proposals, vote on protocol changes, and participate in treasury decisions. Each DVT token represents one vote, and proposals require a 4% quorum and simple majority to pass."
    },
    {
      question: "What are the minimum deposit requirements?",
      answer: "There are no minimum deposit requirements for most pools. However, consider gas fees when making smaller deposits on Ethereum mainnet. We recommend using our Polygon integration for smaller amounts to minimize transaction costs."
    },
    {
      question: "How can I track my earnings and portfolio performance?",
      answer: "Our advanced dashboard provides real-time portfolio tracking, yield analytics, transaction history, and performance metrics. You can also connect your wallet to third-party portfolio trackers like Zapper or DeBank for comprehensive DeFi portfolio management."
    },
    {
      question: "What happens if I want to withdraw my funds?",
      answer: "You can withdraw your funds at any time - there are no lock-up periods for most pools. Some specialized strategies may have brief cooldown periods (typically 24-48 hours) to ensure optimal yield generation. Instant withdrawals are available with a small fee."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Get answers to common questions about our DeFi protocol, security measures, 
            and how to maximize your yields.
          </p>
        </div>

        <div className="glass-card p-8 hover:glow-primary transition-all duration-500">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/10 rounded-lg px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-foreground/60 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Contact Support
            </a>
            <span className="hidden sm:inline text-foreground/40">•</span>
            <a 
              href="#" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Join Discord
            </a>
            <span className="hidden sm:inline text-foreground/40">•</span>
            <a 
              href="#" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Read Documentation
            </a>
          </div>
        </div>

        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default FAQSection;