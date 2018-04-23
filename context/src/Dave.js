import React, { Component } from 'react'
import ModalProvider from './ModalProvider'
import ModalConsumer from './ModalConsumer'

class Dave extends Component {
  render() {
    return (
      <div>
        <ModalProvider>
          <ModalConsumer>
            {({showModal}) => {
            return (
              <button onClick={() => showModal(
                ({ object }) => <div>Daves {object}</div>,
                { object: 'house'}
              )}>
              Click me 3
              </button>
            )
            }}
          </ModalConsumer>
        </ModalProvider>
      </div>
    )
  }
}

export default Dave
