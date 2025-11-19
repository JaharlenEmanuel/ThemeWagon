export default function Projects() {
    const projectImages = [
        "/5.projects/image1.png",
        "/5.projects/image2.png",
        "/5.projects/image3.png",
        "/5.projects/image4.png",
        "/5.projects/image5.png",
        "/5.projects/image6.png"
    ]

    return (
        <div className="min-h-screen bg-linear-to-bl from-blue-100 to-pink-100">
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Título y descripción */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                            Our Projects
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            A project is a single or team activity, combining research and design with best effort. Here are some of our team's projects
                        </p>
                    </div>

                    <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-12"></div>

                    <div className="grid grid-cols-3 gap-6 mb-12">
                        <div className="row-span-1">
                            <img
                                src={projectImages[0]}
                                alt="Project 1"
                                className="w-full h-64 object-cover rounded-lg shadow-md"
                            />
                        </div>

                        <div className="row-span-2">
                            <img
                                src={projectImages[2]}
                                alt="Project 2"
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>

                        <div className="row-span-1">
                            <img
                                src={projectImages[4]}
                                alt="Project 3"
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>

                        <div className="row-span-2">
                            <img
                                src={projectImages[1]}
                                alt="Project 4"
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>

                        <div className="row-span-2">
                            <img
                                src={projectImages[5]}
                                alt="Project 5"
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>

                        <div className="row-span-1">
                            <img
                                src={projectImages[3]}
                                alt="Project 6"
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex justify-center space-x-4">
                        <button className="text-gray-700 hover:text-gray-900 font-medium">
                            Pedir editar
                        </button>
                        <button className="text-green-600 hover:text-green-700 font-medium">
                            ✔
                        </button>
                        <button className="text-green-600 hover:text-green-700 font-medium">
                            ✔
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}