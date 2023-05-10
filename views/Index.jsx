const React = require("react");

class Index extends React.Component {
  render() {
      const { people } = this.props;
    return (
      <div>
        <h1>People Index Page</h1>
        <ul>
          {people.map((person, i) => {
            return (
              <li>
                    <a href={`/people/${i}`}>{person.firstName}{" "}{person.lastName}</a> is a {person.job}{" "}
                <br></br>
                {person.alive
                  ? `They're alive`
                  : `They're deceased`}
                <br />
              </li>
            );
          })}
        </ul>
        <nav>
                <a href="/people/new">Add a new person</a>
        </nav>
      </div>
    );
  }
}
module.exports = Index;
