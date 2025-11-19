export default function Team() {
    const teamMembers = [
        {
            image: "6.team/image1.png",
            name: "John Adams",
            role: "CEO"
        },
        {
            image: "/6.team/image2.png",
            name: "Carrey Johnson",
            role: "Senior Developer"
        },
        {
            image: "/6.team/image3.png",
            name: "Ray Marie",
            role: "Developer"
        },
        {
            image: "/6.team/image4.png",
            name: "Austin Min",
            role: "Designer"
        }
    ]

    return (
        <div className="min-h-screen bg-linear-to-bl from-blue-100 to-pink-100">
            {/* Header Section */}
            <section className="py-10 px-4">
                <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
                    {/* Título y Descripción */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                            Our Team
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Meet our talented team of professionals dedicated to delivering exceptional results and driving innovation forward.
                        </p>
                    </div>

                    {/* Línea divisoria */}
                    <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-16"></div>

                    {/* Grid de miembros del equipo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center group">
                                {/* Imagen con efecto hover */}
                                <div className="relative overflow-hidden rounded-xl mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:scale-110 transition duration-500"
                                    />
                                    {/* Overlay sutil al hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300 rounded-xl"></div>
                                </div>

                                {/* Información del miembro */}
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-600 font-medium">
                                        {member.role}
                                    </p>
                                </div>
                            </div>

                        ))}
                    </div>
                    {/*Button */}
                    <button className="bg-linear-to-bl from-violet-500 to-fuchsia-500 uppercase tracking-widest text-white mb-12 border border-gray-400 hover:border-white hover:text-white px-8 py-3 rounded-lg transition duration-300 mt-10">
                        View full Time
                    </button>
                </div>
            </section>
        </div>
    );
}