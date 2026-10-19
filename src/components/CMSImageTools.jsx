import React, { useState } from 'react';
import { X, Image as ImageIcon, Search, Check, Upload, Eye, EyeOff, Sparkles, ZoomIn } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const ALL_IMAGE_PRESETS = [
  // 4 Core Pillars
  {
    id: 'cfo_advisory',
    category: 'Service Pillars',
    label: 'LEAD — CFO & FP&A Advisory',
    description: 'Executive financial forecasting, EBITDA modeling & board strategy',
    url: '/images/cfo_advisory.jpg'
  },
  {
    id: 'finance_build',
    category: 'Service Pillars',
    label: 'BUILD — Finance Functions & Operating Models',
    description: 'Finance operating blueprints, organizational models & governance',
    url: '/images/finance_build.jpg'
  },
  {
    id: 'finance_transform',
    category: 'Service Pillars',
    label: 'TRANSFORM — Data, Systems & Technology',
    description: 'Automated telemetry, real-time BI dashboards & cloud ERP analytics',
    url: '/images/finance_transform.jpg'
  },
  {
    id: 'tax_compliance',
    category: 'Service Pillars',
    label: 'PROTECT — Tax & Compliance',
    description: 'Corporate taxation, statutory compliance & audit defense governance',
    url: '/images/tax_compliance.jpg'
  },

  // 4 Sectors (Who We Help)
  {
    id: 'growing_businesses',
    category: 'Sectors (Who We Help)',
    label: 'Growing Businesses',
    description: 'Fast-scaling mid-market enterprises & growth capital execution',
    url: '/images/growing_businesses.jpg'
  },
  {
    id: 'established_corporate',
    category: 'Sectors (Who We Help)',
    label: 'Established & Corporate',
    description: 'Enterprise governance, balance sheet optimization & M&A strategy',
    url: '/images/established_corporate.jpg'
  },
  {
    id: 'non_profit_community',
    category: 'Sectors (Who We Help)',
    label: 'Not-for-Profit & Community',
    description: 'Grant stewardship, mission accounting & donor transparency',
    url: '/images/non_profit_community.jpg'
  },
  {
    id: 'local_government',
    category: 'Sectors (Who We Help)',
    label: 'Local Government',
    description: 'Civic long-term financial plans (LTFP) & public infrastructure',
    url: '/images/local_government.jpg'
  },

  // Brand Story & Hero
  {
    id: 'hero_summit',
    category: 'Brand Story & Hero',
    label: 'Mountain Summit Leadership (Hero)',
    description: 'Visionary elevation, strategic corporate momentum at sunrise',
    url: '/images/hero_summit.jpg'
  },
  {
    id: 'finance_meeting',
    category: 'Brand Story & Hero',
    label: 'Executive Strategic Session',
    description: 'High-stakes boardroom consultation & strategic growth dialogue',
    url: '/images/finance_meeting.jpg'
  },

  // Process Flow Steps
  {
    id: 'step_numbers',
    category: 'Process Transformation',
    label: 'Step 01: Numbers',
    description: 'Structured financial records & ledger telemetry audit',
    url: '/images/step_numbers.jpg'
  },
  {
    id: 'step_insight',
    category: 'Process Transformation',
    label: 'Step 02: Insight',
    description: 'Variance diagnostics, predictive modeling & root causes',
    url: '/images/step_insight.jpg'
  },
  {
    id: 'step_leadership',
    category: 'Process Transformation',
    label: 'Step 03: Leadership',
    description: 'Decisive board leadership & dynamic capital allocation',
    url: '/images/step_leadership.jpg'
  },

  // Corporate & Facilities
  {
    id: 'character_advisor',
    category: 'Corporate & Team',
    label: 'Executive Advisor & Leadership Character',
    description: 'Corporate financial advisor presenting workflow telemetry with tablet',
    url: '/images/character_advisor.png'
  },
  {
    id: 'about_team',
    category: 'Corporate & Team',
    label: 'Corporate Leadership Team',
    description: 'Senior finance partners and advisory specialists',
    url: '/images/about_team.jpg'
  },
  {
    id: 'contact_office',
    category: 'Corporate & Team',
    label: 'Advisory Firm Headquarters',
    description: 'Modern corporate advisory office and executive suites',
    url: '/images/contact_office.jpg'
  },

  // Why Choose Us (5 Benefit Pillars)
  {
    id: 'why_experience',
    category: 'Why Choose Us',
    label: 'Finance Experience',
    description: 'Practical finance experience across complex enterprise transformations',
    url: '/images/why_experience.jpg'
  },
  {
    id: 'why_transformation',
    category: 'Why Choose Us',
    label: 'Transformation Capability',
    description: 'Finance, technology, data, and automated process improvement',
    url: '/images/why_transformation.jpg'
  },
  {
    id: 'why_practical',
    category: 'Why Choose Us',
    label: 'Practical Delivery',
    description: 'Solutions that can be implemented and used — not reports on a shelf',
    url: '/images/why_practical.jpg'
  },
  {
    id: 'why_flexible',
    category: 'Why Choose Us',
    label: 'Flexible Engagement',
    description: 'Tailored project advisory, ongoing support, and scalable capability',
    url: '/images/why_flexible.jpg'
  },
  {
    id: 'why_independent',
    category: 'Why Choose Us',
    label: 'Independent Perspective',
    description: 'Objective strategic clarity and external identification of hidden opportunities',
    url: '/images/why_independent.jpg'
  },

  // Our Approach (4 Step Framework)
  {
    id: 'approach_understand',
    category: 'Our Approach',
    label: 'Step 1: Understand',
    description: 'Deep-dive executive discovery, strategic listening and context alignment',
    url: '/images/approach_understand.jpg'
  },
  {
    id: 'approach_diagnose',
    category: 'Our Approach',
    label: 'Step 2: Diagnose',
    description: 'Forensic financial diagnostics, margin root cause and variance modeling',
    url: '/images/approach_diagnose.jpg'
  },
  {
    id: 'approach_design',
    category: 'Our Approach',
    label: 'Step 3: Design',
    description: 'Future-state operating model architecture, technology & governance design',
    url: '/images/approach_design.jpg'
  },
  {
    id: 'approach_deliver',
    category: 'Our Approach',
    label: 'Step 4: Deliver',
    description: 'Hands-on execution rollout, operational handover, and executive signoff',
    url: '/images/approach_deliver.jpg'
  }
];

