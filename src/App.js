import React from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'
import CreateUserForm from './CreateUserForm.js'


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount () {
    fetch('http://localhost:3000/users.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)

        this.setState({ users: data })
      })
      .catch(console.log)
  }
  render () {
    return ( 
          // <Users users={this.state.users} />

      // <div className='App'>
      //   <header className='App-header'>
      //     <p>
      //       <Counter />
      //     </p>
      //     <p>
      //       <Counter />
      //     </p>
      //   </header>
      // </div>
        <div className='App'>
          <header className='App-header'>
            <p>
              <CreateUserForm />
            </p>
          </header>
        </div>

    )
  }
}

export default App
