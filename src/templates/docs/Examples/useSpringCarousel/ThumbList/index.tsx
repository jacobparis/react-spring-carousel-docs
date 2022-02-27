import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { Playground, Playground2, Playground3 } from "./Playground";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      thumbsFragment,
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      withLoop: true,
      withThumbs: true, 
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color}>
            {i.title}
          </CarouselItem>
        ),
        renderThumb: (
          <CarouselThumb color={i.color}>
            {i.title}
          </CarouselThumb>
        )
      })),
    });

    return (
      <div>
        <button onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
        <button onClick={slideToNextItem}>Next item</button>
        <div>{thumbsFragment}</div>
      </div>
    );
  }
`;
export const code2 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      thumbsFragment,
      slideToPrevItem, 
      slideToNextItem,
      slideToItem // -> slide me to the moon
    } = useSpringCarousel({
      withLoop: true,
      withThumbs: true, 
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color}>
            {i.title}
          </CarouselItem>
        ),
        renderThumb: (
          <CarouselThumb 
            color={i.color} 
            onClick={() => slideToItem(i.id)}
          />
            {i.title}
          </CarouselThumb>
        )
      })),
    });

    return (
      <div>
        <button onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
        <button onClick={slideToNextItem}>Next item</button>
        <div>{thumbsFragment}</div>
      </div>
    );
  }
`;
export const code3 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const [showExtraItems, setShowExtraItems] = useState(false);
    let items = [...mockedItems];

    if (showExtraItems) {
      items.push(...extraItems);
    } else {
      items = items.filter((i) => !i.id.includes("extra-item"));
    }

    const { 
      carouselFragment, 
      thumbsFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      withThumbs: true,
      prepareThumbsData(items) {
        return [
          ...items,
          {
            id: "Button",
            renderThumb: (
              <button onClick={() => setShowExtraItems((p) => !p)}>
                Toggle items!
              </button>
            ),
          },
        ]
      },
      items: items.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color}>
            {i.title}
          </CarouselItem>,
        )
        renderThumb: (
          <CarouselThumb color={i.color}>
            {i.title}
          </CarouselThumb>
        ),
      })),
    });

    return (
      <div>
        <button onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
        <button onClick={slideToNextItem}>Next item</button>
        <div>{thumbsFragment}</div>
      </div>
    );
  }
`;

function UseSpringCarouselThumbListExample() {
  return (
    <Playground code={<SyntaxHiglight showLineNumbers={false} code={code} />} />
  );
}
function UseSpringCarouselThumbListExample2() {
  return (
    <Playground2
      code={<SyntaxHiglight showLineNumbers={false} code={code2} />}
    />
  );
}

function UseSpringCarouselThumbListExample3() {
  return (
    <Playground3
      code={<SyntaxHiglight showLineNumbers={false} code={code3} />}
    />
  );
}

export {
  UseSpringCarouselThumbListExample,
  UseSpringCarouselThumbListExample2,
  UseSpringCarouselThumbListExample3,
};