// Visual Gallery Modal Picker
export const ImageGalleryModal = ({ isOpen, onClose, onSelect, currentUrl }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = ['All', 'Why Choose Us', 'Our Approach', 'Service Pillars', 'Sectors (Who We Help)', 'Brand Story & Hero', 'Process Transformation', 'Corporate & Team'];

  const filteredPresets = ALL_IMAGE_PRESETS.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch =
      p.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#061a2e] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-emerald-500/20 text-[#2bb673] rounded-lg">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-white">Visual Image Asset Gallery</h3>
              <p className="text-[11px] text-slate-300">Select an executive graphic designed for your content</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-4 border-b border-slate-100 bg-slate-50 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search images by name or description (e.g. CFO, Tax, Government)..."
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-xs outline-none focus:border-[#007791]"
            />
          </div>

          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-[11px] font-bold rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#007791] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid with Full Visual Previews */}
        <div className="p-5 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredPresets.map((item) => {
            const isSelected = currentUrl === item.url;
            return (
              <div
                key={item.id}
                onClick={() => {
                  onSelect(item.url);
                  onClose();
                }}
                className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#2bb673] ring-2 ring-[#2bb673]/30 shadow-md bg-emerald-50/20'
                    : 'border-slate-200 hover:border-[#007791] bg-white'
                }`}
              >
                {/* Thumbnail */}
                <div className="relative h-28 bg-slate-100 overflow-hidden">
                  <img
                    src={imgUrl(item.url)}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {isSelected && (
                    <div className="absolute top-2 right-2 bg-[#2bb673] text-white p-1 rounded-full shadow-md">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <span className="absolute bottom-2 left-2 text-[9px] font-bold uppercase tracking-wider bg-[#061a2e]/80 backdrop-blur-md text-white px-2 py-0.5 rounded-md">
                    {item.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-3">
                  <h4 className="text-xs font-bold text-[#061a2e] group-hover:text-[#007791] transition-colors leading-snug">
                    {item.label}
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredPresets.length} professional executive assets</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-bold hover:bg-slate-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Image Field with Full Live Preview
export const ImageFieldWithPreview = ({
  label,
  value,
  onChange,
  onUpload
}) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [previewZoom, setPreviewZoom] = useState(false);

  return (
    <div className="space-y-2 pt-2 border-t border-slate-100">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-slate-700">{label}</label>
        <span className="text-[10px] text-slate-500 font-mono truncate max-w-[200px]">
          {value || 'Default image'}
        </span>
      </div>

      {/* Visual Live Preview Card */}
      <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 group shadow-inner">
        <div className="relative h-32 w-full overflow-hidden bg-slate-900/10">
          <img
            src={imgUrl(value)}
            alt={label}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Action Overlay */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <span className="text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md">
              Live Preview
            </span>
            <button
              type="button"
              onClick={() => setGalleryOpen(true)}
              className="text-[11px] font-bold text-white bg-[#007791] hover:bg-[#006075] px-2.5 py-1 rounded-lg flex items-center space-x-1 shadow-md transition-all cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Change Image</span>
            </button>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={() => setGalleryOpen(true)}
          className="flex-1 py-1.5 px-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-[#061a2e] flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
        >
          <ImageIcon className="w-3.5 h-3.5 text-[#007791]" />
          <span>Browse Gallery</span>
        </button>

        <label className="py-1.5 px-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-[#061a2e] flex items-center justify-center space-x-1.5 transition-colors cursor-pointer">
          <Upload className="w-3.5 h-3.5 text-emerald-600" />
          <span>Upload</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onUpload(e, (url) => onChange(url))}
          />
        </label>
      </div>

      {/* Modal Asset Gallery */}
      <ImageGalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        onSelect={(url) => onChange(url)}
        currentUrl={value}
      />
    </div>
  );
};
