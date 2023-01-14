import './App.css';
import { Fruit } from './components/Fruit';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { FoodList } from './components/FoodList';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';

function App() {
  const person = {
    firstName: 'Bruce',
    lastName: 'Wayne',
  };

  const namesList = [
    { firstName: 'Jenny', lastName: 'Wang' },
    { firstName: 'Adam', lastName: 'Chen' },
    { firstName: 'Charles', lastName: 'Kenny' },
  ];

  const numbersList = [1, 2, 3, 4, 9, 9, 9];

  const foodsList = [
    <Fruit fruit='Apple' />,
    <Fruit fruit='Banana' />,
    <Fruit fruit='Cherry' />,
    <Fruit fruit='Durian' />,
    <Fruit fruit='Watermelon' />,
  ];

  return (
    <div className='App'>
      <Greet name='Jeming' messageCount={20} /> {/* Basic Data Type Props */}
      <Person name={person} /> {/* Object Prop Types */}
      <PersonList names={namesList} numbers={numbersList} /> {/* Array/List Prop Types */}
      <Status status='success' /> {/* Union Data Type Prop Types */}
      <FoodList foods={foodsList} /> {/* React Component Prop Types */}
      <Greet name='Jeming' messageCount={20} end="That's all fokes!" /> {/* Optional Prop Types */}
      <Button
        handleClick={(event) => {
          console.log('Clicked! ', event);
        }}
      />
      {/* Event Prop Types */}
      <Input
        value='Empty'
        handleChange={(event) => {
          console.log('Input Event: ', event);
        }}
      />
      {/* Input Prop Types */}
      <Container styles={{ border: '1px solid', padding: '1px' }} />
    </div>
  );
}

export default App;
