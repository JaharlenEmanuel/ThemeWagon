export default function Services() {
    const services = [
        {
            titulo: "Send Texts Instantly",
            parraf: "Financial planning, forecasting and adjusting rapidly with customer demands and budgets.",
            icon: "/images/2.services/icon1.png"
        },
        {
            titulo: "Better Organized",
            parraf: "Latest technology and experienced guidance, trained HR specialists to keep updated",
            icon: "/images/2.services/icon2.png"
        },
        {
            titulo: "Analytical Statistics",
            parraf: "Messages, real-time reminders, memos, and many more will keep your team in sync",
            icon: "/images/2.services/icon3.png"
        }
    ]
    return (
        <div className="w-screen bg-linear-to-bl from-blue-100 to-pink-100">
            {/* Hero Section de Services */}
            {/* Services Grid Section */}
            <section className=" bg-linear-to-bl from-blue-100 to-pink-100 w-screen">
                <div className="w-screen bg-linear-to-bl from-blue-100 to-pink-100">
                    <div className="text-center bg-linear-to-bl from-blue-100 to-pink-100">
                        <h2 className="text-4xl font-bold text-gray-800 ">
                            Our Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Professional solutions designed to drive your business growth and success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
                            >
                                {/* Icon Container */}
                                <div className="bg-blue-50 rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-100 transition duration-300">
                                    <img
                                        src={service.icon}
                                        alt={service.titulo}
                                        className="h-10 w-10 object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition duration-300">
                                    {service.titulo}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.parraf}
                                </p>

                                {/* Learn More Button */}
                                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group/btn transition duration-300">
                                    Learn More
                                    <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}