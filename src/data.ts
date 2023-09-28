import focusTimer from "@/assets/focus-timer2-0-project.png"
import filmFanatic from "@/assets/filmfanatic-project.png"
import facilitaAi from "@/assets/facilita-ai-project.png"
import rocketpay from "@/assets/rocketpay-project.png"
import rocketnotes from "@/assets/rocketnotes-project.png"
import portfolio from "@/assets/portfolio-project.png"

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "Frontend",
    img: focusTimer.src,
    title: "Focus Timer 2.0",
  },
  {
    id: 1,
    category: "FullStack",
    img: filmFanatic.src,
    title: "FilmFanatic",
  },
  {
    id: 2,
    category: "FullStack",
    img: facilitaAi.src,
    title: "facilita.ai",
  },
  {
    id: 3,
    category: "Frontend",
    img: rocketpay.src,
    title: "Rocketpay",
  },
  {
    id: 4,
    category: "FullStack",
    img: rocketnotes.src,
    title: "Rocketnotes",
  },
  {
    id: 5,
    category: "Frontend",
    img: portfolio.src,
    title: "Portfolio - Vinicius Pra",
  },
];
