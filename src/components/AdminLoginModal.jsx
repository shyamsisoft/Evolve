import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck, UserCheck, KeyRound, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

// Pre-configured dummy admin accounts
export const DUMMY_ADMIN_USERS = [
  {
    email: 'admin@evolve.com',
    username: 'admin',
    password: 'admin123',
    name: 'Executive Admin',
    role: 'Super Administrator'
  },
  {
    email: 'editor@evolve.com',
    username: 'editor',
    password: 'editor123',
    name: 'Content Lead',
    role: 'CMS Editor'
  }
];

export const AdminLoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      const trimmedId = identifier.trim().toLowerCase();
      const user = DUMMY_ADMIN_USERS.find(
        (u) =>
          (u.email.toLowerCase() === trimmedId || u.username.toLowerCase() === trimmedId) &&
          u.password === password
      );

      if (user) {
        setIsLoading(false);
        onLoginSuccess(user);
        onClose();
      } else {
        setIsLoading(false);
        setError('Invalid credentials. Please use one of the demo admin accounts below.');
      }
    }, 400);
  };

  const handleQuickFill = (user) => {
    setIdentifier(user.email);
    setPassword(user.password);
    setError('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(6,26,46,0.8)', backdropFilter: 'blur(8px)' }}
    >
      {/* Backdrop click close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Login Box */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in zoom-in-95 fade-in duration-200">
        
        {/* Top Header */}
        <div className="bg-[#061a2e] text-white px-7 py-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Lock className="w-4 h-4" />
            <span>Secure Admin Portal</span>
          </div>

          <h3 className="text-xl font-extrabold text-white tracking-tight">
            Administrator Sign In
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Access CMS content engine and site management controls.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-7 space-y-5">
          {error && (
            <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
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
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full brand-button-gradient text-white text-sm font-bold py-3 rounded-xl flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 mt-2 cursor-pointer"
            >
              <span>{isLoading ? 'Verifying...' : 'Sign In to Admin Portal'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Dummy Admin Credentials Box */}
          <div className="mt-5 pt-5 border-t border-slate-100 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Demo Admin Credentials
              </span>
              <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Click to Auto-fill
              </span>
            </div>

            <div className="space-y-2">
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
                    Use &rarr;
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
