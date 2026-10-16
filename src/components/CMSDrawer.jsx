import React, { useState } from 'react';
import { X, Save, RotateCcw, Image, Download, Upload, Sparkles, Check, ChevronRight, Eye, EyeOff, LayoutGrid, Search, Copy, CheckCheck, Maximize2, ArrowRight } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { ImageFieldWithPreview, ALL_IMAGE_PRESETS } from './CMSImageTools';

export const CMSDrawer = ({ isOpen, onClose, data, activeFont, onChangeFont, onUpdateData, onResetData }) => {
  const [activeTab, setActiveTab] = useState('hero');
  const [toastMessage, setToastMessage] = useState('');
  const [showLivePreview, setShowLivePreview] = useState(true);
  const [galleryCategory, setGalleryCategory] = useState('All');
  const [gallerySearch, setGallerySearch] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  if (!isOpen) return null;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
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
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-white shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-300">
      
      {/* CMS Drawer Header */}
      <div className="bg-[#061a2e] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-emerald-500/20 text-[#2bb673] rounded-lg">
            <Sparkles className="w-5 h-5" />
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

      {/* Tab Navigation */}
      <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50 p-1 space-x-1">
        {[
          { id: 'hero', label: 'Hero' },
          { id: 'section2', label: 'More Than Numbers' },
          { id: 'whatWeDo', label: 'What We Do' },
          { id: 'whoWeHelp', label: 'Who We Help' },
          { id: 'approach', label: 'Approach & Why Us' },
          { id: 'insights', label: 'Insights & Articles' },
          { id: 'ctaBanner', label: 'CTA Banner' },
          { id: 'gallery', label: '🖼 Asset Gallery' },
          { id: 'tools', label: 'Backup / Import' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-white text-[#007791] shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-[#061a2e]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Live Preview Toggle Bar */}
      <div className="px-6 py-2 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-1.5 text-slate-700 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#007791]" />
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
        
        {/* TAB 1: HERO */}
        {activeTab === 'hero' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Hero Section Settings</h4>
            
            {/* Live Component Preview */}
            {showLivePreview && (
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-lg relative bg-[#061a2e] text-white p-5 space-y-3">
                <div className="absolute inset-0 opacity-35 pointer-events-none">
                  <img
                    src={imgUrl(data.hero.bgImage || '/images/hero_summit.jpg')}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/80 to-transparent"></div>
                </div>
                <div className="relative z-10 space-y-2">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                    {data.hero.badge || 'Executive Strategy'}
                  </span>
                  <h3 className="text-sm font-extrabold text-white leading-snug line-clamp-2">
                    {data.hero.title || 'Finance that moves organisations forward.'}
                  </h3>
                  <p className="text-[11px] text-gray-200 line-clamp-2 leading-relaxed">
                    {data.hero.subtitle || 'Clarity for today. Capability for tomorrow.'}
                  </p>
                  <div className="pt-1">
                    <span className="brand-button-gradient text-white text-[10px] font-bold px-3 py-1 rounded-full inline-block shadow-sm">
                      {data.hero.ctaText || 'Start a Conversation →'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Badge Subhead</label>
              <input
                type="text"
                value={data.hero.badge}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    hero: { ...data.hero, badge: e.target.value }
                  })
                }
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:ring-1 focus:ring-[#007791]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Main Title</label>
              <textarea
                rows={2}
                value={data.hero.title}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    hero: { ...data.hero, title: e.target.value }
                  })
                }
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:ring-1 focus:ring-[#007791]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
              <textarea
                rows={2}
                value={data.hero.subtitle}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    hero: { ...data.hero, subtitle: e.target.value }
                  })
                }
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:border-[#007791] focus:ring-1 focus:ring-[#007791]"
              />
            </div>

            {/* Hero Image with Full Live Preview Tools */}
            <ImageFieldWithPreview
              label="Hero Background Image"
              value={data.hero.bgImage || '/images/hero_summit.jpg'}
              onChange={(url) =>
                onUpdateData({
                  ...data,
                  hero: { ...data.hero, bgImage: url }
                })
              }
              onUpload={handleFileUpload}
            />
          </div>
        )}

        {/* TAB 2: SECTION 2 */}
        {activeTab === 'section2' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Finance is More Than Numbers Settings</h4>
            
            {/* Live Component Preview */}
            {showLivePreview && (
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white p-4 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <div className="w-full sm:w-2/5 h-24 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative shrink-0">
                    <img
                      src={imgUrl(data.section2.image || '/images/finance_meeting.jpg')}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
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
                type="text"
                value={data.section2.heading}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    section2: { ...data.section2, heading: e.target.value }
                  })
                }
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Paragraph 1</label>
              <textarea
                rows={2}
                value={data.section2.paragraph1}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    section2: { ...data.section2, paragraph1: e.target.value }
                  })
                }
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Paragraph 2</label>
              <textarea
                rows={2}
                value={data.section2.paragraph2}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    section2: { ...data.section2, paragraph2: e.target.value }
                  })
                }
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Callout Badge Text</label>
              <input
                type="text"
                value={data.section2.calloutText}
                onChange={(e) =>
                  onUpdateData({
                    ...data,
                    section2: { ...data.section2, calloutText: e.target.value }
                  })
                }
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
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

        {/* TAB 2.5: APPROACH & WHY US */}
        {activeTab === 'approach' && (
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Our Approach (4 Steps)</h4>
            {data.approachAndWhyUs.approachSteps.map((step, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="text-[10px] font-extrabold text-[#007791] uppercase">Step {step.num}: {step.title}</span>
                <input
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
                  className="w-full px-2.5 py-1.5 bg-white rounded border border-slate-300 text-xs font-bold"
                  placeholder="Step Title"
                />
                <textarea
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
                  className="w-full px-2.5 py-1.5 bg-white rounded border border-slate-300 text-xs"
                  placeholder="Step Description"
                />
                <ImageFieldWithPreview
                  label={`Step ${step.num} Illustration`}
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
              </div>
            ))}

            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider pt-4 border-t border-slate-200">Why Us? (5 Benefit Cards)</h4>
            {data.approachAndWhyUs.whyUsItems.map((item, idx) => (
              <div key={item.id || idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="text-[10px] font-extrabold text-[#2bb673] uppercase">Benefit Card {idx + 1}</span>
                <input
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
                  className="w-full px-2.5 py-1.5 bg-white rounded border border-slate-300 text-xs font-bold"
                  placeholder="Benefit Title"
                />
                <textarea
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
                  className="w-full px-2.5 py-1.5 bg-white rounded border border-slate-300 text-xs"
                  placeholder="Benefit Description"
                />
                <ImageFieldWithPreview
                  label={`Benefit ${idx + 1} Illustration`}
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
        )}


        {/* TAB 3: WHAT WE DO */}
        {activeTab === 'whatWeDo' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">What We Do (4 Service Pillars)</h4>

            {/* Live Component Preview */}
            {showLivePreview && (
              <div className="grid grid-cols-2 gap-2">
                {data.whatWeDo.items.map((item, idx) => (
                  <div key={item.id || idx} className="rounded-xl overflow-hidden border border-slate-200 bg-white p-2.5 space-y-1.5 shadow-xs">
                    <div className="h-16 rounded-lg overflow-hidden relative bg-slate-100">
                      <img
                        src={imgUrl(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
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
                  type="text"
                  value={item.title}
                  onChange={(e) => {
                    const updated = [...data.whatWeDo.items];
                    updated[idx].title = e.target.value;
                    onUpdateData({ ...data, whatWeDo: { ...data.whatWeDo, items: updated } });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white rounded border border-slate-300 text-xs font-bold"
                  placeholder="Pillar Title"
                />
                <textarea
                  rows={2}
                  value={item.desc}
                  onChange={(e) => {
                    const updated = [...data.whatWeDo.items];
                    updated[idx].desc = e.target.value;
                    onUpdateData({ ...data, whatWeDo: { ...data.whatWeDo, items: updated } });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white rounded border border-slate-300 text-xs"
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
        {activeTab === 'whoWeHelp' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Who We Help Target Cards</h4>

            {/* Live Component Preview */}
            {showLivePreview && (
              <div className="grid grid-cols-2 gap-2">
                {data.whoWeHelp.items.map((item, idx) => (
                  <div key={item.id || idx} className="rounded-xl overflow-hidden border border-slate-200 bg-white p-2.5 space-y-1.5 shadow-xs">
                    <div className="h-16 rounded-lg overflow-hidden relative bg-slate-100">
                      <img
                        src={imgUrl(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
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
                  type="text"
                  value={item.title}
                  onChange={(e) => {
                    const updated = [...data.whoWeHelp.items];
                    updated[idx].title = e.target.value;
                    onUpdateData({ ...data, whoWeHelp: { ...data.whoWeHelp, items: updated } });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white rounded border border-slate-300 text-xs font-bold"
                  placeholder="Target Audience Title"
                />
                <input
                  type="text"
                  value={item.desc}
                  onChange={(e) => {
                    const updated = [...data.whoWeHelp.items];
                    updated[idx].desc = e.target.value;
                    onUpdateData({ ...data, whoWeHelp: { ...data.whoWeHelp, items: updated } });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white rounded border border-slate-300 text-xs"
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
                  <img
                    src={imgUrl(data.ctaBanner.bgImage || '/images/hero_summit.jpg')}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
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
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
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
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
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
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
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
                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 rounded-xl border border-slate-200 text-xs outline-none focus:border-[#007791] focus:bg-white"
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
                      <img
                        src={imgUrl(asset.url)}
                        alt={asset.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
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
                          <option value="hero">Hero Background</option>
                          <option value="section2">Finance More Than Numbers</option>
                          <option value="pillar-0">Pillar 1: LEAD (CFO & FP&A)</option>
                          <option value="pillar-1">Pillar 2: BUILD (Operating Models)</option>
                          <option value="pillar-2">Pillar 3: TRANSFORM (Data & Tech)</option>
                          <option value="pillar-3">Pillar 4: PROTECT (Tax & Compliance)</option>
                          <option value="sector-0">Sector 1: Growing Businesses</option>
                          <option value="sector-1">Sector 2: Established & Corporate</option>
                          <option value="sector-2">Sector 3: Not-for-Profit</option>
                          <option value="sector-3">Sector 4: Local Government</option>
                          <option value="cta">CTA Pre-Footer Banner</option>
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
              <img
                src={imgUrl(zoomImage.url)}
                alt={zoomImage.label}
                className="w-full h-full object-cover"
              />
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
    </div>
  );
};
