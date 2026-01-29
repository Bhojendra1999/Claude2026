'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { HiLockClosed, HiUser, HiExclamationCircle } from 'react-icons/hi';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/admin');
        router.refresh();
      } else {
        // Show detailed error message
        if (data.authenticated === false) {
          setError('❌ Invalid credentials. Environment variables may not be set in Vercel. Check ADMIN_USERNAME and ADMIN_PASSWORD.');
        } else {
          setError(data.error || 'Login failed. Please check your credentials.');
        }
      }
    } catch (err) {
      setError(`⚠️ Network error: ${err instanceof Error ? err.message : 'Please try again.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-page px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
              <span className="text-dark font-bold text-xl">EC</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-heading">Admin Login</h1>
          <p className="text-subheading mt-1">Sign in to manage bookings</p>
        </div>

        {/* Login form */}
        <div className="bg-white rounded-2xl p-8 shadow-soft border border-forest-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-xl text-sm">
                <HiExclamationCircle className="w-5 h-5 flex-shrink-0" />
                {error}
              </div>
            )}

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-subheading mb-2">
                Username
              </label>
              <div className="relative">
                <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-subheading" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-forest-200 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-subheading mb-2">
                Password
              </label>
              <div className="relative">
                <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-subheading" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-forest-200 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-accent text-dark font-semibold rounded-xl hover:bg-accent-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        {/* Back to site */}
        <p className="text-center mt-6 text-sm text-subheading">
          <Link href="/" className="text-sage hover:underline">
            ← Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}
