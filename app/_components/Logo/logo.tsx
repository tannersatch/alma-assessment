import Image, { ImageProps } from "next/image";
import styles from "./logo.module.css";

interface LogoProps
  extends Omit<ImageProps, "src" | "width" | "height" | "className" | "alt"> {
  height?: number;
}

export default function Logo({ height = 20, ...imageProps }: LogoProps) {
  return (
    <Image
      src="/alma.png"
      height={height}
      width={height * 2.8}
      className={styles.logo}
      alt=""
      {...imageProps}
    />
  );
}
