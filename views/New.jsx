const React = require('react');

class New extends React.Component {
  render() {
      return <div>
                       <h1>New Person page</h1>
               {/* NOTE: action will be the route, method will be the HTTP verb */}
               <form action="/people" method="POST">
                 Name: <input type="text" name="name" /><br/>
                 Job: <input type="text" name="job" /><br/>
                 Is Alive: <input type="checkbox" name="alive" /><br/>
                 <input type="submit" name="" value="Create Person"/>
               </form>
    </div>;
  }
}

module.exports = New;