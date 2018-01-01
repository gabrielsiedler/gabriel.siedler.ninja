import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Router from 'next/router';

const debug = process.env.NODE_ENV !== 'production';

export default WrappedComponent =>
  class GaWrapper extends Component {
    static initGa() {
      if (!window.GA_INITIALIZED) { // eslint-disable-line no-undef
        ReactGA.initialize('UA-111776068-1', { debug });
        window.GA_INITIALIZED = true; // eslint-disable-line no-undef
      }
    }

    constructor(props) {
      super(props);
      this.trackPageview = this.trackPageview.bind(this);
    }

    componentDidMount() {
      GaWrapper.initGa();
      this.trackPageview();
      Router.router.events.on('routeChangeComplete', this.trackPageview);
    }

    componentWillUnmount() {
      Router.router.events.off('routeChangeComplete', this.trackPageview);
    }

    trackPageview(path = document.location.pathname) { // eslint-disable-line no-undef
      if (path !== this.lastTrackedPath) {
        ReactGA.pageview(path);
        this.lastTrackedPath = path;
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
