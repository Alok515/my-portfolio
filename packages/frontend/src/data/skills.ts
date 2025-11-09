// packages/frontend/src/data/skills.ts
export interface Skill {
  name: string;
  logoUrl: string; // URL to the logo image
}

const iconBaseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

export const skills: Skill[] = [
  { name: 'Vue.js', logoUrl: `${iconBaseUrl}vuejs/vuejs-original.svg` },
  { name: 'NestJS', logoUrl: `${iconBaseUrl}nestjs/nestjs-original.svg` },
  { name: 'TypeScript', logoUrl: `${iconBaseUrl}typescript/typescript-original.svg` },
  { name: 'Node.js', logoUrl: `${iconBaseUrl}nodejs/nodejs-original.svg` },
  { name: 'Rust', logoUrl: `${iconBaseUrl}rust/rust-original.svg` },
  { name: 'TailwindCSS', logoUrl: `${iconBaseUrl}tailwindcss/tailwindcss-original.svg` },
  { name: 'Docker', logoUrl: `${iconBaseUrl}docker/docker-original.svg` },
  { name: 'Git', logoUrl: `${iconBaseUrl}git/git-original.svg` },
];