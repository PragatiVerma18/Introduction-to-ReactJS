import React from 'react';

// function Greet(){
//   return <h1>Hello Pragati</h1>
// }

const Greet = (props)=> {

return (
  <div>
<h1> Hello {props.name} a.ka. {props.heroName}</h1>
{props.children}
</div>
)
}

export default Greet;