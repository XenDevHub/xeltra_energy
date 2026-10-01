export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "EcoTrike", href: "/ecotrike" },
  { label: "Market Edge", href: "/market-analysis" },
  { label: "Leadership", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 130, unit: "kWh", label: "Battery Capacity" },
  { value: 210, unit: "+", label: "Solar Panels" },
  { value: 100, unit: "km", label: "EV Range" },
  { value: 4, unit: "+", label: "Cities Served" },
];

export const SOLUTIONS = [
  {
    id: "ev-charging",
    tag: "EV Charging",
    title: "EV Charging Infrastructure",
    description:
      "Solar-powered battery swap stations and fast-charging infrastructure for electric three-wheelers and vehicles across Bangladesh.",
    img: "/assets/images/charging-station.png",
    alt: "Xeltra solar-powered EV battery swap and charging station",
    specs: [
      { label: "Solar Panels", value: "210" },
      { label: "Fast Chargers", value: "3 On-Site" },
      { label: "Capacity/Van", value: "130 kWh" },
      { label: "Battery Setup", value: "16 + 1 Charger" },
    ],
    icon: "⚡",
  },
  {
    id: "solar",
    tag: "Solar Energy",
    title: "Rooftop Solar Solutions",
    description:
      "Professional solar installation with ESS backup for homes, businesses, and facilities. Reduce your electricity bill by up to 70–90%.",
    img: "/assets/images/solar-home.png",
    alt: "Xeltra rooftop solar installation with 5kW ESS battery backup",
    specs: [
      { label: "System Size", value: "5kW ESS" },
      { label: "Bill Reduction", value: "70–90%" },
      { label: "Power Supply", value: "24/7" },
      { label: "Investment", value: "Long-term ROI" },
    ],
    icon: "☀️",
  },
  {
    id: "power-bank",
    tag: "Energy Bank",
    title: "Xeltra Energy Bank",
    description:
      "Mobile energy delivery — lithium-ion battery units charged from rooftop solar, delivered to customer sites as clean, quiet power.",
    img: "/assets/images/power-bank.png",
    alt: "Xeltra Power Bank fleet at solar charging depot",
    specs: [
      { label: "Battery Unit", value: "48V 100Ah" },
      { label: "Management", value: "Smart BMS + GPS" },
      { label: "Emissions", value: "Zero" },
      { label: "Deployment", value: "Scalable Fleet" },
    ],
    icon: "🔋",
  },
];

export const CONTRIBUTIONS = [
  { city: "CMB Chittagong", type: "Solar Installation", id: "ctg" },
  { city: "Cumilla BSIC", type: "Solar Installation", id: "cumilla" },
  { city: "Khulshi, CTG", type: "Solar Installation", id: "khulshi" },
  { city: "Chanpur, Cumilla", type: "Solar Installation", id: "chanpur" },
];

export const ECOTRIKE_SPECS = [
  { icon: "⚙️", value: "1200W", label: "BLDC Motor" },
  { icon: "🛣️", value: "80–100 km", label: "Range/Charge" },
  { icon: "🔋", value: "48V 100–150Ah", label: "Li-ion Battery" },
  { icon: "⚖️", value: "320 kg", label: "Max Load" },
  { icon: "⏱️", value: "4–6 Hours", label: "Charging Time" },
  { icon: "🚀", value: "35 km/h", label: "Max Speed" },
];

export const ECOTRIKE_FEATURES = [
  "100% Electric — Zero Emissions",
  "Driver + 2 Passengers",
  "Smart BMS with Heat Sensor",
  "GPS Tracking System",
  "Solar-Powered Charging Compatible",
  "Weather-resistant Canopy",
  "Reinforced Fiberglass Body",
  "Digital Speedometer & LED Headlamps",
];

