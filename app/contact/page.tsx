import { Suspense } from 'react';
import ContactPage from '@/app/components/contact/contact';

export default function Page() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-black" />}>
      <ContactPage />
    </Suspense>
  );
}