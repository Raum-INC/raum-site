import { Assets, AboutUs, Guide } from "../assets";

const {
  short_term,
  property_management,
  real_estate_aqui,
  sustainable,
  betterliving,
  transforming,
} = Assets;

export const services = [
  {
    id: 0,
    title: `Short-Term Rentals`,
    subtitle: `With this service you can `,
    description: [
      `Explore diiferent apartments from the comfort of your home`,
      `Book and make necessary arrangments without lifting a Leg`,
      `Easily enjoy access to affordable, sustainable and trendy short lets properties anywhere in Nigeria.`,
    ],
    image: short_term,
    alt: "raum_services_image1",
  },
  {
    id: 1,
    title: `Property management application`,
    subtitle: `For Property owners `,
    description: [
      `We offer a unique solution for managing your single or multiple properties using your personalised hosting app`,
      `Scale your business to a greater height`,
      `Increase revenue and make more informed decisions about your properties`,
    ],
    image: property_management,
    alt: "raum_services_image2",
  },
  {
    id: 2,
    title: `Real Estate Acquisition Platform`,
    subtitle: `At an advanced level, we offer`,
    description: [
      `We offer premium access to kickstart and promote your real estate business`,
      `Virtual/argumented reality for better visualization`,
      `Long term rentals, shared investments and AI powered recommendations`,
    ],
    image: real_estate_aqui,
    alt: "raum_services_image3",
  },
];

export const features = [
  {
    id: "odd",
    title: `We believe \nin sustainable living`,
    description: `Join us in shaping a greener tomorrow, where sustainability meets modern living. We support sustainable living and property features that encourages the use of eco-friendly products, efficient water use, proper waste disposal, solar powered operations and a tight-knit community. Discover our eco-friendly properties and experience the future of real estate`,
    image: sustainable,
    link: "#",
    alt: "features images",
  },
  {
    id: "even",
    title: `The key to Secure\nInvestment`,
    description: `No two individuals are alike, and your Real estate needs shouldn't be either. We provide you with your personalised real estate growth approach by enabling top class property management, verified listings, and the use of IOT(internet of things)`,
    image: betterliving,
    link: "#",
    alt: "features images",
  },
  {
    id: "odd",
    title: `Transforming the\nprocess`,
    description: `We serve as the medium to intersect technology, realty and sustainable living leveraging AR/VR, IOT(internet of things) and Ai to transform world of Real Estate in Africa and globally. `,
    image: transforming,
    link: "#",
    alt: "features images",
  },
];

export const faqs = [
  {
    title: "What is a short-term rental?",
    description: `This refers to the practice of renting out a furnished property for a short duration, usually less than 30 days.`,
  },
  {
    title: "Are short-term rentals cheaper than hotels?",
    description: `Short-term rentals can sometimes offer cost savings compared to hotels, especially for larger groups or longer stays.`,
  },
  {
    title: "How do I book a short-term rental?",
    description: `To book a short-term rental, you need to visit our mobile app. You can browse listings, select your desired property, check availability, and make a reservation.`,
  },
  {
    title: "Can I host a short-term rental on my own property?",
    description: `Yes you can, kindly contact our team for assessment and expert guides on how to get started.`,
  },
  {
    title: "What amenities are included in a short-term rental?",
    description: `Amenities can vary depending on the specific property; however, common amenities found in
    short-term rentals include fully equipped kitchens, Wi-Fi, linens, towels, toiletries, and
    sometimes additional perks such as access to a pool, gym, or parking.`,
  },
];

export const MetricsData = [
  {
    id: 1,
    title: "Our numbers",
    description:
      "Aliquam at sapien orci tristique tristique et vel eu adipiscing consectetur adipiscing egestas adipiscing nulla diam Id nec amet mollis donec mauris viverra nunc pellentesque.",
  },
  {
    id: 2,
    title: "200+",
    subtitle: "Offices around the world",
    description:
      "Semper consequat quis dolor sit sollicitudin et neque odio integer a vel scelerisque pharetra.",
  },
  {
    id: 3,
    title: "100+",
    subtitle: "Events & activities",
    description:
      "Habitant suscipit quis et tellus amet ultricies dignissim rutrumol maecenas vulputate vestibulum.",
  },
  {
    id: 4,
    title: "10K+",
    subtitle: "Customers",
    description:
      "Semper consequat quis dolor sit sollicitudin et neque odio integer a vel scelerisque pharetra.",
  },
  {
    id: 5,
    title: "99.9%",
    subtitle: "Customer satisfaction",
    description:
      "Habitant suscipit quis et tellus amet ultricies dignissim rutrumol maecenas vulputate vestibulum.",
  },
];

