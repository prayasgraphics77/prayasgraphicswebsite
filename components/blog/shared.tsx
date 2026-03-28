"use client";

import React, { useState } from "react";

// --- CALLOUT ---
interface CalloutProps {
  variant: "red" | "gold" | "green" | "blue";
  icon?: string;
  title: string;
  children: React.ReactNode;
}
export function Callout({ variant, icon, title, children }: CalloutProps) {
  const styles = {
    red: "bg-[#fdf3f2] border-red-600",
    gold: "bg-[#fdf8ec] border-amber-500",
    green: "bg-[#f0f9f4] border-emerald-600",
    blue: "bg-[#800080]/5 border-[#800080]",
  };
  return (
    <div className={"rounded-xl p-6 my-8 border-l-4 " + styles[variant]}>
      <h4 className="text-sm font-bold text-zinc-950 mb-2 flex items-center gap-2">
        {icon && <span>{icon}</span>}
        {title}
      </h4>
      <div className="text-sm text-zinc-600 font-light leading-relaxed [&>p]:mb-2 [&>ul]:pl-5 [&>ul]:list-disc [&>ul]:mt-2">
        {children}
      </div>
    </div>
  );
}

// --- FAQ ---
export function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-zinc-200 rounded-xl mb-3 overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 md:px-5 font-medium text-[15px] text-zinc-900 text-left hover:bg-stone-50 transition-colors"
      >
        <span>{question}</span>
        <span className="text-red-600 text-xl font-light w-6 h-6 flex items-center justify-center shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        className={"overflow-hidden transition-all duration-300 ease-in-out " + (open ? "max-h-[500px]" : "max-h-0")}
      >
        <div className="p-4 md:px-5 pt-0 text-sm text-zinc-600 font-light leading-relaxed bg-stone-50 border-t border-zinc-200/60">
          {answer}
        </div>
      </div>
    </div>
  );
}

// --- MISTAKE BOX ---
export function MistakeBox({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-5 md:p-6 mb-5 flex flex-col sm:flex-row gap-4 sm:gap-6 shadow-sm">
      <div className="font-heading text-4xl md:text-5xl font-black text-[#f0d5d3] leading-none shrink-0 w-12 hidden sm:block">
        {num}
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-heading text-2xl font-black text-[#f0d5d3] leading-none block sm:hidden">
            {num}
          </span>
          <h5 className="text-[15px] font-bold text-red-600 leading-tight">
            {title}
          </h5>
        </div>
        <div className="text-sm text-zinc-600 font-light leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

// --- PRICE CARD ---
interface PriceCardProps {
  name: string;
  price: string;
  unit: string;
  life: string;
  featured?: boolean;
}
export function PriceCard({ name, price, unit, life, featured }: PriceCardProps) {
  return (
    <div
      className={"border rounded-xl p-5 bg-white text-center transition-transform hover:-translate-y-1 " + (featured ? "border-red-600 border-2 shadow-md shadow-red-600/5" : "border-zinc-200 shadow-sm")}
    >
      <div className="text-[13px] font-bold text-zinc-950 mb-1.5">{name}</div>
      <div className="font-heading text-[22px] font-black text-red-600 mb-1">{price}</div>
      <div className="text-[11px] text-zinc-500 mb-3">{unit}</div>
      <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 inline-block px-3 py-1 rounded-full">
        {life}
      </div>
    </div>
  );
}

// --- STEP BOX ---
export function StepBox({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-8 items-start group">
      <div className="w-10 h-10 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center shrink-0 shadow-md shadow-red-600/20 group-hover:scale-110 transition-transform">
        {num}
      </div>
      <div>
        <h5 className="text-[15px] font-bold text-zinc-900 mb-1.5">{title}</h5>
        <p className="text-sm m-0 text-zinc-600 font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// --- VS GRID ---
interface VsOption {
  label: string;
  name: string;
  points: string[];
}
export function VsGrid({ optionA, optionB }: { optionA: VsOption; optionB: VsOption }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] my-8 border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
      <div className="p-6 md:p-8 bg-white">
        <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-zinc-400 mb-3">
          {optionA.label}
        </div>
        <div className="font-heading text-xl md:text-2xl font-black text-zinc-950 mb-5">
          {optionA.name}
        </div>
        <ul className="space-y-2.5">
          {optionA.points.map((pt, i) => (
            <li key={i} className="text-[13px] text-zinc-600 font-light leading-relaxed flex items-start gap-2">
              <span className="text-red-500 shrink-0 mt-0.5">•</span>
              {pt}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-zinc-950 flex md:flex-col items-center justify-center py-2 md:py-0 md:px-4 text-white font-bold tracking-widest text-sm md:text-base md:[writing-mode:vertical-rl]">
        VS
      </div>

      <div className="p-6 md:p-8 bg-stone-50">
        <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-zinc-400 mb-3">
          {optionB.label}
        </div>
        <div className="font-heading text-xl md:text-2xl font-black text-zinc-950 mb-5">
          {optionB.name}
        </div>
        <ul className="space-y-2.5">
          {optionB.points.map((pt, i) => (
            <li key={i} className="text-[13px] text-zinc-600 font-light leading-relaxed flex items-start gap-2">
              <span className="text-red-500 shrink-0 mt-0.5">•</span>
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
