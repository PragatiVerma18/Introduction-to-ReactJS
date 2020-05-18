import React from 'react'
import Person from './Person'
function NameList() {
  const names = ['Bruce', 'Clark', 'Diana']
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 28,
      skill: 'Vue'
    },
    {
      id: 2,
      name: 'Clark',
      age: 30,
      skill: 'React'
    },
    {
      id: 3,
      name: 'Diana',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 4,
      name: 'David',
      age: 40,
      skill: 'Django'
    }
  ]
  // const nameList = names.map(name => <h2>{name}</h2>)
  // return (
  //   <div>{nameList}</div>
  // )
  const personList = persons.map(person => <Person key={person.id} person={person}/>)
return <div>{personList}</div>
}

export default NameList
