/* ========== Basic Prop Types ========== */
type GreetProps = {
  name: string;
  messageCount: number;
  end?: string;
};

export const Greet = (props: GreetProps) => {
  // Give "end" a default value if it is not parsed in
  const { end = 'The End!' } = props;
  return (
    <div>
      Hello {props.name}, you have {props.messageCount} unread messages! {end}
    </div>
  );
};
