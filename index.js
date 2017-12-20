/*global React*/
/*global ReactDOM*/

//Part One: Implement the TODO App from here: https://goo.gl/vySbPk
//Part Two: Add a delete button to each list element.

function List(props) {
    //TODO: Create list from props. C
  return (<ul>
      {props.items.map(function(item, index) {
        return <li key={index}>{item}</li>;
      })}
  </ul>);
};

var App = React.createClass({
  getInitialState: function() {
    //TODO: Set the initial state. C
    return {
        items: [],
        term: '',
    };
  },
  onChange: function(event) {
    //TODO: Save current value in input field.
        this.setState({ term: event.target.value });
  },
  onSubmit: function(event) {
      //TODO: Add to list.
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.term]
    });
  },
  render: function() {
    //TODO: Add event handlers to input and button.
    return (
      <div>
        <h2>Todo List</h2>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);