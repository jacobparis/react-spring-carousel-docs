import { css } from "linaria";
import { PageNavigationButton } from "molecoles/PageNavigationButton";
import { mediaQueries } from "src/mediaQueries";

type BtnProps = {
  label: string;
  href: string;
};
type Props = {
  prevBtn?: BtnProps;
  nextBtn?: BtnProps;
};

export function PageNavigationFooter({ prevBtn, nextBtn }: Props) {
  return (
    <div
      className={css`
        display: flex;
        padding-top: 8rem;
        margin-top: auto;
        ${mediaQueries.until.tablet} {
          display: grid;
          grid-gap: 2rem;
          padding-top: 4rem;
          a {
            margin: 0;
            width: 100%;
          }
        }
      `}
    >
      {prevBtn && (
        <PageNavigationButton
          type="prev"
          linkProps={{
            href: prevBtn.href,
          }}
        >
          {prevBtn.label}
        </PageNavigationButton>
      )}
      {nextBtn && (
        <PageNavigationButton
          type="next"
          linkProps={{
            href: nextBtn.href,
          }}
        >
          {nextBtn.label}
        </PageNavigationButton>
      )}
    </div>
  );
}
