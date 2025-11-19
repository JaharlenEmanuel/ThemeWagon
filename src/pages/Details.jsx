export default function Details() {
    const details = [
        {
            titulo: "A creative team which builds stunning UI/UX",
            parraf1: "Today, I'd like to show you some incredible Sign Up screen app UI ideas and concepts that offer a modern user experience.The most stunning, cutting-edge UI/UX.",
            parraf2: "Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by ThemeWagon",
            icon: "/themewagon/3.details/illustration3.png"
        },
        {
            titulo: "Devoted to defining the cutting edge",
            parraf1: "This new creation is cutting-edge technology, says the researcher, whose study originates from a business at the forefront of space science.",
            parraf2: "Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by ThemeWagon",
            icon: "/themewagon/3.details/illustration6.png"
        }
    ]

    return (
        <div className="min-h-screen bg-linear-to-bl from-blue-100 to-pink-100">
            {/* Header Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Primer elemento: Imagen izquierda - Texto derecha */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Imagen a la izquierda */}
                        <div className="order-1 lg:order-1">
                            <img
                                src={details[0].icon}
                                alt="Illustration 3"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>

                        {/* Texto a la derecha */}
                        <div className="order-2 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                {details[0].titulo}
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {details[0].parraf1}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {details[0].parraf2}
                            </p>
                        </div>
                    </div>

                    {/* Segundo elemento: Texto izquierda - Imagen derecha */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Texto a la izquierda */}
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                {details[1].titulo}
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {details[1].parraf1}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {details[1].parraf2}
                            </p>
                        </div>

                        {/* Imagen a la derecha */}
                        <div className="order-1 lg:order-2">
                            <img
                                src={details[1].icon}
                                alt="Illustration 6"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}