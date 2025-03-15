export default function Home() {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-primary text-white p-4">
          <div className="max-w-screen-xl mx-auto px-4">
            <h1 className="text-xl font-bold">Sebiche MVP</h1>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-primary mb-4">Sebiche</h2>
            <p className="text-xl text-gray-700">Portafolio Profesional</p>
            <button className="mt-6 bg-accent hover:bg-accent/80 text-white px-6 py-2 rounded-md transition-colors">
              Contactar
            </button>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <p>Contacto: soysebiche@gmail.com</p>
            <p className="mt-2 text-sm text-gray-400">© 2025 Sebiche. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    )
  }