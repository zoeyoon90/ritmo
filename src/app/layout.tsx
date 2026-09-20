import type { Metadata } from 'next';
import './globals.css';
import { monaSans } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Ritmo',
  description: '나만의 리듬의 하루',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko" className={monaSans.variable}>
      <body>{children}</body>
    </html>
  );
}
