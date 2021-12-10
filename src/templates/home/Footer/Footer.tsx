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
        /* ::before {
          content: "";
          display: block;
          position: absolute;
          pointer-events: none;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-color: #6a5a79;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Ccircle stroke='%23BA6980' vector-effect='non-scaling-stroke' id='a' fill='none' stroke-width='13' r='315'/%3E%3Cuse id='f' href='%23a' stroke-dasharray='100 100 100 9999'/%3E%3Cuse id='b' href='%23a' stroke-dasharray='250 250 250 250 250 9999'/%3E%3Cuse id='e' href='%23a' stroke-dasharray='1000 500 1000 500 9999'/%3E%3Cuse id='g' href='%23a' stroke-dasharray='1500 9999'/%3E%3Cuse id='h' href='%23a' stroke-dasharray='2000 500 500 9999'/%3E%3Cuse id='j' href='%23a' stroke-dasharray='800 800 800 800 800 9999'/%3E%3Cuse id='k' href='%23a' stroke-dasharray='1200 1200 1200 1200 1200 9999'/%3E%3Cuse id='l' href='%23a' stroke-dasharray='1600 1600 1600 1600 1600 9999'/%3E%3C/defs%3E%3Cg transform='translate(1000 750)' %3E%3Cg transform='rotate(277.2 0 0)' %3E%3Ccircle fill='%23BA6980' r='10'/%3E%3Cg transform='rotate(-156 0 0)'%3E%3Cuse href='%23f' transform='scale(.1) rotate(50 0 0)' /%3E%3Cuse href='%23f' transform='scale(.2) rotate(100 0 0)' /%3E%3Cuse href='%23f' transform='scale(.3) rotate(150 0 0)' /%3E%3C/g%3E%3Cg transform='rotate(-19.8 0 0)'%3E%3Cuse href='%23b' transform='scale(.4) rotate(200 0 0)' /%3E%3Cuse href='%23z' transform='scale(.5) rotate(250 0 0)' /%3E%3C/g%3E%3Cg id='z' transform='rotate(70.2 0 0)'%3E%3Cg transform='rotate(173.25 0 0)'%3E%3Cuse href='%23b'/%3E%3Cuse href='%23b' transform='scale(1.2) rotate(90 0 0)' /%3E%3Cuse href='%23b' transform='scale(1.4) rotate(60 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.6) rotate(120 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.8) rotate(30 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg id='y' transform='rotate(89.1 0 0)'%3E%3Cg transform='rotate(103.95 0 0)'%3E%3Cuse href='%23e' transform='scale(1.1) rotate(20 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.3) rotate(-40 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.5) rotate(60 0 0)' /%3E%3Cuse href='%23h' transform='scale(1.7) rotate(-80 0 0)' /%3E%3Cuse href='%23j' transform='scale(1.9) rotate(100 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-207.9 0 0)'%3E%3Cg transform='rotate(-70.2 0 0)'%3E%3Cg transform='rotate(-118.8 0 0)'%3E%3Cuse href='%23h' transform='scale(2) rotate(60 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.1) rotate(120 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.3) rotate(180 0 0)'/%3E%3Cuse href='%23h' transform='scale(2.4) rotate(240 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.5) rotate(300 0 0)'/%3E%3C/g%3E%3Cuse href='%23y' transform='scale(2) rotate(180 0 0)' /%3E%3Cuse href='%23j' transform='scale(2.7)'/%3E%3Cuse href='%23j' transform='scale(2.8) rotate(45 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.9) rotate(90 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.1) rotate(135 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.2) rotate(180 0 0)'/%3E%3C/g%3E%3Cuse href='%23k' transform='scale(3.3) rotate(225 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.5) rotate(270 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.6) rotate(315 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.7)'/%3E%3Cuse href='%23k' transform='scale(3.9) rotate(75 0 0)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          background-attachment: fixed;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          opacity: 0.4;
        } */
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
