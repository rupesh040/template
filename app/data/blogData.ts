export interface BlogSection {
  heading?: string;
  text: string;
}

export interface Blog {
  id: string;
  title: string;
  category: string;
  date: string;
  shortDate: string;
  day: string;
  month: string;
  author: string;
  role: string;
  image: string;
  comments: number;
  content: BlogSection[];
}

export interface Category {
  name: string;
  count: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "How Professional Cleaning Services Improve Your Home",
    category: "Cleaning Tips",
    date: "September 20, 2026",
    shortDate: "Sep 20, 2026",
    day: "20",
    month: "SEP",
    author: "Admin",
    role: "Cleaning Expert",
    image: "/images/blog/blog-1.jpg",
    comments: 12,
    content: [
      {
        heading: "Why Professional Cleaning Matters",
        text: "A clean home is more than just visually appealing — it is a foundation for better health, reduced stress, and a more comfortable everyday life. Professional cleaning services bring a level of thoroughness that is very difficult to match with regular household routines. Trained cleaners know exactly where bacteria, dust mites and allergens hide, and they have the right tools and techniques to eliminate them effectively.",
      },
      {
        heading: "A Cleaner and Healthier Home",
        text: "Dust, pet dander, mould spores and pollen accumulate in carpets, curtains, air vents and behind furniture over time. These microscopic particles can trigger allergies, worsen asthma and cause respiratory issues — especially for children and elderly family members. Regular professional cleaning removes these threats at their source, dramatically improving your indoor air quality and creating a genuinely healthier living environment.",
      },
      {
        heading: "Save Time and Reduce Stress",
        text: "Modern life is busy. Between work commitments, family responsibilities and personal time, deep cleaning often falls to the bottom of the priority list. Hiring a professional cleaning team means you can reclaim those lost hours and spend them on what matters most to you. There is also a significant mental benefit — a clean, organised home has been shown to reduce anxiety and improve focus and mood.",
      },
      {
        heading: "Protect Your Home's Value",
        text: "Regular professional maintenance helps protect the value of your home by preventing the build-up of grime that can damage surfaces, stain tiles and degrade flooring over time. Clean windows, sealed grout, properly maintained carpets and spotless appliances all contribute to a home that stays in excellent condition for longer. Think of professional cleaning not as an expense but as an investment in your property.",
      },
      {
        heading: "What to Expect From a Professional Clean",
        text: "A professional cleaning service will typically cover all rooms, including dusting all surfaces, vacuuming carpets and upholstery, mopping hard floors, scrubbing bathrooms and kitchens, cleaning windows and wiping down all appliances. High-quality services use eco-friendly, non-toxic products that are safe for children and pets while still delivering a hospital-grade level of cleanliness. The result is a home that not only looks immaculate but genuinely smells and feels fresh.",
      },
    ],
  },
  {
    id: "2",
    title: "Easy Ways to Keep Your Office Clean",
    category: "Office Cleaning",
    date: "September 15, 2026",
    shortDate: "Sep 15, 2026",
    day: "15",
    month: "SEP",
    author: "Admin",
    role: "Cleaning Expert",
    image: "/images/blog/blog-2.jpg",
    comments: 8,
    content: [
      {
        heading: "A Clean Office Is a Productive Office",
        text: "The state of your office environment has a direct and measurable impact on employee productivity, morale and health. Studies consistently show that workers in clean, well-organised offices perform better, report higher job satisfaction and take fewer sick days. Maintaining a clean workplace is not just about appearances — it is a strategic business decision that pays dividends in team performance and company culture.",
      },
      {
        heading: "Keep Your Workspace Organised",
        text: "Clutter is the enemy of focus. When desks are piled with papers, cables are tangled and drawers are overflowing, it becomes much harder to think clearly and work efficiently. Encourage a 'clear desk' policy where employees tidy their workstations at the end of each day. Provide adequate storage, labelled filing systems and designated spaces for communal items so that the whole team can maintain order without extra effort.",
      },
      {
        heading: "Clean High-Touch Surfaces Regularly",
        text: "Keyboards, mice, phone handsets, door handles, light switches, lift buttons and shared equipment like printers are touched dozens of times every day by multiple people. These surfaces are hotbeds for bacteria and viruses, and they are a primary route for illness to spread through an office. Disinfecting these high-touch points daily — not just weekly — can dramatically reduce the spread of colds, flu and other infections in the workplace.",
      },
      {
        heading: "Don't Neglect the Kitchen and Break Room",
        text: "The office kitchen is often one of the most overlooked areas when it comes to cleanliness, yet it is one of the most important. Shared fridges, microwaves, kettles and coffee machines can harbour bacteria and become sources of unpleasant odours if not cleaned regularly. Establish a simple rota system for kitchen duties, dispose of old food weekly, and schedule a deep clean of all appliances at least once a month.",
      },
      {
        heading: "Schedule Professional Office Cleaning",
        text: "While daily tidying by staff makes a difference, it is no substitute for a professional office cleaning service. Professional cleaners work to a consistent, thorough standard — vacuuming under desks, sanitising restrooms to a hygienic level, cleaning windows and mopping floors properly. Most businesses find that scheduling professional cleaning early in the morning before staff arrive or in the evening after close is the least disruptive option and delivers consistently outstanding results.",
      },
    ],
  },
  {
    id: "3",
    title: "The Benefits of Deep Cleaning Your Home",
    category: "Deep Cleaning",
    date: "September 10, 2026",
    shortDate: "Sep 10, 2026",
    day: "10",
    month: "SEP",
    author: "Admin",
    role: "Cleaning Expert",
    image: "/images/blog/blog-3.jpg",
    comments: 15,
    content: [
      {
        heading: "What Is Deep Cleaning?",
        text: "Deep cleaning is a comprehensive, intensive clean that goes far beyond the scope of a regular maintenance tidy. While day-to-day cleaning covers visible surfaces, a deep clean tackles the areas that accumulate grime over time but are rarely addressed — behind appliances, inside ovens, under furniture, grout lines in tiles, behind toilets, inside cupboards and the hidden corners of every room. It is the kind of clean that leaves a home feeling genuinely renewed.",
      },
      {
        heading: "When Should You Deep Clean?",
        text: "Most households benefit from a thorough deep clean at least once every three to six months, though the ideal frequency depends on factors like the number of occupants, pets, children and general lifestyle. Key trigger points include moving into a new property, preparing a home for sale, after building or renovation work, following a period of illness, or simply when you feel the home needs a complete reset. Many people also choose to deep clean seasonally — particularly in spring and autumn.",
      },
      {
        heading: "Improve Your Indoor Air Quality",
        text: "One of the most significant but least visible benefits of deep cleaning is the dramatic improvement in indoor air quality. Carpets and upholstery trap vast quantities of dust mites, pet dander, pollen and mould spores within their fibres. Over time, these particles become airborne during normal activity, contributing to a range of health issues including allergies, asthma and chronic fatigue. A professional deep clean using hot-water extraction and high-powered vacuums removes these contaminants at the source.",
      },
      {
        heading: "Eliminate Bacteria, Mould and Odours",
        text: "Bathrooms and kitchens are particularly prone to bacterial build-up, mould growth and persistent odours that regular cleaning simply cannot resolve. Mould tends to develop in grout, behind toilets, beneath sinks and in any area where moisture collects. A deep clean uses specialist products to kill mould at the root, descale taps and showerheads, degrease ovens and extractor fans, and fully deodorise the home. The result is not just a cleaner home — it is a healthier one.",
      },
      {
        heading: "Protect Your Furniture and Fittings",
        text: "Neglected surfaces deteriorate faster than clean ones. Grease on kitchen tiles becomes increasingly difficult to remove the longer it is left. Soap scum on shower screens etches into the glass. Stains set deeper into carpet fibres over time. Regular deep cleaning protects your investment by maintaining surfaces and fittings in excellent condition, extending their lifespan and avoiding the cost of premature replacements. A professional deep clean is always cheaper than the damage that neglect causes.",
      },
    ],
  },
];

export const categories: Category[] = [
  {
    name: "Cleaning Tips",
    count: "8",
  },
  {
    name: "Office Cleaning",
    count: "5",
  },
  {
    name: "Home Cleaning",
    count: "6",
  },
  {
    name: "Deep Cleaning",
    count: "4",
  },
];