
import { Project, BlogPost, TechItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Dashboard',
    description: 'A high-performance financial tracking dashboard with real-time data visualization and predictive analytics.',
    image: 'https://picsum.photos/seed/nexus/800/600',
    tags: ['React', 'D3.js', 'Tailwind', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Ethereal Commerce',
    description: 'Minimalist headless commerce platform focused on luxury brands and seamless animations.',
    image: 'https://picsum.photos/seed/ethereal/800/600',
    tags: ['Next.js', 'Shopify', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Quantum Studio',
    description: 'Interactive portfolio platform for 3D artists featuring WebGL integration and immersive layouts.',
    image: 'https://picsum.photos/seed/quantum/800/600',
    tags: ['Three.js', 'React', 'GSAP'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-web-design',
    title: 'The Future of Immersive Web Design',
    date: 'Oct 24, 2023',
    excerpt: 'Exploring how WebGL and advanced CSS are bridging the gap between digital interfaces and physical reality.',
    content: `
      ## The New Digital Frontier
      The web is no longer a collection of flat pages. It's becoming an immersive experience.
      
      As browsers become more powerful, we're seeing a shift from simple grid-based layouts to spatial designs. Libraries like Three.js and React Three Fiber are making 3D interactions accessible to the average frontend developer.
      
      ### Key Trends for 2024
      - **Bento Grids**: Highly organized yet dynamic information layouts.
      - **Micro-interactions**: Subtle animations that provide immediate feedback.
      - **Dark Mode by Default**: Prioritizing eye comfort and high contrast.
      
      What does this mean for developers? We need to think like architects, not just typographers.
    `,
    image: 'https://picsum.photos/seed/web/800/500',
    author: 'MrJawwadAli'
  },
  {
    id: '2',
    slug: 'optimizing-framer-motion',
    title: 'Performance-First Animations with Framer Motion',
    date: 'Sep 12, 2023',
    excerpt: 'How to achieve buttery smooth 60fps animations without sacrificing your lighthouse score.',
    content: `
      ## Butter Smooth Motion
      Animations are the soul of a modern application. But they can also be its downfall if not implemented carefully.
      
      Framer Motion is a powerful tool, but misuse can lead to layout thrashing and dropped frames.
      
      ### Optimization Checklist
      1. Use \`transform\` and \`opacity\` whenever possible.
      2. Leverage \`LayoutGroup\` for shared element transitions.
      3. Implement \`exit\` animations correctly with \`AnimatePresence\`.
    `,
    image: 'https://picsum.photos/seed/motion/800/500',
    author: 'MrJawwadAli'
  },
  {
    id: '3',
    slug: 'scaling-tailwind-projects',
    title: 'Scaling Tailwind CSS in Large Teams',
    date: 'Aug 05, 2023',
    excerpt: 'Best practices for keeping your utility-first codebase clean, maintainable, and predictable.',
    content: `
      ## The Utility Paradox
      Tailwind is great for speed, but without a plan, it can lead to "class soup."
      
      In this article, we look at how to use component abstractions and configuration plugins to keep your team aligned.
    `,
    image: 'https://picsum.photos/seed/code/800/500',
    author: 'MrJawwadAli'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'React', icon: 'Atom' },
  { name: 'TypeScript', icon: 'Code2' },
  { name: 'Node.js', icon: 'Cpu' },
  { name: 'Python', icon: 'Terminal' },
  { name: 'Tailwind', icon: 'Wind' },
  { name: 'Postgres', icon: 'Database' },
  { name: 'AWS', icon: 'Cloud' },
  { name: 'Docker', icon: 'Container' }
];
