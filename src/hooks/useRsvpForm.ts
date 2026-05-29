'use client';

import { useState } from 'react';
interface UseRsvpFormReturn {
  submitted: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  reset: () => void;
}

/** Manages RSVP form submission state. */
export function useRsvpForm(): UseRsvpFormReturn {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  }

  function reset() {
    setSubmitted(false);
  }

  return { submitted, handleSubmit, reset };
}
