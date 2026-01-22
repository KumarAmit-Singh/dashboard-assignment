import {
  Home,
  BarChart2,
  CreditCard,
  Wrench,
  UserRound,
  FileText,
  UserPlus,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export const sidebarMenuData = {
  mainItems: [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "tables", label: "Tables", icon: BarChart2 },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "rtl", label: "RTL", icon: Wrench },
  ],
  accountItems: [
    { id: "profile", label: "Profile", icon: UserRound },
    { id: "signin", label: "Sign In", icon: FileText },
    { id: "signup", label: "Sign Up", icon: UserPlus },
  ],
};

export const dashboardStats = [
  {
    id: 1,
    title: "Today's Money",
    value: "$53,000",
    change: "+55%",
    icon: "wallet",
    color: "teal",
  },
  {
    id: 2,
    title: "Today's Users",
    value: "2,300",
    change: "+3%",
    icon: "globe",
    color: "teal",
  },
  {
    id: 3,
    title: "New Clients",
    value: "+3,052",
    change: "-2%",
    icon: "fileText",
    color: "teal",
  },
  {
    id: 4,
    title: "Total Sales",
    value: "$173,000",
    change: "+8%",
    icon: "shoppingCart",
    color: "teal",
  },
];

export const documentData = {
  subtitle: "Built by developers",
  title: "Purity UI Dashboard",
  description:
    "From colors, cards, typography to complex elements, you will find the full documentation.",
  buttonText: "Read more",
  brandName: "chakra",
};

export const rocketData = {
  title: "Work with the Rockets",
  description:
    "Wealth creation is an evolutionarily recent positive-sum game. It is all about who takes the opportunity first.",
  buttonText: "Read more",
  image:
    "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
};

export const activeUsersData = {
  title: "Active Users",
  percentage: "+23",
  subtext: "than last week",
  data: [
    { label: "A", value: 320 },
    { label: "B", value: 220 },
    { label: "C", value: 120 },
    { label: "D", value: 280 },
    { label: "E", value: 450 },
    { label: "F", value: 410 },
    { label: "G", value: 470 },
    { label: "H", value: 290 },
    { label: "I", value: 160 },
  ],
  stats: [
    { label: "Users", value: "32,984", progress: 60, icon: "wallet" },
    { label: "Clicks", value: "2.42m", progress: 80, icon: "mousePointer" },
    { label: "Sales", value: "2,400$", progress: 40, icon: "shoppingCart" },
    { label: "Items", value: "320", progress: 50, icon: "settings" },
  ],
};

export const salesOverviewContent = {
  title: "Sales overview",
  growthText: "(+5) more",
  year: "2025",
  data: [
    { name: "Jan", Sales: 190, Previous: 500 },
    { name: "Feb", Sales: 220, Previous: 200 },
    { name: "Mar", Sales: 210, Previous: 160 },
    { name: "Apr", Sales: 340, Previous: 270 },
    { name: "May", Sales: 360, Previous: 210 },
    { name: "Jun", Sales: 460, Previous: 240 },
    { name: "Jul", Sales: 360, Previous: 240 },
    { name: "Aug", Sales: 300, Previous: 190 },
    { name: "Sep", Sales: 350, Previous: 110 },
    { name: "Oct", Sales: 220, Previous: 140 },
    { name: "Nov", Sales: 400, Previous: 170 },
    { name: "Dec", Sales: 430, Previous: 130 },
  ],
};

export const tableHeaders = [
  { id: "companies", label: "Companies", className: "text-left" },
  { id: "members", label: "Members", className: "px-4" },
  { id: "budget", label: "Budget", className: "px-4" },
  { id: "completion", label: "Completion", className: "text-left" },
];

