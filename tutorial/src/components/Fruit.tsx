type FruitProps = {
  fruit: string;
};

export const Fruit = (props: FruitProps) => {
  return (
    <div>
      <h1>Fruit Name: </h1>
      {props.fruit}
    </div>
  );
};
