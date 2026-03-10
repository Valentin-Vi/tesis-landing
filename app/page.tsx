import dynamicImport from 'next/dynamic';
import { LanguageProvider } from './components/LanguageProvider';

export const dynamic = 'force-dynamic';

const HomePage = dynamicImport(() => import('./components/HomePage').then(mod => ({ default: mod.HomePage })), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>,
});

export default function Page() {
  return <HomePage />
}
