import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripcion */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
              MyStore
            </h3>
            <p className="text-sm text-gray-600 max-w-md">
              Tu tienda online de confianza. Encuentra los mejores productos
              con precios increibles y envio rapido.
            </p>
          </div>

          {/* Enlaces de navegacion */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Navegacion
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Carrito
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Iniciar sesion
                </Link>
              </li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Soporte
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">Centro de ayuda</li>
              <li className="text-gray-600">Politica de privacidad</li>
              <li className="text-gray-600">Terminos y condiciones</li>
              <li className="text-gray-600">Contacto</li>
            </ul>
          </div>
        </div>

        {/* Linea inferior */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} MyStore. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <span>Hecho con React + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}