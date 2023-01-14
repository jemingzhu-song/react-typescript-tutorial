type FoodListProps = {
  foods: React.ReactNode[];
};

export const FoodList = ({ foods }: FoodListProps) => {
  return (
    <div>
      {foods.map((food) => {
        return <div>{food}</div>;
      })}
    </div>
  );
};
