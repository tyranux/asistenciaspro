'use client';

import { supabase } from '@/lib/supabase';
import { useState, useEffect } from 'react';
import { Clock, MapPin, ChevronRight, User, Loader2, LogOut, ShieldCheck } from 'lucide-react';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [lastAction, setLastAction] = useState<string | null>(null);

  // 1. Efecto para verificar sesión y cargar datos del usuario
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  // 2. Función núcleo para registrar entrada o salida
  const handleFichaje = async (tipo: 'entrada' | 'salida') => {
    if (!user) {
      alert('Debes iniciar sesión para fichar.');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from('registros_asistencia')
        .insert([
          { 
            usuario_id: user.id, 
            tipo, 
            ubicacion: 'Clínica Central Arganda', // Localización estática por ahora
            metadata: { browser: navigator.userAgent }
          }
        ]);

      if (error) throw error;
      
      setLastAction(tipo);
      alert(`Registro de ${tipo.toUpperCase()} completado correctamente.`);
      
    } catch (error: any) {
      console.error('Error en Supabase:', error.message);
      alert('Error técnico: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-indigo-100">
      {/* NAVEGACIÓN PREMIUM */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <ShieldCheck size={18} />
            </div>
            <span className="font-bold tracking-tight text-slate-800 uppercase text-sm">
              Asistencias<span className="text-indigo-600">Pro</span>
            </span>
          </div>
          
          <div className="flex items-center gap-3 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
            <User size={14} className="text-slate-400" />
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">
              {user?.email?.split('@')[0] || 'Conectando...'}
            </span>
          </div>
        </div>
      </nav>

      <main className="max-w-lg mx-auto px-6 py-12">
        {/* TARJETA DE CONTROL - REJILLA DE 8PX */}
        <section className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
          
          {/* Indicador de Estado */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-black text-slate-500 tracking-[0.2em] mb-6">
              <span className={`w-2 h-2 rounded-full animate-pulse ${user ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
              S