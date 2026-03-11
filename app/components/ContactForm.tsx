'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { getTranslation } from '../i18n/translations';

export function ContactForm() {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();
  const t = getTranslation(language);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, description }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitted(true);
      setEmail('');
      setDescription('');

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setError(errorMessage);
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-2">
            {t.contactEmail}
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.contactEmailPlaceholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-100 mb-2">
            {t.contactDescription}
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t.contactDescriptionPlaceholder}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gray-100 text-black py-3 rounded-lg font-semibold hover:bg-[#c7e320] transition disabled:opacity-50"
        >
          {loading ? t.contactSubmitting : t.contactSubmit}
        </button>

        {submitted && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            {t.contactSuccess}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}
      </div>
    </form>
  );
}
