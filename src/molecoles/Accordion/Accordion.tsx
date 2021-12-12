import { HTMLAttributes, useMemo, useState } from "react";
import { css, cx } from "linaria";
import { useMeasure } from "utils/useMeasure";
import React from "react";
import { animated, useSpring } from "react-spring";

type RowWithDepth = {
  id: string;
  renderItem: React.ReactNode;
  children?: RowWithDepth[];
  isInitiallyExpanded?: boolean;
  depth: number;
};

// @ts-ignore
export function assignDepth(arr, depth = 0, index = 0) {
  const newArray = [...arr];
  if (index < newArray.length) {
    newArray[index].depth = depth;
    if (
      Array.isArray(arr[index].children) &&
      Array.isArray(newArray[index].children)
    ) {
      assignDepth(newArray[index].children, depth + 1, 0);
    }
    assignDepth(newArray, depth, index + 1);
  }
  return newArray as RowWithDepth[];
}

export type AccordionRow = {
  id: string;
  renderItem: React.ReactNode;
  children?: AccordionRow[];
  shouldBeInteractive?: boolean;
  isInitiallyExpanded?: boolean;
  props?: HTMLAttributes<HTMLDivElement>;
};

type Props = {
  data: AccordionRow[];
};

function RowItem({
  renderItem,
  children,
  activeItems,
  expandItem,
  toggle,
  id,
  shouldBeInteractive = true,
  props = {},
}: AccordionRow & {
  activeItems: string[];
  expandItem(id: string): void;
  toggle(id: string): void;
}) {
  const { className, ...restProps } = props;
  const isExpanded = activeItems.includes(id);
  const [{ ref }, { height }] = useMeasure();
  const { height: springHeight } = useSpring({
    height: isExpanded || !shouldBeInteractive ? height : 0,
    immediate: !shouldBeInteractive,
  });
  function handleToggleItem() {
    toggle(id);
  }
  return (
    <div
      onClick={shouldBeInteractive ? handleToggleItem : undefined}
      className={cx(
        className,
        css`
          display: grid;
        `
      )}
      {...restProps}
    >
      {renderItem}
      <animated.div
        style={{
          height: !shouldBeInteractive ? "auto" : springHeight,
        }}
        className={css`
          overflow: hidden;
        `}
      >
        <div ref={ref}>
          {Array.isArray(children) &&
            children.length > 0 &&
            children.map((child) => (
              <RowItem
                key={child.id}
                {...child}
                activeItems={activeItems}
                expandItem={expandItem}
                toggle={toggle}
              />
            ))}
        </div>
      </animated.div>
    </div>
  );
}

type ContextProps = {
  getIsExpanded(id: string): boolean;
  setActiveItem(id: string): void;
  toggle(id: string): void;
};

const AccordionContext = React.createContext<ContextProps>({
  getIsExpanded: () => false,
  setActiveItem: () => {},
  toggle: () => {},
});

export function Accordion({ data }: Props) {
  const [activeItems, setActiveItems] = useState<string[]>([]);
  const dataWithDepth = useMemo(() => assignDepth(data), [data]);
  function expandItem(id: string) {
    setActiveItems((p) => [...p, id]);
  }
  function toggleItems(id: string) {
    setActiveItems((p) => {
      if (p.includes(id)) {
        return p.filter((v) => v !== id);
      } else {
        return [...p, id];
      }
    });
  }
  return (
    <AccordionContext.Provider
      value={{
        getIsExpanded: (id) => activeItems.includes(id),
        setActiveItem: (id) => setActiveItems((p) => [...p, id]),
        toggle: toggleItems,
      }}
    >
      <div
        className={css`
          display: grid;
        `}
      >
        {dataWithDepth.map((item) => (
          <RowItem
            key={item.id}
            {...item}
            activeItems={activeItems}
            expandItem={expandItem}
            toggle={toggleItems}
          />
        ))}
      </div>
    </AccordionContext.Provider>
  );
}
