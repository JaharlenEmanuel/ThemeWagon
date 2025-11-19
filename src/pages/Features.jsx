export default function Features() {
    const features = [
        {
            titulo: "Encrypted Mail",
            parrafo: "A process of encrypting email communications",
            icon: "/4.features/icon1.png"
        },
        {
            titulo: "Display Sharing",
            parrafo: "With other participants, you may share your screen",
            icon: "/4.features/icon2.png"
        },
        {
            titulo: "Private Notebook",
            parrafo: "Private Notebook is an application that is protected",
            icon: "/4.features/icon3.png"
        },
        {
            titulo: "App Assistance",
            parrafo: "App Assistant is quickly and effectively ran the system",
            icon: "/4.features/icon4.png"
        },
        {
            titulo: "Multiple Printing",
            parrafo: "Our canvas prints are crafted on top-notch canvas.",
            icon: "/4.features/icon5.png"
        },
        {
            titulo: "Free Sketch",
            parrafo: "Our canvas prints are crafted on top-notch canvas.",
            icon: "/4.features/icon6.png"
        }
    ]

    return (
        <div className="min-h-screen bg-linear-to-bl from-blue-100 to-pink-100">
            {/* Hero Section */}
            <section className="pt-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Título principal */}
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
                        Features
                    </h1>

                    {/* Descripción */}
                    <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                        We provide a number of excellent features that will undoubtedly improve the user experience. We also provide a better support system
                    </p>

                    {/* Línea divisoria */}
                    <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-16"></div>
                </div>
            </section>

            {/* Features Grid Section */}
            <section className="pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                {/* Icono */}
                                <div className="mb-6">
                                    <img
                                        src={feature.icon}
                                        alt={feature.titulo}
                                        className="h-16 w-16 mx-auto"
                                    />
                                </div>

                                {/* Título con línea divisoria */}
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    {feature.titulo}
                                </h3>

                                {/* Línea divisoria debajo del título */}
                                <div className="w-12 h-0.5 bg-gray-300 mx-auto mb-4"></div>

                                {/* Descripción */}
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.parrafo}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}