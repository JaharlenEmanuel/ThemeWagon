export default function Footer() {
    return (
        <footer className="bg-linear-to-bl from-blue-100 to-pink-100 text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Primera fila - Navegación principal */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
                    {/* Columna 1 - About */}
                    <div>
                        <h3 className="font-semibold mb-4">About</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Prices</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Career</li>
                        </ul>
                    </div>

                    {/* Columna 2 - Resources */}
                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Terms</li>
                            <li>Help</li>
                            <li>Privacy</li>
                            <li>Tech</li>
                        </ul>
                    </div>

                    {/* Columna 3 - Team */}
                    <div>
                        <h3 className="font-semibold mb-4">Team</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Developer</li>
                            <li>Designer</li>
                            <li>CEO</li>
                            <li>Lifestyle</li>
                        </ul>
                    </div>

                    {/* Columna 4 - Blog */}
                    <div>
                        <h3 className="font-semibold mb-4">Blog</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Article</li>
                        </ul>
                    </div>

                    {/* Columna 5 - Follow Us */}
                    <div>
                        <h3 className="font-semibold mb-4">Follow Us</h3>
                        {/* Espacio para íconos de redes sociales si los tienes */}
                        <div className="text-gray-400">
                            {/* Aquí irían los íconos de redes sociales */}
                        </div>
                    </div>
                    {/* Segunda fila - Newsletter */}
                    <div className="border-t border-gray-700 pt-8 mb-8">
                        <div className="text-center">
                            <h3 className="font-semibold mb-4">Subscribe to our newsletter</h3>
                            <div className="flex justify-center">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Tercera fila - Copyright */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                        <div className="mb-4 md:mb-0">
                            All rights Reserved Your Company, 2021
                        </div>
                        <div>
                            Made with by: Thernewagon
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}