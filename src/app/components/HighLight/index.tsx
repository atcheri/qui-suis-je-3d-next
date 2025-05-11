import { type FC, type HTMLProps, type PropsWithChildren } from "react";

import styles from "./highlight.module.scss";

type HighLightProps = {
  variant?: "stabylo" | "stain";
} & HTMLProps<HTMLElement>;

const HighLight: FC<PropsWithChildren<HighLightProps>> = ({ children, variant = "stabylo", className }) => {
  return variant == "stabylo" ? (
    <span className={`${styles.stabylo} ${className}`}>{children}</span>
  ) : (
    <span className={styles.highlightContainer}>
      <span className={styles.highlight}>{children}</span>
    </span>
  );
};

export default HighLight;
