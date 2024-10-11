const headingParaStyle =
  "mt-4 text-pretty text-xs max-w-md mx-auto font-normal text-muted-foreground lg:mt-6 lg:text-base";

type HeadingPropsType = {
  headingText: string;
  paraText: string;
};

export function HeadingOne({ headingText, paraText }: HeadingPropsType) {
  return (
    <article className="heading-one text-center">
      <h1 className="text-pretty text-3xl font-bold capitalize leading-tight md:text-4xl lg:text-6xl">
        {headingText}
      </h1>
      <p className={headingParaStyle}>{paraText}</p>
    </article>
  );
}

export function HeadingTwo({ headingText, paraText }: HeadingPropsType) {
  return (
    <article className="heading-one text-center">
      <h2 className="lg:text-5xl; text-pretty text-2xl font-bold capitalize leading-tight md:text-3xl">
        {headingText}
      </h2>
      <p className={headingParaStyle}>{paraText}</p>
    </article>
  );
}
