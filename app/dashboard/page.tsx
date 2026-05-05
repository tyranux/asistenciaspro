'use client';
import { useState } from 'react';
import { Clock, MapPin, ChevronRight, User } from 'lucide-react'; // Iconografía lineal 2px

export default function Dashboard() {
  const [status, setStatus] = useState<'fuera' | 'dentro'>('fuera');

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header de Precisión */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tight text-slate-800">ASISTENCIAS<span className="text-indigo-600">PRO</span></span>
          <div className="flex items-center gap-3 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
            <User size={16} className="text-slate-500" />
            <span className="text-xs font-medium text-slate-700 uppercase tracking-wider">Dr. Alejandro</span>
          </div>
        </div>
      </nav>

      <div className="max-w-lg mx-auto px-6 py-12">
        {/* Card Principal - Rejilla de 8px */}
        <section className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(79,70,229,0.07)]">
          <div className="flex flex-col items-center">
            <div className={`w-3 h-3 rounded-full mb-4 animate-pulse ${status === 'dentro' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">
              {status === 'dentro' ? 'Jornada Activa' : 'Fuera de Turno'}
            </h2>
            <p className="text-slate-400 text-sm font-medium mb-10 flex items-center gap-1.5">
              <Clock size={14} /> 19:25 · Arganda del Rey, ES
            </p>

            {/* CTA de Alta Fidelidad */}
            <button
              onClick={() => setStatus(status === 'fuera' ? 'dentro' : 'fuera')}
              className={`group relative w-full py-5 rounded-2xl font-bold text-lg transition-all active:scale-[0.98] 
                ${status === 'fuera' 
                  ? 'bg-indigo-600 text-white shadow-[0_10px_20px_rgba(79,70,229,0.3)] hover:bg-indigo-700' 
                  : 'bg-white text-rose-600 border-2 border-rose-100 hover:bg-rose-50'
                }`}
              aria-label={status === 'fuera' ? 'Marcar entrada' : 'Marcar salida'}
            >
              <span className="flex items-center justify-center gap-2">
                {status === 'fuera' ? 'MARCAR ENTRADA' : 'FINALIZAR JORNADA'}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </section>

        {/* Feedback de Ubicación (Accesibilidad AA) */}
        <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
          <MapPin size={14} />
          <span className="text-xs font-medium tracking-wide">UBICACIÓN VERIFICADA VÍA GPS</span>
        </div>
      </div>
    </div>
  );
}