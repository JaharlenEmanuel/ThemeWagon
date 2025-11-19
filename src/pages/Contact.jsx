export default function Contact() {
    return (
        <div className="min-h-screen bg-linear-to-bl from-blue-100 to-pink-100 w-screen">
            {/* Contact Section */}
            <section className="pt-32 pb-20 pl-4 pr-0">
                <div className="w-full mx-auto flex flex-col items-center justify-center">
                    {/* Título */}
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 text-center">
                        Contact Us
                    </h1>

                    <div className="flex gap-12 items-start w-full relative">

                        {/* Columna Izquierda - Div vacío y Formulario superpuesto */}
                        <div className="w-2/5 ">
                            {/* Div vacío */}
                            <div className="w-full h-[600px] bg-white rounded-lg"></div>

                            {/* Formulario centrado encima del div vacío */}
                            <div className="absolute top-2/5 left-2/5 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
                                {/* Formulario */}
                                <div className="space-y-6">
                                    {/* Campo Nombre */}
                                    <div>
                                        <label className="block text-gray-700 mb-2">Write your name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Campo Email */}
                                    <div>
                                        <label className="block text-gray-700 mb-2">Write your email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Campo Mensaje */}
                                    <div>
                                        <label className="block text-gray-700 mb-2">Write your message</label>
                                        <textarea
                                            rows="4"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        ></textarea>
                                    </div>

                                    {/* Botón Submit */}
                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Columna Derecha - Imagen con información de contacto superpuesta */}
                        <div className="w-3/5 relative">
                            <div className="relative h-[600px] rounded-lg overflow-hidden">
                                {/* Imagen de fondo */}
                                <div
                                    className="absolute inset-0 bg-cover bg-no-repeat"
                                    style={{ backgroundImage: "url('/themewagon/7.contact/image1.png')" }}
                                >
                                    {/* Overlay para mejor legibilidad */}
                                    <div className="absolute "></div>
                                </div>

                                {/* Información de contacto centrada sobre la imagen */}
                                <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center space-y-6">
                                    <div>
                                        <strong className="text-xl block mb-2">Phone</strong>
                                        <p className="text-gray-400">+880124332334</p>
                                    </div>
                                    <div>
                                        <strong className="text-xl block mb-2">Email</strong>
                                        <p className="text-gray-400">something@email.com</p>
                                    </div>
                                    <div>
                                        <strong className="text-xl block mb-2">Location</strong>
                                        <p className="text-gray-400 max-w-xs">43/A. Spooner Street, St Lawrence, Virginia, Texas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}