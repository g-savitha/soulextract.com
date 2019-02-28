import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from '../Layout';
import { Background } from '../Background';

class Component extends React.Component {
  static displayName = 'Template';

  static propTypes = {
    layout: PropTypes.object,
    background: PropTypes.object,
    children: PropTypes.any
  };

  static defaultProps = {
    layout: {},
    background: {},
    legal: {}
  };

  constructor () {
    super(...arguments);

    this.state = {
      show: false
    };
  }

  componentDidMount () {
    const visited = window.sessionStorage.getItem('visited');

    if (visited) {
      this.setState({ show: true });
    } else {
      setTimeout(() => {
        this.setState({ show: true });
        window.sessionStorage.setItem('visited', 'true');
      }, 1000);
    }
  }

  render () {
    const { show } = this.state;
    const { layout, background, children } = this.props;

    return (
      <Layout {...layout}>
        <Background
          {...background}
          animation={{ show, ...background.animation }}
        >
          {children}
        </Background>
      </Layout>
    );
  }
}

export { Component };
