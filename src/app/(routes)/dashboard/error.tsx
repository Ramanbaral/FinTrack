'use client';

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { Repeat } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="mt-10 grid place-content-center gap-4">
      <h2 className="font-semibold text-red-400">Something went wrong!</h2>
      <Button variant={'destructive'} onClick={() => reset()} className="cursor-pointer">
        Try again <Repeat />{' '}
      </Button>
    </div>
  );
}
