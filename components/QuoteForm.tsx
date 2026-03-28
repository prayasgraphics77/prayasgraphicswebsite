"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { servicesData } from "@/lib/services-data";
import { useCart, type DimensionUnit } from "@/lib/cart-context";
import { ChevronRight, ArrowLeft } from "lucide-react";

type ServiceSlug = string;

export default function QuoteForm({ 
  inlineService, 
  onComplete 
}: { 
  inlineService?: string; 
  onComplete?: () => void; 
} = {}) {
  const searchParams = useSearchParams();
  const initialService = inlineService || searchParams.get("service");
  const { addItem, openCart } = useCart();
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<ServiceSlug>(initialService || "");
  const [serviceDetails, setServiceDetails] = useState<Record<string, string>>({});
  
  // Dimensions state
  const [dimensions, setDimensions] = useState({ width: "", height: "", unit: "ft" as DimensionUnit });
  
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialService && step === 1 && servicesData.some(s => s.slug === initialService)) {
      setStep(2);
    }
  }, [initialService, step]);

  const handleNext = () => {
    if (step === 1 && !selectedService) {
      setError("Please select a service to continue.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleBack = () => {
    setError("");
    setStep(1);
  };

  const widthNum = parseFloat(dimensions.width) || 0;
  const heightNum = parseFloat(dimensions.height) || 0;
  let area = 0;
  if (widthNum > 0 && heightNum > 0) {
      area = dimensions.unit === "in" ? (widthNum * heightNum) / 144 : (widthNum * heightNum);
  }
  const currentService = servicesData.find(s => s.slug === selectedService);
  const estimatedPrice = currentService && area > 0 ? Math.round(area * currentService.demoRatePerSqFt) : 0;

  const handleAddToCart = () => {
    const service = servicesData.find((s) => s.slug === selectedService);
    if (!service) return;

    addItem({
      id: Math.random().toString(36).substring(2, 9),
      serviceName: service.title,
      serviceSlug: service.slug,
      width: widthNum > 0 ? widthNum : undefined,
      height: heightNum > 0 ? heightNum : undefined,
      unit: dimensions.unit,
      area: area > 0 ? area : undefined,
      estimatedPrice: estimatedPrice > 0 ? estimatedPrice : undefined,
      details: serviceDetails,
    });

    if (onComplete) {
      onComplete(); // Trigger modal close
    } else {
      if (initialService) {
        router.push("/services"); 
      } else {
        setServiceDetails({});
        setDimensions({ width: "", height: "", unit: "ft" });
        setStep(1);
        setSelectedService("");
      }
    }
    openCart();
  };

  const updateServiceDetail = (key: string, value: string) => {
    setServiceDetails((prev) => ({ ...prev, [key]: value }));
  };

  const commonSelectClass = "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 focus:border-[#800080] focus:outline-none focus:ring-1 focus:ring-[#800080] transition-colors";
  const commonInputClass = "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 focus:border-[#800080] focus:outline-none focus:ring-1 focus:ring-[#800080] transition-colors";

  const renderDimensionInputs = (label = "Size (Width × Height)") => (
    <div>
      <label className="block text-sm font-semibold text-zinc-700 mb-1">{label}</label>
      <div className="flex gap-2 items-center">
        <input 
          type="number" 
          placeholder="Width" 
          value={dimensions.width} 
          onChange={(e) => setDimensions(prev => ({...prev, width: e.target.value}))} 
          className={commonInputClass} 
        />
        <span className="text-zinc-400 font-medium font-mono text-sm">×</span>
        <input 
          type="number" 
          placeholder="Height" 
          value={dimensions.height} 
          onChange={(e) => setDimensions(prev => ({...prev, height: e.target.value}))} 
          className={commonInputClass} 
        />
        <select 
          value={dimensions.unit} 
          onChange={(e) => setDimensions(prev => ({...prev, unit: e.target.value as DimensionUnit}))} 
          className="w-24 rounded-xl border border-zinc-200 bg-white px-3 py-3 text-zinc-900 focus:border-[#800080] focus:outline-none focus:ring-1 focus:ring-[#800080] transition-colors"
        >
          <option value="ft">ft</option>
          <option value="in">in</option>
        </select>
      </div>
      {area > 0 && (
         <div className="mt-3 inline-flex flex-wrap items-center gap-4 text-sm font-semibold rounded-xl bg-[#800080]/5 border border-[#800080]/10 px-4 py-3 w-full">
           <div className="flex items-center gap-1.5 min-w-max text-[#800080]">
             <span className="opacity-70 font-medium">Total Area:</span> 
             {area.toFixed(2)} sq.ft
           </div>
           
           <div className="w-px h-4 bg-[#800080]/20 hidden sm:block"></div>
           
           <div className="flex items-center gap-1.5 min-w-max text-emerald-700">
             <span className="opacity-70 font-medium">Approximate Rate:</span> 
             ₹{estimatedPrice.toLocaleString('en-IN')}
           </div>
         </div>
      )}
    </div>
  );

  const renderServiceFields = () => {
    if (!selectedService) return null;

    switch (selectedService) {
      case "acrylic-acp-signboard":
        return (
          <div className="space-y-4">
            {renderDimensionInputs()}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Quantity</label>
                <input type="number" placeholder="1" className={commonInputClass} onChange={(e) => updateServiceDetail("Quantity", e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Placement</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Placement", e.target.value)}>
                  <option>Select</option>
                  <option>Outdoor</option>
                  <option>Indoor</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Have Design File?</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Has Design", e.target.value)}>
                  <option>Select</option>
                  <option>Yes, I have Corel/AI file</option>
                  <option>No, I need design help</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Installation?</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Installation Required", e.target.value)}>
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No, dispatch only</option>
                </select>
              </div>
            </div>
          </div>
        );

      case "inner-cut-acp-signboard":
        return (
          <div className="space-y-4">
            {renderDimensionInputs()}
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-1">Text/Logo to Cut</label>
              <input type="text" placeholder="What should it say?" className={commonInputClass} onChange={(e) => updateServiceDetail("Text/Logo", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Lighting</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Lighting", e.target.value)}>
                  <option>Select</option>
                  <option>Backlit (LED glow)</option>
                  <option>Non-backlit</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Quantity</label>
                <input type="number" placeholder="1" className={commonInputClass} onChange={(e) => updateServiceDetail("Quantity", e.target.value)} />
              </div>
            </div>
          </div>
        );

      case "flex-backlit-signboard":
        return (
          <div className="space-y-4">
            {renderDimensionInputs()}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Components</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Components", e.target.value)}>
                  <option>Select</option>
                  <option>Complete Board (Frame + Print)</option>
                  <option>Only Print (I have a frame)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Have Design?</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Has Design", e.target.value)}>
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No, I need design</option>
                </select>
              </div>
            </div>
          </div>
        );

      case "flex-on-frame":
        return (
          <div className="space-y-4">
            {renderDimensionInputs()}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Type</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Type", e.target.value)}>
                  <option>Select</option>
                  <option>Single-sided</option>
                  <option>Double-sided</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Quantity</label>
                <input type="number" placeholder="1" className={commonInputClass} onChange={(e) => updateServiceDetail("Quantity", e.target.value)} />
              </div>
            </div>
          </div>
        );

      case "back-lit-letters":
      case "aluminium-channel-letter":
      case "golden-acrylic-letters":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-1">Text/Word to Make</label>
              <input type="text" placeholder="e.g. LUXE" className={commonInputClass} onChange={(e) => updateServiceDetail("Text", e.target.value)} />
            </div>
            {/* We will still use the unified dimensions because the demoRatePerSqFt converts it realistically via area. For individual letters, total area coverage is standard proxy */}
            {renderDimensionInputs("Overall Wall Area for Letters")}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Lighting / Finish</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Lighting / Finish", e.target.value)}>
                  <option>Select</option>
                  <option>Mirror Finish</option>
                  <option>Matte Finish</option>
                  <option>LED Warm White</option>
                  <option>LED Cool White</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Installation</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Installation", e.target.value)}>
                  <option>Select</option>
                  <option>Outdoor</option>
                  <option>Indoor</option>
                  <option>Dispatch Only</option>
                </select>
              </div>
            </div>
          </div>
        );

      case "flex-roll-up-standee":
        return (
          <div className="space-y-4">
            {/* For standee we override the unit manually via notes previously, but now we can just let them type dimensions */}
            {renderDimensionInputs("Target Size (Standard is 6x3 ft)")}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Have Design?</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Has Design", e.target.value)}>
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Quantity</label>
                <input type="number" placeholder="1" className={commonInputClass} onChange={(e) => updateServiceDetail("Quantity", e.target.value)} />
              </div>
            </div>
          </div>
        );

      case "acp-elevation-work":
        return (
          <div className="space-y-4">
            {renderDimensionInputs("Facade Dimensions")}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Preferred Color/Finish</label>
                <input type="text" placeholder="e.g. Metallic Silver" className={commonInputClass} onChange={(e) => updateServiceDetail("Color", e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Site Visit Required?</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Site Visit Required", e.target.value)}>
                  <option>Select</option>
                  <option>Yes, need measurement</option>
                  <option>No, I have exact specs</option>
                </select>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-4">
            {renderDimensionInputs()}
            <div className="mt-2">
              <label className="block text-sm font-semibold text-zinc-700 mb-1">Requirements Description</label>
              <textarea placeholder="Describe your requirement..." rows={4} className={commonInputClass} onChange={(e) => updateServiceDetail("Requirements", e.target.value)}></textarea>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-[32px] border border-zinc-100 shadow-xl overflow-hidden mt-8 mb-20">
      <div className="p-8 md:p-12">
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-600 text-sm font-medium border border-red-100">
            {error}
          </div>
        )}

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-heading font-extrabold text-zinc-900 mb-2">What do you need a quote for?</h2>
            <p className="text-zinc-500 mb-8 font-medium">Select a service below to configure your specific requirements.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesData.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => setSelectedService(s.slug)}
                  className={`text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${selectedService === s.slug ? "border-[#800080] bg-[#800080]/5 ring-4 ring-[#800080]/10" : "border-zinc-100 hover:border-zinc-300 bg-white"}`}
                >
                  <div className={`p-2 rounded-lg ${selectedService === s.slug ? "bg-[#800080] text-white" : "bg-zinc-100 text-zinc-600"}`}>
                     <s.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-zinc-900">{s.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Service Specific Fields */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h2 className="text-2xl font-heading font-extrabold text-zinc-900 mb-2">Configure Details</h2>
            <p className="text-zinc-500 mb-8 font-medium">Tell us a bit more about what you want for the <strong className="text-zinc-900">{servicesData.find(s=>s.slug===selectedService)?.title}</strong>.</p>
            
            {renderServiceFields()}
          </div>
        )}
      </div>
      
      {/* Footer Navigation */}
      <div className="bg-zinc-50 border-t border-zinc-100 px-6 py-4 flex items-center justify-between">
        {step === 2 && !initialService ? (
          <button onClick={handleBack} className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-zinc-600 hover:bg-zinc-200 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        ) : <div></div>}

        {step === 1 ? (
          <button onClick={handleNext} className="flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white bg-[#800080] hover:bg-[#800080]/90 transition-colors shadow-lg shadow-[#800080]/20 hover:scale-[1.02]">
            Continue Details <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button onClick={handleAddToCart} className="flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white bg-zinc-900 hover:bg-zinc-950 transition-colors shadow-lg hover:scale-[1.02]">
            Add to Quote Cart
          </button>
        )}
      </div>
    </div>
  );
}