export const TEAM = [
  {
    name: "Zaheda Akhter Mita",
    role: "Chairman",
    img: "/assets/team/chairman.jpeg",
    bio: "Guiding governance, corporate ethics, and long-term sustainability strategy.",
    featured: true,
    imgClass: "object-cover object-top",
    id: "chairman",
  },
  {
    name: "Subarna Dey",
    role: "Chief Executive Officer (CEO)",
    img: "/assets/team/ceo.png",
    bio: "Spearheading business expansion, strategic partnerships, and operations across Bangladesh.",
    featured: true,
    imgClass: "object-contain p-1",
    id: "ceo",
  },
  {
    name: "Moktadir Sajid",
    role: "Founder & Managing Director",
    img: "/assets/team/sajid.png",
    bio: "Pioneering Xeltra Energy's technology vision and renewable infrastructure deployment.",
    featured: true,
    imgClass: "object-contain p-1",
    id: "sajid",
  },
  {
    name: "Mohammad Gias",
    role: "Chief Financial Officer (CFO)",
    img: "/assets/team/gias.png",
    bio: "Managing financial strategy, capital investments, and fiscal growth.",
    featured: false,
    imgClass: "object-contain p-1",
    id: "gias",
  },
  {
    name: "Luthfur Rahman",
    role: "Public Relations Director",
    img: "/assets/team/lutfur.jpeg",
    bio: "Leading government liaisons, public affairs, and institutional communications.",
    featured: false,
    imgClass: "object-contain p-1 bg-slate-900",
    id: "lutfur",
  },
  {
    name: "Golam Quader Chowdhury",
    role: "Director & COO",
    img: "/assets/team/member1.png",
    bio: "Overseeing supply chain, hub logistics, and operational execution.",
    featured: false,
    imgClass: "object-contain p-1",
    id: "golam",
  },
  {
    name: "Shamim Mohammad Osman",
    role: "Engineering & Project Director",
    img: "/assets/team/member2.png",
    bio: "Heading hardware engineering, solar installations, and station maintenance.",
    featured: false,
    imgClass: "object-contain p-1",
    id: "shamim",
  },
  {
    name: "Mohammad Sharfuddin",
    role: "Operational Director & R&D",
    img: "/assets/team/member3.png",
    bio: "Driving battery research, telemetry testing, and product refinement.",
    featured: false,
    imgClass: "object-contain p-1 bg-slate-900",
    id: "sharfuddin",
  },
  {
    name: "Md. Riduanul Haque",
    role: "Chief Technology Officer (CTO)",
    img: "/assets/team/riduan.png",
    bio: "Directing software architecture, IoT telemetry, web applications, and smart battery management systems.",
    featured: false,
    imgClass: "object-contain p-1 bg-slate-900",
    id: "riduan",
  },
];

export const ACHIEVEMENTS = [
  {
    icon: "📋",
    title: "SREDA License",
    desc: "EV Charging Station license applied from SREDA (Sustainable and Renewable Energy Development Authority)",
    id: "sreda",
  },
  {
    icon: "🏆",
    title: "Trade Fair Participation",
    desc: "Participated in national and international trade fairs showcasing Xeltra's clean energy ecosystem",
    id: "tradefair",
  },
  {
    icon: "🤝",
    title: "Global Partners",
    desc: "Strategic partnerships with HYSTORIX, LV TOPSUN, TIAN LU, GWTIME & China Cable Corporation",
    id: "partners",
  },
  {
    icon: "☀️",
    title: "4+ Solar Sites",
    desc: "Completed rooftop solar installations across Chittagong, Cumilla, Khulshi, and Chanpur",
    id: "solar-sites",
  },
];

export const PARTNERS = [
  { name: "HYSTORIX", country: "China", id: "hystorix" },
  { name: "LV TOPSUN", country: "China", id: "lvtopsun" },
  { name: "TIAN LU", country: "China", id: "tianlu" },
  { name: "GWTIME", country: "China", id: "gwtime" },
  { name: "China Cable Corp.", country: "China", id: "chinacable" },
];

export const GALLERY_IMAGES = [
  {
    src: "/assets/images/banner.png",
    alt: "Xeltra Energy — Battery swap station and electric rickshaw Bangladesh",
    caption: "Battery Swap Station — Powering Bangladesh's Three-Wheelers",
    wide: true,
    id: "gallery-banner",
  },
  {
    src: "/assets/images/charging-station.png",
    alt: "Xeltra solar-powered charging station with battery lockers",
    caption: "Solar-Powered Charging Station",
    wide: false,
    id: "gallery-charging",
  },
  {
    src: "/assets/images/power-bank.png",
    alt: "Xeltra Power Bank fleet at solar charging depot",
    caption: "Xeltra Power Bank Fleet",
    wide: false,
    id: "gallery-powerbank",
  },
  {
    src: "/assets/images/solar-home.png",
    alt: "Residential rooftop solar with ESS backup by Xeltra",
    caption: "Home Solar + ESS Installation",
    wide: false,
    id: "gallery-solar",
  },
  {
    src: "/assets/images/ecotrike-heritage.png",
    alt: "Ecotrike EVX1 heritage rickshaw electrified",
    caption: "Ecotrike EVX1 — Heritage Modernism",
    wide: false,
    id: "gallery-ecotrike",
  },
  {
    src: "/assets/images/solutions-overview.png",
    alt: "Xeltra Energy — EV garage, charging stations, trade fair, sports complexes",
    caption: "Xeltra Energy — Powering Every Sector",
    wide: true,
    id: "gallery-solutions",
  },
];