export const ValuesData = [
  {
    id: 1,
    title: "Customer-Centric",
    description: `Our customers are at the heart of everything we do. We strive to exceed their expectations and provide exceptional service while building lasting trust.`,
    image: AboutUs.awardbadge,
  },
  {
    id: 2,
    title: "Innovation",
    description: `We embrace cutting-edge technology and creative solutions to constantly redefine and improve the living experience for our customers.`,
    image: AboutUs.pincheck,
  },
  {
    id: 3,
    title: "Sustainability",
    description: `We are committed to shaping a greener future by prioritizing sustainable and environmentally friendly practices in every aspect of our business.`,
    image: AboutUs.awardbadge,
  },
  {
    id: 4,
    title: "Transparency",
    description: `We believe in open and honest communication with our customers, partners, and team members, fostering trust and authenticity.`,
    image: AboutUs.searchicon,
  },
  {
    id: 5,
    title: "Empowerment",
    description: ` We empower our community to make informed decisions about their living spaces, whether it's booking a short-term rental or finding their dream home, fostering a supportive and inclusive terrain`,
    image: AboutUs.globeicon,
  },
  {
    id: 6,
    title: "Collaboration",
    description: `We value collaboration and partnerships, both internally and externally, to achieve common goals and create mutual success built on trust.`,
    image: AboutUs.usersicon,
  },
];

export const experienceData = [
  {
    id: 0,
    title: "Our Vision",
    description: `Our vision is to revolutionize the real estate industry by helping individuals, businesses and societies attain their realty goals, objectives and dreams.
      `,
  },
  {
    id: 1,
    title: "Our Mission",
    description: `We commit to providing sustainable real estate  solutions geared at reducing the burden of housing and property issues encountered by over 80% of the population down by 50% by 2030. Ultimately, our success will translate to fostering lifelong real estate acquisition, one building at a time!`,
  },
];

export const userGuideData = [
  {
    id: 0,
    title: "Step 1",
    description: `Download the app from playstore or apple store and create an account.`,
    check: Assets.checkmark,
    image: Guide.step1,
  },
  {
    id: 1,
    title: "Step 2",
    description: `Explore and browse through wide varieties of short-lets.`,
    check: Assets.checkmark,
    image: Guide.step2,
  },
  {
    id: 2,
    title: "Step 3",
    description: `Secure your space by leveraging our secured payment gateway and download to share your receipt.`,
    check: Assets.checkmark,
    image: Guide.step3,
  },
  {
    id: 3,
    title: "Step 4",
    description: `Keep in touch with your host in real time from point of reservation to check-out day.`,
    check: Assets.checkmark,
    image: Guide.step4,
  },
];

export const hostGuideData = [
  {
    id: 0,
    title: "Step 1",
    description: `Become a Raum Host by downloading the Raum host app, creating an account and verifying identity.`,
    check: Assets.checkmark,
    image: Guide.step1,
  },
  {
    id: 1,
    title: "Step 2",
    description: `Connect your account for receiving your booking settlements.`,
    check: Assets.checkmark,
    image: Guide.step2,
  },
  {
    id: 2,
    title: "Step 3",
    description: `List your property filling all requirements and get approved.`,
    check: Assets.checkmark,
    image: Guide.step3,
  },
  {
    id: 3,
    title: "Step 4",
    description: `Start receiving real time booking alerts , engage with your renters in real time.`,
    check: Assets.checkmark,
    image: Guide.step4,
  },
  {
    id: 4,
    title: "Step 5",
    description: `Make more informed decision from your detailed dashboard property analytics.`,
    check: Assets.checkmark,
    image: Guide.step4,
  },
];
