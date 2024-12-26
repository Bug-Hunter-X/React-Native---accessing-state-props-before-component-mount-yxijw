This error occurs when you try to access a component's state or props before it has mounted.  This often happens inside a lifecycle method like `constructor` or before `componentDidMount` has completed.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.someProp); // Error! props might not be defined yet
    this.state = { count: this.props.initialCount }; //Error! props might not be defined yet
  }

  componentDidMount() {
    console.log(this.props.someProp); // Safe to access props here
    this.setState({ count: this.props.initialCount }); //Safe to access props here
  }

  render() {
    return <Text>{this.state.count}</Text>;
  }
}
```