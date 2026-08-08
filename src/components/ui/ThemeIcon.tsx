import {
  CactusIcon,
  CloudIcon,
  DropIcon,
  FlowerIcon,
  GridNineIcon,
  IceCreamIcon,
  LegoIcon,
  MeteorIcon,
  OrangeSliceIcon,
  PlanetIcon,
  PlantIcon,
  SnowflakeIcon,
  SpeakerHifiIcon,
  SquareIcon,
  SunHorizonIcon,
  TreeEvergreenIcon,
  WavesIcon,
  WindIcon,
} from "@phosphor-icons/react/dist/ssr";

export function ThemeIcon({
  theme,
  size = 32,
}: {
  theme: string;
  size?: number;
}) {
  switch (theme) {
    case "ocean":
      return <WavesIcon size={size} />;
    case "dunes":
      return <CactusIcon size={size} weight="duotone" />;
    case "lava":
      return <MeteorIcon size={size} weight="duotone" />;
    case "spring":
      return <FlowerIcon size={size} weight="duotone" />;
    case "winter":
      return <SnowflakeIcon size={size} />;
    case "neopolitan":
      return <IceCreamIcon size={size} weight="duotone" />;
    case "misty":
      return <TreeEvergreenIcon size={size} weight="duotone" />;
    case "blocks":
      return <LegoIcon size={size} weight="duotone" />;
    case "plain":
      return <SquareIcon size={size} weight="duotone" />;
    case "galaxy":
      return <PlanetIcon size={size} weight="duotone" />;
    case "sunset":
      return <SunHorizonIcon size={size} weight="duotone" />;
    case "cloudy":
      return <CloudIcon size={size} weight="duotone" />;
    case "arctic":
      return <WindIcon size={size} />;
    case "metro":
      return <SpeakerHifiIcon size={size} weight="duotone" />;
    case "dorfic":
      return <OrangeSliceIcon size={size} weight="duotone" />;
    case "aqua":
      return <DropIcon size={size} weight="duotone" />;
    case "vaporwave":
      return <GridNineIcon size={size} weight="duotone" />;
    case "bliss":
    default:
      return <PlantIcon size={size} weight="duotone" />;
  }
}
