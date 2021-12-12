import { HTMLAttributes, PropsWithChildren } from "react";
import { css, cx } from "linaria";
import { colors } from "src/theme";

export function HighlightText({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cx(
        className,
        css`
          border-radius: 8px;
          padding: 2rem 1.6rem;
          border-left: 6px solid ${colors.secondaryLight};
          background-color: ${colors.primaryLighter};
          box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.008),
            0px 8px 20px rgba(0, 0, 0, 0.01);
          strong {
            color: ${colors.secondary};
          }
        `
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
