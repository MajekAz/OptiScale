
import React from 'react';
import { Layout, Megaphone, Cpu, Target, BarChart, Settings, Users, ArrowUpRight } from 'lucide-react';
import { Service, CaseStudy, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Bespoke Website Design',
    description: 'We build high-performance, mobile-first websites that turn visitors into loyal customers.',
    icon: <Layout className="w-8 h-8 text-indigo-500" />,
    features: ['Mobile-First Optimization', 'SEO Infrastructure', 'Custom UI/UX Design', 'Lightning Fast Loads'],
    benefits: ['Increase Conversion Rates', 'Professional Brand Authority', 'Scalable Architecture', 'Reduced Bounce Rates']
  },
  {
    id: 'digital-marketing',
    title: 'Strategic Digital Marketing',
    description: 'Data-driven campaigns designed to capture market share and drive qualified UK leads.',
    icon: <Megaphone className="w-8 h-8 text-indigo-500" />,
    features: ['Technical & Content SEO', 'Paid Advertising (PPC)', 'Social Media Management', 'Lead Generation Funnels'],
    benefits: ['Sustainable Growth', 'Higher ROI on Ad Spend', 'Targeted Audience Reach', 'Measurable Results Dashboard']
  },
  {
    id: 'ai-automation',
    title: 'AI & Workflow Automation',
    description: 'Harness the power of AI to eliminate repetitive tasks and scale your operations without increasing headcount.',
    icon: <Cpu className="w-8 h-8 text-indigo-500" />,
    features: ['Custom AI Chatbots', 'CRM Integration', 'Automated Lead Nurturing', 'Business Process Optimization'],
    benefits: ['24/7 Customer Engagement', 'Reduced Operational Costs', 'Eliminate Human Error', 'Instant Response Times']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-uk',
    client: 'Lumina Finance',
    title: 'Scaling Lead Acquisition by 140%',
    category: 'Digital Marketing & AI',
    image: 'https://picsum.photos/800/600?random=1',
    results: [
      { label: 'Lead Growth', value: '+142%' },
      { label: 'Cost per Lead', value: '-35%' },
      { label: 'Conversion', value: '4.8%' }
    ],
    challenge: 'Lumina was struggling with high CAC and manual lead qualifying processes.',
    solution: 'Implemented an AI-driven lead filtering system combined with a surgical PPC strategy.'
  },
  {
    id: 'retail-innovate',
    client: 'Moda London',
    title: 'E-commerce Evolution for Growth',
    category: 'Web Design',
    image: 'https://picsum.photos/800/600?random=2',
    results: [
      { label: 'Site Speed', value: '0.8s' },
      { label: 'Sales Growth', value: '+85%' },
      { label: 'Mobile Traffic', value: '72%' }
    ],
    challenge: 'Their legacy site was slow, not mobile-friendly, and losing customers at checkout.',
    solution: 'Designed a high-conversion, mobile-first Shopify custom build with optimized UI.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How AI is Transforming UK SMEs in 2024',
    excerpt: 'Discover why automation is no longer optional for businesses looking to stay competitive.',
    date: 'March 15, 2024',
    author: 'James Wilson',
    category: 'AI Automation',
    image: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: '2',
    title: '5 Web Design Principles for High Conversion',
    excerpt: 'Is your website a brochure or a sales engine? Learn the key differences.',
    date: 'March 10, 2024',
    author: 'Sarah Chen',
    category: 'Design',
    image: 'https://picsum.photos/600/400?random=11'
  }
];

export const TESTIMONIALS = [
  {
    name: "Robert Hammond",
    role: "CEO, TechLaunch UK",
    content: "OptiScale didn't just build us a website; they built a growth platform. Our leads have doubled in just 3 months.",
    image: "https://picsum.photos/100/100?random=20"
  },
  {
    name: "Elena Rossi",
    role: "Founder, GreenSpace",
    content: "The AI automation they implemented saves my team 15 hours a week. It's been a game changer for our operations.",
    image: "https://picsum.photos/100/100?random=21"
  }
];

export const FAQS = [
  {
    question: "How long does a typical website project take?",
    answer: "Most custom website projects are completed within 4-8 weeks, depending on complexity. We focus on quality and strategic alignment rather than rushing."
  },
  {
    question: "Do I need a big budget for AI automation?",
    answer: "Not at all. We specialize in implementing cost-effective solutions for SMEs that provide immediate ROI. We start with the most impactful bottlenecks."
  },
  {
    question: "Are your digital marketing services contract-based?",
    answer: "We offer both project-based and retainer-based services. However, digital marketing is a long-term strategy, and most clients see best results after 3-6 months."
  }
];
