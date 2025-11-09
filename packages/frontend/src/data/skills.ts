// packages/frontend/src/data/skills.ts
export interface Skill {
  name: string;
  logoUrl: string; // URL to the logo image
  url: string;
}

const iconBaseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

export const skills: Skill[] = [
  { name: 'Vue.js', logoUrl: `${iconBaseUrl}vuejs/vuejs-original.svg`, url: 'https://vuejs.org' },
  { name: 'NestJS', logoUrl: `${iconBaseUrl}nestjs/nestjs-original.svg`, url: 'https://nestjs.com' },
  { name: 'TypeScript', logoUrl: `${iconBaseUrl}typescript/typescript-original.svg`, url: 'https://www.typescriptlang.org' },
  { name: 'Node.js', logoUrl: `${iconBaseUrl}nodejs/nodejs-original.svg`, url: 'https://nodejs.org' },
  { name: 'Rust', logoUrl: `${iconBaseUrl}rust/rust-original.svg`, url: 'https://www.rust-lang.org' },
  { name: 'TailwindCSS', logoUrl: `${iconBaseUrl}tailwindcss/tailwindcss-original.svg`, url: 'https://tailwindcss.com' },
  { name: 'Docker', logoUrl: `${iconBaseUrl}docker/docker-original.svg`, url: 'https://www.docker.com' },
  { name: 'Git', logoUrl: `${iconBaseUrl}git/git-original.svg`, url: 'https://git-scm.com' },
];