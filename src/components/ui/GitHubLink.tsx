import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Orb from "./Orb";

export default function GitHubLink({
  href,
  alt,
}: {
  href: string;
  alt: string;
}) {
  return (
    <Orb
      tag="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="dark:bg-slate-600 bg-slate-200 hover:bg-purple-600 hover:text-slate-50"
      title={alt}
    >
      <GithubLogoIcon size={32} weight="duotone"  />
    </Orb>
  );
}
