import { Printer, Palette, Frame, Truck, Sparkles, Layers, LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tag: string;
  icon: LucideIcon;
  useCases: string[];
  materials: string[];
  pricing: string;
  image: string;
  demoRatePerSqFt: number;
  imageFit?: "cover" | "contain";
}

export const servicesData: ServiceData[] = [
  {
    slug: "acrylic-acp-signboard",
    title: "Acrylic ACP Signboard",
    description: "Premium acrylic branding mounted on ACP panels, combining depth, durability, and a clean corporate finish.",
    longDescription: "Our Acrylic ACP Signboards are the gold standard for premium corporate branding. By combining weather-resistant Aluminum Composite Panels (ACP) with high-gloss 3D acrylic letters, we create signages that offer remarkable depth and durability. Custom-cut to perfection, these boards provide a clean, professional aesthetic that elevates your brand presence instantly.",
    tag: "Premium",
    icon: Layers,
    useCases: ["Corporate Offices", "Retail Storefronts", "Hospitals", "Showrooms"],
    materials: ["3mm/4mm Premium ACP Sheet", "Imported Cast Acrylic (3mm-10mm)", "LED Modules (Optional)"],
    pricing: "Starting from ₹1,200/sq.ft",
    image: "/services/Acrylic ACP Signboard.png",
    demoRatePerSqFt: 1200,
  },
  {
    slug: "inner-cut-acp-signboard",
    title: "Inner Cut ACP Signboard",
    description: "Inner-cut ACP signboards with precision-cut text and logos, optionally backlit for an eye-catching effect.",
    longDescription: "Inner Cut (or Router Cut) ACP Signboards feature text and logos seamlessly carved out of the ACP material itself. We back these cutouts with translucent acrylic sheets and illuminate them from behind. The result is a sleek, flush surface during the day and a strikingly bright, strictly-defined glow at night, eliminating any light spillage.",
    tag: "Architectural",
    icon: Printer,
    useCases: ["Boutiques", "High-end Clinics", "Tech Parks", "Restaurant Facades"],
    materials: ["Router-cut ACP", "Translucent Acrylic Backing", "High-intensity LED Strips"],
    pricing: "Starting from ₹950/sq.ft",
    image: "/services/Inner Cut ACP Signboard.png",
    demoRatePerSqFt: 950,
  },
  {
    slug: "flex-backlit-signboard",
    title: "Flex Backlit Signboard",
    description: "Illuminated flex signboards with internal lighting that keep your brand visible day and night.",
    longDescription: "The most robust and cost-effective solution for large-format, high-visibility branding. Our Flex Backlit Signboards utilize specialized translucent flex material stretched tightly over custom-welded MS frames. With industrial-grade internal LED lighting, your brand message remains vibrant and unmissable, 24/7.",
    tag: "High-Visibility",
    icon: Truck,
    useCases: ["Supermarkets", "Dealerships", "Large Retail Outlets", "Highway Hoardings"],
    materials: ["Star Backlit Flex", "MS Rectangular Pipe Frame", "Tube Lights or LED Modules"],
    pricing: "Price on Request",
    image: "/services/Flex Backlit Signboard.png",
    demoRatePerSqFt: 350,
  },
  {
    slug: "flex-on-frame",
    title: "Flex on Frame",
    description: "Economical flex prints stretched on sturdy frames for hoardings, site boards, and campaign displays.",
    longDescription: "When you need maximum coverage on a budget, Flex on Frame is the ultimate choice. We provide high-resolution solvent/eco-solvent printing on durable frontlit flex material, meticulously stretched over a painted metal or wooden frame. It’s the standard for temporary campaigns, site covers, and large non-illuminated displays.",
    tag: "Standard",
    icon: Frame,
    useCases: ["Construction Site Hoardings", "Event Backdrops", "Promotional Campaigns", "Temporary Signage"],
    materials: ["Frontlit Flex Banner", "MS Frame / Wooden Frame"],
    pricing: "Starting from ₹150/sq.ft",
    image: "/services/Flex On Frame.png",
    demoRatePerSqFt: 150,
    imageFit: "contain",
  },
  {
    slug: "back-lit-letters",
    title: "Back Lit Letters",
    description: "3D letters with soft rear lighting that create a subtle halo glow on the wall for a luxurious appearance.",
    longDescription: "Also known as Halo-Lit or Reverse-Lit letters. These 3D letters (typically crafted from SS, aluminium, or opaque acrylic) are mounted slightly off the wall. LED lights hidden behind the letters cast a warm, soft halo on the surface behind them, creating an incredibly luxurious and sophisticated floating effect.",
    tag: "Luxury",
    icon: Sparkles,
    useCases: ["Hotel Lobbies", "Law Firms", "Jewelry Stores", "Reception Walls"],
    materials: ["Stainless Steel/Aluminium/Acrylic", "Waterproof LED Modules", "Stand-off Mounts"],
    pricing: "Starting from ₹150/inch",
    image: "/services/Back Lit Letters.png",
    demoRatePerSqFt: 2200, // Roughly converting letter pricing to a square foot coverage estimate for demo
  },
  {
    slug: "aluminium-channel-letter",
    title: "Aluminium Channel Letter",
    description: "Robust aluminium channels with illuminated acrylic faces. Built for maximum architectural impact and weather resistance.",
    longDescription: "The industry standard for durable outdoor 3D signage. Aluminium channel letters consist of a fabricated, rust-proof aluminium return (the side) and a translucent acrylic face. They house super-bright LEDs and are designed to withstand harsh weather conditions over many years while delivering crisp, uniform lighting.",
    tag: "Architectural",
    icon: Layers,
    useCases: ["Malls", "Corporate Towers", "Standalone Retail Stores", "Cinemas"],
    materials: ["Aluminium Coil (Returns)", "Cast Acrylic Face", "Trim Cap", "Samsung/Osram LEDs"],
    pricing: "Starting from ₹180/inch",
    image: "/services/Aluminum Channel Letter.webp",
    demoRatePerSqFt: 2500,
  },
  {
    slug: "flex-roll-up-standee",
    title: "Flex Roll Up Standee",
    description: "Lightweight roll up standees in flex for events, exhibitions, and in-store promotions.",
    longDescription: "Portable, lightweight, and incredibly fast to deploy. Our Roll Up Standees feature a retractable base system that houses a high-quality flex or non-tearable PP print. Perfect for trade shows, retail entrances, or internal corporate communications, these standees include a carry bag for ultimate mobility.",
    tag: "Events",
    icon: Palette,
    useCases: ["Exhibitions", "Seminars", "Point of Sale displays", "Corporate Events"],
    materials: ["Aluminium Retractable Base", "Star Flex / PP Non-tearable Print", "Carry Bag"],
    pricing: "Starting from ₹1,200/piece",
    image: "/services/Flex Roll Up Standee.png",
    demoRatePerSqFt: 150, // Roughly 1200 for 18 sq ft (6x3) -> ~66, but setting demo rate to standard print rate
  },
  {
    slug: "acp-elevation-work",
    title: "ACP Elevation Work",
    description: "Complete ACP elevation cladding for building facades, giving your showroom or office a modern, unified look.",
    longDescription: "Transform the entire exterior of your premises. Our ACP Elevation Work involves cladding old or new facades with high-quality Aluminum Composite Panels. This not only conceals untidy architecture but creates a sleek, weather-proof, ultra-modern canvas upon which your brand signage can perfectly sit.",
    tag: "Facade",
    icon: Palette,
    useCases: ["Showroom Exteriors", "Office Buildings", "Petrol Pumps", "Restaurants"],
    materials: ["Exterior Grade ACP Sheets", "Aluminium/MS Framework", "Weather-sealants"],
    pricing: "Price on Request (Subject to Site Survey)",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoRatePerSqFt: 380,
  },
  {
    slug: "golden-acrylic-letters",
    title: "Golden Acrylic Letters",
    description: "Mirror-gold acrylic letters that instantly elevate receptions, storefronts, and feature walls.",
    longDescription: "For brands that demand opulence. Golden Acrylic Letters utilize specialized mirror-finish gold acrylic sheets, precision laser-cut to match your custom typography or logo. They offer the luxurious look of solid brass or gold plating at a fraction of the cost and weight, maintaining their brilliant shine indefinitely.",
    tag: "Luxury",
    icon: Sparkles,
    useCases: ["Spa & Salons", "Jewelry Boutiques", "Executive Offices", "High-end Retail"],
    materials: ["Mirror Gold Acrylic Sheet", "Clear Acrylic/MDF Base (Optional)", "Stud/Flush Mounting"],
    pricing: "Starting from ₹120/inch",
    image: "/services/Golden Acrylic Letters.png",
    demoRatePerSqFt: 2100,
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
