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
      className="bg-purple-500 hover:bg-purple-600"
      title={alt}
    >
      <GithubLogoIcon size={32} weight="duotone" className="text-slate-50 " />
    </Orb>
  );
}
