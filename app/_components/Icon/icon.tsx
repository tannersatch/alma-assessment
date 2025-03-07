import Image, { ImageProps } from "next/image";
import styles from "./icon.module.css";

interface IconProps
  extends Omit<ImageProps, "src" | "width" | "height" | "className" | "alt"> {
  name: "info" | "heart" | "dice";
  size?: number;
}

export default function Icon({ name, size = 50, ...imageProps }: IconProps) {
  return (
    <Image
      src={`/icons/${name}.png`}
      width={size}
      height={size}
      alt=""
      className={styles.icon}
      {...imageProps}
    />
  );
}
