import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const EmailPasswordCopyBox: React.FC = () => {
  const [email] = useState<string>('yamitniranjan@gmail.com');
  const [password] = useState<string>('12345678');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPassword, setCopiedPassword] = useState<boolean>(false);

  const handleCopyEmail = async (): Promise<void> => {
    if (email) {
      try {
        await navigator.clipboard.writeText(email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } catch (err) {
        console.error('Failed to copy email: ', err);
      }
    }
  };

  const handleCopyPassword = async (): Promise<void> => {
    if (password) {
      try {
        await navigator.clipboard.writeText(password);
        setCopiedPassword(true);
        setTimeout(() => setCopiedPassword(false), 2000);
      } catch (err) {
        console.error('Failed to copy password: ', err);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg">
    

      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <div className="relative">
          <input
            type="email"
            value={email}
            readOnly
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleCopyEmail}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-md transition-all duration-200 ${
              copiedEmail
                ? 'bg-green-100 text-green-600 hover:bg-green-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={copiedEmail ? 'Copied!' : 'Copy email'}
            type="button"
          >
            {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
        {copiedEmail && (
          <p className="mt-1 text-sm text-green-600 font-medium">
            Email copied to clipboard!
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <div className="relative">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleCopyPassword}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-md transition-all duration-200 ${
              copiedPassword
                ? 'bg-green-100 text-green-600 hover:bg-green-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={copiedPassword ? 'Copied!' : 'Copy password'}
            type="button"
          >
            {copiedPassword ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
        {copiedPassword && (
          <p className="mt-1 text-sm text-green-600 font-medium">
            Password copied to clipboard!
          </p>
        )}
      </div>

      <div className="mt-6 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700">
          💡 Log-in Credentials - Click the copy buttons to copy the credentials to your clipboard
        </p>
      </div>
    </div>
  );
};

export default EmailPasswordCopyBox;
