import React, { useState } from 'react';
import { BarChart3, Lightbulb, Users, ArrowRight, Eye, Plus, Info } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const ProcessFlow = ({ data, onNavigate }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const steps = data?.steps || [
    {
      id: 'step1',
      num: '01',
      title: 'NUMBERS',
      desc: 'Tell you what happened.',
      subDesc: 'Historical accounting & data telemetry',
      image: '/images/step_numbers.jpg'
    },
    {
      id: 'step2',
      num: '02',
      title: 'INSIGHT',
      desc: 'Tells you why.',
      subDesc: 'Predictive modeling & root cause analysis',
      image: '/images/step_insight.jpg'
    },
    {
      id: 'step3',
      num: '03',
      title: 'LEADERSHIP',
      desc: 'Determines what happens next.',
      subDesc: 'Strategic execution & capital allocation',
      image: '/images/step_leadership.jpg'
    }
  ];

  return (
    <section className="relative py-12 sm:py-20 lg:py-24 bg-[#061a2e] text-white border-y border-slate-800/80 overflow-hidden select-none">
      
      {/* Background Corporate Image with Atmospheric Depth Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={imgUrl(data?.bgImage || '/images/finance_transform.jpg')}
          alt="Process Flow Section Background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-45 filter brightness-95 contrast-110"
        />
        {/* Dark Vignette & Edge Fades ensuring seamless integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061a2e]/90 via-[#061a2e]/60 to-[#061a2e]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e]/85 via-transparent to-[#061a2e]/80" />
        
        {/* Ambient Radial Glows */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-teal-500/20 to-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-24 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Cyber/Technical Blueprint Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 192, 232, 0.22) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 192, 232, 0.22) 1px, transparent 1px)
          `,
          backgroundSize: '52px 52px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Executive Character & Right Heading + 3D Perspective Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Executive Character & Interactive Insights */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-center lg:items-start relative">
            
            {/* Background Decorative Dot Grid Matrix */}
            <div className="absolute -left-6 top-8 grid grid-cols-6 gap-2.5 opacity-30 pointer-events-none hidden sm:grid">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              ))}
            </div>

            {/* Character & Floating Disc Wrapper */}
            <div className="relative inline-block mx-auto lg:mx-0">
              
              {/* Executive Character Spotlight & Rim Lighting Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-gradient-to-tr from-cyan-500/15 via-[#007791]/20 to-teal-400/15 rounded-full blur-2xl pointer-events-none" />
              {/* Removed white glow div */}

              {/* Grounding Stage Light at Base */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-gradient-to-t from-cyan-400/25 to-transparent blur-md pointer-events-none" />

              {/* Executive Advisor Image - Balanced, Sharp Executive Scale */}
              <img
                src={imgUrl((data?.characterImage ? data.characterImage.replace(/\?v=\d+/, '') : '/images/character_advisor.png') + '?v=4')}
                alt="Corporate Financial Advisor"
                loading="lazy"
                decoding="async"
                className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[390px] xl:max-w-[420px] h-auto object-contain relative z-10 transition-transform duration-300 hover:scale-[1.02] drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)]"
              />

              {/* Floating Interactive "Explore Insights" Disc Overlay */}
              {/* Positioned directly above the character's open palm */}
              <div 
                onClick={() => onNavigate && onNavigate('insights')}
                className="absolute top-[47%] -right-2 sm:-right-4 z-20 cursor-pointer group transition-transform duration-300 hover:scale-108 active:scale-95"
                title="Click to Explore Executive Insights"
              >
                {/* Pulsing Glow Ring */}
                <span className="absolute -inset-2 rounded-full bg-emerald-400/40 animate-ping duration-1000 pointer-events-none" />
                
                {/* Glowing Outer Shadow Halo */}
                <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-[#007791] via-[#008ba3] to-[#061a2e] p-0.5 shadow-xl shadow-teal-500/50 border-2 border-white/95 flex flex-col items-center justify-center text-white backdrop-blur-md">
                  <span className="text-[9px] sm:text-[11px] font-semibold tracking-wide text-teal-100">Explore</span>
                  <span className="text-[11px] sm:text-[13px] font-black tracking-tight text-white -mt-0.5">Insights</span>
                  
                  {/* Subtle Shimmer highlight */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/25 to-transparent pointer-events-none" />
                </div>

                {/* Mouse Cursor Pointer Graphic Icon */}
                <div className="absolute -bottom-1 -right-1 z-30 pointer-events-none drop-shadow-md">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="white" stroke="#061a2e" strokeWidth="1.5">
                    <path d="M4 4l7 17 2.5-6.5L20 12 4 4z" />
                  </svg>
                </div>
              </div>

              {/* Decorative Flow Node: Circle with Arrow between Character and Cards */}
              <div className="hidden lg:flex absolute top-[60%] -right-8 z-20 items-center justify-center w-7 h-7 rounded-full bg-[#007791] text-white shadow-lg border border-cyan-400 animate-pulse">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>


          {/* ======================================================== */}
          {/* RIGHT COLUMN: Heading, Flow Vectors & 3D Perspective Cards */}
          {/* ======================================================== */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col">
            
            {/* Top Heading Area */}
            <div className="mb-6 lg:mb-8 text-center lg:text-left relative">
              
              {/* Micro-Telemetry Badge on Top Right */}
              <div className="absolute top-0 right-2 hidden xl:flex items-center space-x-2 bg-[#0c243c]/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-2.5 py-1 shadow-xs">
                <div className="flex items-end space-x-0.5 h-3.5">
                  <span className="w-1 h-1.5 bg-slate-500 rounded-xs"></span>
                  <span className="w-1 h-2.5 bg-teal-400 rounded-xs"></span>
                  <span className="w-1 h-3.5 bg-cyan-400 rounded-xs"></span>
                  <span className="w-1 h-3 bg-emerald-400 rounded-xs"></span>
                </div>
                <span className="text-[10px] font-mono font-bold text-cyan-200">Target 94.2%</span>
              </div>

              {/* Cyan/Teal Category Pill */}
              <span className="inline-block text-[11px] sm:text-xs font-black tracking-[0.18em] text-[#00c0e8] uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                {data?.badge || "DRIVE GROWTH WITH CLARITY & STRATEGY"}
              </span>

              {/* Main Section Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-tight mt-2">
                {data?.heading || "From numbers to better decisions"}
              </h2>
            </div>


            {/* ======================================================== */}
            {/* 3D FLOATING PERSPECTIVE CARDS CONTAINER */}
            {/* ======================================================== */}
            <div className="relative">

              {/* SVG Connecting Flow Lines (Background Overlay) */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" 
                viewBox="0 0 760 380" 
                fill="none"
              >
                {/* Curved Flow Line 1: From left towards Card 01 */}
                <path
                  d="M0,190 C60,170 80,130 140,110"
                  stroke="#2bb673"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.8"
                />

                {/* Curved Flow Line 2: Curving under Card 01 to Card 02 */}
                <path
                  d="M140,280 C200,310 260,280 340,260"
                  stroke="#007791"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.75"
                />

                {/* Curved Flow Line 3: Arc over Card 02 to Card 03 */}
                <path
                  d="M380,80 C440,50 510,70 580,95"
                  stroke="#2bb673"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.8"
                />

                {/* Flow Line 4: Under Card 03 with arrow */}
                <path
                  d="M480,290 C560,330 630,290 700,280"
                  stroke="#007791"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  opacity="0.6"
                />

                {/* Glowing Node Points */}
                <circle cx="140" cy="110" r="4" fill="#d97706" />
                <circle cx="340" cy="260" r="4" fill="#007791" />
                <circle cx="580" cy="95" r="4" fill="#2bb673" />
              </svg>

              {/* Floating Arc Icon: Eye Icon above Card 01 -> Card 02 */}
              <div className="hidden lg:flex absolute top-[14%] left-[46%] -translate-x-1/2 z-20 items-center justify-center w-6 h-6 rounded-full bg-[#007791] text-white shadow-md border border-white">
                <Eye className="w-3.5 h-3.5" />
              </div>


              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4 xl:gap-5 relative z-10 items-stretch">
                
                {/* ---------------------------------------------------- */}
                {/* CARD 01: NUMBERS (Left Angled 3D Card) */}
                {/* ---------------------------------------------------- */}
                <div 
                  onMouseEnter={() => setHoveredCard(0)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative rounded-3xl overflow-visible transition-all duration-500 flex flex-col justify-between ${
                    hoveredCard === 0
                      ? 'scale-[1.03] -translate-y-2 z-20'
                      : 'lg:[transform:perspective(1200px)_rotateY(5deg)_rotateZ(-1.5deg)]'
                  }`}
                >
                  {/* Floating Action Badges on Card 01 Right Edge */}
                  <div className="hidden lg:flex absolute -right-3 top-8 z-30 items-center justify-center w-5 h-5 rounded-full bg-[#2bb673] text-white shadow-md border border-white">
                    <Plus className="w-3 h-3" />
                  </div>
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-5 h-5 rounded-full bg-[#007791] text-white shadow-md border border-white">
                    <Eye className="w-3 h-3" />
                  </div>
                  <div className="hidden lg:flex absolute -right-3 bottom-12 z-30 items-center justify-center w-5 h-5 rounded-full bg-[#2bb673] text-white shadow-md border border-white">
                    <Plus className="w-3 h-3" />
                  </div>

                  {/* Card Container Box */}
                  <div className="h-full rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white flex flex-col justify-between">
                    
                    {/* Top Zone: Dark Slate/Navy Header with UI Visual */}
                    <div className="relative bg-[#0c1f38] p-4 pt-4 pb-5 flex flex-col justify-between min-h-[160px] overflow-hidden">
                      
                      {/* Background Visual Graphic: Accounting & Financial Telemetry */}
                      <div className="absolute inset-0 opacity-45 pointer-events-none">
                        <img 
                          src={imgUrl(steps[0]?.image || '/images/step_numbers.jpg')} 
                          alt="Numbers Ledger"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f38] via-[#0c1f38]/70 to-transparent" />
                      </div>

                      {/* Top Row: Amber 01 Badge */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-black text-white bg-[#d97706] shadow-sm">
                          01
                        </span>
                      </div>

                      {/* Card Title */}
                      <div className="relative z-10 mt-6">
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-wider uppercase">
                          {steps[0]?.title || "NUMBERS"}
                        </h3>
                      </div>
                    </div>

                    {/* Bottom Zone: White Content & Bar Chart Glyph */}
                    <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                      <div>
                        <h4 className="text-sm sm:text-base font-black text-[#061a2e] leading-snug">
                          {steps[0]?.desc || "Tell you what happened."}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                          {steps[0]?.subDesc || "Historical accounting & data telemetry"}
                        </p>
                      </div>

                      {/* Bottom Visual: Solid Navy 7-Bar Chart Glyph */}
                      <div className="pt-4 border-t border-slate-100 mt-3 flex items-end space-x-1.5 h-12">
                        <div className="w-2.5 bg-[#061a2e] h-4 rounded-xs" />
                        <div className="w-2.5 bg-[#061a2e] h-7 rounded-xs" />
                        <div className="w-2.5 bg-[#061a2e] h-10 rounded-xs" />
                        <div className="w-2.5 bg-[#061a2e] h-8 rounded-xs" />
                        <div className="w-2.5 bg-[#061a2e] h-11 rounded-xs" />
                        <div className="w-2.5 bg-[#061a2e] h-6 rounded-xs" />
                        <div className="w-2.5 bg-[#061a2e] h-9 rounded-xs" />
                      </div>
                    </div>

                  </div>
                </div>



                {/* ---------------------------------------------------- */}
                {/* CARD 02: INSIGHT (Elevated Center Card with Glow) */}
                {/* ---------------------------------------------------- */}
                <div 
                  onMouseEnter={() => setHoveredCard(1)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative rounded-3xl overflow-visible transition-all duration-500 flex flex-col justify-between ${
                    hoveredCard === 1
                      ? 'scale-[1.05] -translate-y-3 z-30'
                      : 'lg:-translate-y-3 lg:[transform:perspective(1200px)_scale(1.02)] z-20'
                  }`}
                >
                  {/* Floating Action Badge on Card 02 Right Edge */}
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-5 h-5 rounded-full bg-[#007791] text-white shadow-md border border-white">
                    <Info className="w-3 h-3" />
                  </div>

                  {/* Card Container Box with Emerald Ambient Glow Shadow */}
                  <div className="h-full rounded-3xl overflow-hidden border-2 border-emerald-500/30 shadow-[0_20px_50px_-10px_rgba(43,182,115,0.28)] bg-white flex flex-col justify-between">
                    
                    {/* Top Zone: Dark Header with Holographic Graph Visual */}
                    <div className="relative bg-[#0a2336] p-4 pt-4 pb-5 flex flex-col justify-between min-h-[160px] overflow-hidden">
                      
                      {/* Background Visual Graphic: Predictive Diagnostics & Luminous Curves */}
                      <div className="absolute inset-0 opacity-55 pointer-events-none">
                        <img 
                          src={imgUrl(steps[1]?.image || '/images/step_insight.jpg')} 
                          alt="Insight Graph"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2336] via-[#0a2336]/65 to-transparent" />
                      </div>

                      {/* Top Row: Teal 02 Badge */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-black text-white bg-[#007791] shadow-sm">
                          02
                        </span>
                      </div>

                      {/* Card Title */}
                      <div className="relative z-10 mt-6">
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-wider uppercase">
                          {steps[1]?.title || "INSIGHT"}
                        </h3>
                      </div>
                    </div>

                    {/* Bottom Zone: White Content & Dual Graph Glyphs */}
                    <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                      <div>
                        <h4 className="text-sm sm:text-base font-black text-[#007791] leading-snug">
                          {steps[1]?.desc || "Tells you why."}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                          {steps[1]?.subDesc || "Predictive modeling & root cause analysis"}
                        </p>
                      </div>

                      {/* Bottom Visual: Dual Graphs (Wave Area Curve + Connected Scatter Nodes) */}
                      <div className="pt-4 border-t border-slate-100 mt-3 flex items-center justify-between h-12 gap-2">
                        {/* Smooth Wavy Teal Area */}
                        <svg className="w-1/2 h-9" viewBox="0 0 100 36" fill="none">
                          <path d="M0,24 Q25,8 50,18 T100,12 L100,36 L0,36 Z" fill="rgba(0,119,145,0.14)" />
                          <path d="M0,24 Q25,8 50,18 T100,12" stroke="#007791" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>

                        {/* Connected Scatter Graph with Bronze/Gold Nodes */}
                        <svg className="w-1/2 h-9" viewBox="0 0 100 36" fill="none">
                          <path d="M6,22 L32,10 L62,26 L92,12" stroke="#061a2e" strokeWidth="2" strokeLinecap="round" />
                          <circle cx="6" cy="22" r="3.5" fill="#b45309" stroke="#ffffff" strokeWidth="1.5" />
                          <circle cx="32" cy="10" r="3.5" fill="#b45309" stroke="#ffffff" strokeWidth="1.5" />
                          <circle cx="62" cy="26" r="3.5" fill="#b45309" stroke="#ffffff" strokeWidth="1.5" />
                          <circle cx="92" cy="12" r="3.5" fill="#b45309" stroke="#ffffff" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>

                  </div>
                </div>



                {/* ---------------------------------------------------- */}
                {/* CARD 03: LEADERSHIP (Right Angled 3D Card) */}
                {/* ---------------------------------------------------- */}
                <div 
                  onMouseEnter={() => setHoveredCard(2)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative rounded-3xl overflow-visible transition-all duration-500 flex flex-col justify-between ${
                    hoveredCard === 2
                      ? 'scale-[1.03] -translate-y-2 z-20'
                      : 'lg:[transform:perspective(1200px)_rotateY(-5deg)_rotateZ(1.5deg)]'
                  }`}
                >
                  {/* Floating Action Badge on Card 03 Top-Right Corner */}
                  <div className="hidden lg:flex absolute -right-2.5 -top-2.5 z-30 items-center justify-center w-5 h-5 rounded-full bg-[#2bb673] text-white shadow-md border border-white">
                    <Plus className="w-3 h-3" />
                  </div>

                  {/* Card Container Box */}
                  <div className="h-full rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white flex flex-col justify-between">
                    
                    {/* Top Zone: Dark Slate/Navy Header with Strategic Nodes */}
                    <div className="relative bg-[#0c1f38] p-4 pt-4 pb-5 flex flex-col justify-between min-h-[160px] overflow-hidden">
                      
                      {/* Background Visual Graphic: Executive Decision & Board Leadership */}
                      <div className="absolute inset-0 opacity-45 pointer-events-none">
                        <img 
                          src={imgUrl(steps[2]?.image || '/images/step_leadership.jpg')} 
                          alt="Leadership Decision"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f38] via-[#0c1f38]/70 to-transparent" />
                      </div>

                      {/* Top Row: Amber 03 Badge */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-black text-white bg-[#d97706] shadow-sm">
                          03
                        </span>
                      </div>

                      {/* Card Title */}
                      <div className="relative z-10 mt-6">
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-wider uppercase">
                          {steps[2]?.title || "LEADERSHIP"}
                        </h3>
                      </div>
                    </div>

                    {/* Bottom Zone: White Content & Tactical Playbook Glyphs */}
                    <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                      <div>
                        <h4 className="text-sm sm:text-base font-black text-[#061a2e] leading-snug">
                          {steps[2]?.desc || "Determines what happens next."}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                          {steps[2]?.subDesc || "Strategic execution & capital allocation"}
                        </p>
                      </div>

                      {/* Bottom Visual: Strategic Playbook Markings (x, o, curved trajectory arrows) */}
                      <div className="pt-4 border-t border-slate-100 mt-3 flex items-center justify-between h-12 px-1 text-slate-400">
                        <span className="font-mono text-sm font-black text-[#b45309]">×</span>
                        <svg className="w-12 h-6" viewBox="0 0 50 25" fill="none">
                          <path d="M5,20 Q25,2 45,15" stroke="#b45309" strokeWidth="1.8" strokeDasharray="3 3" />
                          <polygon points="45,15 39,11 41,17" fill="#b45309" />
                        </svg>
                        <span className="font-mono text-sm font-bold text-slate-400">○</span>
                        <span className="font-mono text-sm font-black text-[#b45309]">×</span>
                        <svg className="w-12 h-6" viewBox="0 0 50 25" fill="none">
                          <path d="M5,18 C20,4 35,4 45,16" stroke="#b45309" strokeWidth="1.5" />
                          <polygon points="45,16 39,12 41,18" fill="#b45309" />
                        </svg>
                        <span className="font-mono text-sm font-bold text-slate-400">○</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
