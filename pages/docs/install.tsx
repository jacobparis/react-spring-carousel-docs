import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { css } from "linaria";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

const npmInstallCode = `// npm v7+
npm install --save react-spring-carousel`;
const npmOldInstallCode = `// npm v7-
npm install --save react-spring-carousel react-spring`;
const yarnInstallCode = `// yarn
yarn add react-spring-carousel react-spring`;

export default function Page() {
  return (
    <>
      <h2>Installation</h2>
      <div
        className={css`
          display: grid;
          grid-gap: 1.6rem;
        `}
      >
        <SyntaxHiglight showLineNumbers={false} code={npmInstallCode} />
        <SyntaxHiglight showLineNumbers={false} code={npmOldInstallCode} />
        <SyntaxHiglight showLineNumbers={false} code={yarnInstallCode} />
      </div>
      <PageNavigationFooter
        prevBtn={{
          label: "Premise",
          href: "/docs/premise",
        }}
        nextBtn={{
          label: "Examples",
          href: "/docs/examples",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Install",
    },
  };
}
