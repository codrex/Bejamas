import React from 'react';
import ReactDOM from 'react-dom';

export class NavPortal extends React.Component {
  componentDidMount() {
    this.portalRoot = document && document.getElementById('portal');
    this.el = document && document.createElement('div');
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
    if (this.el) {
      return ReactDOM.createPortal(this.props.children, this.el);
    }
    return null;
  }
}
