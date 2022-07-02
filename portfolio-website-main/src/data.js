import {FaPinterest} from "@react-icons/all-files/fa/FaPinterest";
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/1.png';
import Project2 from './assets/img/2.png';
import Project3 from './assets/img/3.png';
import Project4 from './assets/img/4.png';
import Project5 from './assets/img/1.png';
import Project6 from './assets/img/1.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg7 from './assets/img/skills/git.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'materiais',
    href: 'materiais',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/carolm_studies/?hl=es',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/carolinemariotto',
  },
  {
    icon: <FaPinterest/>,
    href: 'https://br.pinterest.com/carolmstudies/',
  },
];

export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'E-book Marketing Digital',
    category: 'GRATUITO',
  },
  {
    id: '2',
    image: Project2,
    name: 'E-book de Inglês',
    category: 'GRATUITO',
  },
  {
    id: '3',
    image: Project3,
    name: 'CONTEÚDO DE ESTUDOS',
    category: 'SALVO NO GOOGLE DRIVE',
  },
  {
    id: '4',
    image: Project4,
    name: 'CURSO DE INGLÊS',
    category: 'Ir para o curso',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'Tudo',
  },
  {
    name: 'Gratuitos',
  },
  {
    name: 'Sites',
  },
  {
    name: 'Com Cupom',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg7,
  },
 
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Alguma dúvida?',
    subtitle: 'Me mande no e-mail:',
    description: 'Email: carol.mariiotto@gmail.com',
  },
  {
    icon: <FiPhone/>,
    title: 'Insta: @carolm_studie',
    subtitle: 'Tiktok: carol_mariotto',
    description: 'Pinterest: carolm_studies',
  },
];
