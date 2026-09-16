import {
  UtensilsCrossed,
  Bath,
  Sofa,
  Home,
  Hammer,
  TreePalm,
  PaintBucket,
  Ruler,
  ShieldCheck,
  Award,
  Clock,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: UtensilsCrossed,
    title: 'Kitchen Remodeling',
    description:
      'Transform your kitchen into a culinary masterpiece with custom cabinetry, premium countertops, and modern appliances.',
    features: ['Custom Cabinetry', 'Stone Countertops', 'Smart Appliances', 'Island Design'],
  },
  {
    icon: Bath,
    title: 'Bathroom Renovation',
    description:
      'Create your personal spa retreat with walk-in showers, freestanding tubs, and elegant fixtures that elevate daily routines.',
    features: ['Walk-in Showers', 'Freestanding Tubs', 'Heated Floors', 'Custom Vanities'],
  },
  {
    icon: Sofa,
    title: 'Living Spaces',
    description:
      'Open-concept layouts, built-in shelving, and statement lighting that make your living room the heart of your home.',
    features: ['Open-Concept Layouts', 'Built-In Shelving', 'Fireplace Upgrades', 'Lighting Design'],
  },
  {
    icon: Home,
    title: 'Whole-Home Renovation',
    description:
      'Complete top-to-bottom transformations that reimagine your entire home with cohesive design and modern functionality.',
    features: ['Floor Plan Redesign', 'Flooring Throughout', 'Electrical & Plumbing', 'Interior Design'],
  },
  {
    icon: TreePalm,
    title: 'Exterior & Outdoor',
    description:
      'Curb appeal upgrades, deck and patio construction, and outdoor living spaces that extend your home into nature.',
    features: ['Siding & Facade', 'Deck & Patio', 'Landscaping', 'Outdoor Kitchens'],
  },
  {
    icon: PaintBucket,
    title: 'Interior Finishes',
    description:
      'Premium painting, crown molding, accent walls, and finishing touches that bring polish and character to every room.',
    features: ['Premium Painting', 'Crown Molding', 'Accent Walls', 'Trim & Baseboards'],
  },
];

export interface Idea {
  image: string;
  title: string;
  category: string;
  description: string;
}

export const ideaCategories = [
  'All',
  'Kitchen',
  'Bathroom',
  'Living Room',
  'Bedroom',
  'Dining',
  'Exterior',
];

export const ideas: Idea[] = [
  {
    image: 'https://images.pexels.com/photos/6510984/pexels-photo-6510984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Bright Chef\'s Kitchen',
    category: 'Kitchen',
    description: 'Stainless steel appliances paired with granite countertops and warm wood flooring for a timeless, functional space.',
  },
  {
    image: 'https://images.pexels.com/photos/8082223/pexels-photo-8082223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Marble Spa Bathroom',
    category: 'Bathroom',
    description: 'Floor-to-ceiling marble walls with a glass-enclosed shower and modern fixtures create a serene daily retreat.',
  },
  {
    image: 'https://images.pexels.com/photos/276746/pexels-photo-276746.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Elegant Living Room',
    category: 'Living Room',
    description: 'Sophisticated furniture, warm tones, and abundant natural light make this space perfect for both relaxing and entertaining.',
  },
  {
    image: 'https://images.pexels.com/photos/6903157/pexels-photo-6903157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Sunlit Modern Bedroom',
    category: 'Bedroom',
    description: 'Soft natural light, layered textures, and a minimalist palette create a calming sanctuary for restful nights.',
  },
  {
    image: 'https://images.pexels.com/photos/14598479/pexels-photo-14598479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Marble Dining Room',
    category: 'Dining',
    description: 'A stunning marble table with gold accents and statement lighting transforms everyday meals into occasions.',
  },
  {
    image: 'https://images.pexels.com/photos/20296316/pexels-photo-20296316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Contemporary Home Exterior',
    category: 'Exterior',
    description: 'Clean lines, large windows, and natural materials define this striking modern two-story home facade.',
  },
  {
    image: 'https://images.pexels.com/photos/7601088/pexels-photo-7601088.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'White & Wood Kitchen',
    category: 'Kitchen',
    description: 'Crisp white cabinetry meets warm wooden floors for a clean, inviting kitchen that feels both modern and timeless.',
  },
  {
    image: 'https://images.pexels.com/photos/8134780/pexels-photo-8134780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Double Vanity Bathroom',
    category: 'Bathroom',
    description: 'Sleek black fixtures and a double vanity bring hotel-luxury convenience to your daily routine.',
  },
  {
    image: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Open-Concept Living',
    category: 'Living Room',
    description: 'A seamless flow between kitchen and living areas creates an airy, connected space ideal for modern family life.',
  },
  {
    image: 'https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Cozy Neutral Bedroom',
    category: 'Bedroom',
    description: 'Layered textiles and a soothing neutral palette make this bedroom a warm, inviting haven.',
  },
  {
    image: 'https://images.pexels.com/photos/5998031/pexels-photo-5998031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Classic Dining Space',
    category: 'Dining',
    description: 'A warm wooden table and classic design elements create a welcoming dining room for memorable gatherings.',
  },
  {
    image: 'https://images.pexels.com/photos/39494021/pexels-photo-39494021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Suburban Home Build',
    category: 'Exterior',
    description: 'A freshly constructed modern two-story home with clean architecture and quality materials built to last.',
  },
];

