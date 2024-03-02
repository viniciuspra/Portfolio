import focusTimer from "@/assets/focus-timer2-0-project.png";
import filmFanatic from "@/assets/filmfanatic-project.png";
import facilitaAi from "@/assets/facilita-ai-project.png";
import rocketpay from "@/assets/rocketpay-project.png";
import rocketnotes from "@/assets/rocketnotes-project.png";
import chirpify from "@/assets/Chirpify.png";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  url: string;
  url_github: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "Frontend",
    img: focusTimer.src,
    title: "Focus Timer 2.0",
    url: "https://focus-timer2-0-viniciuspra.vercel.app",
    url_github: "https://github.com/viniciuspra/Focus-Timer2.0",
  },
  {
    id: 1,
    category: "FullStack",
    img: filmFanatic.src,
    title: "FilmFanatic",
    url: "https://filmfanatic.netlify.app",
    url_github: "https://github.com/viniciuspra/FilmFanatic",
  },
  {
    id: 2,
    category: "FullStack",
    img: facilitaAi.src,
    title: "facilita.ai",
    url: "https://facilita-ai.netlify.app",
    url_github: "https://github.com/viniciuspra/facilita-ai-web",
  },
  {
    id: 3,
    category: "Frontend",
    img: rocketpay.src,
    title: "Rocketpay",
    url: "https://rocketpay-six-nu.vercel.app",
    url_github: "https://github.com/viniciuspra/Rocketpay",
  },
  {
    id: 4,
    category: "FullStack",
    img: rocketnotes.src,
    title: "Rocketnotes",
    url: "https://rocketnotespro.netlify.app",
    url_github: "https://github.com/viniciuspra/RocketNotes",
  },
  {
    id: 5,
    category: "FullStack",
    img: chirpify.src,
    title: "Chirpify",
    url: "https://chirpify.netlify.app/",
    url_github: "https://github.com/viniciuspra/Chirpify-chat-client",
  },
];
