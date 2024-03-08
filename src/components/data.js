import { Assets, AboutUs, Guide } from "../assets";

const {
  alarm,
  companies,
  lease,
  sustainable,
  betterliving,
  transforming,
  ac,
  powersupply,
  gym,
  kitchen,
  parking,
  security,
  house,
  earth,
  account,
  calender,
  wallet,
  payment,
  assignment,
  file,
  home,
} = Assets;

export const services = [
  {
    id: 0,
    title: `Short Term Rentals`,
    description: `Experience an exclusive short-term rental service with personalized accommodations, seamless booking, and exceptional hosts, redefining travel with memorable and adventurous getaways.`,
    image: alarm,
    alt: `${alarm}`,
  },
  {
    id: 1,
    title: `Property Management`,
    description: `Empower property owners with our advanced property management feature, streamlining bookings, pricing, and guest communication for a seamless and rewarding hosting experience.`,
    image: companies,
    alt: `${companies}`,
  },
  {
    id: 2,
    title: `Property acquisition`,
    description: `Explore and secure your ideal real estate investment effortlessly with our innovative property acquisition feature, connecting you with sellers, expert guidance, and a commitment to your investment success.`,
    image: lease,
    alt: `${lease}`,
  },
];

export const earn = [
  {
    id: 0,
    title: `Host more, earn more`,
    description: `Our community of 1+ million guests will send you plenty of booking requests. When demand is high, you can maximize your earnings.`,
  },
  {
    id: 1,
    title: `Set your availability`,
    description: `Host as frequently and for as long as you prefer. Weekdays, weekends, or evenings — tailor your hosting schedule to suit your lifestyle.`,
  },
  {
    id: 2,
    title: `Receive weekly payouts`,
    description: `You'll receive your earnings at the end of each week — no need to wait around for payday.`,
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

export const shortlets = [
  {
    title: `Air Conditioning`,
    image: ac,
  },
  {
    title: `24/7 Power supply`,
    image: powersupply,
  },
  {
    title: `State-of-the-art
    Gymnasium`,
    image: gym,
  },
  {
    title: `Fully equipped
    kitchen`,
    image: kitchen,
  },
  {
    title: `Parking`,
    image: parking,
  },
  {
    title: `Security`,
    image: security,
  },
];

export const aboutRaum = [
  {
    title: `Over 200`,
    subtitle: `listed properties`,
    image: house,
  },
  {
    title: `23 states and counting`,
    subtitle: `all with Raum listings`,
    image: earth,
  },
  {
    title: `25,000`,
    subtitle: `active users`,
    image: account,
  },
];

export const raumHost = [
  {
    title: `Host and earn at your convenience`,
    subtitle: `Maximize your income during evenings
    and weekends, or increase your
    earnings by hosting more frequently.
    The choice is yours.`,
    image: calender,
  },
  {
    title: `A dependable stream of earnings`,
    subtitle: `You'll receive booking requests from our
    extensive network of guests whenever
    your space is available.`,
    image: wallet,
  },
  {
    title: `Weekly payouts`,
    subtitle: `Receive your earnings at the end of
    each week. There are no hidden
    subscription fees and you’ll only pay
    commission on your earnings.`,
    image: payment,
  },
];

export const getStarted = [
  {
    title: `Sign up`,
    subtitle: `Inform us about the city where you
    want to host and the type of property
    you have. We'll send you an email
    with the subsequent instructions.`,
    image: assignment,
  },
  {
    title: `Upload your documents`,
    subtitle: `The requirements for hosting on Raum Africa
    can vary based on your location. `,
    image: file,
  },
  {
    title: `List your property`,
    subtitle: `If you own a property and want
    to list it, we can guide you through
    the process to showcase your
    space to potential guests.`,
    image: home,
  },
];

export const howToHost = [
  {
    title: `Accept a booking request`,
    subtitle: `The Host app will automatically connect you with guests.`,
    id: 1,
  },
  {
    title: `Welcome your guest`,
    subtitle: `The app will guide you to your guest's location.
    Once there, welcome them.`,
    id: 2,
  },
  {
    title: `Repeat to increase your income`,
    subtitle: `Continue hosting and earning or go offline —
    you're always in full control of your hosting schedule.`,
    id: 3,
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
