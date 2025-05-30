'use client';

import Link from 'next/link';

export default function Pagination({
  pageNumber,
  totalPages,
}: {
  pageNumber: number;
  totalPages: number;
}) {
  return (
    <ul className="my-5 flex justify-center gap-3 text-gray-900">
      <li>
        <Link
          href={{
            pathname: '/dashboard/expenses',
            query: { page: pageNumber - 1 },
          }}
          className={`grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 ${pageNumber === 1 ? 'hidden' : ''}`}
          aria-label="Previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </li>

      <li className="text-sm/8 font-medium tracking-widest">
        {pageNumber}/{totalPages}
      </li>

      <li>
        <Link
          href={{
            pathname: '/dashboard/expenses',
            query: { page: pageNumber + 1 },
          }}
          className={`grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 ${pageNumber === totalPages ? 'hidden' : ''}`}
          aria-label="Next page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </li>
    </ul>
  );
}
