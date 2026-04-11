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
  originalPrice?: number;
  offerPrice?: number;
  image: string;
  demoRatePerSqFt: number;
  imageFit?: "cover" | "contain";
}

export const servicesData: ServiceData[] = [
  {
    slug: "acrylic-acp-signboard",
    title: "Acrylic ACP Signboard",
    description: "Premium acrylic branding mounted on ACP panels, combining depth, durability, and a clean corporate finish.",
    longDescription: "Our Acrylic ACP Signboards are the gold standard for premium corporate branding. By combining weather-resistant Aluminum Composite Panels (ACP) with high-gloss 3D acrylic letters, we create signages that offer remarkable depth and durability. Custom-cut to perfection, these boards provide a clean, professional aesthetic that elevates your brand presence instantly. Note: Acrylic ACP Signboard in 10 by 4 sheet only 200 inches of letter would be provided if your calculation exceeds that more charges would be added.",
    tag: "Premium",
    icon: Layers,
    useCases: ["Corporate Offices", "Retail Storefronts", "Hospitals", "Showrooms"],
    materials: ["3mm/4mm Premium ACP Sheet", "Imported Cast Acrylic (3mm-10mm)", "LED Modules (Optional)"],
    pricing: "Rs. 750 per sq ft, only 10 by 4 and 8 by 4 feet.",
    originalPrice: 850,
    offerPrice: 750,
    image: "/services/Acrylic ACP Signboard.png",
    demoRatePerSqFt: 750,
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
    pricing: "Rs. 650 per sq ft",
    originalPrice: 750,
    offerPrice: 650,
    image: "/services/Inner Cut ACP Signboard.png",
    demoRatePerSqFt: 650,
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
    pricing: "Rs. 300 per sq ft",
    originalPrice: 400,
    offerPrice: 300,
    image: "/services/Flex Backlit Signboard.png",
    demoRatePerSqFt: 300,
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
    pricing: "Rs. 65 per sq ft",
    originalPrice: 80,
    offerPrice: 65,
    image: "/services/Flex On Frame.png",
    demoRatePerSqFt: 65,
    imageFit: "contain",
  },
  {
    slug: "ss-letter-backlit-golden",
    title: "SS Letter (Backlit Golden)",
    description: "3D Stainless Steel letters with backlighting that create a golden halo glow on the wall for a luxurious appearance.",
    longDescription: "Also known as Halo-Lit or Reverse-Lit letters. These 3D letters crafted from Premium Stainless Steel are mounted slightly off the wall. LED lights hidden behind the letters cast a warm, soft golden halo on the surface behind them, creating an incredibly luxurious and sophisticated floating effect. A perfect blend of metallic sheen and elegant illumination.",
    tag: "Luxury",
    icon: Sparkles,
    useCases: ["Hotel Lobbies", "Law Firms", "Jewelry Stores", "Reception Walls"],
    materials: ["Premium Stainless Steel", "Waterproof LED Modules", "Stand-off Mounts"],
    pricing: "Rs. 380 per inch",
    originalPrice: 450,
    offerPrice: 380,
    image: "/services/Back Lit Letters.png",
    demoRatePerSqFt: 380, // Updated base rate for demo
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
    pricing: "Rs. 180 per sq inch",
    originalPrice: 220,
    offerPrice: 180,
    image: "/services/Aluminum Channel Letter.webp",
    demoRatePerSqFt: 180,
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
    pricing: "₹1,500 per unit",
    originalPrice: 1850,
    offerPrice: 1500,
    image: "/services/Flex Roll Up Standee.png",
    demoRatePerSqFt: 0, // Roughly 1200 for 18 sq ft (6x3) -> ~66, but setting demo rate to standard print rate
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
    pricing: "Rs. 220 per sq ft only white or plain colour",
    originalPrice: 300,
    offerPrice: 220,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoRatePerSqFt: 220,
  },
  {
    slug: "visiting-cards",
    title: "Visiting Cards",
    description: "Premium quality custom visiting cards to make a lasting first impression. Available in various finishes.",
    longDescription: "Your visiting card is often the first physical touchpoint a client has with your brand. We design and print premium visiting cards with exquisite finishes such as matte, gloss, velvet touch, spot UV, and foil stamping. Elevate your networking with cards that exude professionalism and quality. Up for enquiry only.",
    tag: "Print",
    icon: Printer,
    useCases: ["Networking Events", "Corporate Meetings", "Client Handouts", "Brand Identity"],
    materials: ["Premium Cardstock", "Matte/Gloss Lamination", "Special Finishes (UV/Foil)"],
    pricing: "For Enquiry Only",
    image: "/services/Visiting Cards.png",
    demoRatePerSqFt: 0,
    imageFit: "contain",
  },
  {
    slug: "lollipop-signboard",
    title: "Lollipop Signboard",
    description: "Double-sided illuminated projecting signs for maximum visibility from multiple directions.",
    longDescription: "Lollipop or Flange signboards protrude from the wall, making them unmissable to foot and vehicle traffic approaching from either side. We offer two variants: Premium Acrylic for a crystal clear, glowing luxury look, or Flex Backlit for a highly economical and vibrant display. Perfect for cafes, clinics, and high-street retail.",
    tag: "High-Visibility",
    icon: Frame,
    useCases: ["Cafes", "Clinics", "Retail Stores", "Street Navigation"],
    materials: ["Acrylic or Flex Backlit", "Aluminium/MS Frame", "LED Illumination"],
    pricing: "Acrylic: ₹14,500 | Flex: ₹9,500 (Excl. GST)",
    image: "/services/Lollipop Signboard.png",
    demoRatePerSqFt: 0,
  },
  {
    slug: "event-stall-flex-printing",
    title: "Event Stall Flex Printing",
    description: "High-resolution flex prints custom-designed for exhibition stalls, events, and trade shows.",
    longDescription: "Make your event stall stand out with our premium flex printing services. We seamlessly print large-format vibrant designs that perfectly fit around stall structures, creating an immersive brand environment. Ideal for short-term and medium-term exhibitions, providing an impactful backdrop for your audience. Up for enquiry only.",
    tag: "Events",
    icon: Printer,
    useCases: ["Exhibitions", "Trade Shows", "Corporate Events", "Flea Markets"],
    materials: ["Star Frontlit Flex", "High-Resolution Solvent/Eco-Solvent Print"],
    pricing: "For Enquiry Only",
    image: "/services/Event Stall Flex Printing.png",
    demoRatePerSqFt: 0,
  },
  {
    slug: "customise-wallpaper",
    title: "Customise Wallpaper",
    description: "Transform your interior spaces with high-definition, tailor-made wall graphics and wallpapers.",
    longDescription: "Turn any blank wall into a masterpiece. Our customised wallpapers are printed on premium textured or smooth vinyl media, tailored perfectly to your wall dimensions and brand aesthetics. From corporate motifs and motivational quotes to stunning artistic landscapes for homes or cafes, we bring your vision to life. Up for enquiry only.",
    tag: "Interior",
    icon: Palette,
    useCases: ["Office Interiors", "Cafes & Restaurants", "Living Rooms", "Retail Feature Walls"],
    materials: ["Premium Printable Wallpaper", "Eco-Solvent/UV Inks", "Adhesive Backing"],
    pricing: "For Enquiry Only",
    image: "/services/Customise Wallpaper.png",
    demoRatePerSqFt: 0,
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
