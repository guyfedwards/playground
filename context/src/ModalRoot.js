import React from 'react'
import ModalConsumer from './ModalConsumer'


const ModalRoot = () => (
  <ModalConsumer>
    {({ component: Component, props, hideModal}) => {
      console.log(Component, props, hideModal)
      return (
        Component ? <Component {...props} onRequestClose={hideModal} /> : null
      )
    }}
  </ModalConsumer>
)

export default ModalRoot
