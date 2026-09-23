import React, { useState } from 'react';
import { X, Save, RotateCcw, Image, Download, Upload, Sparkles, Check, ChevronRight } from 'lucide-react';

export const CMSDrawer = ({ isOpen, onClose, data, onUpdateData, onResetData }) => {
  const [activeTab, setActiveTab] = useState('hero');
  const [toastMessage, setToastMessage] = useState('');

  if (!isOpen) return null;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
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

  // Preset Image Options for quick selection
  const imagePresets = [
    { label: 'Mountain Summit', url: '/images/hero_summit.jpg' },
    { label: 'Executive Meeting', url: '/images/finance_meeting.jpg' },
    { label: 'CFO Boardroom', url: '/images/cfo_advisory.jpg' },
    { label: 'Finance Desktop', url: '/images/finance_build.jpg' },
    { label: 'Digital Transform', url: '/images/finance_transform.jpg' },
    { label: 'Tax Compliance', url: '/images/tax_compliance.jpg' },
    { label: 'Growing Plant Sprout', url: '/images/growing_businesses.jpg' },
    { label: 'City Skyline', url: '/images/established_corporate.jpg' },
    { label: 'Community Unity', url: '/images/non_profit_community.jpg' },
    { label: 'Municipal City', url: '/images/local_government.jpg' }
  ];

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-white shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-300">
      
      {/* CMS Drawer Header */}
      <div className="bg-[#061a2e] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-emerald-500/20 text-[#2bb673] rounded-lg">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-base tracking-tight">Dynamic CMS & Content Engine</h3>
            <p className="text-[11px] text-gray-300">Live edit all site text, layout items and images</p>
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
          { id: 'ctaBanner', label: 'CTA Banner' },
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

      {/* Editor Body Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        
        {/* TAB 1: HERO */}
        {activeTab === 'hero' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Hero Section Settings</h4>
            
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

            {/* Hero Image Setting */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700 mb-1">Hero Background Image</label>
              <div className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={data.hero.bgImage}
                  onChange={(e) =>
                    onUpdateData({
                      ...data,
                      hero: { ...data.hero, bgImage: e.target.value }
                    })
                  }
                  className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-xs"
                />
                <label className="px-3 py-2 bg-slate-100 border border-slate-300 rounded-lg text-xs font-bold cursor-pointer hover:bg-slate-200 flex items-center space-x-1">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      handleFileUpload(e, (url) =>
                        onUpdateData({ ...data, hero: { ...data.hero, bgImage: url } })
                      )
                    }
                  />
                </label>
              </div>

              {/* Preset Selector */}
              <span className="text-[11px] text-slate-500 font-semibold block mb-1">Quick Select Preset:</span>
              <div className="grid grid-cols-2 gap-1.5">
                {imagePresets.slice(0, 4).map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      onUpdateData({ ...data, hero: { ...data.hero, bgImage: p.url } })
                    }
                    className={`text-[11px] p-1.5 rounded text-left border truncate ${
                      data.hero.bgImage === p.url ? 'border-[#007791] bg-teal-50 font-bold' : 'border-slate-200'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SECTION 2 */}
        {activeTab === 'section2' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Finance is More Than Numbers Settings</h4>
            
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

            {/* Section 2 Image */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700 mb-1">Card Image</label>
              <div className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={data.section2.image}
                  onChange={(e) =>
                    onUpdateData({
                      ...data,
                      section2: { ...data.section2, image: e.target.value }
                    })
                  }
                  className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-xs"
                />
                <label className="px-3 py-2 bg-slate-100 border border-slate-300 rounded-lg text-xs font-bold cursor-pointer hover:bg-slate-200 flex items-center space-x-1">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      handleFileUpload(e, (url) =>
                        onUpdateData({ ...data, section2: { ...data.section2, image: url } })
                      )
                    }
                  />
                </label>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: WHAT WE DO */}
        {activeTab === 'whatWeDo' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">What We Do (4 Service Pillars)</h4>
            
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
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={item.image}
                    onChange={(e) => {
                      const updated = [...data.whatWeDo.items];
                      updated[idx].image = e.target.value;
                      onUpdateData({ ...data, whatWeDo: { ...data.whatWeDo, items: updated } });
                    }}
                    className="flex-1 px-2.5 py-1.5 bg-white rounded border border-slate-300 text-xs"
                    placeholder="Image URL"
                  />
                  <label className="px-2 py-1 bg-white border border-slate-300 rounded text-[11px] font-bold cursor-pointer hover:bg-slate-100 flex items-center">
                    <Upload className="w-3 h-3 mr-1" />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleFileUpload(e, (url) => {
                          const updated = [...data.whatWeDo.items];
                          updated[idx].image = url;
                          onUpdateData({ ...data, whatWeDo: { ...data.whatWeDo, items: updated } });
                        })
                      }
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: WHO WE HELP */}
        {activeTab === 'whoWeHelp' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">Who We Help Target Cards</h4>
            
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
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={item.image}
                    onChange={(e) => {
                      const updated = [...data.whoWeHelp.items];
                      updated[idx].image = e.target.value;
                      onUpdateData({ ...data, whoWeHelp: { ...data.whoWeHelp, items: updated } });
                    }}
                    className="flex-1 px-2.5 py-1.5 bg-white rounded border border-slate-300 text-xs"
                    placeholder="Image URL"
                  />
                  <label className="px-2 py-1 bg-white border border-slate-300 rounded text-[11px] font-bold cursor-pointer hover:bg-slate-100 flex items-center">
                    <Upload className="w-3 h-3 mr-1" />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleFileUpload(e, (url) => {
                          const updated = [...data.whoWeHelp.items];
                          updated[idx].image = url;
                          onUpdateData({ ...data, whoWeHelp: { ...data.whoWeHelp, items: updated } });
                        })
                      }
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 5: CTA BANNER */}
        {activeTab === 'ctaBanner' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#007791] uppercase tracking-wider">CTA Pre-Footer Banner</h4>
            
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
          </div>
        )}

        {/* TAB 6: BACKUP & IMPORT */}
        {activeTab === 'tools' && (
          <div className="space-y-6">
            <div>
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
    </div>
  );
};
