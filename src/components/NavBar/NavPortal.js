import React from 'react';
import ReactDOM from 'react-dom';

export class NavPortal extends React.Component {
  constructor(props) {
    super(props);
    this.portalRoot = document.getElementById('portal');
    this.el = document.createElement('div');
  }

  componentDidMount() {
    if (this.portalRoot) {
      this.portalRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (this.portalRoot) {
      this.oldNode = this.portalRoot.removeChild(this.el);
    }
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
