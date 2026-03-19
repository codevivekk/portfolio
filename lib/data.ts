export const profile = {
  name: 'Vivek Kushwaha',
  title: 'Full Stack Tech Lead',
  subtitle: 'Full Stack Engineer',
  tagline: 'Building fast, scalable, beautiful products',
  location: 'Surat, India',
  email: 'codevivekk@gmail.com',
  linkedin: 'https://linkedin.com/in/codevivekk',
  github: 'https://github.com/codevivekk',
  available: true,
  bio: [
    "I'm a Fullstack Tech Lead with 4 years of experience shipping production-grade web applications used by 100,000+ monthly users.",
    "Currently leading at Quranium — a quantum-proof blockchain platform — where I architect scalable UIs, build real-time systems, and mentor a growing team.",
    "I obsess over performance, clean code, and the tiny details that make great user experiences."
  ]
}

export const experience = [
  {
    period: 'Jan 2025 – Present',
    role: 'Fullstack Tech Lead',
    company: 'Quranium',
    location: 'Dubai (Remote)',
    type: 'full-time',
    highlights: [
      'Leading architecture across 4 production blockchain platforms',
      'Mentoring team of 7+ engineers and interns',
      'Driving technical decisions on performance, DX, and component strategy',
    ]
  },
  {
    period: 'Jun 2024 – Jan 2025',
    role: 'Software Developer',
    company: 'Quranium',
    location: 'Dubai (Remote)',
    type: 'full-time',
    highlights: [
      'Built Qsafe Blockchain Wallet UI serving 30K+ daily active users',
      'Reduced infrastructure costs $1,500→$300/mo via SSR/ISR optimisation',
      'Shipped Vue.js Chrome extension and React Native mobile wallet',
      'Designed CI/CD pipelines with GitHub Actions — 80% faster deployments',
    ]
  },
  {
    period: 'Nov 2022 – May 2024',
    role: 'Senior Full Stack Developer',
    company: 'Codebrain Infotech',
    location: 'Surat, India',
    type: 'full-time',
    highlights: [
      'Built Flexforce, Vedaslab, UxVortex, and POS system frontends',
      'Real-time chat & notifications via Socket.IO',
      'Improved frontend performance 70% through concurrent APIs & micro-frontend architecture',
    ]
  },
  {
    period: 'May 2022 – Aug 2022',
    role: 'React Developer',
    company: 'Webosmotic',
    location: 'Surat, India',
    type: 'internship',
    highlights: [
      'Built responsive UIs with React and integrated REST APIs',
      'State management with Redux Toolkit',
    ]
  },
]

export const projects = [
  {
    id: 'quranium',
    title: 'Quranium',
    company: 'Quranium',
    description: "World's first Quantum-Proof Distributed Ledger Technology platform merging PoW Blockchain with Proof of Respect BlockDAG.",
    url: 'https://quranium.org',
    tech: ['Next.js', 'Strapi', 'GSAP', 'Vercel'],
    category: 'Blockchain',
    featured: true,
    metric: '100K+ monthly visitors',
  },
  {
    id: 'nodesale',
    title: 'Node Sale',
    company: 'Quranium',
    description: 'Platform where users purchase nodes to run the Quranium blockchain network. Integrated Solidity smart contracts via Ethers.js and Wagmi.',
    url: 'https://node.quranium.org',
    tech: ['Next.js', 'Solidity', 'Ethers.js', 'Wagmi', 'Vercel'],
    category: 'Web3',
    featured: true,
    metric: 'On-chain transactions',
  },
  {
    id: 'qrnscan',
    title: 'QRN Scan',
    company: 'Quranium',
    description: 'Blockchain explorer for the Quranium network — track and verify transactions in real time.',
    url: 'https://qrnscan.com',
    tech: ['Next.js', 'RPC', 'Vercel'],
    category: 'Blockchain',
    featured: true,
    metric: 'Real-time on-chain data',
  },
  {
    id: 'qsafe',
    title: 'Qsafe Wallet',
    company: 'Quranium',
    description: 'Uncrackable, decentralized crypto wallet to interact with the Quranium blockchain. Multi-step transaction workflows.',
    url: 'https://www.qsafewallet.com',
    tech: ['Next.js', 'Vue.js', 'Web3'],
    category: 'Web3',
    featured: true,
    metric: '30K+ daily active users',
  },
  {
    id: 'uxvortex',
    title: 'UXvortex',
    company: 'Codebrain Infotech',
    description: 'Design inspiration platform — the best hand-picked website designs, largest creative network for showcasing creative work.',
    url: 'https://uxvortex.com',
    tech: ['Next.js', 'Node.js', 'Express', 'MySQL', 'Socket.IO'],
    category: 'Platform',
    featured: false,
    metric: 'Design community',
  },
  {
    id: 'flexforce',
    title: 'FlexForce',
    company: 'Codebrain Infotech',
    description: 'Job portal where clients search and hire candidates for their projects.',
    url: 'https://dev.eflexforce.com',
    tech: ['React', 'Mantine UI', 'Axios'],
    category: 'SaaS',
    featured: false,
    metric: 'Talent marketplace',
  },
  {
    id: 'dlj',
    title: 'DLJ Produce',
    company: 'Freelance',
    description: 'Business website for a produce company.',
    url: 'https://www.dljproduce.com',
    tech: ['WordPress'],
    category: 'Freelance',
    featured: false,
    metric: null,
  },
]

export const skills = {
  core: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS'],
  animation: ['Framer Motion', 'GSAP', 'Three.js', 'CSS Animations'],
  backend: ['Node.js', 'NestJS', 'Express.js', 'Socket.IO', 'REST APIs'],
  web3: ['Solidity', 'Ethers.js', 'Wagmi', 'Hardhat', 'Web3.js'],
  infra: ['AWS', 'GCP', 'Docker', 'GitHub Actions', 'Vercel', 'CI/CD'],
  db: ['PostgreSQL', 'MongoDB', 'MySQL'],
  other: ['Vue.js', 'React Native', 'Redux Toolkit', 'Rust (basics)'],
}
