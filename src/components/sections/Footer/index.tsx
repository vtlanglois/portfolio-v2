import { CODEPEN_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants";
import Container from "../../ui/Container";
import {
  CodepenLogoIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import "./styles.css";

export default function Footer() {
  return (
    <footer data-last-section="3">
      <svg
        id="footer-divider"
        width="100%"
        viewBox="0 0 680 42"
        preserveAspectRatio="xMidYMax slice"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-[-2px]"
      >
        <path
          d="M-10 45 L-10 12 Q60 2 150 8 Q220 14 280 6 Q320 1 360 8 Q410 16 480 7 Q570 -2 690 14 L690 45 Z"
          fill="var(--footer)"
        >
          <animate
            attributeName="d"
            dur="5.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
            values="
    M-10 45 L-10 12 Q60 2 150 8 Q220 14 280 6 Q320 1 360 8 Q410 16 480 7 Q570 -2 690 14 L690 45 Z;
    M-10 45 L-10 14 Q60 4 150 10 Q220 16 280 8 Q320 3 360 10 Q410 18 480 9 Q570 0 690 16 L690 45 Z;
    M-10 45 L-10 12 Q60 2 150 8 Q220 14 280 6 Q320 1 360 8 Q410 16 480 7 Q570 -2 690 14 L690 45 Z
  "
          />
        </path>
      </svg>

      <div className="bg-(--footer) text-white">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between pb-4 lg:pb-0">
            <div>
              <p className="pb-4 text-center lg:text-start text-sm">
                Made by Vincent Langlois. <br />
                Built with Next.js, React, Tailwind CSS, and more!
              </p>
            </div>
            <div className="flex flex-row gap-6 justify-center items-center">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Link to Vincent's LinkedIn profile"
              >
                <LinkedinLogoIcon
                  size={32}
                  weight="duotone"
                  className="text-slate-50"
                />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Link to Vincent's GitHub profile"
              >
                <GithubLogoIcon
                  size={32}
                  weight="duotone"
                  className="text-slate-50"
                />
              </a>
              <a
                href={CODEPEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Link to Vincent's Codepen profile"
              >
                <CodepenLogoIcon
                  size={32}
                  weight="duotone"
                  className="text-slate-50"
                />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
