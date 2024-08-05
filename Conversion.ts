/*TypeScript Conversion:
Define the Props Type: Create a type for the props of the Greeting component. This type will include the name property, which is a string.

Annotate the Component Props: Use the defined type to annotate the props parameter of the Greeting component.*/


import React from 'react';

// Define a type for the props of the Greeting component
interface GreetingProps {
  name: string;
}

// Functional component with typed props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

/* Code 2 
TypeScript Conversion:
Define the State Type: Create an interface to describe the shape of the component's state.

Annotate the State Type: Use the defined interface to type the state in the Counter class.

Annotate the Component Type: Type the Counter class as a React.Component with the appropriate state and props types. Even if there are no props, you still need to define an empty object type for props.*/

import React, { Component } from 'react';

// Define the type for the component's state
interface CounterState {
  count: number;
}

// Counter component with typed state
class Counter extends Component<{}, CounterState> {
  // Initialize state
  state: CounterState = {
    count: 0
  };

  // Increment method to update state
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  // Render method
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