export const projectsData = {
  title: "Projects",
  summaryValue: "6 done",
  summaryText: "this month",
  list: [
    {
      id: 1,
      name: "Chakra Soft UI Version",
      members: 4,
      budget: "$14,000",
      completion: 60,
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Add Progress Track",
      members: 2,
      budget: "$3,000",
      completion: 10,
      color: "bg-teal-500",
    },
    {
      id: 3,
      name: "Fix Platform Errors",
      members: 2,
      budget: "Not set",
      completion: 100,
      color: "bg-red-500",
    },
    {
      id: 4,
      name: "Launch our Mobile App",
      members: 3,
      budget: "$32,000",
      completion: 100,
      color: "bg-purple-500",
    },
    {
      id: 5,
      name: "Add the New Pricing Page",
      members: 4,
      budget: "$400",
      completion: 25,
      color: "bg-blue-400",
    },
    {
      id: 6,
      name: "Redesign New Online Shop",
      members: 2,
      budget: "$7,600",
      completion: 40,
      color: "bg-pink-500",
    },
  ],
};

export const ordersData = {
  title: "Orders overview",
  percentage: "+30%",
  percentageText: "this month",
  list: [
    {
      id: 1,
      title: "$2400, Design changes",
      date: "22 DEC 7:20 PM",
      icon: "bell",
      color: "text-teal-400",
    },
    {
      id: 2,
      title: "New order #4219423",
      date: "21 DEC 11:21 PM",
      icon: "shoppingCart",
      color: "text-red-500",
    },
    {
      id: 3,
      title: "Server Payments for April",
      date: "21 DEC 9:28 PM",
      icon: "creditCard",
      color: "text-blue-400",
    },
    {
      id: 4,
      title: "New card added for order #3210145",
      date: "20 DEC 3:52 PM",
      icon: "creditCard",
      color: "text-orange-400",
    },
    {
      id: 5,
      title: "Unlock packages for Development",
      date: "19 DEC 11:35 PM",
      icon: "package",
      color: "text-purple-500",
    },
    {
      id: 6,
      title: "New order #9851258",
      date: "18 DEC 4:41 PM",
      icon: "shoppingCart",
      color: "text-blue-900",
    },
  ],
};

export const userData = {
  name: "Esthera Jackson",
  email: "esthera@simmmple.com",
  mobile: "(44) 123 1234 123",
  position: "CEO / Co-Founder",
  avatar: "https://i.pravatar.cc/150?u=1",
  coverImage:
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/curved-images/curved0.jpg",
  themeColor: "#4FD1C5",
};

export const profileProjects = [
  {
    id: 1,
    name: "Modern",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    members: 4,
  },
  {
    id: 2,
    name: "Scandinavian",
    description:
      "Music is something that every person has his or her own specific opinion about.",
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
    members: 3,
  },
  {
    id: 3,
    name: "Minimalist",
    description:
      "Different people have different taste, and various types of music.",
    image:
      "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=600",
    members: 4,
  },
];

export const profileSettings = {
  title: "Platform Settings",
  list: [
    {
      id: 1,
      category: "ACCOUNT",
      settings: [
        {
          id: "email-me",
          label: "Email me when someone follows me",
          enabled: true,
        },
        {
          id: "email-answer",
          label: "Email me when someone answers on my post",
          enabled: false,
        },
        {
          id: "email-mention",
          label: "Email me when someone mentions me",
          enabled: true,
        },
      ],
    },
    {
      id: 2,
      category: "APPLICATION",
      settings: [
        {
          id: "new-launches",
          label: "New launches and projects",
          enabled: false,
        },
        {
          id: "product-updates",
          label: "Monthly product updates",
          enabled: true,
        },
        { id: "newsletter", label: "Subscribe to newsletter", enabled: false },
      ],
    },
  ],
};

export const profileInfo = {
  title: "Profile Information",
  fullName: "Esthera Jackson",
  mobile: "(44) 123 1234 123",
  email: "esthera@simmmple.com",
  location: "United States",
  socialMedia: {
    facebook: true,
    twitter: true,
    instagram: true,
  },
};

