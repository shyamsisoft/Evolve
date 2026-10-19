import React, { useState, useEffect } from 'react';
import { X, Lock, ShieldCheck, UserCheck, AlertCircle, RefreshCw, Sparkles, CheckCircle2, KeyRound, Mail, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { SSO_CONFIG, exchangeAuthCode } from '../services/ssoAuth';
import { DUMMY_ADMIN_USERS } from '../data/dummyAdminUsers';

export const AdminLoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState('sso'); // 'sso' | 'demo'
  const [status, setStatus] = useState('ready'); // 'ready' | 'verifying' | 'success' | 'error'
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [verifiedUser, setVerifiedUser] = useState(null);

  // Demo fallback form state
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [demoError, setDemoError] = useState('');
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const portalUrl = (SSO_CONFIG.portalUrl || 'http://localhost:3000').replace(/\/$/, '');
  const portalOrigin = new URL(portalUrl).origin;
  const currentOrigin = typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : '';
  const iframeSrc = `${portalUrl}/embed/login?origin=${currentOrigin}`;

  // Reset state when modal opens or closes
  useEffect(() => {
    if (isOpen) {
      setStatus('ready');
      setIsIframeLoading(true);
      setErrorMessage('');
      setVerifiedUser(null);
    }
  }, [isOpen, activeTab]);

  // Listen for Cross-Domain postMessage from Sandboxed SSO Iframe
  useEffect(() => {
    if (!isOpen || activeTab !== 'sso') return;

    const handleMessage = async (event) => {
      // Security Rule 1: Validate origin strictly matches portal origin
      if (event.origin !== portalOrigin) {
        return;
      }

      const data = event.data;
      if (!data) return;

      // Security Rule 2: Intercept single-use 60s authorization code
      if (data.type === 'SHS_AUTH_SUCCESS' || data.type === 'TEA_AUTH_SUCCESS') {
        const code = data.code;
        const initialUser = data.user;

        console.log('[AdminLoginModal] Received postMessage authorization event:', {
          type: data.type,
          user: initialUser?.email
        });

        setStatus('verifying');
        setErrorMessage('');

        try {
          // Security Rule 3: Exchange short-lived authorization code via backend
          const exchangeResult = await exchangeAuthCode(code);
          const { sessionToken, user: ssoUser, expiresAt } = exchangeResult.data || {};

          const resolvedUser = ssoUser || initialUser || {};
          const normalizedUser = {
            id: resolvedUser.id || 'sso-user',
            email: resolvedUser.email || 'admin@evolve.com',
            name: resolvedUser.firstName 
              ? `${resolvedUser.firstName} ${resolvedUser.lastName || ''}`.trim()
              : resolvedUser.name || resolvedUser.email || 'SSO Administrator',
            role: resolvedUser.globalRole || resolvedUser.role || 'Super Administrator',
            sessionToken: sessionToken,
            expiresAt: expiresAt,
            isSSO: true
          };

          setVerifiedUser(normalizedUser);
          setStatus('success');

          // Smooth transition into authenticated state
          setTimeout(() => {
            if (onLoginSuccess) {
              onLoginSuccess(normalizedUser);
            }
            if (onClose) {
              onClose();
            }
          }, 800);
        } catch (err) {
          console.error('[AdminLoginModal] Backend exchange failed:', err);
          setStatus('error');
          setErrorMessage(err.message || 'Authorization code verification failed. Please try again.');
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isOpen, activeTab, portalOrigin, onLoginSuccess, onClose]);

  if (!isOpen) return null;

  // Handle Demo login fallback
  const handleDemoLogin = (e) => {
    e.preventDefault();
    setDemoError('');
    setIsDemoLoading(true);

    setTimeout(() => {
      const trimmedId = identifier.trim().toLowerCase();
      const user = DUMMY_ADMIN_USERS.find(
        (u) =>
          (u.email.toLowerCase() === trimmedId || u.username.toLowerCase() === trimmedId) &&
          u.password === password
      );

      if (user) {
        setIsDemoLoading(false);
        if (onLoginSuccess) onLoginSuccess(user);
        if (onClose) onClose();
      } else {
        setIsDemoLoading(false);
        setDemoError('Invalid credentials. Please click one of the demo admin accounts below.');
      }
    }, 300);
  };

  const handleQuickFill = (user) => {
    setIdentifier(user.email);
    setPassword(user.password);
    setDemoError('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
      style={{ background: 'rgba(6,26,46,0.85)', backdropFilter: 'blur(10px)' }}
    >
      {/* Backdrop click close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in zoom-in-95 fade-in duration-200 flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="bg-[#061a2e] text-white px-6 py-5 sm:px-7 sm:py-6 relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Login Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Centralized SSO Gateway</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Administrator Sign In
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Protected by Sandboxed Iframe Isolation & 60s One-Time Auth Codes.
          </p>

          {/* Mode Switch Tabs */}
          <div className="flex items-center space-x-2 mt-4 bg-white/10 p-1 rounded-xl backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab('sso')}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center space-x-1.5 ${
                activeTab === 'sso'
                  ? 'bg-gradient-to-r from-[#007791] to-[#2bb673] text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>SHS Single Sign-On</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('demo')}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center space-x-1.5 ${
                activeTab === 'demo'
                  ? 'bg-white/20 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Demo Fallback</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          
          {/* TAB 1: SHS SSO EMBEDDED CONTAINER */}
          {activeTab === 'sso' && (
            <div className="space-y-3">
              {/* Security Status Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-[11px] text-slate-600">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-[#061a2e]">SSO Gateway:</span>
                  <span className="font-mono text-slate-500">{portalUrl}</span>
                </div>
                <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Sandboxed
                </span>
              </div>

              {/* Status Notifications */}
              {status === 'verifying' && (
                <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold animate-in fade-in">
                  <RefreshCw className="w-4 h-4 text-teal-600 animate-spin" />
                  <span>Exchanging one-time authorization code via backend (/api/auth/callback)...</span>
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div>Identity Verified! Welcome, {verifiedUser?.name || 'Administrator'}</div>
                    <div className="text-[10px] text-emerald-600 font-normal">Opening CMS Content Manager...</div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-start space-x-2.5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
                  <div className="flex-1">
                    <div className="font-bold">Authentication Exchange Error</div>
                    <div className="mt-0.5">{errorMessage}</div>
                    <button
                      type="button"
                      onClick={() => setStatus('ready')}
                      className="mt-2 text-xs font-bold text-rose-700 underline hover:text-rose-900 cursor-pointer"
                    >
                      Retry SSO Login
                    </button>
                  </div>
                </div>
              )}

              {/* DESIGNATED CUSTOM <div> CONTAINER FOR EMBEDDED LOGIN */}
              <div
                id="shs-login-container"
                className="w-full h-[430px] rounded-2xl bg-slate-950 overflow-hidden relative border border-slate-700 shadow-inner"
              >
                {/* Connecting overlay while iframe is loading */}
                {isIframeLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 bg-[#061a2e] text-white z-10">
                    <RefreshCw className="w-6 h-6 text-emerald-400 animate-spin" />
                    <span className="text-xs font-bold text-slate-300">
                      Loading SHS Enterprise Gateway UI...
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Target: {portalUrl}/embed/login
                    </span>
                  </div>
                )}

                {/* Declaratively Rendered Sandboxed Iframe (Zero DOM conflict) */}
                <iframe
                  src={iframeSrc}
                  title="SHS Enterprise Authentication"
                  onLoad={() => setIsIframeLoading(false)}
                  className="w-full h-full border-none rounded-2xl bg-transparent"
                  sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
                />
              </div>

              {/* Security & Architectural Notes */}
              <div className="pt-2 text-[10px] text-slate-500 space-y-1 text-center">
                <p>
                  &bull; Credentials typed inside the iframe cannot be intercepted by the host window.
                </p>
                <p>
                  &bull; Transmits 60s TTL authorization code via <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700 font-mono">window.postMessage</code>.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: DEMO FALLBACK CREDENTIALS */}
          {activeTab === 'demo' && (
            <div className="space-y-4">
              {demoError && (
                <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
                  <span>{demoError}</span>
                </div>
              )}

              <form onSubmit={handleDemoLogin} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#061a2e] uppercase tracking-wider mb-1.5">
                    Username or Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="admin@evolve.com or admin"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#007791] focus:ring-2 focus:ring-[#007791]/15 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#061a2e] uppercase tracking-wider mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 focus:border-[#007791] focus:ring-2 focus:ring-[#007791]/15 text-sm outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isDemoLoading}
                  className="w-full brand-button-gradient text-white text-sm font-bold py-3 rounded-xl flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 mt-1 cursor-pointer"
                >
                  <span>{isDemoLoading ? 'Verifying...' : 'Sign In with Demo Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Demo Admin Credentials Click to fill */}
              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Quick Click-to-Fill Credentials
                  </span>
                </div>

                <div className="space-y-1.5">
                  {DUMMY_ADMIN_USERS.map((user, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleQuickFill(user)}
                      className="w-full text-left p-2.5 rounded-xl border border-slate-200 hover:border-[#007791] hover:bg-[#f0f5fa] transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#061a2e] flex items-center space-x-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-[#007791]" />
                          <span>{user.name}</span>
                          <span className="text-[10px] font-medium text-slate-500">({user.role})</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 font-mono">
                          {user.email} &bull; pass: <span className="text-[#007791] font-semibold">{user.password}</span>
                        </div>
                      </div>
                      <span className="text-xs text-[#007791] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        Fill &rarr;
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
