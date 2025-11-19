export default function Home() {
    return (
        <div className="min-h-screen bg-linear-to-bl from-blue-100 to-pink-100 uppercase w-screen">
            {/* Hero Section con imagen de fondo */}
            <section
                className="  relative min-h-screen flex flex-col items-center "
            >
                <div className="flex w-screen ">
                    <div className="pl-40 w-[43%]">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-500">
                                Bootstrap 5 theme
                            </span>
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold"><p className="text-black">
                            crafted by ThemeWagon
                        </p>  </h3>

                        {/* Descripción */}
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                            ThemeWagon offers an wide array of category-oriented Free and Premium Bootstrap HTML Templates and Themes.
                        </p>

                        {/* Botón Check Demo */}
                        <button className=" bg-linear-to-bl from-violet-500 to-fuchsia-500 uppercase tracking-widest text-white mb-12 border border-gray-400 hover:border-white hover:text-white px-8 py-3 rounded-lg transition duration-300">
                            Check Demo
                        </button>
                    </div>
                    <div className="w-[57%]  bg-contain bg-no-repeat h-140"
                        style={{ backgroundImage: "url('/themewagon/1.home/illustration1.png')" }}></div>
                </div>








                {/* Línea divisoria */}
                <div className="w-screen h-1  mx-auto mb-12"></div>

                {/* Logos de empresas */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
                    <img src="/themewagon/1.home/google.png" alt="Google" className="h-6 md:h-8 w-auto opacity-80 hover:opacity-100 transition duration-300" />
                    <img src="/themewagon/1.home/netflix.png" alt="NETFLIX" className="h-6 md:h-8 w-auto opacity-80 hover:opacity-100 transition duration-300" />
                    <img src="/themewagon/1.home/microsoft.png" alt="Microsoft" className="h-6 md:h-8 w-auto opacity-80 hover:opacity-100 transition duration-300" />
                    <img src="/themewagon/1.home/mailbuster.png" alt="MailBluster" className="h-6 md:h-8 w-auto opacity-80 hover:opacity-100 transition duration-300" />
                    <img src="/themewagon/1.home/themewagon.png" alt="theme Watson" className="h-6 md:h-8 w-auto opacity-80 hover:opacity-100 transition duration-300" />
                </div>
            </section>
        </div>
    );
}