import React, { Component } from 'react';
import logo from './logo.svg';
import Dave from './Dave'
import ModalProvider from './ModalProvider'
import ModalConsumer from './ModalConsumer'
import ModalRoot from './ModalRoot'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Dave />

        <ModalProvider>
          <ModalRoot />

          <ModalConsumer>
            {({ showModal }) => {
              console.log(showModal)
            return (
              <React.Fragment>
              <button onClick={() => showModal(({name}) => <div>hi {name}</div>, { name: 'dave' })}>Click me</button>
              <button onClick={() => showModal(({name}) => <div>hi {name}</div>, { name: 'john' })}>Click me2</button>

              </React.Fragment>

            )
            }}
          </ModalConsumer>
        </ModalProvider>
      </div>
    );
  }
}

export default App;
