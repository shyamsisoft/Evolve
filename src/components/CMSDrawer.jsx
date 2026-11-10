import React, { useState } from 'react';
import { X, Save, RotateCcw, Image, Download, Upload, Sliders, Check, ChevronRight, Eye, EyeOff, LayoutGrid, Search, Copy, CheckCheck, Maximize2, ArrowRight, BarChart3, Settings, Target, Users, Shield, Phone, Mail, MapPin, Clock, Plus, Trash2, Globe, Building2 , Layers } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { ImageFieldWithPreview, ImageGalleryModal, ALL_IMAGE_PRESETS } from './CMSImageTools';

export const CMSDrawer = ({ isOpen, onClose, data, activeFont, onChangeFont, onUpdateData, onResetData }) => {
  const [activeCategory, setActiveCategory] = useState('global');
  const [activeTab, setActiveTab] = useState('contact');
  const [toastMessage, setToastMessage] = useState('');
  const [showLivePreview, setShowLivePreview] = useState(true);
  const [galleryCategory, setGalleryCategory] = useState('All');
  const [gallerySearch, setGallerySearch] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);
  const [activeHeroSlideIdx, setActiveHeroSlideIdx] = useState(0);
  const [approachPreviewSubTab, setApproachPreviewSubTab] = useState('whyUs');
  const [modalGalleryTarget, setModalGalleryTarget] = useState(null);
  const [pillarActiveSection, setPillarActiveSection] = useState('hero'); // 'hero' | 'services' | 'questions'

  if (!isOpen) return null;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  const renderPreviewIcon = (iconName) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-3.5 h-3.5 text-[#2bb673]" />;
      case 'Settings':
        return <Settings className="w-3.5 h-3.5 text-[#2bb673]" />;
      case 'Target':
        return <Target className="w-3.5 h-3.5 text-[#2bb673]" />;
      case 'Users':
        return <Users className="w-3.5 h-3.5 text-[#2bb673]" />;
      case 'Shield':
      default:
        return <Shield className="w-3.5 h-3.5 text-[#2bb673]" />;
    }
  };

  const handleApplyPreset = (targetKey, url) => {
    if (targetKey === 'hero') {
      onUpdateData({ ...data, hero: { ...data.hero, bgImage: url } });
      showToast('Applied to Hero Background!');
    } else if (targetKey === 'section2') {
      onUpdateData({ ...data, section2: { ...data.section2, image: url } });
      showToast('Applied to More Than Numbers!');
    } else if (targetKey.startsWith('pillar-')) {
      const idx = parseInt(targetKey.replace('pillar-', ''), 10);
      const items = [...data.whatWeDo.items];
      if (items[idx]) {
        items[idx].image = url;
        onUpdateData({ ...data, whatWeDo: { ...data.whatWeDo, items } });
        showToast(`Applied to ${items[idx].pillar} Pillar!`);
      }
    } else if (targetKey.startsWith('sector-')) {
      const idx = parseInt(targetKey.replace('sector-', ''), 10);
      const items = [...data.whoWeHelp.items];
      if (items[idx]) {
        items[idx].image = url;
        onUpdateData({ ...data, whoWeHelp: { ...data.whoWeHelp, items } });
        showToast(`Applied to ${items[idx].title}!`);
      }
    } else if (targetKey === 'why-bg') {
      onUpdateData({
        ...data,
        approachAndWhyUs: { ...data.approachAndWhyUs, whyUsBgImage: url }
      });
      showToast('Applied to Why Us Section Background!');
    } else if (targetKey.startsWith('why-')) {
      const idx = parseInt(targetKey.replace('why-', ''), 10);
      const items = [...data.approachAndWhyUs.whyUsItems];
      if (items[idx]) {
        items[idx].image = url;
        onUpdateData({
          ...data,
          approachAndWhyUs: { ...data.approachAndWhyUs, whyUsItems: items }
        });
        showToast(`Applied to ${items[idx].title}!`);
      }
    } else if (targetKey === 'approach-bg') {
      onUpdateData({
        ...data,
        approachAndWhyUs: { ...data.approachAndWhyUs, approachBgImage: url }
      });
      showToast('Applied to Our Approach Section Background!');
    } else if (targetKey.startsWith('approach-')) {
      const idx = parseInt(targetKey.replace('approach-', ''), 10);
      const steps = [...data.approachAndWhyUs.approachSteps];
      if (steps[idx]) {
        steps[idx].image = url;
        onUpdateData({
          ...data,
          approachAndWhyUs: { ...data.approachAndWhyUs, approachSteps: steps }
        });
        showToast(`Applied to Step ${steps[idx].num}: ${steps[idx].title}!`);
      }
    } else if (targetKey === 'process-bg') {
      onUpdateData({
        ...data,
        processFlow: { ...(data.processFlow || {}), bgImage: url }
      });
      showToast('Applied to Process Flow Section Background!');
    } else if (targetKey === 'process-char') {
      onUpdateData({
        ...data,
        processFlow: { ...(data.processFlow || {}), characterImage: url }
      });
      showToast('Applied to Process Flow Character!');
    } else if (targetKey.startsWith('process-step-')) {
      const idx = parseInt(targetKey.replace('process-step-', ''), 10);
      const steps = [...(data.processFlow?.steps || [])];
      if (steps[idx]) {
        steps[idx].image = url;
        onUpdateData({
          ...data,
          processFlow: { ...data.processFlow, steps }
        });
        showToast(`Applied to Process Step ${steps[idx].num}: ${steps[idx].title}!`);
      }
    } else if (targetKey === 'cta') {
      onUpdateData({ ...data, ctaBanner: { ...data.ctaBanner, bgImage: url } });
      showToast('Applied to CTA Pre-Footer Banner!');
    }
  };

  const handleCopyPath = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    showToast(`Copied "${url}" to clipboard!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Image File Reader Helper to allow uploading local images
  const handleFileUpload = (e, callback) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
        showToast('Image uploaded successfully!');
      };
      reader.readAsDataURL(file);
    }
  };

  // Export JSON configuration
  const handleExportJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', 'evolve_site_cms_data.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Exported CMS Data as JSON!');
  };

  // Import JSON configuration
  const handleImportJSON = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        try {
          const parsed = JSON.parse(reader.result);
          onUpdateData(parsed);
          showToast('Imported CMS Data successfully!');
        } catch (err) {
          alert('Invalid JSON file format.');
        }
      };
      reader.readAsText(file);
    }
  };


  return (
    <div className="cms-drawer fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-white text-slate-900 shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-300">
      
      {/* CMS Drawer Header */}
      <div className="bg-[#061a2e] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-emerald-500/20 text-[#2bb673] rounded-lg">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-base tracking-tight">Dynamic CMS & Full Preview Engine</h3>
            <p className="text-[11px] text-gray-300">Live edit all site text, layout items and visual images</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Toast Banner */}
      {toastMessage && (
        <div className="bg-[#2bb673] text-white px-4 py-2 text-xs font-bold flex items-center justify-center space-x-2 animate-in fade-in">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Category & Tab Navigation */}
      <div className="bg-slate-100/90 border-b border-slate-200">
        {/* Top Tier: Category Switcher */}
        <div className="flex border-b border-slate-200 p-1.5 space-x-1 overflow-x-auto bg-slate-200/60">
          {[
            { id: 'global', label: 'Global & Contact', icon: <Phone className="w-3.5 h-3.5 text-emerald-600" /> },
            { id: 'homepage', label: 'Homepage', icon: <LayoutGrid className="w-3.5 h-3.5 text-[#007791]" /> },
            { id: 'whatWeDo', label: 'What We Do (Pillars)', icon: <Layers className="w-3.5 h-3.5 text-teal-600" /> },
            { id: 'whoWeHelp', label: 'Who We Help (Sectors)', icon: <Users className="w-3.5 h-3.5 text-indigo-600" /> },
            { id: 'media', label: 'Media & Articles', icon: <Image className="w-3.5 h-3.5 text-teal-600" /> },
            { id: 'tools', label: 'Tools', icon: <Settings className="w-3.5 h-3.5 text-slate-600" /> }
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                if (cat.id === 'global') setActiveTab('contact');
                else if (cat.id === 'homepage') setActiveTab('hero');
                else if (cat.id === 'whatWeDo') setActiveTab('pillarLead');
                else if (cat.id === 'whoWeHelp') setActiveTab('sectorGrowing');
                else if (cat.id === 'media') setActiveTab('insights');
                else if (cat.id === 'tools') setActiveTab('tools');
              }}
              className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-white text-[#061a2e] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Lower Tier: Sub-Tabs for Active Category */}
        <div className="flex p-1.5 space-x-1 overflow-x-auto bg-slate-50">
          {(activeCategory === 'global' ? [
            { id: 'contact', label: '📞 Contact Details & Offices' },
            { id: 'socialBrand', label: '🌐 Brand & Social Links' }
          ] : activeCategory === 'homepage' ? [
            { id: 'hero', label: 'Hero Carousel' },
            { id: 'section2', label: 'More Than Numbers' },
            { id: 'processFlow', label: 'Numbers to Decisions' },
            { id: 'whatWeDo', label: 'What We Do Grid' },
            { id: 'whoWeHelp', label: 'Who We Help Grid' },
            { id: 'approach', label: 'Approach & Why Us' },
            { id: 'ctaBanner', label: 'CTA Banner' }
          ] : activeCategory === 'whatWeDo' ? [
            { id: 'pillarLead', label: '01 LEAD (CFO Advisory)' },
            { id: 'pillarBuild', label: '02 BUILD (Operating Models)' },
            { id: 'pillarTransform', label: '03 TRANSFORM (Data & Tech)' },
            { id: 'pillarProtect', label: '04 PROTECT (Tax & Compliance)' },
            { id: 'whatWeDo', label: 'Homepage 4 Pillars Grid' }
          ] : activeCategory === 'whoWeHelp' ? [
            { id: 'sectorGrowing', label: '01 Growing Businesses' },
            { id: 'sectorCorporate', label: '02 Established & Corporate' },
            { id: 'sectorNFP', label: '03 Not-for-Profit & Community' },
            { id: 'sectorCouncil', label: '04 Local Government' },
            { id: 'whoWeHelp', label: 'Homepage 4 Sectors Grid' }
          ] : activeCategory === 'media' ? [
            { id: 'insights', label: 'Insights & Articles' },
            { id: 'gallery', label: '🖼 Asset Gallery' }
          ] : [
            { id: 'tools', label: 'Backup / Import' }
          ]).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#007791] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#061a2e] hover:bg-slate-200/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Live Preview Toggle Bar */}
      <div className="px-6 py-2 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-1.5 text-slate-700 font-semibold">
          <Sliders className="w-3.5 h-3.5 text-[#007791]" />
          <span>Live Preview Tool</span>
        </div>
        <button
          type="button"
          onClick={() => setShowLivePreview(!showLivePreview)}
          className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
            showLivePreview
              ? 'bg-[#007791] text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-300'
          }`}
        >
          {showLivePreview ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          <span>{showLivePreview ? 'Preview Mode: Active' : 'Preview Mode: Hidden'}</span>
        </button>
      </div>

      {/* Editor Body Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        
        {/* ======================================================== */}
        {/* TAB: CONTACT DETAILS & OFFICES                           */}
        {/* ======================================================== */}
        {activeTab === 'contact' && (() => {
          const contactData = data.contactData || {
            eyebrow: "DIRECT EXECUTIVE ENGAGEMENT",
            title: "Contact",
            subtitle: "Let's talk about what your organisation needs next.",
            introLead: "You may know exactly what support you need. Or you may simply know that finance, reporting, systems, compliance or organisational change isn't working as well as it should.",
            introSublead: "Either way, let's start with a conversation.",
            introText: "Tell us a little about your organisation, the challenge you are facing and what you are looking to achieve. We'll help determine where Evolve can add value.",
            phone: "+61 2 9000 0000",
            email: "enquiries@evolvecorporate.com.au",
            hours: "Monday – Friday: 8:30 AM – 5:30 PM AEST",
            confidentialityNotice: "Confidential Consultation with Senior Advisory Specialists",
            offices: []
          };

          const updateContact = (fields) => {
            onUpdateData({
              ...data,
              contactData: {
                ...contactData,
                ...fields
              }
            });
          };

          const updateOffice = (index, field, value) => {
            const offices = [...(contactData.offices || [])];
            offices[index] = { ...offices[index], [field]: value };
            updateContact({ offices });
          };

          const addOffice = () => {
            const offices = [
              ...(contactData.offices || []),
              {
                city: "New Office City",
                address: "Street Address, City, State Postcode",
                phone: "+61 2 9000 0000",
                email: "office@evolvecorporate.com.au",
                isPrimary: false
              }
            ];
            updateContact({ offices });
            showToast('Added new office location');
          };

          const removeOffice = (index) => {
            const offices = (contactData.offices || []).filter((_, i) => i !== index);
            updateContact({ offices });
            showToast('Removed office location');
          };

          return (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-sm font-extrabold text-[#007791] uppercase tracking-wider">
                  Contact Page & Direct Channels
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Manage primary telephone, enquiry email, office hours, and physical corporate locations.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Advisory Phone Number</span>
                  </label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={contactData.phone || ''}
                    onChange={(e) => updateContact({ phone: e.target.value })}
                    placeholder="+61 2 9000 0000"
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-teal-600" />
                    <span>Official Enquiry Email</span>
                  </label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="email"
                    value={contactData.email || ''}
                    onChange={(e) => updateContact({ email: e.target.value })}
                    placeholder="enquiries@evolvecorporate.com.au"
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>
              </div>

              {/* Hours & Confidentiality */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Consultation Hours</span>
                  </label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={contactData.hours || ''}
                    onChange={(e) => updateContact({ hours: e.target.value })}
                    placeholder="Monday – Friday: 8:30 AM – 5:30 PM AEST"
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Confidentiality Pill Notice</span>
                  </label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={contactData.confidentialityNotice || ''}
                    onChange={(e) => updateContact({ confidentialityNotice: e.target.value })}
                    placeholder="Confidential Consultation with Senior Advisory Specialists"
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>
              </div>

              {/* Page Headlines */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                  Page Header Texts
                </span>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Badge Tag</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={contactData.eyebrow || ''}
                    onChange={(e) => updateContact({ eyebrow: e.target.value })}
                    placeholder="DIRECT EXECUTIVE ENGAGEMENT"
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Headline</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={contactData.title || ''}
                    onChange={(e) => updateContact({ title: e.target.value })}
                    placeholder="CONTACT"
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subhead Promise</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={contactData.subtitle || ''}
                    onChange={(e) => updateContact({ subtitle: e.target.value })}
                    placeholder="Let's talk about what your organisation needs next."
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Intro Narrative Paragraph</label>
                  <textarea
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    rows={2}
                    value={contactData.introText || ''}
                    onChange={(e) => updateContact({ introText: e.target.value })}
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>
              </div>

              {/* Corporate Office Hubs Repeater */}
              <div className="space-y-4 pt-3 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                      Office Locations ({(contactData.offices || []).length})
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={addOffice}
                    className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold cursor-pointer transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Office</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {(contactData.offices || []).map((office, oIdx) => (
                    <div key={oIdx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/80 space-y-3 relative group">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-xs font-bold text-slate-700 flex items-center space-x-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#007791]" />
                          <span>Office 0{oIdx + 1}: {office.city || 'Untitled Location'}</span>
                        </span>
                        <div className="flex items-center space-x-2">
                          <label className="inline-flex items-center space-x-1 text-[11px] text-slate-600 font-medium cursor-pointer">
                            <input
                              type="checkbox"
                              checked={!!office.isPrimary}
                              onChange={(e) => updateOffice(oIdx, 'isPrimary', e.target.checked)}
                              className="rounded border-slate-300 text-[#007791] focus:ring-0"
                            />
                            <span>Principal HQ</span>
                          </label>
                          <button
                            type="button"
                            onClick={() => removeOffice(oIdx)}
                            className="p-1 text-slate-400 hover:text-rose-600 rounded cursor-pointer"
                            title="Remove Office"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 mb-1">City / Region Title</label>
                          <input
                            className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                            type="text"
                            value={office.city || ''}
                            onChange={(e) => updateOffice(oIdx, 'city', e.target.value)}
                            placeholder="e.g. Sydney (Principal Office)"
                            className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 mb-1">Office Telephone</label>
                          <input
                            className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                            type="text"
                            value={office.phone || ''}
                            onChange={(e) => updateOffice(oIdx, 'phone', e.target.value)}
                            placeholder="+61 2 9000 0000"
                            className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Physical Street Address</label>
                        <input
                          className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                          type="text"
                          value={office.address || ''}
                          onChange={(e) => updateOffice(oIdx, 'address', e.target.value)}
                          placeholder="Level 28, 200 George Street, Sydney NSW 2000"
                          className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

        {/* ======================================================== */}
        {/* TAB: BRAND LOGOS & SOCIAL MEDIA LINKS                    */}
        {/* ======================================================== */}
        {activeTab === 'socialBrand' && (() => {
          const socialLinks = data.socialLinks || {
            linkedin: "https://www.linkedin.com/company/evolve-corporate-and-business-solutions",
            youtube: "https://youtube.com/@evolvecorporate",
            twitter: ""
          };

          const brandSettings = data.brandSettings || {
            mainLogoDark: "/Logo/evolve-corporate-business-solutions-white.svg",
            mainLogoLight: "/Logo/evolve-corporate-business-solutions.svg",
            taxLogoDark: "/Logo/evolve-taxation-advisory.svg"
          };

          const updateSocial = (fields) => {
            onUpdateData({
              ...data,
              socialLinks: {
                ...socialLinks,
                ...fields
              }
            });
          };

          const updateBrand = (fields) => {
            onUpdateData({
              ...data,
              brandSettings: {
                ...brandSettings,
                ...fields
              }
            });
          };

          return (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-sm font-extrabold text-[#007791] uppercase tracking-wider">
                  Brand Logos & Social Channels
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Update corporate social media profile handles and manage SVG logo paths.
                </p>
              </div>

              {/* Social Channels */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                    Official Social Profiles
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">LinkedIn Company Profile URL</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="url"
                    value={socialLinks.linkedin || ''}
                    onChange={(e) => updateSocial({ linkedin: e.target.value })}
                    placeholder="https://www.linkedin.com/company/evolve-corporate-and-business-solutions"
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">YouTube Channel URL</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="url"
                    value={socialLinks.youtube || ''}
                    onChange={(e) => updateSocial({ youtube: e.target.value })}
                    placeholder="https://youtube.com/@evolvecorporate"
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">X / Twitter Profile URL (Optional)</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="url"
                    value={socialLinks.twitter || ''}
                    onChange={(e) => updateSocial({ twitter: e.target.value })}
                    placeholder="https://x.com/evolvecorporate"
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>
              </div>

              {/* Brand Logo Paths */}
              <div className="space-y-4 pt-3 border-t border-slate-200">
                <div className="flex items-center space-x-2">
                  <Image className="w-4 h-4 text-[#007791]" />
                  <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                    Logo Assets
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Main Brand Logo (Dark Header)</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={brandSettings.mainLogoDark || ''}
                    onChange={(e) => updateBrand({ mainLogoDark: e.target.value })}
                    placeholder="/Logo/evolve-corporate-business-solutions-white.svg"
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Rendered on the dark navy global navigation bar.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Taxation & Advisory Logo</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={brandSettings.taxLogoDark || ''}
                    onChange={(e) => updateBrand({ taxLogoDark: e.target.value })}
                    placeholder="/Logo/evolve-taxation-advisory.svg"
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Rendered when visiting the Tax & Compliance (Protect) pillar.</p>
                </div>
              </div>
            </div>
          );
        })()}

        
        
        {/* ======================================================== */}
        {/* TAB: ABOUT US & LEADERSHIP                               */}
        {/* TAB 1: HERO */}
        {activeTab === 'hero' && (() => {
          const heroSlides = (data.hero.slides && data.hero.slides.length > 0) ? data.hero.slides : [
            {
              id: 'slide-1',
              tabLabel: 'Strategic Vision',
              badge: data.hero.badge || 'EVOLVE Corporate & Business Solutions',
              title: data.hero.title || 'Finance that moves organisations forward.',
              subtitle: data.hero.subtitle || 'Clarity for today. Capability for tomorrow. Transformation when you need it.',
              ctaText: data.hero.ctaText || 'Start a Conversation →',
              bgImage: data.hero.bgImage || '/images/hero_summit.jpg'
            }
          ];

          const currentSlideObj = heroSlides[activeHeroSlideIdx] || heroSlides[0];

          const updateCurrentSlide = (updatedFields) => {
            const updatedSlides = [...heroSlides];
            updatedSlides[activeHeroSlideIdx] = {
              ...currentSlideObj,
              ...updatedFields
            };

            const newHero = {
              ...data.hero,
              slides: updatedSlides,
              ...(activeHeroSlideIdx === 0 ? updatedFields : {})
            };

            onUpdateData({
              ...data,
              hero: newHero
            });
          };

          return (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Hero Carousel Slides</h4>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {heroSlides.length} Carousel Slides
                </span>
              </div>

              {/* Slide Selector Pills */}
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
                {heroSlides.map((slide, sIdx) => (
                  <button
                    key={slide.id || sIdx}
                    type="button"
                    onClick={() => setActiveHeroSlideIdx(sIdx)}
                    className={`px-3 py-1.5 text-[11px] font-bold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                      activeHeroSlideIdx === sIdx
                        ? 'bg-[#007791] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    0{sIdx + 1} {slide.tabLabel || `Slide ${sIdx + 1}`}
                  </button>
                ))}
              </div>

              {/* Live Component Preview for the Selected Slide */}
              {showLivePreview && (
                <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-lg relative bg-[#061a2e] text-white p-5 space-y-3">
                  <div className="absolute inset-0 opacity-40 pointer-events-none">
                    <img src={imgUrl(currentSlideObj.bgImage || '/images/hero_summit.jpg')}
                      alt="Preview"
                      className="w-full h-full object-cover"
                     loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/80 to-transparent"></div>
                  </div>
                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                        {currentSlideObj.badge}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 bg-black/40 px-2 py-0.5 rounded">
                        Slide 0{activeHeroSlideIdx + 1}
                      </span>
                    </div>
                    <h3 className="text-sm font-extrabold text-white leading-snug line-clamp-2">
                      {currentSlideObj.title}
                    </h3>
                    <p className="text-[11px] text-gray-200 line-clamp-2 leading-relaxed">
                      {currentSlideObj.subtitle}
                    </p>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Slide Tab Label (Navigation Indicator)</label>
                <input
                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  type="text"
                  value={currentSlideObj.tabLabel || ''}
                  onChange={(e) => updateCurrentSlide({ tabLabel: e.target.value })}
                  placeholder="e.g. Strategic Vision"
                  className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Badge Subhead</label>
                <input
                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  type="text"
                  value={currentSlideObj.badge || ''}
                  onChange={(e) => updateCurrentSlide({ badge: e.target.value })}
                  className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Main Title</label>
                <textarea
                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  rows={2}
                  value={currentSlideObj.title || ''}
                  onChange={(e) => updateCurrentSlide({ title: e.target.value })}
                  className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
                <textarea
                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  rows={2}
                  value={currentSlideObj.subtitle || ''}
                  onChange={(e) => updateCurrentSlide({ subtitle: e.target.value })}
                  className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">CTA Button Text</label>
                <input
                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  type="text"
                  value={currentSlideObj.ctaText || ''}
                  onChange={(e) => updateCurrentSlide({ ctaText: e.target.value })}
                  className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                />
              </div>

              {/* Hero Image with Full Live Preview Tools */}
              <ImageFieldWithPreview
                label={`Slide 0${activeHeroSlideIdx + 1} Background Image`}
                value={currentSlideObj.bgImage || '/images/hero_summit.jpg'}
                onChange={(url) => updateCurrentSlide({ bgImage: url })}
                onUpload={handleFileUpload}
              />
            </div>
          );
        })()}

        {/* TAB 2: SECTION 2 */}
        {activeTab === 'section2' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Finance is More Than Numbers Settings</h4>
            
            {/* Live Component Preview */}
            {showLivePreview && (
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white p-4 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <div className="w-full sm:w-2/5 h-24 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative shrink-0">
                    <img src={imgUrl(data.section2.image || '/images/finance_meeting.jpg')}
                      alt="Preview"
                      className="w-full h-full object-cover"
                     loading="lazy" decoding="async" />
                    <span className="absolute bottom-1 left-1 bg-[#061a2e]/80 text-[8px] font-bold text-white px-1.5 py-0.5 rounded">
                      Live Card Preview
                    </span>
                  </div>
                  <div className="w-full sm:w-3/5 space-y-1">
                    <span className="inline-block text-[9px] font-bold text-[#2bb673] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {data.section2.calloutText || 'Executive Insight'}
                    </span>
                    <h4 className="text-xs font-black text-[#061a2e] leading-tight line-clamp-1">
                      {data.section2.heading}
                    </h4>
                    <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">
                      {data.section2.paragraph1}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Heading</label>
              <input
                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                type="text"
                value={data.section2.heading}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    section2: { ...data.section2, heading: e.target.value }
                  })
                }
                className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Paragraph 1</label>
              <textarea
                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                rows={2}
                value={data.section2.paragraph1}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    section2: { ...data.section2, paragraph1: e.target.value }
                  })
                }
                className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Paragraph 2</label>
              <textarea
                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                rows={2}
                value={data.section2.paragraph2}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    section2: { ...data.section2, paragraph2: e.target.value }
                  })
                }
                className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Callout Badge Text</label>
              <input
                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                type="text"
                value={data.section2.calloutText}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    section2: { ...data.section2, calloutText: e.target.value }
                  })
                }
                className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
              />
            </div>

            {/* Section 2 Image with Full Live Preview Tools */}
            <ImageFieldWithPreview
              label="Executive Meeting / Section Image"
              value={data.section2.image || '/images/finance_meeting.jpg'}
              onChange={(url) =>
                onUpdateData({
                  ...data,
                  section2: { ...data.section2, image: url }
                })
              }
              onUpload={handleFileUpload}
            />
          </div>
        )}

        {/* TAB 2.2: PROCESS FLOW (NUMBERS TO BETTER DECISIONS) */}
        {activeTab === 'processFlow' && (() => {
          const processData = data.processFlow || {
            badge: "DRIVE GROWTH WITH CLARITY & STRATEGY",
            heading: "From numbers to better decisions",
            exploreText: "Explore Insights",
            characterImage: "/images/character_advisor.png",
            bgImage: "/images/finance_transform.jpg",
            steps: [
              {
                id: "step1",
                num: "01",
                badgeColor: "amber",
                title: "NUMBERS",
                desc: "Tell you what happened.",
                subDesc: "Historical accounting & data telemetry",
                image: "/images/step_numbers.jpg"
              },
              {
                id: "step2",
                num: "02",
                badgeColor: "teal",
                title: "INSIGHT",
                desc: "Tells you why.",
                subDesc: "Predictive modeling & root cause analysis",
                image: "/images/step_insight.jpg"
              },
              {
                id: "step3",
                num: "03",
                badgeColor: "amber",
                title: "LEADERSHIP",
                desc: "Determines what happens next.",
                subDesc: "Strategic execution & capital allocation",
                image: "/images/step_leadership.jpg"
              }
            ]
          };

          const updateProcessFlow = (fields) => {
            onUpdateData({
              ...data,
              processFlow: {
                ...processData,
                ...fields
              }
            });
          };

          const updateStep = (idx, stepFields) => {
            const steps = [...(processData.steps || [])];
            steps[idx] = {
              ...steps[idx],
              ...stepFields
            };
            updateProcessFlow({ steps });
          };

          return (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">
                  Process Flow: From Numbers to Better Decisions
                </h4>
                <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                  Interactive 3D Stage
                </span>
              </div>

              {/* Live Section Preview Tool */}
              {showLivePreview && (
                <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-md bg-[#061a2e] text-white p-4 relative">
                  {/* Miniature Background Image Graphic */}
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <img src={imgUrl(processData.bgImage || '/images/finance_transform.jpg')}
                      alt="Section Preview BG"
                      className="w-full h-full object-cover opacity-45 filter brightness-95"
                     loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#061a2e]/90 via-[#061a2e]/60 to-[#061a2e]/95" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e]/85 via-transparent to-[#061a2e]/80" />
                  </div>

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      {/* Character Thumbnail */}
                      <div className="w-16 h-20 rounded-xl overflow-hidden bg-slate-800/80 border border-slate-600 shadow-xs shrink-0 flex items-end justify-center">
                        <img src={imgUrl(processData.characterImage || '/images/character_advisor.png')}
                          alt="Character"
                          className="max-h-full object-contain"
                         loading="lazy" decoding="async" />
                      </div>

                      {/* Header details */}
                      <div className="flex-1 space-y-1">
                        <span className="text-[9px] font-bold text-[#00c0e8] uppercase tracking-wider block">
                          {processData.badge || 'DRIVE GROWTH WITH CLARITY & STRATEGY'}
                        </span>
                        <h4 className="text-sm font-black text-white leading-tight">
                          {processData.heading || 'From numbers to better decisions'}
                        </h4>
                        <div className="inline-flex items-center space-x-1 px-2 py-0.5 bg-[#007791] text-white text-[9px] font-bold rounded-full">
                          <span>{processData.exploreText || 'Explore Insights'}</span>
                        </div>
                      </div>
                    </div>

                    {/* 3 Step Cards Preview */}
                    <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-700/80">
                      {(processData.steps || []).map((st, i) => (
                        <div key={st.id || i} className="bg-white rounded-lg p-1.5 border border-slate-200 shadow-xs flex flex-col justify-between">
                          <div className="h-10 rounded overflow-hidden mb-1 relative bg-slate-900">
                            <img src={imgUrl(st.image || (i === 0 ? '/images/step_numbers.jpg' : i === 1 ? '/images/step_insight.jpg' : '/images/step_leadership.jpg'))}
                              alt={st.title}
                              className="w-full h-full object-cover"
                             loading="lazy" decoding="async" />
                            <span className="absolute top-0.5 left-0.5 text-[8px] font-black text-white bg-black/60 px-1 rounded">
                              {st.num}
                            </span>
                          </div>
                          <span className="text-[10px] font-black text-[#061a2e] uppercase block truncate">{st.title}</span>
                          <span className="text-[8px] text-slate-500 block truncate">{st.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Section Background Image Editor */}
              <div className="p-4 bg-teal-50/50 rounded-2xl border border-teal-200 space-y-3">
                <div className="flex items-center space-x-1.5 text-teal-800">
                  <Sliders className="w-4 h-4 text-[#007791]" />
                  <span className="text-xs font-black uppercase tracking-wider">Process Flow Background Image</span>
                </div>
                <ImageFieldWithPreview
                  label="Section Background Graphic (Corporate Data & Telemetry)"
                  value={processData.bgImage || '/images/finance_transform.jpg'}
                  onChange={(url) => updateProcessFlow({ bgImage: url })}
                  onUpload={handleFileUpload}
                />
              </div>

              {/* Character Advisor Image Editor */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 block">Executive Character Portrait</span>
                <ImageFieldWithPreview
                  label="Presenter Character (Transparent PNG / Executive Portrait)"
                  value={processData.characterImage || '/images/character_advisor.png'}
                  onChange={(url) => updateProcessFlow({ characterImage: url })}
                  onUpload={handleFileUpload}
                />
              </div>

              {/* Typography / Headings */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={processData.badge || ''}
                    onChange={(e) => updateProcessFlow({ badge: e.target.value })}
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Main Heading</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={processData.heading || ''}
                    onChange={(e) => updateProcessFlow({ heading: e.target.value })}
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Key Perspective Explanatory Paragraph (From Document)
                  </label>
                  <textarea
                    rows={3}
                    value={processData.subtitle || ''}
                    onChange={(e) => updateProcessFlow({ subtitle: e.target.value })}
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    placeholder="Financial information should do more than describe the past..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Explore Button / Disc Text</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={processData.exploreText || ''}
                    onChange={(e) => updateProcessFlow({ exploreText: e.target.value })}
                    className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  />
                </div>
              </div>

              {/* 3 Step Cards Accordion / List */}
              <div className="space-y-4 pt-2">
                <h5 className="text-xs font-black text-[#061a2e] uppercase tracking-wider">
                  Transformation Steps (3 Cards)
                </h5>

                {(processData.steps || []).map((step, idx) => (
                  <div key={step.id || idx} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs font-black text-[#007791]">
                        Stage {step.num}: {step.title}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">Card {idx + 1} of 3</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Title</label>
                        <input
                          className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                          type="text"
                          value={step.title || ''}
                          onChange={(e) => updateStep(idx, { title: e.target.value })}
                          className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs font-bold focus:border-[#007791] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Main Desc</label>
                        <input
                          className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                          type="text"
                          value={step.desc || ''}
                          onChange={(e) => updateStep(idx, { desc: e.target.value })}
                          className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Sub-Description</label>
                      <input
                        className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                        type="text"
                        value={step.subDesc || ''}
                        onChange={(e) => updateStep(idx, { subDesc: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                      />
                    </div>

                    {/* Step Card Visual Image */}
                    <ImageFieldWithPreview
                      label={`Step ${step.num} Card Graphic`}
                      value={step.image || (idx === 0 ? '/images/step_numbers.jpg' : idx === 1 ? '/images/step_insight.jpg' : '/images/step_leadership.jpg')}
                      onChange={(url) => updateStep(idx, { image: url })}
                      onUpload={handleFileUpload}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* TAB 2.5: APPROACH & WHY US */}
        {activeTab === 'approach' && (
          <div className="space-y-6">

            {/* Live Component Preview Tool */}
            {showLivePreview && (
              <div className="space-y-3 p-3.5 bg-slate-900 rounded-2xl border border-slate-800 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs font-black text-white uppercase tracking-wider">
                      Live Section Preview
                    </span>
                  </div>

                  {/* Sub-view toggle */}
                  <div className="flex items-center space-x-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700 text-[10px]">
                    <button
                      type="button"
                      onClick={() => setApproachPreviewSubTab('whyUs')}
                      className={`px-2 py-0.5 rounded font-bold transition-all cursor-pointer ${
                        approachPreviewSubTab === 'whyUs'
                          ? 'bg-[#2bb673] text-white shadow-xs'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Why Us ({data.approachAndWhyUs?.whyUsItems?.length || 5})
                    </button>
                    <button
                      type="button"
                      onClick={() => setApproachPreviewSubTab('approach')}
                      className={`px-2 py-0.5 rounded font-bold transition-all cursor-pointer ${
                        approachPreviewSubTab === 'approach'
                          ? 'bg-[#007791] text-white shadow-xs'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Approach ({data.approachAndWhyUs?.approachSteps?.length || 4})
                    </button>
                    <button
                      type="button"
                      onClick={() => setApproachPreviewSubTab('all')}
                      className={`px-2 py-0.5 rounded font-bold transition-all cursor-pointer ${
                        approachPreviewSubTab === 'all'
                          ? 'bg-slate-600 text-white shadow-xs'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Both
                    </button>
                  </div>
                </div>

                {/* Sub-view: Why Us Live Cards */}
                {(approachPreviewSubTab === 'whyUs' || approachPreviewSubTab === 'all') && (
                  <div className="relative rounded-2xl overflow-hidden p-3 border border-slate-700/80 bg-[#061a2e]">
                    <img src={imgUrl(data.approachAndWhyUs?.whyUsBgImage || '/images/established_corporate.jpg')}
                      alt="Why Us Bg Preview"
                      className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
                     loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#061a2e]/90 via-[#061a2e]/80 to-[#061a2e]/95 pointer-events-none" />

                    <div className="relative z-10 space-y-2">
                      <div className="flex items-center justify-between border-b border-slate-700/60 pb-1.5">
                        <div>
                          <span className="text-[11px] font-extrabold text-emerald-400">
                            {data.approachAndWhyUs?.whyUsTitle || 'Why us?'}
                          </span>
                          <p className="text-[9px] text-slate-300 line-clamp-1">
                            {data.approachAndWhyUs?.whyUsSubtitle || 'Proven expertise, practical delivery, and strategic clarity.'}
                          </p>
                        </div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase bg-black/40 px-2 py-0.5 rounded">
                          Executive Backdrop
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {(data.approachAndWhyUs?.whyUsItems || []).map((item, idx) => (
                          <div
                            key={item.id || idx}
                            className="bg-slate-800/90 rounded-xl overflow-hidden border border-slate-700/80 p-2 space-y-1.5 group hover:border-emerald-500/50 transition-all shadow-xs"
                          >
                            <div className="h-20 rounded-lg overflow-hidden relative bg-slate-950">
                              <img src={imgUrl(item.image)}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                               loading="lazy" decoding="async" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/40 to-transparent"></div>
                              
                              {/* Floating Icon */}
                              <div className="absolute top-1.5 left-1.5 p-1 bg-white/95 rounded-md shadow-sm">
                                {renderPreviewIcon(item.icon)}
                              </div>

                              {/* Card Quick Actions */}
                              <div className="absolute top-1.5 right-1.5 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  type="button"
                                  onClick={() => setModalGalleryTarget({ type: 'why', index: idx })}
                                  className="px-1.5 py-0.5 bg-[#007791] hover:bg-[#006075] text-white rounded text-[8px] font-bold shadow-md cursor-pointer"
                                  title="Swap image from gallery"
                                >
                                  Swap
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setZoomImage({ url: item.image, label: item.title, description: item.desc, category: 'Why Choose Us' })}
                                  className="p-1 bg-black/70 hover:bg-black text-white rounded text-[8px] cursor-pointer"
                                  title="Inspect Image"
                                >
                                  <Maximize2 className="w-2.5 h-2.5" />
                                </button>
                              </div>

                              {/* Title overlay */}
                              <div className="absolute bottom-1 left-2 right-2">
                                <h5 className="text-[10px] font-extrabold text-white leading-tight line-clamp-1">
                                  {item.title}
                                </h5>
                              </div>
                            </div>

                            <p className="text-[9px] text-slate-300 line-clamp-2 leading-relaxed">
                              {item.desc}
                            </p>

                            <div className="pt-0.5 flex items-center justify-between text-[8px] font-bold text-emerald-400">
                              <span>Why Choose Evolve</span>
                              <span className="text-slate-500">Card #{idx + 1}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub-view: Our Approach Live Cards */}
                {(approachPreviewSubTab === 'approach' || approachPreviewSubTab === 'all') && (
                  <div className="relative rounded-2xl overflow-hidden p-3 border border-slate-700/80 bg-[#061a2e] mt-2">
                    <img src={imgUrl(data.approachAndWhyUs?.approachBgImage || '/images/hero_summit.jpg')}
                      alt="Our Approach Bg Preview"
                      className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
                     loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#061a2e]/90 via-[#002238]/80 to-[#061a2e]/95 pointer-events-none" />

                    <div className="relative z-10 space-y-2">
                      <div className="flex items-center justify-between border-b border-slate-700/60 pb-1.5">
                        <div>
                          <span className="text-[11px] font-extrabold text-[#00c0e8]">
                            {data.approachAndWhyUs?.approachTitle || 'Our approach'}
                          </span>
                          <p className="text-[9px] text-slate-300 line-clamp-1">
                            {data.approachAndWhyUs?.approachSubtitle || 'How we work'}
                          </p>
                        </div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase bg-black/40 px-2 py-0.5 rounded">
                          Approach Backdrop
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {(data.approachAndWhyUs?.approachSteps || []).map((step, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-800/90 rounded-xl overflow-hidden border border-slate-700/80 p-2 space-y-1.5 group hover:border-[#007791]/60 transition-all shadow-xs"
                          >
                            <div className="h-20 rounded-lg overflow-hidden relative bg-slate-950">
                              <img src={imgUrl(step.image)}
                                alt={step.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                               loading="lazy" decoding="async" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                              
                              {/* Step Badge */}
                              <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-white/95 rounded-md shadow-sm">
                                <span className="text-[8px] font-black text-[#007791]">
                                  {step.num}
                                </span>
                              </div>

                              {/* Card Quick Actions */}
                              <div className="absolute top-1.5 right-1.5 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  type="button"
                                  onClick={() => setModalGalleryTarget({ type: 'approach', index: idx })}
                                  className="px-1.5 py-0.5 bg-[#007791] hover:bg-[#006075] text-white rounded text-[8px] font-bold shadow-md cursor-pointer"
                                  title="Swap image from gallery"
                                >
                                  Swap
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setZoomImage({ url: step.image, label: step.title, description: step.desc, category: 'Our Approach' })}
                                  className="p-1 bg-black/70 hover:bg-black text-white rounded text-[8px] cursor-pointer"
                                  title="Inspect Image"
                                >
                                  <Maximize2 className="w-2.5 h-2.5" />
                                </button>
                              </div>

                              {/* Title overlay */}
                              <div className="absolute bottom-1 left-2 right-2">
                                <h5 className="text-[10px] font-extrabold text-white leading-tight line-clamp-1">
                                  {step.title}
                                </h5>
                              </div>
                            </div>

                            <p className="text-[9px] text-slate-300 line-clamp-2 leading-relaxed">
                              {step.desc}
                            </p>

                            <div className="pt-0.5 flex items-center justify-between text-[8px] font-bold text-[#007791]">
                              <span>Step {step.num}</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Approach Headings & Subtitles */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Our Approach Headings</h4>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 mb-1">Heading</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={data.approachAndWhyUs?.approachTitle || ''}
                    onChange={(e) => {
                      onUpdateData({
                        ...data,
                        approachAndWhyUs: { ...data.approachAndWhyUs, approachTitle: e.target.value }
                      });
                    }}
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded border border-slate-300 text-xs font-bold focus:border-[#007791] focus:outline-none"
                    placeholder="Our approach"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 mb-1">Subtitle</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={data.approachAndWhyUs?.approachSubtitle || ''}
                    onChange={(e) => {
                      onUpdateData({
                        ...data,
                        approachAndWhyUs: { ...data.approachAndWhyUs, approachSubtitle: e.target.value }
                      });
                    }}
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded border border-slate-300 text-xs font-bold focus:border-[#007791] focus:outline-none"
                    placeholder="How we work"
                  />
                </div>
                <ImageFieldWithPreview
                  label="Our Approach Section Background Image"
                  value={data.approachAndWhyUs?.approachBgImage || '/images/hero_summit.jpg'}
                  onChange={(url) => {
                    onUpdateData({
                      ...data,
                      approachAndWhyUs: { ...data.approachAndWhyUs, approachBgImage: url }
                    });
                  }}
                  onUpload={handleFileUpload}
                />
              </div>
            </div>

            {/* Our Approach (4 Steps Form) */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Our Approach (4 Steps Framework)</h4>
              {(data.approachAndWhyUs?.approachSteps || []).map((step, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-[#007791] uppercase">Step {step.num}: {step.title}</span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                      Step #{idx + 1}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="col-span-1">
                      <input
                        className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                        type="text"
                        value={step.num}
                        onChange={(e) => {
                          const updated = [...data.approachAndWhyUs.approachSteps];
                          updated[idx].num = e.target.value;
                          onUpdateData({
                            ...data,
                            approachAndWhyUs: { ...data.approachAndWhyUs, approachSteps: updated }
                          });
                        }}
                        className="w-full px-2 py-1.5 bg-white rounded border border-slate-300 text-xs font-bold text-center"
                        placeholder="01"
                      />
                    </div>
                    <div className="col-span-3">
                      <input
                        className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                        type="text"
                        value={step.title}
                        onChange={(e) => {
                          const updated = [...data.approachAndWhyUs.approachSteps];
                          updated[idx].title = e.target.value;
                          onUpdateData({
                            ...data,
                            approachAndWhyUs: { ...data.approachAndWhyUs, approachSteps: updated }
                          });
                        }}
                        className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded border border-slate-300 text-xs font-bold focus:border-[#007791] focus:outline-none"
                        placeholder="Step Title"
                      />
                    </div>
                  </div>
                  <textarea
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    rows={2}
                    value={step.desc}
                    onChange={(e) => {
                      const updated = [...data.approachAndWhyUs.approachSteps];
                      updated[idx].desc = e.target.value;
                      onUpdateData({
                        ...data,
                        approachAndWhyUs: { ...data.approachAndWhyUs, approachSteps: updated }
                      });
                    }}
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    placeholder="Step Description"
                  />
                  <ImageFieldWithPreview
                    label={`Step ${step.num} Artwork`}
                    value={step.image || ''}
                    onChange={(url) => {
                      const updated = [...data.approachAndWhyUs.approachSteps];
                      updated[idx].image = url;
                      onUpdateData({
                        ...data,
                        approachAndWhyUs: { ...data.approachAndWhyUs, approachSteps: updated }
                      });
                    }}
                    onUpload={handleFileUpload}
                  />

                  {/* Step Key Points / Highlights */}
                  <div className="pt-2 border-t border-slate-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                        Key Points ({(step.points || []).length})
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...data.approachAndWhyUs.approachSteps];
                          const curPoints = updated[idx].points || [];
                          updated[idx] = {
                            ...updated[idx],
                            points: [...curPoints, { title: "New Focus Point", desc: "Description of this focus point or activity." }]
                          };
                          onUpdateData({
                            ...data,
                            approachAndWhyUs: { ...data.approachAndWhyUs, approachSteps: updated }
                          });
                        }}
                        className="text-[10px] text-teal-700 hover:text-teal-900 font-bold flex items-center gap-0.5 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 hover:bg-teal-100 transition-colors"
                      >
                        + Add Point
                      </button>
                    </div>

                    {(step.points || []).map((point, pIdx) => (
                      <div key={pIdx} className="p-2 bg-white rounded-lg border border-slate-200 space-y-1.5 shadow-2xs">
                        <div className="flex items-center justify-between gap-1.5">
                          <input
                            className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                            type="text"
                            value={point.title || ''}
                            onChange={(e) => {
                              const updated = [...data.approachAndWhyUs.approachSteps];
                              const newPoints = [...(updated[idx].points || [])];
                              newPoints[pIdx] = { ...newPoints[pIdx], title: e.target.value };
                              updated[idx] = { ...updated[idx], points: newPoints };
                              onUpdateData({
                                ...data,
                                approachAndWhyUs: { ...data.approachAndWhyUs, approachSteps: updated }
                              });
                            }}
                            className="w-full px-2 py-1 bg-slate-50 rounded border border-slate-300 text-xs font-semibold text-slate-800"
                            placeholder="Point Title"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const updated = [...data.approachAndWhyUs.approachSteps];
                              const newPoints = (updated[idx].points || []).filter((_, i) => i !== pIdx);
                              updated[idx] = { ...updated[idx], points: newPoints };
                              onUpdateData({
                                ...data,
                                approachAndWhyUs: { ...data.approachAndWhyUs, approachSteps: updated }
                              });
                            }}
                            className="text-red-400 hover:text-red-600 text-xs px-1.5 py-0.5 font-bold hover:bg-red-50 rounded"
                            title="Remove point"
                          >
                            ✕
                          </button>
                        </div>
                        <textarea
                          className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                          rows={2}
                          value={point.desc || ''}
                          onChange={(e) => {
                            const updated = [...data.approachAndWhyUs.approachSteps];
                            const newPoints = [...(updated[idx].points || [])];
                            newPoints[pIdx] = { ...newPoints[pIdx], desc: e.target.value };
                            updated[idx] = { ...updated[idx], points: newPoints };
                            onUpdateData({
                              ...data,
                              approachAndWhyUs: { ...data.approachAndWhyUs, approachSteps: updated }
                            });
                          }}
                          className="w-full px-2 py-1 bg-slate-50 rounded border border-slate-300 text-xs text-slate-600"
                          placeholder="Point Description"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Why Us Headings */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-3 pt-4 border-t border-slate-200">
              <h4 className="text-xs font-bold text-[#2bb673] uppercase tracking-wider">Why Us? Section Headings</h4>
              <div className="space-y-2">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 mb-1">Title</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={data.approachAndWhyUs?.whyUsTitle || ''}
                    onChange={(e) => {
                      onUpdateData({
                        ...data,
                        approachAndWhyUs: { ...data.approachAndWhyUs, whyUsTitle: e.target.value }
                      });
                    }}
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded border border-slate-300 text-xs font-bold focus:border-[#007791] focus:outline-none"
                    placeholder="Why us?"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 mb-1">Subtitle</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={data.approachAndWhyUs?.whyUsSubtitle || ''}
                    onChange={(e) => {
                      onUpdateData({
                        ...data,
                        approachAndWhyUs: { ...data.approachAndWhyUs, whyUsSubtitle: e.target.value }
                      });
                    }}
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded border border-slate-300 text-xs font-semibold focus:border-[#007791] focus:outline-none"
                    placeholder="Proven expertise, practical delivery, and strategic clarity for your organisation."
                  />
                </div>
                <ImageFieldWithPreview
                  label="Why Us Section Background Image"
                  value={data.approachAndWhyUs?.whyUsBgImage || '/images/established_corporate.jpg'}
                  onChange={(url) => {
                    onUpdateData({
                      ...data,
                      approachAndWhyUs: { ...data.approachAndWhyUs, whyUsBgImage: url }
                    });
                  }}
                  onUpload={handleFileUpload}
                />
              </div>
            </div>

            {/* Why Us (5 Benefit Cards Form) */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#2bb673] uppercase tracking-wider">Why Us? (5 Benefit Cards)</h4>
              {(data.approachAndWhyUs?.whyUsItems || []).map((item, idx) => (
                <div key={item.id || idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-[#2bb673] uppercase">
                      Benefit Card {idx + 1}: {item.title}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                      Card #{idx + 1}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1">
                      <label className="block text-[9px] font-bold text-slate-500 mb-0.5">Icon</label>
                      <select
                        className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                        value={item.icon || 'Shield'}
                        onChange={(e) => {
                          const updated = [...data.approachAndWhyUs.whyUsItems];
                          updated[idx].icon = e.target.value;
                          onUpdateData({
                            ...data,
                            approachAndWhyUs: { ...data.approachAndWhyUs, whyUsItems: updated }
                          });
                        }}
                        className="w-full px-2 py-1.5 bg-white rounded border border-slate-300 text-xs font-bold cursor-pointer"
                      >
                        <option value="BarChart3">BarChart (Finance)</option>
                        <option value="Settings">Settings (Transform)</option>
                        <option value="Target">Target (Delivery)</option>
                        <option value="Users">Users (Engagement)</option>
                        <option value="Shield">Shield (Independent)</option>
                      </select>
                    </div>

                    <div className="col-span-2">
                      <label className="block text-[9px] font-bold text-slate-500 mb-0.5">Benefit Title</label>
                      <input
                        className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const updated = [...data.approachAndWhyUs.whyUsItems];
                          updated[idx].title = e.target.value;
                          onUpdateData({
                            ...data,
                            approachAndWhyUs: { ...data.approachAndWhyUs, whyUsItems: updated }
                          });
                        }}
                        className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded border border-slate-300 text-xs font-bold focus:border-[#007791] focus:outline-none"
                        placeholder="Benefit Title"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold text-slate-500 mb-0.5">Description</label>
                    <textarea
                      className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                      rows={2}
                      value={item.desc}
                      onChange={(e) => {
                        const updated = [...data.approachAndWhyUs.whyUsItems];
                        updated[idx].desc = e.target.value;
                        onUpdateData({
                          ...data,
                          approachAndWhyUs: { ...data.approachAndWhyUs, whyUsItems: updated }
                        });
                      }}
                      className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                      placeholder="Benefit Description"
                    />
                  </div>

                  <ImageFieldWithPreview
                    label={`Benefit Card ${idx + 1} Artwork`}
                    value={item.image || ''}
                    onChange={(url) => {
                      const updated = [...data.approachAndWhyUs.whyUsItems];
                      updated[idx].image = url;
                      onUpdateData({
                        ...data,
                        approachAndWhyUs: { ...data.approachAndWhyUs, whyUsItems: updated }
                      });
                    }}
                    onUpload={handleFileUpload}
                  />
                </div>
              ))}
            </div>
          </div>
        )}


        {/* TAB 3: WHAT WE DO */}
        {(activeTab === 'whatWeDo' || activeTab === 'whatWeDoSummary') && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">What We Do (4 Service Pillars)</h4>

            {/* Live Component Preview */}
            {showLivePreview && (
              <div className="grid grid-cols-2 gap-2">
                {data.whatWeDo.items.map((item, idx) => (
                  <div key={item.id || idx} className="rounded-xl overflow-hidden border border-slate-200 bg-white p-2.5 space-y-1.5 shadow-xs">
                    <div className="h-16 rounded-lg overflow-hidden relative bg-slate-100">
                      <img src={imgUrl(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover"
                       loading="lazy" decoding="async" />
                      <span className="absolute top-1 left-1 bg-[#061a2e]/80 text-[8px] font-black text-emerald-400 px-1.5 py-0.5 rounded">
                        {item.pillar}
                      </span>
                    </div>
                    <h5 className="text-[11px] font-extrabold text-[#061a2e] leading-tight line-clamp-1">{item.title}</h5>
                    <p className="text-[9px] text-slate-500 line-clamp-2 leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
            
            {data.whatWeDo.items.map((item, idx) => (
              <div key={item.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="text-[10px] font-extrabold text-[#2bb673] uppercase">Pillar {idx + 1}: {item.pillar}</span>
                <input
                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  type="text"
                  value={item.title}
                  onChange={(e) => {
                    const updated = [...data.whatWeDo.items];
                    updated[idx].title = e.target.value;
                    onUpdateData({ ...data, whatWeDo: { ...data.whatWeDo, items: updated } });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded border border-slate-300 text-xs font-bold focus:border-[#007791] focus:outline-none"
                  placeholder="Pillar Title"
                />
                <textarea
                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  rows={2}
                  value={item.desc}
                  onChange={(e) => {
                    const updated = [...data.whatWeDo.items];
                    updated[idx].desc = e.target.value;
                    onUpdateData({ ...data, whatWeDo: { ...data.whatWeDo, items: updated } });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  placeholder="Description"
                />
                <ImageFieldWithPreview
                  label={`${item.pillar} Pillar Graphic`}
                  value={item.image}
                  onChange={(url) => {
                    const updated = [...data.whatWeDo.items];
                    updated[idx].image = url;
                    onUpdateData({ ...data, whatWeDo: { ...data.whatWeDo, items: updated } });
                  }}
                  onUpload={handleFileUpload}
                />
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: WHO WE HELP */}
        

        {/* ======================================================== */}
        {/* TABS: WHAT WE DO DEDICATED SERVICE PILLAR PAGES          */}
        {/* ======================================================== */}
        {['pillarLead', 'pillarBuild', 'pillarTransform', 'pillarProtect'].includes(activeTab) && (() => {
          const pillarKey = activeTab === 'pillarLead'
            ? 'lead'
            : activeTab === 'pillarBuild'
            ? 'build'
            : activeTab === 'pillarTransform'
            ? 'transform'
            : 'protect';

          const pillarLabels = {
            lead: { name: 'LEAD — CFO & FP&A Advisory', badge: 'BRAND PILLAR: LEAD' },
            build: { name: 'BUILD — Finance Functions & Operating Models', badge: 'BRAND PILLAR: BUILD' },
            transform: { name: 'TRANSFORM — Data & Technology', badge: 'BRAND PILLAR: TRANSFORM' },
            protect: { name: 'PROTECT — Tax & Compliance', badge: 'BRAND PILLAR: PROTECT' }
          };

          const pillarData = data.pillarPagesData?.[pillarKey] || {};
          const currentHero = pillarData.hero || {
            badge: pillarLabels[pillarKey].badge,
            title: pillarLabels[pillarKey].name,
            tagline: '',
            paragraph1: '',
            paragraph2: '',
            ctaText: 'Start a Conversation',
            bgImage: ''
          };

          const updatePillar = (field, val) => {
            onUpdateData({
              ...data,
              pillarPagesData: {
                ...(data.pillarPagesData || {}),
                [pillarKey]: {
                  ...(data.pillarPagesData?.[pillarKey] || {}),
                  [field]: val
                }
              }
            });
          };

          const updatePillarHero = (fields) => {
            updatePillar('hero', { ...currentHero, ...fields });
          };

          return (
            <div className="space-y-5">
              {/* Pillar Header with Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">
                    {pillarLabels[pillarKey].name}
                  </h4>
                  <p className="text-[11px] text-slate-500">Edit hero, core services and governance questions</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {pillarLabels[pillarKey].badge}
                </span>
              </div>

              {/* 3-Section Selector Bar */}
              <div className="flex bg-slate-100 p-1 rounded-lg gap-1 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setPillarActiveSection('hero')}
                  className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    pillarActiveSection === 'hero'
                      ? 'bg-[#007791] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Hero &amp; Overview
                </button>
                <button
                  type="button"
                  onClick={() => setPillarActiveSection('services')}
                  className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    pillarActiveSection === 'services'
                      ? 'bg-[#007791] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Core Services
                </button>
                <button
                  type="button"
                  onClick={() => setPillarActiveSection('questions')}
                  className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    pillarActiveSection === 'questions'
                      ? 'bg-[#007791] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Questions &amp; Governance
                </button>
              </div>

              {/* ======================================================== */}
              {/* SECTION 1: HERO & OVERVIEW                              */}
              {/* ======================================================== */}
              {pillarActiveSection === 'hero' && (
                <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Pillar Badge Tag</label>
                    <input
                      type="text"
                      value={currentHero.badge || ''}
                      onChange={(e) => updatePillarHero({ badge: e.target.value })}
                      className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">H1 Main Title</label>
                    <input
                      type="text"
                      value={currentHero.title || ''}
                      onChange={(e) => updatePillarHero({ title: e.target.value })}
                      className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Tagline</label>
                    <textarea
                      rows={2}
                      value={currentHero.tagline || ''}
                      onChange={(e) => updatePillarHero({ tagline: e.target.value })}
                      className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Overview Paragraph 1</label>
                    <textarea
                      rows={3}
                      value={currentHero.paragraph1 || ''}
                      onChange={(e) => updatePillarHero({ paragraph1: e.target.value })}
                      className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Overview Paragraph 2</label>
                    <textarea
                      rows={3}
                      value={currentHero.paragraph2 || ''}
                      onChange={(e) => updatePillarHero({ paragraph2: e.target.value })}
                      className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">CTA Button Text</label>
                    <input
                      type="text"
                      value={currentHero.ctaText || ''}
                      onChange={(e) => updatePillarHero({ ctaText: e.target.value })}
                      className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    />
                  </div>

                  <ImageFieldWithPreview
                    label={`${pillarLabels[pillarKey].name} Hero Background`}
                    value={currentHero.bgImage || ''}
                    onChange={(url) => updatePillarHero({ bgImage: url })}
                    onUpload={handleFileUpload}
                  />
                </div>
              )}

              {/* ======================================================== */}
              {/* SECTION 2: CORE SERVICES                                */}
              {/* ======================================================== */}
              {pillarActiveSection === 'services' && (
                <div className="space-y-4">
                  {pillarKey === 'lead' && (() => {
                    const services = pillarData.cfoServices || [];
                    const updateService = (idx, key, val) => {
                      const updated = [...services];
                      updated[idx] = { ...updated[idx], [key]: val };
                      updatePillar('cfoServices', updated);
                    };
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">CFO Advisory Services (8 Modules)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{services.length} Total</span>
                        </div>
                        {services.map((svc, idx) => (
                          <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-bold text-[#007791] bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                Service {String(idx + 1).padStart(2, '0')}
                              </span>
                              <span className="text-[10px] text-slate-500">{svc.categoryLabel || svc.category}</span>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Service Title</label>
                              <input
                                type="text"
                                value={svc.title || ''}
                                onChange={(e) => updateService(idx, 'title', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Deliverable Description</label>
                              <textarea
                                rows={2}
                                value={svc.desc || ''}
                                onChange={(e) => updateService(idx, 'desc', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  {pillarKey === 'build' && (() => {
                    const tomItems = pillarData.tomSupportItems || [];
                    const updateTomItem = (idx, val) => {
                      const updated = [...tomItems];
                      updated[idx] = val;
                      updatePillar('tomSupportItems', updated);
                    };
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">Target Operating Model Support (10 Deliverables)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{tomItems.length} Total</span>
                        </div>
                        {tomItems.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                            <span className="w-6 text-[11px] font-bold text-[#007791] shrink-0 text-center">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <input
                              type="text"
                              value={item || ''}
                              onChange={(e) => updateTomItem(idx, e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  {pillarKey === 'transform' && (() => {
                    const services = pillarData.services || [];
                    const updateService = (idx, key, val) => {
                      const updated = [...services];
                      updated[idx] = { ...updated[idx], [key]: val };
                      updatePillar('services', updated);
                    };

                    const dataItems = pillarData.dataIntegrationItems || [];
                    const updateDataItem = (idx, val) => {
                      const updated = [...dataItems];
                      updated[idx] = val;
                      updatePillar('dataIntegrationItems', updated);
                    };

                    return (
                      <div className="space-y-5">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-700">Finance Transformation Services (9 Capabilities)</span>
                            <span className="text-[11px] text-slate-500 font-medium">{services.length} Total</span>
                          </div>
                          {services.map((svc, idx) => (
                            <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                              <span className="inline-block text-[11px] font-bold text-[#007791] bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                {svc.num || String(idx + 1).padStart(2, '0')} — {svc.title}
                              </span>
                              <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Title</label>
                                <input
                                  type="text"
                                  value={svc.title || ''}
                                  onChange={(e) => updateService(idx, 'title', e.target.value)}
                                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Scope</label>
                                <input
                                  type="text"
                                  value={svc.scope || ''}
                                  onChange={(e) => updateService(idx, 'scope', e.target.value)}
                                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Deliverable</label>
                                <input
                                  type="text"
                                  value={svc.deliverable || ''}
                                  onChange={(e) => updateService(idx, 'deliverable', e.target.value)}
                                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 border-t border-slate-200 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-700">Data Integration Items (8 Capabilities)</span>
                            <span className="text-[11px] text-slate-500 font-medium">{dataItems.length} Total</span>
                          </div>
                          {dataItems.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2 rounded-lg border border-slate-200">
                              <span className="w-6 text-[11px] font-bold text-[#007791] shrink-0 text-center">
                                {String(idx + 1).padStart(2, '0')}
                              </span>
                              <input
                                type="text"
                                value={typeof item === 'string' ? item : item.title || ''}
                                onChange={(e) => updateDataItem(idx, e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  {pillarKey === 'protect' && (() => {
                    const services = pillarData.coreServices || [];
                    const updateCoreService = (idx, key, val) => {
                      const updated = [...services];
                      updated[idx] = { ...updated[idx], [key]: val };
                      updatePillar('coreServices', updated);
                    };

                    const updateSubItems = (idx, text) => {
                      const updated = [...services];
                      const items = text.split('\n').map(s => s.trim()).filter(Boolean);
                      updated[idx] = { ...updated[idx], items };
                      updatePillar('coreServices', updated);
                    };

                    return (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">Tax &amp; Compliance Core Services (4 Modules)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{services.length} Total</span>
                        </div>
                        {services.map((svc, idx) => (
                          <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-bold text-[#007791] bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                Module {String(idx + 1).padStart(2, '0')}
                              </span>
                              <span className="text-[10px] font-bold text-slate-600">{svc.advisorRole}</span>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Service Title</label>
                              <input
                                type="text"
                                value={svc.title || ''}
                                onChange={(e) => updateCoreService(idx, 'title', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Lead Advisor Role</label>
                              <input
                                type="text"
                                value={svc.advisorRole || ''}
                                onChange={(e) => updateCoreService(idx, 'advisorRole', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Advisor Overview</label>
                              <textarea
                                rows={2}
                                value={svc.advisorDesc || ''}
                                onChange={(e) => updateCoreService(idx, 'advisorDesc', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                                Sub-items / Scope (One per line)
                              </label>
                              <textarea
                                rows={4}
                                value={(svc.items || []).join('\n')}
                                onChange={(e) => updateSubItems(idx, e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none font-mono"
                              />
                            </div>
                            <ImageFieldWithPreview
                              label={`${svc.title} Advisor Character Graphic`}
                              value={svc.character || ''}
                              onChange={(url) => updateCoreService(idx, 'character', url)}
                              onUpload={handleFileUpload}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* ======================================================== */}
              {/* SECTION 3: QUESTIONS & GOVERNANCE                       */}
              {/* ======================================================== */}
              {pillarActiveSection === 'questions' && (
                <div className="space-y-4">
                  {pillarKey === 'lead' && (() => {
                    const questions = pillarData.beyondQuestions || [];
                    const updateQuestion = (idx, val) => {
                      const updated = [...questions];
                      updated[idx] = { ...updated[idx], question: val };
                      updatePillar('beyondQuestions', updated);
                    };

                    const triggers = pillarData.triggerPoints || [];
                    const updateTrigger = (idx, val) => {
                      const updated = [...triggers];
                      updated[idx] = val;
                      updatePillar('triggerPoints', updated);
                    };

                    return (
                      <div className="space-y-5">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-700">Beyond Reporting The Numbers (8 Questions)</span>
                            <span className="text-[11px] text-slate-500 font-medium">{questions.length} Total</span>
                          </div>
                          {questions.map((q, idx) => (
                            <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                              <span className="w-6 text-[11px] font-bold text-emerald-600 shrink-0 text-center">
                                {q.num || String(idx + 1).padStart(2, '0')}
                              </span>
                              <input
                                type="text"
                                value={typeof q === 'string' ? q : q.question || ''}
                                onChange={(e) => updateQuestion(idx, e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 border-t border-slate-200 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-700">When Should You Consider CFO Advisory? (7 Triggers)</span>
                            <span className="text-[11px] text-slate-500 font-medium">{triggers.length} Total</span>
                          </div>
                          {triggers.map((t, idx) => (
                            <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                              <span className="w-6 text-[11px] font-bold text-teal-600 shrink-0 text-center">
                                {String(idx + 1).padStart(2, '0')}
                              </span>
                              <input
                                type="text"
                                value={t || ''}
                                onChange={(e) => updateTrigger(idx, e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  {pillarKey === 'build' && (() => {
                    const dimensions = pillarData.healthCheckDimensions || [];
                    const updateDimName = (idx, val) => {
                      const updated = [...dimensions];
                      updated[idx] = { ...updated[idx], name: val };
                      updatePillar('healthCheckDimensions', updated);
                    };

                    const updateDimItems = (idx, text) => {
                      const updated = [...dimensions];
                      const items = text.split('\n').map(s => s.trim()).filter(Boolean);
                      updated[idx] = { ...updated[idx], items };
                      updatePillar('healthCheckDimensions', updated);
                    };

                    return (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">Finance Health Check Dimensions (5 Key Areas)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{dimensions.length} Total</span>
                        </div>
                        {dimensions.map((dim, idx) => (
                          <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-bold text-[#007791] bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                Dimension {dim.num || String(idx + 1).padStart(2, '0')}
                              </span>
                              <span className="text-[10px] font-bold text-slate-500 uppercase">{dim.id}</span>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Dimension Name</label>
                              <input
                                type="text"
                                value={dim.name || ''}
                                onChange={(e) => updateDimName(idx, e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                                Assessment Criteria / Sub-items (One per line)
                              </label>
                              <textarea
                                rows={4}
                                value={(dim.items || []).join('\n')}
                                onChange={(e) => updateDimItems(idx, e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none font-mono"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  {pillarKey === 'transform' && (() => {
                    const triggers = pillarData.transformationTriggers || [];
                    const updateTrigger = (idx, val) => {
                      const updated = [...triggers];
                      updated[idx] = val;
                      updatePillar('transformationTriggers', updated);
                    };

                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">When Transformation Makes Sense (9 Triggers)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{triggers.length} Total</span>
                        </div>
                        {triggers.map((t, idx) => (
                          <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                            <span className="w-6 text-[11px] font-bold text-emerald-600 shrink-0 text-center">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <input
                              type="text"
                              value={typeof t === 'string' ? t : (t.text || t.title || '')}
                              onChange={(e) => updateTrigger(idx, e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  {pillarKey === 'protect' && (() => {
                    const stages = pillarData.healthCheckStages || [];
                    const updateStage = (idx, val) => {
                      const updated = [...stages];
                      updated[idx] = val;
                      updatePillar('healthCheckStages', updated);
                    };

                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">Compliance Health Check (9 Structured Stages)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{stages.length} Total</span>
                        </div>
                        {stages.map((stg, idx) => (
                          <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                            <span className="w-6 text-[11px] font-bold text-[#2bb673] shrink-0 text-center">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <input
                              type="text"
                              value={stg || ''}
                              onChange={(e) => updateStage(idx, e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          );
        })()}

        
        {/* ======================================================== */}
        {/* WHO WE HELP DEDICATED SECTOR PAGES (CMS EDITOR)           */}
        {/* ======================================================== */}
        {['sectorGrowing', 'sectorCorporate', 'sectorNFP', 'sectorCouncil'].includes(activeTab) && (() => {
          const sectorKey = activeTab === 'sectorGrowing'
            ? 'growing-businesses'
            : activeTab === 'sectorCorporate'
            ? 'established-corporate'
            : activeTab === 'sectorNFP'
            ? 'non-profit-community'
            : 'local-government';

          const sectorLabels = {
            'growing-businesses': { name: 'Growing Businesses', badge: 'GROWING BUSINESS SOLUTIONS' },
            'established-corporate': { name: 'Established & Corporate Organisations', badge: 'ESTABLISHED & CORPORATE ORGANISATIONS' },
            'non-profit-community': { name: 'Not-for-Profit & Community', badge: 'NOT-FOR-PROFIT & COMMUNITY SOLUTIONS' },
            'local-government': { name: 'Local Government / Councils', badge: 'LOCAL GOVERNMENT SOLUTIONS' }
          };

          const sectorData = data.whoWeHelpDetailPages?.[sectorKey] || {};
          const currentHero = sectorData.hero || {
            badge: sectorLabels[sectorKey].badge,
            title: sectorLabels[sectorKey].name,
            tagline: '',
            paragraph1: '',
            paragraph2: '',
            ctaText: 'Start a Conversation',
            bgImage: ''
          };

          const updateSector = (field, val) => {
            onUpdateData({
              ...data,
              whoWeHelpDetailPages: {
                ...(data.whoWeHelpDetailPages || {}),
                [sectorKey]: {
                  ...(data.whoWeHelpDetailPages?.[sectorKey] || {}),
                  [field]: val
                }
              }
            });
          };

          const updateSectorHero = (fields) => {
            updateSector('hero', { ...currentHero, ...fields });
          };

          return (
            <div className="space-y-5">
              {/* Sector Header with Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    {sectorLabels[sectorKey].name}
                  </h4>
                  <p className="text-[11px] text-slate-500">Edit hero, key solutions, and governance questions</p>
                </div>
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                  {sectorLabels[sectorKey].badge}
                </span>
              </div>

              {/* 3-Section Selector Bar */}
              <div className="flex bg-slate-100 p-1 rounded-lg gap-1 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setPillarActiveSection('hero')}
                  className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    pillarActiveSection === 'hero'
                      ? 'bg-indigo-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Hero &amp; Overview
                </button>
                <button
                  type="button"
                  onClick={() => setPillarActiveSection('services')}
                  className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    pillarActiveSection === 'services'
                      ? 'bg-indigo-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Key Solutions
                </button>
                <button
                  type="button"
                  onClick={() => setPillarActiveSection('questions')}
                  className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    pillarActiveSection === 'questions'
                      ? 'bg-indigo-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Governance &amp; Diagnostics
                </button>
              </div>

              {/* 1. HERO SECTION */}
              {pillarActiveSection === 'hero' && (
                <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Sector Badge Tag</label>
                    <input
                      type="text"
                      value={currentHero.badge || ''}
                      onChange={(e) => updateSectorHero({ badge: e.target.value })}
                      className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">H1 Main Title</label>
                    <input
                      type="text"
                      value={currentHero.title || ''}
                      onChange={(e) => updateSectorHero({ title: e.target.value })}
                      className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Tagline</label>
                    <textarea
                      rows={2}
                      value={currentHero.tagline || ''}
                      onChange={(e) => updateSectorHero({ tagline: e.target.value })}
                      className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Overview Paragraph 1</label>
                    <textarea
                      rows={3}
                      value={currentHero.paragraph1 || ''}
                      onChange={(e) => updateSectorHero({ paragraph1: e.target.value })}
                      className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Overview Paragraph 2</label>
                    <textarea
                      rows={3}
                      value={currentHero.paragraph2 || ''}
                      onChange={(e) => updateSectorHero({ paragraph2: e.target.value })}
                      className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">CTA Button Text</label>
                    <input
                      type="text"
                      value={currentHero.ctaText || ''}
                      onChange={(e) => updateSectorHero({ ctaText: e.target.value })}
                      className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                  <ImageFieldWithPreview
                    label={`${sectorLabels[sectorKey].name} Hero Background`}
                    value={currentHero.bgImage || ''}
                    onChange={(url) => updateSectorHero({ bgImage: url })}
                    onUpload={handleFileUpload}
                  />
                </div>
              )}

              {/* 2. KEY SOLUTIONS SECTION */}
              {pillarActiveSection === 'services' && (
                <div className="space-y-4">
                  {sectorKey === 'growing-businesses' && (() => {
                    const solutions = sectorData.keySolutions || [];
                    const updateSolution = (idx, key, val) => {
                      const updated = [...solutions];
                      updated[idx] = { ...updated[idx], [key]: val };
                      updateSector('keySolutions', updated);
                    };
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">Growing Businesses Key Solutions (9 Modules)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{solutions.length} Total</span>
                        </div>
                        {solutions.map((sol, idx) => (
                          <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                            <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                              Solution {String(idx + 1).padStart(2, '0')}
                            </span>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Title</label>
                              <input
                                type="text"
                                value={sol.title || ''}
                                onChange={(e) => updateSolution(idx, 'title', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Description</label>
                              <textarea
                                rows={2}
                                value={sol.desc || ''}
                                onChange={(e) => updateSolution(idx, 'desc', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  {sectorKey === 'established-corporate' && (() => {
                    const areas = sectorData.coreSupportAreas || [];
                    const updateArea = (idx, key, val) => {
                      const updated = [...areas];
                      updated[idx] = { ...updated[idx], [key]: val };
                      updateSector('coreSupportAreas', updated);
                    };
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">Corporate Core Support Areas (6 Areas)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{areas.length} Total</span>
                        </div>
                        {areas.map((area, idx) => (
                          <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                            <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                              Area {String(idx + 1).padStart(2, '0')}
                            </span>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Area Title</label>
                              <input
                                type="text"
                                value={area.area || ''}
                                onChange={(e) => updateArea(idx, 'area', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Description &amp; Focus</label>
                              <textarea
                                rows={2}
                                value={area.desc || ''}
                                onChange={(e) => updateArea(idx, 'desc', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  {sectorKey === 'non-profit-community' && (() => {
                    const solutions = sectorData.keySolutions || [];
                    const updateSolution = (idx, val) => {
                      const updated = [...solutions];
                      updated[idx] = { ...updated[idx], title: val };
                      updateSector('keySolutions', updated);
                    };
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">NFP Key Solutions (9 Modules)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{solutions.length} Total</span>
                        </div>
                        {solutions.map((sol, idx) => (
                          <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                            <span className="w-6 text-[11px] font-bold text-indigo-700 shrink-0 text-center">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <input
                              type="text"
                              value={sol.title || ''}
                              onChange={(e) => updateSolution(idx, e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  {sectorKey === 'local-government' && (() => {
                    const solutions = sectorData.keySolutions || [];
                    const updateSolution = (idx, val) => {
                      const updated = [...solutions];
                      updated[idx] = { ...updated[idx], title: val };
                      updateSector('keySolutions', updated);
                    };
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">Council Key Solutions (7 Modules)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{solutions.length} Total</span>
                        </div>
                        {solutions.map((sol, idx) => (
                          <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                            <span className="w-6 text-[11px] font-bold text-indigo-700 shrink-0 text-center">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <input
                              type="text"
                              value={sol.title || ''}
                              onChange={(e) => updateSolution(idx, e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* 3. GOVERNANCE & DIAGNOSTICS */}
              {pillarActiveSection === 'questions' && (
                <div className="space-y-4">
                  {sectorKey === 'growing-businesses' && (() => {
                    const stages = sectorData.flowStages || [];
                    const updateStage = (idx, val) => {
                      const updated = [...stages];
                      updated[idx] = val;
                      updateSector('flowStages', updated);
                    };
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">Management-Led Maturity Flow (4 Stages)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{stages.length} Total</span>
                        </div>
                        {stages.map((stg, idx) => (
                          <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                            <span className="w-6 text-[11px] font-bold text-teal-600 shrink-0 text-center">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <input
                              type="text"
                              value={stg || ''}
                              onChange={(e) => updateStage(idx, e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  {sectorKey === 'established-corporate' && (() => {
                    const howItems = sectorData.howWeWork || [];
                    const updateHowItem = (idx, val) => {
                      const updated = [...howItems];
                      updated[idx] = val;
                      updateSector('howWeWork', updated);
                    };
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">How We Work With You (6 Ways)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{howItems.length} Total</span>
                        </div>
                        {howItems.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                            <span className="w-6 text-[11px] font-bold text-indigo-700 shrink-0 text-center">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <input
                              type="text"
                              value={item || ''}
                              onChange={(e) => updateHowItem(idx, e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  {sectorKey === 'non-profit-community' && (() => {
                    const questions = sectorData.keyQuestions || [];
                    const updateQuestion = (idx, val) => {
                      const updated = [...questions];
                      updated[idx] = val;
                      updateSector('keyQuestions', updated);
                    };
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">Key Governance Questions (7 Questions)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{questions.length} Total</span>
                        </div>
                        {questions.map((q, idx) => (
                          <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                            <span className="w-6 text-[11px] font-bold text-teal-600 shrink-0 text-center">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <input
                              type="text"
                              value={q || ''}
                              onChange={(e) => updateQuestion(idx, e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  {sectorKey === 'local-government' && (() => {
                    const dimensions = sectorData.healthCheckDimensions || [];
                    const updateDimension = (idx, val) => {
                      const updated = [...dimensions];
                      updated[idx] = val;
                      updateSector('healthCheckDimensions', updated);
                    };
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">Council Health Check Dimensions (6 Dimensions)</span>
                          <span className="text-[11px] text-slate-500 font-medium">{dimensions.length} Total</span>
                        </div>
                        {dimensions.map((dim, idx) => (
                          <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                            <span className="w-6 text-[11px] font-bold text-indigo-700 shrink-0 text-center">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <input
                              type="text"
                              value={dim || ''}
                              onChange={(e) => updateDimension(idx, e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-indigo-600 focus:outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          );
        })()}

        {activeTab === 'whoWeHelp' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Who We Help Target Cards</h4>

            {/* Live Component Preview */}
            {showLivePreview && (
              <div className="grid grid-cols-2 gap-2">
                {data.whoWeHelp.items.map((item, idx) => (
                  <div key={item.id || idx} className="rounded-xl overflow-hidden border border-slate-200 bg-white p-2.5 space-y-1.5 shadow-xs">
                    <div className="h-16 rounded-lg overflow-hidden relative bg-slate-100">
                      <img src={imgUrl(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover"
                       loading="lazy" decoding="async" />
                      <span className="absolute bottom-1 left-1 bg-[#061a2e]/80 text-[8px] font-bold text-white px-1.5 py-0.5 rounded">
                        Sector {idx + 1}
                      </span>
                    </div>
                    <h5 className="text-[11px] font-extrabold text-[#061a2e] leading-tight line-clamp-1">{item.title}</h5>
                    <p className="text-[9px] text-slate-500 line-clamp-2 leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
            
            {data.whoWeHelp.items.map((item, idx) => (
              <div key={item.id || idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="text-[10px] font-extrabold text-[#007791] uppercase">Card {idx + 1}</span>
                <input
                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  type="text"
                  value={item.title}
                  onChange={(e) => {
                    const updated = [...data.whoWeHelp.items];
                    updated[idx].title = e.target.value;
                    onUpdateData({ ...data, whoWeHelp: { ...data.whoWeHelp, items: updated } });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded border border-slate-300 text-xs font-bold focus:border-[#007791] focus:outline-none"
                  placeholder="Target Audience Title"
                />
                <input
                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  type="text"
                  value={item.desc}
                  onChange={(e) => {
                    const updated = [...data.whoWeHelp.items];
                    updated[idx].desc = e.target.value;
                    onUpdateData({ ...data, whoWeHelp: { ...data.whoWeHelp, items: updated } });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                  placeholder="Short Description"
                />
                <ImageFieldWithPreview
                  label={`${item.title} Sector Graphic`}
                  value={item.image}
                  onChange={(url) => {
                    const updated = [...data.whoWeHelp.items];
                    updated[idx].image = url;
                    onUpdateData({ ...data, whoWeHelp: { ...data.whoWeHelp, items: updated } });
                  }}
                  onUpload={handleFileUpload}
                />
              </div>
            ))}
          </div>
        )}

        {/* TAB 4.5: EXECUTIVE INSIGHTS & ARTICLES */}
        {activeTab === 'insights' && (
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Executive Insights & Articles Editor</h4>
            
            {(data.insightsData?.articles || data.insights || []).map((article, idx) => (
              <div key={article.id || idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#2bb673] uppercase tracking-wider">
                    Article #{idx + 1}: {article.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">ID: {article.id}</span>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Article Title</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={article.title}
                    onChange={(e) => {
                      const articlesList = [...(data.insightsData?.articles || data.insights || [])];
                      articlesList[idx].title = e.target.value;
                      onUpdateData({
                        ...data,
                        insightsData: { ...data.insightsData, articles: articlesList },
                        insights: articlesList
                      });
                    }}
                    className="w-full px-2.5 py-1.5 bg-white rounded-lg border border-slate-300 text-xs font-bold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Category</label>
                    <input
                      className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                      type="text"
                      value={article.category}
                      onChange={(e) => {
                        const articlesList = [...(data.insightsData?.articles || data.insights || [])];
                        articlesList[idx].category = e.target.value;
                        onUpdateData({
                          ...data,
                          insightsData: { ...data.insightsData, articles: articlesList },
                          insights: articlesList
                        });
                      }}
                      className="w-full px-2 py-1 bg-white rounded border border-slate-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Read Time</label>
                    <input
                      className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                      type="text"
                      value={article.readTime}
                      onChange={(e) => {
                        const articlesList = [...(data.insightsData?.articles || data.insights || [])];
                        articlesList[idx].readTime = e.target.value;
                        onUpdateData({
                          ...data,
                          insightsData: { ...data.insightsData, articles: articlesList },
                          insights: articlesList
                        });
                      }}
                      className="w-full px-2 py-1 bg-white rounded border border-slate-300 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Summary / Excerpt</label>
                  <textarea
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    rows={2}
                    value={article.summary}
                    onChange={(e) => {
                      const articlesList = [...(data.insightsData?.articles || data.insights || [])];
                      articlesList[idx].summary = e.target.value;
                      onUpdateData({
                        ...data,
                        insightsData: { ...data.insightsData, articles: articlesList },
                        insights: articlesList
                      });
                    }}
                    className="w-full px-2.5 py-1.5 bg-white rounded-lg border border-slate-300 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Executive Synopsis</label>
                  <textarea
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    rows={2}
                    value={article.synopsis || ''}
                    onChange={(e) => {
                      const articlesList = [...(data.insightsData?.articles || data.insights || [])];
                      articlesList[idx].synopsis = e.target.value;
                      onUpdateData({
                        ...data,
                        insightsData: { ...data.insightsData, articles: articlesList },
                        insights: articlesList
                      });
                    }}
                    className="w-full px-2.5 py-1.5 bg-white rounded-lg border border-slate-300 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Key Takeaway Quote</label>
                  <input
                    className="w-full px-2.5 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
                    type="text"
                    value={article.quotePullout || ''}
                    onChange={(e) => {
                      const articlesList = [...(data.insightsData?.articles || data.insights || [])];
                      articlesList[idx].quotePullout = e.target.value;
                      onUpdateData({
                        ...data,
                        insightsData: { ...data.insightsData, articles: articlesList },
                        insights: articlesList
                      });
                    }}
                    className="w-full px-2.5 py-1.5 bg-white rounded-lg border border-slate-300 text-xs font-semibold"
                  />
                </div>

                {/* Article Header Image with Live Preview Tools */}
                <ImageFieldWithPreview
                  label="Article Header Image"
                  value={article.image || ''}
                  onChange={(url) => {
                    const articlesList = [...(data.insightsData?.articles || data.insights || [])];
                    articlesList[idx].image = url;
                    onUpdateData({
                      ...data,
                      insightsData: { ...data.insightsData, articles: articlesList },
                      insights: articlesList
                    });
                  }}
                  onUpload={handleFileUpload}
                />
              </div>
            ))}
          </div>
        )}

        {/* TAB 5: CTA BANNER */}
        {activeTab === 'ctaBanner' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">CTA Pre-Footer Banner Settings</h4>
            
            {/* Live Component Preview */}
            {showLivePreview && (
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-lg relative bg-[#061a2e] text-white p-4 space-y-2">
                <div className="absolute inset-0 opacity-25 pointer-events-none">
                  <img src={imgUrl(data.ctaBanner.bgImage || '/images/hero_summit.jpg')}
                    alt="Preview"
                    className="w-full h-full object-cover"
                   loading="lazy" decoding="async" />
                </div>
                <div className="relative z-10 space-y-1">
                  <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">
                    {data.ctaBanner.tag || "LET'S MOVE FORWARD"}
                  </span>
                  <h4 className="text-xs font-black text-white leading-snug">
                    {data.ctaBanner.title || 'Have a finance, transformation or compliance challenge?'}
                  </h4>
                  <p className="text-[10px] text-gray-300 leading-relaxed">
                    {data.ctaBanner.subtitle}
                  </p>
                  <div className="pt-1">
                    <span className="brand-button-gradient text-white text-[9px] font-bold px-3 py-1 rounded-full inline-block">
                      {data.ctaBanner.buttonText || 'Start a Conversation →'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Tagline</label>
              <input
                type="text"
                value={data.ctaBanner.tag}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    ctaBanner: { ...data.ctaBanner, tag: e.target.value }
                  })
                }
                className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Headline</label>
              <textarea
                rows={2}
                value={data.ctaBanner.title}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    ctaBanner: { ...data.ctaBanner, title: e.target.value }
                  })
                }
                className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
              <textarea
                rows={2}
                value={data.ctaBanner.subtitle}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    ctaBanner: { ...data.ctaBanner, subtitle: e.target.value }
                  })
                }
                className="w-full px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:outline-none"
              />
            </div>

            <ImageFieldWithPreview
              label="CTA Pre-Footer Background Graphic"
              value={data.ctaBanner.bgImage || '/images/hero_summit.jpg'}
              onChange={(url) =>
                onUpdateData({
                  ...data,
                  ctaBanner: { ...data.ctaBanner, bgImage: url }
                })
              }
              onUpload={handleFileUpload}
            />
          </div>
        )}

        {/* TAB 5.5: VISUAL ASSET GALLERY */}
        {activeTab === 'gallery' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Visual Asset Gallery & Characters</h4>
                <p className="text-[11px] text-slate-500">Photorealistic visuals designed to represent each service pillar and sector</p>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                {ALL_IMAGE_PRESETS.length} Assets
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
              {['All', 'Service Pillars', 'Sectors (Who We Help)', 'Brand Story & Hero', 'Process Transformation', 'Corporate & Team'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setGalleryCategory(cat)}
                  className={`px-2.5 py-1 text-[10px] font-bold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    galleryCategory === cat
                      ? 'bg-[#007791] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={gallerySearch}
                onChange={(e) => setGallerySearch(e.target.value)}
                placeholder="Search assets by keywords, characters, or role..."
                className="w-full pl-8 pr-3 py-1.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-xl border border-slate-300 text-xs outline-none focus:border-[#007791]"
              />
            </div>

            {/* Visual Grid */}
            <div className="space-y-3">
              {ALL_IMAGE_PRESETS
                .filter((p) => {
                  const matchesCat = galleryCategory === 'All' || p.category === galleryCategory;
                  const matchesSearch =
                    p.label.toLowerCase().includes(gallerySearch.toLowerCase()) ||
                    p.description.toLowerCase().includes(gallerySearch.toLowerCase());
                  return matchesCat && matchesSearch;
                })
                .map((asset) => (
                  <div
                    key={asset.id}
                    className="p-3 bg-white rounded-2xl border border-slate-200 hover:border-[#007791] shadow-xs transition-all duration-200 flex flex-col sm:flex-row gap-3 items-start"
                  >
                    {/* Thumbnail with Zoom overlay */}
                    <div
                      className="relative w-full sm:w-36 h-24 rounded-xl overflow-hidden bg-slate-900 shrink-0 group cursor-pointer"
                      onClick={() => setZoomImage(asset)}
                    >
                      <img src={imgUrl(asset.url)}
                        alt={asset.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                       decoding="async" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                      <span className="absolute bottom-1 left-1 text-[8px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded">
                        {asset.category.split(' ')[0]}
                      </span>
                    </div>

                    {/* Metadata & Actions */}
                    <div className="flex-1 space-y-1.5 w-full">
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="text-xs font-black text-[#061a2e] leading-snug">{asset.label}</h5>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-relaxed">{asset.description}</p>
                      
                      {/* Action Row */}
                      <div className="pt-1 flex flex-wrap items-center gap-1.5">
                        {/* Quick Apply Dropdown */}
                        <select
                          defaultValue=""
                          onChange={(e) => {
                            if (e.target.value) {
                              handleApplyPreset(e.target.value, asset.url);
                              e.target.value = '';
                            }
                          }}
                          className="text-[10px] font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-lg px-2 py-1 outline-none cursor-pointer"
                        >
                          <option value="" disabled>Apply to Section ▾</option>
                          <optgroup label="Main Page Sections">
                            <option value="hero">Hero Background</option>
                            <option value="section2">Finance More Than Numbers</option>
                            <option value="cta">CTA Pre-Footer Banner</option>
                          </optgroup>
                          <optgroup label="Service Pillars">
                            <option value="pillar-0">Pillar 1: LEAD (CFO & FP&A)</option>
                            <option value="pillar-1">Pillar 2: BUILD (Operating Models)</option>
                            <option value="pillar-2">Pillar 3: TRANSFORM (Data & Tech)</option>
                            <option value="pillar-3">Pillar 4: PROTECT (Tax & Compliance)</option>
                          </optgroup>
                          <optgroup label="Sectors (Who We Help)">
                            <option value="sector-0">Sector 1: Growing Businesses</option>
                            <option value="sector-1">Sector 2: Established & Corporate</option>
                            <option value="sector-2">Sector 3: Not-for-Profit</option>
                            <option value="sector-3">Sector 4: Local Government</option>
                          </optgroup>
                          <optgroup label="Process Flow (Numbers to Decisions)">
                            <option value="process-bg">★ Process Flow Section Background Image</option>
                            <option value="process-char">Process Flow Character Graphic</option>
                            <option value="process-step-0">Step 01: NUMBERS Card</option>
                            <option value="process-step-1">Step 02: INSIGHT Card</option>
                            <option value="process-step-2">Step 03: LEADERSHIP Card</option>
                          </optgroup>
                          <optgroup label="Why Choose Us (5 Benefit Cards)">
                            <option value="why-bg">★ Why Us Section Background Image</option>
                            <option value="why-0">Why Us 1: Finance Experience</option>
                            <option value="why-1">Why Us 2: Transformation Capability</option>
                            <option value="why-2">Why Us 3: Practical Delivery</option>
                            <option value="why-3">Why Us 4: Flexible Engagement</option>
                            <option value="why-4">Why Us 5: Independent Perspective</option>
                          </optgroup>
                          <optgroup label="Our Approach (4 Steps)">
                            <option value="approach-bg">★ Our Approach Section Background Image</option>
                            <option value="approach-0">Step 1: Understand</option>
                            <option value="approach-1">Step 2: Diagnose</option>
                            <option value="approach-2">Step 3: Design</option>
                            <option value="approach-3">Step 4: Deliver</option>
                          </optgroup>
                        </select>

                        {/* Copy Path Button */}
                        <button
                          type="button"
                          onClick={() => handleCopyPath(asset.url, asset.id)}
                          className="text-[10px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-lg px-2 py-1 flex items-center space-x-1 cursor-pointer transition-colors"
                          title="Copy relative image path"
                        >
                          {copiedId === asset.id ? <CheckCheck className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-500" />}
                          <span>{copiedId === asset.id ? 'Copied!' : 'Copy Path'}</span>
                        </button>

                        {/* Inspect Button */}
                        <button
                          type="button"
                          onClick={() => setZoomImage(asset)}
                          className="text-[10px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-lg px-2 py-1 flex items-center space-x-1 cursor-pointer transition-colors"
                          title="View High-Resolution Graphic"
                        >
                          <Maximize2 className="w-3 h-3 text-[#007791]" />
                          <span>Inspect</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* TAB 6: BACKUP & IMPORT */}
        {activeTab === 'tools' && (
          <div className="space-y-6">
            {/* Live Typography Font Switcher */}
            <div>
              <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider mb-2">Live Corporate Typography Selector</h4>
              <p className="text-xs text-slate-500 mb-3">Test top executive font pairings live across the entire website with 1 click.</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'font-jakarta', label: 'Plus Jakarta Sans (Default)', desc: 'Modern geometric executive' },
                  { id: 'font-inter', label: 'Inter', desc: 'Precision Fintech & Enterprise' },
                  { id: 'font-outfit', label: 'Outfit', desc: 'Sleek premium luxury corporate' },
                  { id: 'font-sora', label: 'Sora', desc: 'Bold tech-forward advisory' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => onChangeFont(f.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      activeFont === f.id
                        ? 'border-[#007791] bg-teal-50/80 shadow-xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <span className={`text-xs font-extrabold block ${f.id}`}>{f.label}</span>
                    <span className="text-[10px] text-slate-500 font-normal">{f.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider mb-2">Export / Backup Site Configuration</h4>
              <p className="text-xs text-slate-500 mb-3">Download all current site text, imagery, and pillar configurations as a clean JSON file.</p>
              <button
                onClick={handleExportJSON}
                className="w-full py-2.5 px-4 bg-[#061a2e] hover:bg-[#007791] text-white text-xs font-bold rounded-xl flex items-center justify-center space-x-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export Site Data (JSON)</span>
              </button>
            </div>


            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider mb-2">Import JSON Configuration</h4>
              <p className="text-xs text-slate-500 mb-3">Upload a saved JSON file to restore or apply custom site layouts.</p>
              <label className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[#061a2e] text-xs font-bold rounded-xl flex items-center justify-center space-x-2 cursor-pointer transition-colors">
                <Upload className="w-4 h-4" />
                <span>Choose JSON File to Restore</span>
                <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
              </label>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-2">Reset to Blueprint Defaults</h4>
              <p className="text-xs text-slate-500 mb-3">Revert all site modifications back to the original EVOLVE corporate blueprint layout.</p>
              <button
                onClick={() => {
                  if (window.confirm('Reset all CMS customizations back to initial defaults?')) {
                    onResetData();
                    showToast('Reset to original blueprint!');
                  }
                }}
                className="w-full py-2.5 px-4 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold rounded-xl flex items-center justify-center space-x-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Content to Default</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Drawer Footer Actions */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
        <button
          onClick={() => {
            showToast('Changes saved to LocalStorage!');
          }}
          className="brand-button-gradient text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center space-x-1.5 shadow-md"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>

        <button
          onClick={onClose}
          className="text-xs font-bold text-slate-600 hover:text-[#061a2e]"
        >
          Close Drawer
        </button>
      </div>

      {/* High-Resolution Artwork Lightbox Inspector */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setZoomImage(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-96 w-full bg-slate-900 overflow-hidden">
              <img src={imgUrl(zoomImage.url)}
                alt={zoomImage.label}
                className="w-full h-full object-cover"
               loading="lazy" decoding="async" />
              <button
                type="button"
                onClick={() => setZoomImage(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-wider bg-[#061a2e]/85 backdrop-blur-md text-emerald-400 px-3 py-1 rounded-lg">
                {zoomImage.category}
              </span>
            </div>
            <div className="p-5 space-y-2 bg-white">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-black text-[#061a2e]">{zoomImage.label}</h4>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{zoomImage.url}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{zoomImage.description}</p>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setZoomImage(null)}
                  className="px-4 py-1.5 bg-[#007791] text-white text-xs font-bold rounded-xl cursor-pointer hover:bg-[#006075]"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Swap Image Gallery Modal */}
      {modalGalleryTarget && (
        <ImageGalleryModal
          isOpen={true}
          onClose={() => setModalGalleryTarget(null)}
          onSelect={(url) => {
            if (modalGalleryTarget.type === 'why') {
              const updated = [...(data.approachAndWhyUs?.whyUsItems || [])];
              if (updated[modalGalleryTarget.index]) {
                updated[modalGalleryTarget.index].image = url;
                onUpdateData({
                  ...data,
                  approachAndWhyUs: { ...data.approachAndWhyUs, whyUsItems: updated }
                });
                showToast(`Updated image for ${updated[modalGalleryTarget.index].title}!`);
              }
            } else if (modalGalleryTarget.type === 'approach') {
              const updated = [...(data.approachAndWhyUs?.approachSteps || [])];
              if (updated[modalGalleryTarget.index]) {
                updated[modalGalleryTarget.index].image = url;
                onUpdateData({
                  ...data,
                  approachAndWhyUs: { ...data.approachAndWhyUs, approachSteps: updated }
                });
                showToast(`Updated image for Step ${updated[modalGalleryTarget.index].num}!`);
              }
            }
            setModalGalleryTarget(null);
          }}
          currentUrl={
            modalGalleryTarget.type === 'why'
              ? data.approachAndWhyUs?.whyUsItems?.[modalGalleryTarget.index]?.image
              : data.approachAndWhyUs?.approachSteps?.[modalGalleryTarget.index]?.image
          }
        />
      )}
    </div>
  );
};
