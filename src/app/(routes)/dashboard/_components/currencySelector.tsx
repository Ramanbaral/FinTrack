'use client';

import { useState } from 'react';
import { useCurrencyStore } from '@/providers/currency-store-provider';

export default function CurrencySelector() {
  const [open, setOpen] = useState(false);
  const { currency, currencySymbol, changeCurrency } = useCurrencyStore((state) => state);

  return (
    <div className="relative z-10 inline-flex">
      <span
        className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-gray-100 shadow-sm"
        onClick={() => setOpen(!open)}
      >
        <button
          type="button"
          className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
        >
          {currency} ({currencySymbol})
        </button>

        <button
          type="button"
          className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </span>

      {open ? (
        <div
          role="menu"
          className="absolute end-0 top-12 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
        >
          <a
            href="#"
            className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              changeCurrency({ currency: 'INR', currencySymbol: '₹' });
              setOpen(!open);
            }}
          >
            INR (₹)
          </a>

          <a
            href="#"
            className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              changeCurrency({ currency: 'EUR', currencySymbol: '€' });
              setOpen(!open);
            }}
          >
            EUR (€)
          </a>

          <a
            href="#"
            className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              changeCurrency({ currency: 'GBP', currencySymbol: '£' });
              setOpen(!open);
            }}
          >
            GBP (£)
          </a>

          <a
            href="#"
            className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              changeCurrency({ currency: 'USD', currencySymbol: '$' });
              setOpen(!open);
            }}
          >
            USD ($)
          </a>

          <a
            href="#"
            className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              changeCurrency({ currency: 'JPY', currencySymbol: '¥' });
              setOpen(!open);
            }}
          >
            JPY (¥)
          </a>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
