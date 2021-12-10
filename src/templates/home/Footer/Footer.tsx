import { css } from "linaria";
import { colors } from "src/theme";
import { Link } from "atoms/Link/Link";
import { Img } from "atoms/Img";

const badges = [
  {
    src: "https://img.shields.io/bundlephobia/minzip/react-spring-carousel-js",
    title: "Shield bundlefobia minzip",
    alt: "Shield bundlefobia minzip",
  },
  {
    src: "https://img.shields.io/bundlephobia/minzip/react-spring-carousel-js",
    title: "Shield npm version",
    alt: "Shield npm version",
  },
  {
    src: "https://img.shields.io/npm/dm/react-spring-carousel-js",
    title: "Shields month downloads",
    alt: "Shields month downloads",
  },
  {
    src: "https://img.shields.io/npm/l/react-spring-carousel-js",
    title: "Shields license",
    alt: "Shields license",
  },
];

function Divider() {
  return (
    <span
      className={css`
        margin: 0 0.8rem;
      `}
    >
      |
    </span>
  );
}

export function Footer() {
  return (
    <footer
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 16rem;
        padding: 4rem;
        background-color: #fff;
        border-top: 4px solid ${colors.secondary};
        position: relative;
        ::before {
          content: "";
          display: block;
          position: absolute;
          pointer-events: none;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-image: radial-gradient(
            ${colors.secondary},
            ${colors.secondaryLight}
          );
          opacity: 0.28;
        }
      `}
    >
      <div
        className={css`
          display: flex;
          position: relative;
          z-index: 10;
          & > *:not(:last-of-type) {
            margin-right: 1.2rem;
          }
        `}
      >
        {badges.map((i) => (
          <Img key={i.src} {...i} />
        ))}
      </div>
      <div
        className={css`
          display: flex;
          align-items: center;
          margin-top: 2.4rem;
          font-size: 1.4rem;
          span {
            display: inline-block;
            color: ${colors.primaryLight};
          }
          a {
            display: inline-block;
            font-size: inherit;
            :hover,
            :focus {
              text-decoration: underline;
            }
          }
        `}
      >
        <span>
          Made by{" "}
          <Link
            variant="none"
            size="none"
            title="https://cv.emilianobucci.com/"
            linkProps={{
              href: "https://cv.emilianobucci.com/",
            }}
          >
            Emiliano Bucci
          </Link>
        </span>
        <Divider />
        <span>Build with</span>
        <Divider />
        <span>
          Icons made by{" "}
          <Link
            variant="none"
            size="none"
            target="_blank"
            title="https://freeicons.io/profile/3335"
            linkProps={{
              href: "https://freeicons.io/profile/3335",
            }}
          >
            MD Badsha Meah
          </Link>
        </span>
      </div>
    </footer>
  );
}
