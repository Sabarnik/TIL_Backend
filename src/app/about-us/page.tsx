'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    ChevronDown,
    Phone,
    Mail,
    MapPin,
    Factory,
    Users,
    Trophy,
    Globe,
    Clock,
    Shield,
    HeartHandshake,
    Zap
} from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
    const [activeTab, setActiveTab] = useState<string>('overview');

    const tabs = [
        {
            id: 'overview',
            title: 'Overview',
            icon: <Factory className="w-5 h-5" />
        },
        {
            id: 'history',
            title: 'Our History',
            icon: <Clock className="w-5 h-5" />
        },
        {
            id: 'values',
            title: 'Our Values',
            icon: <HeartHandshake className="w-5 h-5" />
        },
        {
            id: 'leadership',
            title: 'Leadership',
            icon: <Users className="w-5 h-5" />
        },
        {
            id: 'awards',
            title: 'Awards',
            icon: <Trophy className="w-5 h-5" />
        },
        {
            id: 'global',
            title: 'Global Presence',
            icon: <Globe className="w-5 h-5" />
        }
    ];

    const contentData = {
        overview: {
            title: "About TIL Limited",
            description: "TIL Limited is a leading Indian industrial equipment manufacturer with a rich legacy of over 75 years in material handling and construction equipment.",
            content: [
                "Pioneers in manufacturing cranes and material handling equipment in India",
                "Strategic partnerships with global leaders like Manitowoc, Hyster, and Snorkel",
                "State-of-the-art manufacturing facilities in Kolkata and Kharagpur",
                "Nationwide sales and service network with over 50 locations",
                "Exports to more than 30 countries across Asia, Africa and the Middle East"
            ],
            image: `${basePath}/about-us.png`
        },
        history: {
            title: "Our Journey",
            description: "From humble beginnings to becoming an industry leader, our journey mirrors India's industrial growth story.",
            milestones: [
                { year: "1944", event: "Tractors India is incorporated." },
                { year: "1950", event: "Tractors India becomes a Coles Crane Distributor." },
                { year: "1955", event: "Tractors India goes public." },
                { year: "1960", event: "Enters Joint Venture with Coles Cranes." },
                { year: "1962", event: "India's first indigenously manufactured mobile crane rolls out of the company's Kamarhatty plant in Calcutta." },
                { year: "1972", event: "Coles Crane of India changes name to Indian Crane Company Ltd." },
                { year: "1976", event: "Indian Crane Company amalgamated with Tractors India. Mr. Avijit Mazumdar takes over as Managing Director." },
                { year: "1982", event: "Manufactures India's first rough terrain crane." },
                { year: "1985", event: "Changes its name to become TIL Limited." },
                { year: "1988", event: "Manufactures India's first 100-tonne truck-mounted mobile crane." },
                { year: "1994", event: "Completes 50 years of its corporate journey. Gets ISO 9001 Material Handling Division certified by BVQI. TIL ties up with Grove USA for Rough Terrain & Truck Cranes." },
                { year: "1995", event: "Mr. Sumit Mazumder takes over as Managing Director." },
                { year: "1996", event: "TIL ties up with National Cranes, USA for Loader Cranes." },
                { year: "1998", event: "TIL ties up with Manitowoc, USA for Crawler Cranes dealership." },
                { year: "2002-03", event: "TIL is awarded the Highest Exporter's Trophy for the Eastern region by the Engineering Export Promotion Council in the capital goods category." },
                { year: "2007", event: "5000th crane rolls out of the Kamarhatty manufacturing plant." },
                { year: "2008", event: "Ties up with Nacco Material Handling Group (now Hyster-Yale Group) for forklifts and container handlers." },
                { year: "2009", event: "Ties up with Astec Inc for Hot Mix Asphalt Plants, bringing road building solutions to India." },
                { year: "2010", event: "Ties up with Astec Aggregate Mining Group, USA for Crushing & Screening Equipment." },
                { year: "2011", event: "Inaugurates the new factory at Changual, Kharagpur, and commences phase 1 production." },
                { year: "2012", event: "Kamarhatty Plant completes 50 years of successful operations." },
                { year: "2013", event: "TIL receives L.N. Birla Memorial Award for Corporate Excellence." },
                { year: "2016", event: "CAT Distributorship divested and becomes part of TIPL (now Gainwell)." },
                { year: "2018", event: "TIL Limited wins Indywood CSR Excellence Awards for Best CSR Campaign in Employee Engagement." },
                { year: "2019", event: "TIL completes 75 years of its existence on 22nd July 2019." },
                { year: "2024", event: "Acquired by the Gainwell Group through its group entity Indocrest Defence Services Private Limited (IDSPL) and new management is appointed." }
            ],
            image: `${basePath}/about-history.jpg`
        },

        values: {
            title: "Our Core Values",
            description: "These principles guide every decision we make and every relationship we build.",
            values: [
                {
                    title: "Integrity",
                    description: "We conduct business with honesty, fairness and respect for all stakeholders.",
                    icon: <Shield className="w-6 h-6 text-[#F1B434]" />
                },
                {
                    title: "Innovation",
                    description: "Continuous improvement drives our product development and customer solutions.",
                    icon: <Zap className="w-6 h-6 text-[#F1B434]" />
                },
                {
                    title: "Customer Focus",
                    description: "We build lasting relationships by understanding and exceeding customer expectations.",
                    icon: <HeartHandshake className="w-6 h-6 text-[#F1B434]" />
                },
                {
                    title: "Excellence",
                    description: "We strive for the highest standards in quality, safety and performance.",
                    icon: <Trophy className="w-6 h-6 text-[#F1B434]" />
                }
            ]
        },
        leadership: {
            title: "Leadership Team",
            description: "Our experienced leadership team guides TIL's vision and strategic direction.",
            executives: [
                {
                    name: "Mr. Sumit Mazumder",
                    position: "Chairman & Managing Director",
                    experience: "Over 35 years in industrial equipment sector",
                    image: `${basePath}/executive1.jpg`
                },
                {
                    name: "Mr. Rahul Sen",
                    position: "CEO - Cranes Division",
                    experience: "25+ years in heavy equipment manufacturing",
                    image: `${basePath}/executive2.jpg`
                },
                {
                    name: "Ms. Priya Chatterjee",
                    position: "CEO - Material Handling Division",
                    experience: "Former VP at Hyster-Yale, 20+ years experience",
                    image: `${basePath}/executive3.jpg`
                },
                {
                    name: "Mr. Amit Sharma",
                    position: "CFO",
                    experience: "Former finance head at Tata Motors",
                    image: `${basePath}/executive4.jpg`
                }
            ]
        },
        awards: {
            title: "Awards & Recognition",
            description: "Our commitment to excellence has been recognized by industry and government bodies.",
            awards: [
                {
                    year: "2022",
                    title: "Best Construction Equipment Manufacturer",
                    by: "Indian Construction Equipment Manufacturers Association"
                },
                {
                    year: "2021",
                    title: "Export Excellence Award",
                    by: "Engineering Export Promotion Council of India"
                },
                {
                    year: "2020",
                    title: "Safety Innovation Award",
                    by: "National Safety Council"
                },
                {
                    year: "2019",
                    title: "Best Employer in Manufacturing",
                    by: "Great Place to Work Institute"
                },
                {
                    year: "2018",
                    title: "Product Innovation Award",
                    by: "Confederation of Indian Industry"
                }
            ],
            image: `${basePath}/about-awards.jpg`
        },
        global: {
            title: "Global Footprint",
            description: "While rooted in India, our operations span across continents.",
            presence: [
                {
                    region: "Asia",
                    countries: ["India", "Bangladesh", "Nepal", "Sri Lanka", "Myanmar", "Indonesia"]
                },
                {
                    region: "Middle East",
                    countries: ["UAE", "Saudi Arabia", "Oman", "Qatar", "Kuwait"]
                },
                {
                    region: "Africa",
                    countries: ["South Africa", "Nigeria", "Kenya", "Tanzania", "Ethiopia"]
                },
                {
                    region: "Latin America",
                    countries: ["Brazil", "Chile", "Peru"]
                }
            ],
            image: `${basePath}/about-global.jpg`
        }
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src={`${basePath}/about-us-bg.png`}
                    alt="About TIL"
                    className="w-full h-full object-cover object-[10%_bottom] scale-105"
                />

                {/* Dark Gradient Overlay from Top */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent z-10" />

                {/* Existing Darker Gradient Overlay from Left to Right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

                {/* Content Container */}
                <div className="absolute inset-0 z-20 flex items-center pt-6">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
                        <motion.div
                            className="max-w-2xl"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
                        >
                            <motion.span
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-sm font-bold tracking-tight mb-2 mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                ABOUT US
                            </motion.span>

                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                TIL <span className="text-[#F1B434]">Limited</span>
                            </motion.h1>

                            <motion.div
                                className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-full mb-4"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            />

                            <motion.p
                                className="text-lg text-gray-200 max-w-xl leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                Pioneering Indian industrial equipment manufacturing since 1944.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>


            {/* Main Content */}
            <section className="pb-16 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 space-y-12">
                    {/* Tab Navigation - Updated with new animation */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 0.8,
                            ease: [0.175, 0.885, 0.32, 1.275],
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                        }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-xl blur-lg opacity-30 -z-10" />
                        <div className="bg-white rounded-b-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="flex flex-col sm:flex-row items-stretch">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex-1 flex items-center justify-center gap-2 p-4 font-medium transition-colors ${activeTab === tab.id
                                            ? 'bg-[#F1B434] text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                                    >
                                        {React.cloneElement(tab.icon, {
                                            className: `${tab.icon.props.className} ${activeTab === tab.id ? 'text-white' : 'text-[#F1B434]'}`
                                        })}
                                        {tab.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                        >
                            {activeTab === 'overview' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.overview.title}</h2>
                                        <p className="text-gray-600 mb-6">{contentData.overview.description}</p>
                                        <ul className="space-y-3">
                                            {contentData.overview.content.map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-start"
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + index * 0.1 }}
                                                >
                                                    <div className="flex-shrink-0 h-5 w-5 text-[#F1B434] mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-gray-700">{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="h-full rounded-lg overflow-hidden shadow-lg">
                                        <img
                                            src={contentData.overview.image}
                                            alt="TIL Overview"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'history' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.history.title}</h2>
                                        <p className="text-gray-600 mb-6">{contentData.history.description}</p>
                                        <div className="relative">
                                            {/* Timeline */}
                                            <div className="border-l-2 border-[#F1B434] pl-6 space-y-8">
                                                {contentData.history.milestones.map((milestone, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="relative"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.1 + index * 0.1 }}
                                                    >
                                                        <div className="absolute -left-9 top-0 w-6 h-6 rounded-full bg-[#F1B434] border-4 border-white shadow-md"></div>
                                                        <div className="bg-gray-50 p-4 rounded-lg">
                                                            <h3 className="font-bold text-[#F1B434]">{milestone.year}</h3>
                                                            <p className="text-gray-700">{milestone.event}</p>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-full rounded-lg overflow-hidden shadow-lg">
                                        <img
                                            src={contentData.history.image}
                                            alt="TIL History"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'values' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.values.title}</h2>
                                    <p className="text-gray-600 mb-8">{contentData.values.description}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {contentData.values.values.map((value, index) => (
                                            <motion.div
                                                key={index}
                                                className="bg-gray-50 p-6 rounded-lg"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + index * 0.1 }}
                                                whileHover={{ y: -5 }}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="p-2 bg-[#F1B434]/10 rounded-lg">
                                                        {value.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{value.title}</h3>
                                                        <p className="text-gray-600">{value.description}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'leadership' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.leadership.title}</h2>
                                    <p className="text-gray-600 mb-8">{contentData.leadership.description}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {contentData.leadership.executives.map((executive, index) => (
                                            <motion.div
                                                key={index}
                                                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + index * 0.1 }}
                                                whileHover={{ y: -5 }}
                                            >
                                                <div className="h-48 overflow-hidden">
                                                    <img
                                                        src={executive.image}
                                                        alt={executive.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="font-bold text-gray-800">{executive.name}</h3>
                                                    <p className="text-sm text-[#F1B434] mb-2">{executive.position}</p>
                                                    <p className="text-xs text-gray-600">{executive.experience}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'awards' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.awards.title}</h2>
                                        <p className="text-gray-600 mb-6">{contentData.awards.description}</p>
                                        <div className="space-y-4">
                                            {contentData.awards.awards.map((award, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#F1B434]"
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + index * 0.1 }}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="bg-[#F1B434] text-white text-sm font-bold px-3 py-1 rounded">
                                                            {award.year}
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold text-gray-800">{award.title}</h3>
                                                            <p className="text-sm text-gray-600">by {award.by}</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-full rounded-lg overflow-hidden shadow-lg">
                                        <img
                                            src={contentData.awards.image}
                                            alt="TIL Awards"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'global' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.global.title}</h2>
                                        <p className="text-gray-600 mb-6">{contentData.global.description}</p>
                                        <div className="space-y-6">
                                            {contentData.global.presence.map((region, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 + index * 0.1 }}
                                                >
                                                    <h3 className="font-bold text-[#F1B434] mb-2">{region.region}</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {region.countries.map((country, i) => (
                                                            <span
                                                                key={i}
                                                                className="text-sm bg-gray-50 px-3 py-1 rounded-full"
                                                            >
                                                                {country}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-full rounded-lg overflow-hidden shadow-lg">
                                        <img
                                            src={contentData.global.image}
                                            alt="TIL Global Presence"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-xl shadow-lg p-8 text-white"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">75+</div>
                                <div className="text-sm font-medium">Years of Experience</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">5000+</div>
                                <div className="text-sm font-medium">Employees</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">30+</div>
                                <div className="text-sm font-medium">Countries Served</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">100K+</div>
                                <div className="text-sm font-medium">Machines Delivered</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
                    >
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                Want to learn more about TIL?
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Our team is ready to answer any questions you may have about our company, products, or services.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <button className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md">
                                    Contact Us
                                </button>
                                <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                                    Download Company Profile
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Page;