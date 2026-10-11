import samflixyLogo from "../assets/samflixy.png";
import samzoneLogo from "../assets/samzone.png";
import sm9Logo from "../assets/sm9-logo.png";
import samsypayLogo from "../assets/samsypay.png";
import utilitiesLogo from "../assets/samsy-utilities.png";
import samsytalkLogo from "../assets/samsytalk.png";
import aitoolsLogo from "../assets/samsy-ai-tools.png";

// ============================================================
//  ALL EDITABLE CONTENT LIVES HERE.
//  Change text, links, numbers, news etc. in this one file.
// ============================================================

export const site = {
  name: "SAMSY",
  tagline: "Digital Independence",
  email: "samsyunipvtltd@gmail.com",
  website: "www.samsy.in",
  copyright: "© 2026 Samsy Uni Private Limited. All rights reserved.",
  builtInIndia: "Make in India",
  buildForWorld: "Build for the World",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "SMZ Token", to: "/smz-token" },
  { label: "SM9 Project", to: "/sm9-project" },
  { label: "Blockchain Explorer", to: "/blockchain-explorer" },
  { label: "Roadmap", to: "/roadmap" },
  { label: "Whitepaper", to: "/whitepaper" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];

export const heroFeatures = [
  { icon: "shield", title: "Secure Blockchain", text: "Transparency & Trust" },
  { icon: "id", title: "Digital Identity", text: "One Identity, Multiple Services" },
  { icon: "pay", title: "Payments", text: "Fast | Secure | Global" },
  { icon: "users", title: "Ecosystem", text: "For Individuals, Freelancers & MSMEs" },
];

export const market = [
  { symbol: "SMZ", price: "$0.0824", change: "+12.45%", type: "samsy", seed: 1 },
  { symbol: "SM9", price: "$0.0437", change: "+8.32%", type: "samsy", seed: 2 },
  { symbol: "BTC", price: "$62,430.21", change: "+2.14%", type: "btc", seed: 3 },
  { symbol: "ETH", price: "$3,234.67", change: "+3.21%", type: "eth", seed: 4 },
];

export const services = [
  { icon: "wallet", title: "Samsy Pay", text: "Payments & Wallet", desc: "Send, receive and store digital value with a secure wallet built for India and the world.", logo: samsypayLogo },
  { icon: "chat", title: "Samsy Talk", text: "Social & Content", desc: "A social platform where creators own their content and audience.", logo: samsytalkLogo },
  { icon: "cart", title: "Samzone (E-Commerce)", text: "Shop & Grow", desc: "Marketplace tools that help MSMEs sell online and reach new customers.", logo: samzoneLogo },
  { icon: "ai", title: "Samsy AI Tools", text: "Smart Solutions", desc: "AI-powered tools for writing, design, analytics and automation.", logo: aitoolsLogo },
  { icon: "play", title: "Samflixy (OTT Platform)", text: "Entertainment", desc: "Stream movies, shows and regional content on Samflixy, Samsy's next-gen streaming platform.", logo: samflixyLogo },
  { icon: "bill", title: "Samsy Utilities", text: "Bills & Services", desc: "Pay bills, recharge and access everyday services in one place.", logo: utilitiesLogo },
  { icon: "sparkles", title: "Samsy Makeover", text: "Beauty & Lifestyle", desc: "Premium grooming, salon and beauty wellness services with seamless digital appointments and payments." },
];

export const tokens = {
  smz: { name: "SMZ Token", sub: "Utility Token for the Samsy Ecosystem" },
  sm9: { name: "SM9 Project", sub: "Next Gen Blockchain Infrastructure", logo: sm9Logo },
};

