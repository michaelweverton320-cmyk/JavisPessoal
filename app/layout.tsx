import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Javis Pessoal',
  description: 'Assistente pessoal com voz e IA'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