export const socialLinks = (socialMedia) => [
  {
    id: "facebook",
    Icon: Facebook,
    color: "#1da1f2",
    active: socialMedia.facebook,
  },
  {
    id: "twitter",
    Icon: Twitter,
    color: "#1da1f2",
    active: socialMedia.twitter,
  },
  {
    id: "instagram",
    Icon: Instagram,
    color: "#1da1f2",
    active: socialMedia.instagram,
  },
];

export const conversations = {
  title: "Conversations",
  list: [
    {
      id: 1,
      name: "Alexa Liras",
      message: "Hi! I need more information...",
      avatar: "https://i.pravatar.cc/150?u=2",
      time: "REPLY",
    },
    {
      id: 2,
      name: "Mark Johnson",
      message: "Awesome work, can you change...",
      avatar: "https://i.pravatar.cc/150?u=5",
      time: "REPLY",
    },
    {
      id: 3,
      name: "Fritzelen Morel",
      message: "Have a great afternoon...",
      avatar: "https://i.pravatar.cc/150?u=4",
      time: "REPLY",
    },
    {
      id: 4,
      name: "Boris Uve",
      message: "About files I can...",
      avatar: "https://i.pravatar.cc/150?u=8",
      time: "REPLY",
    },
  ],
};

export const teamsData = {
  title: "Teams",
  activeMembers: "Active members in your organization",
  members: [
    {
      id: 1,
      name: "Alexa Liras",
      role: "Backend Developer",
      email: "alexa@purity.com",
      mobile: "+1 (555) 123-4567",
      avatar: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 2,
      name: "Laurent Perrier",
      role: "Project Manager",
      email: "laurent@purity.com",
      mobile: "+1 (555) 234-5678",
      avatar: "https://i.pravatar.cc/150?u=3",
    },
    {
      id: 3,
      name: "Fritzelen Morel",
      role: "Frontend Developer",
      email: "fritz@purity.com",
      mobile: "+1 (555) 345-6789",
      avatar: "https://i.pravatar.cc/150?u=4",
    },
    {
      id: 4,
      name: "Mark Johnson",
      role: "Data Analyst",
      email: "mark@purity.com",
      mobile: "+1 (555) 456-7890",
      avatar: "https://i.pravatar.cc/150?u=5",
    },
    {
      id: 5,
      name: "Sophie Moore",
      role: "DevOps Engineer",
      email: "sophie@purity.com",
      mobile: "+1 (555) 567-8901",
      avatar: "https://i.pravatar.cc/150?u=6",
    },
    {
      id: 6,
      name: "Ryan Tompson",
      role: "Web Developer",
      email: "ryan@purity.com",
      mobile: "+1 (555) 678-9012",
      avatar: "https://i.pravatar.cc/150?u=7",
    },
    {
      id: 7,
      name: "Boris Uve",
      role: "Mobile App Dev",
      email: "boris@purity.com",
      mobile: "+1 (555) 789-0123",
      avatar: "https://i.pravatar.cc/150?u=8",
    },
    {
      id: 8,
      name: "Kayla Red",
      role: "Marketing Specialist",
      email: "kayla@purity.com",
      mobile: "+1 (555) 890-1234",
      avatar: "https://i.pravatar.cc/150?u=9",
    },
    {
      id: 9,
      name: "John Doe",
      role: "Quality Assurance",
      email: "john@purity.com",
      mobile: "+1 (555) 901-2345",
      avatar: "https://i.pravatar.cc/150?u=13",
    },
    {
      id: 10,
      name: "Sarah Connor",
      role: "Security Expert",
      email: "sarah@purity.com",
      mobile: "+1 (555) 012-3456",
      avatar: "https://i.pravatar.cc/150?u=11",
    },
    {
      id: 11,
      name: "Tony Stark",
      role: "Lead Architect",
      email: "tony@purity.com",
      mobile: "+1 (555) 111-2222",
      avatar: "https://i.pravatar.cc/150?u=12",
    },
  ],
};
