import { css } from "linaria";
import { Accordion, AccordionRow } from "molecoles/Accordion";
import { SidebarNavItem } from "atoms/SidebarNavItem";
import { useRouter } from "next/dist/client/router";
import { ReactNode, useMemo } from "react";
import { colors, shadows } from "src/theme";

const sectionItemStyles = css`
  &:not(:last-of-type) {
    margin-bottom: 1.6rem;
  }
`;
const childStyles = css`
  margin-left: 1.2rem;
`;

const sectionProps = {
  props: {
    className: sectionItemStyles,
  },
};
const childProps = {
  props: {
    className: childStyles,
  },
};

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className={css`
        display: flex;
        ul {
          list-style: initial;
          padding-left: 2.4rem;
          li:not(:last-of-type) {
            margin-bottom: 1.2rem;
          }
        }
        strong {
          color: ${colors.secondary};
        }
        h2 {
          font-size: 3.4rem;
          font-weight: bold;
          margin-bottom: 3.2rem;
          color: ${colors.secondary};
          position: relative;
          padding-left: 1.2rem;
          ::before {
            content: "";
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 4px;
            border-radius: 20px;
            background-image: linear-gradient(
              to right,
              ${colors.primaryLight},
              ${colors.secondaryLight}
            );
          }
          &:not(:first-of-type) {
            margin-top: 2.4rem;
          }
        }
        p {
          &:not(:last-child) {
            margin-bottom: 3.2rem;
          }
          + ul {
            margin-top: -2rem;
          }
        }
      `}
    >
      {children}
    </div>
  );
}

type Props = {
  pageContent: ReactNode;
  footerFragment: ReactNode;
};

export function NavLayout({ pageContent, footerFragment }: Props) {
  const { pathname } = useRouter();
  const sidebarItems = useMemo(() => {
    return [
      {
        id: "start",
        renderItem: <SidebarNavItem label="Start" isSectionTitle />,
        shouldBeInteractive: false,
        children: [
          {
            id: "introduction",
            renderItem: (
              <SidebarNavItem
                label="Introduction"
                href="/docs"
                isActive={pathname === "/docs"}
              />
            ),
          },
          {
            id: "premise",
            renderItem: (
              <SidebarNavItem
                label="Premise"
                href="/docs/premise"
                isActive={pathname === "/docs/premise"}
              />
            ),
          },
        ],
        ...sectionProps,
      },
      {
        id: "docs",
        renderItem: <SidebarNavItem label="Docs" isSectionTitle />,
        shouldBeInteractive: false,
        children: [
          {
            id: "install",
            renderItem: (
              <SidebarNavItem
                label="Install"
                isActive={pathname === "/docs/install"}
                href="/docs/install"
              />
            ),
          },
          {
            id: "examples",
            isInitiallyExpanded: true,
            shouldBeInteractive: false,
            renderItem: (
              <SidebarNavItem
                label="Examples"
                isActive={pathname.includes("/docs/examples")}
                href="/docs/examples"
              />
            ),
            children: [
              {
                id: "use-spring-carousel",
                renderItem: (
                  <SidebarNavItem
                    label="useSpringCarousel"
                    isActive={pathname === "/docs/examples/use-spring-carousel"}
                    href="/docs/examples/use-spring-carousel"
                    isChild
                  />
                ),
                ...childProps,
              },
            ],
          },
        ],
        ...sectionProps,
      },
      {
        id: "references",
        renderItem: <SidebarNavItem label="References" isSectionTitle />,
      },
    ] as AccordionRow[];
  }, [pathname]);

  return (
    <Wrapper>
      <div
        className={css`
          width: 100%;
          height: 100vh;
          position: sticky;
          top: 0;
          max-width: 320px;
          padding: 2.4rem;
          background-color: ${colors.dark};
          box-shadow: ${shadows.large};
        `}
      >
        <h1
          className={css`
            color: ${colors.secondary};
            font-size: 2.4rem;
            margin-bottom: 2.4rem;
          `}
        >
          React Spring Carousel
        </h1>
        <nav>
          <Accordion data={sidebarItems} />
        </nav>
      </div>
      <div
        className={css`
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            max-width: 960px;
            margin: 0 auto;
            width: 100%;
            padding: 8rem;
          `}
        >
          {pageContent}
        </div>
        {footerFragment}
      </div>
    </Wrapper>
  );
}
