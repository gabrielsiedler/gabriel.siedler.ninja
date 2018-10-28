import Router from 'next/router'
import { Component } from 'react'
import ReactGA from 'react-ga'

const prod = process.env.NODE_ENV === 'production'

export const GAWrapper = (WrappedComponent) =>
  class GaWrapper extends Component {
    lastTrackedPath: string

    static initGa() {
      if (!window.GA_INITIALIZED) {
        ReactGA.initialize('UA-111776068-1', { debug: !prod })
        window.GA_INITIALIZED = true
      }
    }

    constructor(props) {
      super(props)
      this.trackPageview = this.trackPageview.bind(this)
    }

    componentDidMount() {
      GaWrapper.initGa()
      this.trackPageview()
      Router.router.events.on('routeChangeComplete', this.trackPageview)
    }

    componentWillUnmount() {
      Router.router.events.off('routeChangeComplete', this.trackPageview)
    }

    trackPageview(path = document.location.pathname) {
      if (prod && path !== this.lastTrackedPath) {
        ReactGA.pageview(path)
        this.lastTrackedPath = path
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
