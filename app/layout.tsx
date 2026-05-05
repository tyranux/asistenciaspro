import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Asistencias Pro | Control de Asistencia Premium',
  description: 'Software de precisión para la gestión de jornadas en clínicas de alto nivel.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="bg-slate-50 text-slate-900 selection:bg-indigo-100">
        <main min-h-screen>{children}</main>
      </body>
    </html>
  );
}