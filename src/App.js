import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(){
    super()

    this.state = {
      users:[],
      isLoading: true,
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({users: data}))
    .finally(()=> {
      this.setState({isLoading: false});
    });
  }

  render(){
    const {users, isLoading} = this.state;

    if (isLoading){
      return(
        <div className="App">
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Belajar API</h1>
        <hr />{users.map((user) => {
          return <p key={user.id}>Name : {user.name} | User Name: {user.username} | Email: {user.email}</p>
        })}
      </div>
    )
  }

}

export default App;
