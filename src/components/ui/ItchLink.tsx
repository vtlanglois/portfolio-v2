import { GameControllerIcon } from "@phosphor-icons/react/dist/ssr";
import Orb from "./Orb";

export default function ItchLink({
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
      className="themed-ui-control"
      title={alt}
    >
      <GameControllerIcon size={32} weight="duotone" />
    </Orb>
  );
}