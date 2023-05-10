const React = require('react')
class Show extends React.Component {
  render () {
      const person = this.props.person
    return (
      <div>
            <h1> Show Page </h1>
            {person.firstName}{' '}{person.lastName} is a {person.job}
            <br></br>
        {person.alive ? 'They alive' : ' Pobrecito, they dead' }
      </div>
      );
     }
   }
  module.exports  = Show;