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
      className="dark:bg-slate-600/50 bg-slate-200/50 hover:bg-[#8534F3] hover:text-slate-50"
      title={alt}
    >
      <GithubLogoIcon size={32} weight="duotone"  />
    </Orb>
  );
}
