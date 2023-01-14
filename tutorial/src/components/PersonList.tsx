/* ========== List/Array Prop Types ========== */
type PersonListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
  numbers: number[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <div>
        {props.names.map((name) => {
          return (
            <p key={name.firstName}>
              {name.firstName} {name.lastName}
            </p>
          );
        })}
      </div>
      <div>
        {props.numbers.map((num) => {
          return <p key={num}>{num}</p>;
        })}
      </div>
    </div>
  );
};
