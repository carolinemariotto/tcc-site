import { FcKindle } from "react-icons/fc";
import {
  FaPinterest, 
  FaNewspaper, 
  FaAppleAlt,
  FaGoogleDrive,
} from 'react-icons/fa';
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
import Project1 from './assets/img/marketing.png';
import Project2 from './assets/img/ebook-ing.png';
import Project3 from './assets/img/drive-study.png';
import Project4 from './assets/img/curso-ing.png';
import Project5 from './assets/img/apostilas.png';
import Project6 from './assets/img/filadd.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg7 from './assets/img/skills/git.png';

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
    name: <a href='https://drive.google.com/file/d/1mwca-lybJXYE-Ljw4yOhxeSTVN7xwn45/view?usp=sharing'>E-book de Marketing</a>,
    category: 'GRATUITOS',
  },
  {
    id: '2',
    image: Project2,
    name: <a href='https://drive.google.com/file/d/15_K04ljBS3a8Lg9PrlFsL1e5zdj3R1oE/view?usp=sharing'>E-book de Inglês</a>,
    category: 'GRATUITOS',
  },
  {
    id: '3',
    image: Project3,
    name: <a href='https://drive.google.com/drive/folders/1SbdGZ_7lhdVYFZr49AF1MGm2p2Sjd9Ds?usp=sharing'>Drive de ESTUDOS</a>,
    category: 'GRATUITOS',
  },
  {
    id: '4',
    image: Project4,
    name: <a href='https://go.hotmart.com/I70223663A'>Curso de Inglês</a>,
    category: 'SITES',
  },
  {
    id: '5',
    image: Project5,
    name: <a href='https://www.estudoprep.com.br/'>Apostilas</a>,
    category: 'INDICAÇÃO',
  },
  {
    id: '6',
    image: Project6,
    name: <a href='https://www.estudoprep.com.br/'>Filadd</a>,
    category: 'INDICAÇÃO',
  
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
    name: 'Indicação',
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
    name:<a href='https://edzz.la/MAQEI?a=92632764'>TREINAMENTO - Marketing Digital</a> ,
    description: <a href='https://edzz.la/MAQEI?a=92632764'>'Basicamente o treinamento é online, com aulas gravadas, então você tem essa facilidade aí de assistir as aulas quantas vezes quiser e no horário que quiser!</a>,
  },
  {
    icon: <FaAppleAlt/>,
    name: <a href="https://go.hotmart.com/M58805286Q">Desafio 19 dias</a>,
    description:<a href="https://go.hotmart.com/M58805286Q">A alguns meses fiz esse desafio e consegui mudar minha rotina, ficar mais saudável e desde então meus hábitos melhoraram muito.</a>,
  },
  {
    icon: <FaNewspaper/>,
    name: <a href="https://thenewscc.com.br/indicacao?grsf=onl7an">THE NEWS- Newsletter</a>,
    description:<a href="https://thenewscc.com.br/indicacao?grsf=onl7an">e-mail diário enviado gratuitamente com as notícias mais recentes sobre mundo, Brasil, mercado financeiro e tecnologia</a>,
  },
  {
    icon: <FcKindle/>,
    name: <a href='https://drive.google.com/drive/folders/1VYsPDuaYnKgHj-ZGC_2no-6sUL9SRJiC?usp=sharing'> DRIVE DE LIVROS</a>,
    description:
    <a href='https://drive.google.com/drive/folders/1VYsPDuaYnKgHj-ZGC_2no-6sUL9SRJiC?usp=sharing'>Um drive com varios livros gratuitos para você ler da melhor forma possível.</a>,
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
  },
  {
    icon: <FaPinterest/>,
    href: 'https://br.pinterest.com/carolmstudies/',
    title: 'Pinterest: carolmstudies',

  }
];
