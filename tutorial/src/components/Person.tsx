/* ========== Object Prop Types ========== */
import { PersonProps } from './PersonTypes';
export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};
