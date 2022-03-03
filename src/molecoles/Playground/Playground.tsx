import { css } from "linaria";
import { PropsWithChildren, ReactNode } from "react";
import { Button } from "atoms/Button";
import {
  useGlobalPlayground,
  DispatchProps,
} from "templates/docs/Header/NavLayout/GlobalPlayground";
import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { colors } from "src/theme";

type Props = {
  slideToPrevItem?(): void;
  slideToNextItem?(): void;
  thumbsFragment?: ReactNode;
  customControls?: ReactNode;
};

function Playground({
  children,
  slideToPrevItem,
  slideToNextItem,
  thumbsFragment,
  customControls,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: #fff;
        overflow: hidden;
        position: relative;
      `}
    >
      {customControls}
      {children}
      {thumbsFragment && (
        <div
          className={css`
            padding: 2.4rem;
            background-color: ${colors.warm};
            .use-spring-carousel-thumbs-wrapper {
              & > *:not(:last-of-type) {
                margin-right: 1.6rem;
              }
            }
          `}
        >
          {thumbsFragment}
        </div>
      )}
      {slideToPrevItem && slideToNextItem && (
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            background-color: #fff;
            padding: 1.6rem;
            right: 0;
          `}
        >
          <Button onClick={slideToPrevItem}>Prev item</Button>
          <Button onClick={slideToNextItem}>Next item</Button>
        </div>
      )}
    </div>
  );
}

function PlaygroundButtonExample({
  children,
  code,
  ...rest
}: PropsWithChildren<DispatchProps & { code: string }>) {
  const { dispatch } = useGlobalPlayground();

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        pre {
          width: 100%;
          padding: 0.8rem !important;
        }
        button {
          padding: 1.6rem 2.4rem;
          margin: auto;
          margin-top: 2.4rem;
        }
      `}
    >
      <SyntaxHiglight code={code} showLineNumbers={false} />
      <Button onClick={() => dispatch(rest)}>Open playground</Button>
    </div>
  );
}

export { Playground, PlaygroundButtonExample };
