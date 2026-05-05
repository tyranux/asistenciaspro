export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">Asistencias Pro</h1>
        <a href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
          Acceso Clientes
        </a>
      </nav>

      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight text-slate-800">
          Control de asistencia inteligente para clínicas.
        </h2>
        <p className="text-xl text-slate-600 mb-10">
          Cumple con la ley, gestiona turnos y genera reportes en segundos. La solución definitiva para el sector salud.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/login" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition">Empezar ahora</a>
          <button className="border border-slate-200 px-8 py-4 rounded-xl font-bold text-slate-500">Ver demo</button>
        </div>
      </header>

      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="text-blue-500 text-3xl mb-4">🏥</div>
            <h3 className="font-bold text-xl mb-2">Multi-clínica</h3>
            <p className="text-slate-500 text-sm">Gestiona todas tus sedes desde un solo panel de control unificado.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="text-blue-500 text-3xl mb-4">📍</div>
            <h3 className="font-bold text-xl mb-2">Geolocalizado</h3>
            <p className="text-slate-500 text-sm">Garantiza que el personal ficha desde su lugar de trabajo oficial.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="text-blue-500 text-3xl mb-4">📄</div>
            <h3 className="font-bold text-xl mb-2">Reportes Legales</h3>
            <p className="text-slate-500 text-sm">Descarga registros de jornada listos para inspecciones laborales.</p>
          </div>
        </div>
      </section>
    </div>
  );
}