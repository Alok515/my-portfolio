// packages/frontend/src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string; // We'll use this later
  projectUrl?: string; // Link to live site
  githubUrl?: string; // Link to repo
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce site built with Vue.js, Node.js, and Stripe for payments.',
    tags: ['Vue.js', 'Node.js', 'Stripe', 'PostgreSQL'],
    imageUrl: 'https://via.placeholder.com/400x250', // Placeholder image
    githubUrl: 'https://github.com/...',
  },
  {
    id: 2,
    title: 'Real-time Chat App',
    description: 'A WebSocket-based chat application using NestJS on the backend and Pinia for state management.',
    tags: ['Vue.js', 'NestJS', 'WebSockets', 'Pinia'],
    imageUrl: 'https://via.placeholder.com/400x250',
    githubUrl: 'https://github.com/...',
  },
  {
    id: 3,
    title: 'This Portfolio Website',
    description: 'A portfolio featuring a liquid glass UI, 3D physics, and a microservice backend.',
    tags: ['Vue.js', 'NestJS', 'RabbitMQ', 'TailwindCSS'],
    imageUrl: 'https://via.placeholder.com/400x250',
    githubUrl: 'https://github.com/...',
  },
];