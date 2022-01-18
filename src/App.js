/* eslint-disable prefer-template */
/* eslint-disable react/destructuring-assignment */

import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Keycloak from 'keycloak-js';
import AppLocale from './lang';
import ColorSwitcher from './components/common/ColorSwitcher';
import { NotificationContainer } from './components/common/react-notifications';
import { isMultiColorActive, adminRoot } from './constants/defaultValues';
import { getDirection } from './helpers/Utils';
import NewPage from './views/app/designTheme/NewPage';

const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/app')
);
const ViewLogin = React.lazy(() =>
  import('./views/user/login')
)
const ViewRegister = React.lazy(() =>
  import("./views/user/register")
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/error')
);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keycloak: null,
      authenticated: false
    }
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({
      onLoad: 'login-required'
    }).then((authenticated) => {
      this.setState({ keycloak, authenticated })
      if (authenticated) {
        window.accessToken = keycloak.token;
      }
    })
  }

  render() {

    const { locale } = this.props;
    const currentAppLocale = AppLocale[locale];

    if (this.state.keycloak) {
      if (this.state.authenticated) {
        <div>Secuured Keycloack Component</div>
      } else {
        <div>Unable to authenticate</div>
      }
    }

    return (
      <>
        <div className="h-100">
          {/* {console.log(keycloak)} */}
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
          >
            <>
              <NotificationContainer />
              {isMultiColorActive && <ColorSwitcher />}
              <Suspense fallback={<div className="loading" />}>
                <Router>
                  <Switch>
                    <Route
                      path={adminRoot}
                      // exact
                      render={(props) => <ViewApp {...props} />}
                    />
                    <Route
                      path="/error"
                      exact
                      render={(props) => <ViewError {...props} />}
                    />
                    <Route
                      path="/newTheme"
                      exact
                      render={(props) => <NewPage {...props} />}
                    />
                    <Route
                      path="/"
                      exact
                      render={(props) => <ViewLogin {...props} />}
                    />
                    <Route
                      path="/register"
                      render={(props) => <ViewRegister {...props} />}
                    />
                    <Redirect to="/error" />
                  </Switch>
                </Router>
              </Suspense>
            </>
          </IntlProvider>
        </div>
      </ >
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