export const about = {
  heading: "Building a Stronger Digital Tomorrow",
  text: "Samsy is more than a platform – it's a movement. We are creating a swadeshi blockchain ecosystem that empowers people, supports businesses and drives financial freedom globally.",
  stats: [
    { value: "100M+", label: "Users Target" },
    { value: "50+", label: "Countries" },
    { value: "1000+", label: "MSMEs Support" },
    { value: "∞", label: "Growth Potential" },
  ],
  quote: "My dream is to build a digital ecosystem that gives every individual, every freelancer and every MSME a fair chance to grow and succeed.",
  founder: "Pradip Jadhav",
  founderRole: "Founder, Samsy Uni Private Limited & Samsy Capital Limited",
  instagram: "https://www.instagram.com/pradipjadhav_1/",
  linkedin: "https://www.linkedin.com/in/pradipjadhavofficial",
  youtube: "https://youtu.be/SsihN2Emehw?feature=shared",
};

export const news = [
  { date: "22 Apr 2026", title: "Samsy Blockchain Testnet to Mainnet Launch Announcement", tag: "New", body: "Our testnet has completed its final audit and the mainnet launch roadmap is now live." },
  { date: "19 Apr 2026", title: "Samsy Uni Sponsored State Level Dr. Babasaheb Ambedkar Karate Championship 2026 – Pune", tag: "Event", body: "Samsy Uni proudly supported young athletes at the state level championship." },
  { date: "25 Apr 2026", title: "Tiger Leader International Award 2026 – Indore", tag: "Event", body: "Samsy leadership was honoured at the Tiger Leader International Award 2026." },
  { date: "10 Apr 2026", title: "SMZ Listing Soon – Stay Tuned!", tag: "Update", body: "SMZ listing details will be shared with the community very soon." },
  { date: "01 Apr 2026", title: "Samsy Uni – MSME & Freelancer Registration Initiative", tag: "Initiative", body: "Registrations are open for MSMEs and freelancers joining the Samsy ecosystem." },
];

export const quickLinks = [
  { icon: "doc", title: "Whitepaper", text: "Read our official whitepaper", to: "/whitepaper" },
  { icon: "road", title: "Roadmap", text: "Our journey to the future", to: "/roadmap" },
  { icon: "search", title: "Blockchain Explorer", text: "View on-chain activity", to: "/blockchain-explorer" },
  { icon: "faq", title: "FAQ", text: "Common questions", to: "/contact" },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/pradipjadhav_1/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/pradipjadhavofficial" },
  { name: "YouTube", href: "https://youtu.be/SsihN2Emehw?feature=shared" },
];

export const roadmap = [
  { phase: "Phase 1", period: "2024", title: "Foundation", status: "done", items: ["Company formation", "Concept & research", "Core team onboarding"] },
  { phase: "Phase 2", period: "2025", title: "Testnet", status: "done", items: ["Samsy testnet launch", "Wallet beta", "Community building"] },
  { phase: "Phase 3", period: "2026", title: "Mainnet & Listing", status: "current", items: ["Mainnet launch", "SMZ exchange listing", "Samsy Pay rollout"] },
  { phase: "Phase 4", period: "2027", title: "Ecosystem Expansion", status: "next", items: ["Samsy Talk & OTT launch", "MSME marketplace", "AI tools suite"] },
  { phase: "Phase 5", period: "2028+", title: "Global Scale", status: "next", items: ["50+ countries", "100M users target", "Cross-chain bridges"] },
];

export const tokenomics = [
  { label: "Community & Ecosystem", value: 40 },
  { label: "Team & Advisors", value: 15 },
  { label: "Liquidity", value: 20 },
  { label: "Treasury", value: 15 },
  { label: "Marketing", value: 10 },
];

export const explorerStats = [
  { label: "Latest Block", value: "1,284,392" },
  { label: "Transactions", value: "8.2M" },
  { label: "Wallets", value: "312,540" },
  { label: "Avg. Block Time", value: "2.1s" },
];

export const explorerBlocks = [
  { block: "1,284,392", hash: "0x8f3a...c21d", txs: 142, time: "2s ago" },
  { block: "1,284,391", hash: "0x1b9e...77a0", txs: 98, time: "4s ago" },
  { block: "1,284,390", hash: "0xa04c...e912", txs: 121, time: "6s ago" },
  { block: "1,284,389", hash: "0x5d72...3f08", txs: 87, time: "8s ago" },
  { block: "1,284,388", hash: "0xc6b1...904e", txs: 133, time: "10s ago" },
];
