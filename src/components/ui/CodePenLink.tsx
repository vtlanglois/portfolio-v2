import { CodepenLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Orb from "./Orb";

export default function CodePenLink({
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
      className="bg-gray-800 hover:bg-gray-900"
      title={alt}
    >
      <CodepenLogoIcon size={32} weight="duotone" className="text-slate-50 " />
    </Orb>
  );
}