export interface Project {
  image: string;
  title: string;
  location: string;
  category: string;
  duration: string;
  description: string;
}

export const projects: Project[] = [
  {
    image: 'https://images.pexels.com/photos/37153451/pexels-photo-37153451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'The Hartwell Kitchen',
    location: 'Maple Ridge, BC',
    category: 'Kitchen',
    duration: '6 weeks',
    description:
      'A complete kitchen gut-and-rebuild featuring marble countertops, custom oak cabinetry, and a sprawling island that became the family\'s favorite gathering spot.',
  },
  {
    image: 'https://images.pexels.com/photos/7031570/pexels-photo-7031570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Skyline Master Bath',
    location: 'Yaletown, Vancouver',
    category: 'Bathroom',
    duration: '4 weeks',
    description:
      'A dated bathroom transformed into a luxurious spa with a walk-in shower, freestanding soaking tub, and heated marble floors.',
  },
  {
    image: 'https://images.pexels.com/photos/34688219/pexels-photo-34688219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'The Oakwood Living Room',
    location: 'Kitsilano, Vancouver',
    category: 'Living Room',
    duration: '3 weeks',
    description:
      'Walls removed to create an open-concept living space with custom built-ins, a modern fireplace feature wall, and integrated lighting design.',
  },
];

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah & James Whitfield',
    role: 'Kitchen Renovation',
    text: 'HomeTekk completely transformed our outdated kitchen into a space we never want to leave. The craftsmanship is impeccable, and the team was professional from start to finish. They finished on time and on budget.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Bathroom Remodel',
    text: 'From the initial consultation to the final reveal, HomeTekk exceeded every expectation. My new bathroom feels like a five-star spa. The attention to detail in the tile work and fixtures is stunning.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Whole-Home Renovation',
    text: 'We renovated our entire home with HomeTekk. It was a big project, but their team made it feel effortless. Clear communication, beautiful results, and they treated our home with respect throughout.',
    rating: 5,
  },
  {
    name: 'Patricia & David O\'Sullivan',
    role: 'Living Room + Dining',
    text: 'The open-concept redesign changed how we live in our home. HomeTekk understood our vision immediately and brought it to life with elegance and precision. Worth every penny.',
    rating: 5,
  },
];

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { icon: Award, value: '15+', label: 'Years of Excellence' },
  { icon: Home, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '1,200+', label: 'Happy Clients' },
  { icon: Clock, value: '98%', label: 'On-Time Delivery' },
];

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: Ruler,
    title: 'Consultation & Design',
    description:
      'We meet with you to understand your vision, take measurements, and create detailed 3D design renderings so you can see your new space before we begin.',
  },
  {
    icon: Hammer,
    title: 'Construction & Craft',
    description:
      'Our skilled craftsmen bring the design to life with premium materials and meticulous attention to detail. You receive weekly progress updates throughout.',
  },
  {
    icon: ShieldCheck,
    title: 'Final Walkthrough',
    description:
      'We conduct a comprehensive quality inspection together, address any touch-ups, and hand over a beautifully finished space backed by our warranty.',
  },
];
