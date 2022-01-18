/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import AppLayout from 'layout/AppLayout';
import getAllAlerts from 'redux/alertData/actions';
import getAllCareteamData from 'redux/careteamData/actions';
import getAllDeviceData from 'redux/deviceData/actions';
import getAllInfotilesData from 'redux/infotilesData/actions';
import getAllLocationData from 'redux/locationData/actions';
import getAllMedicationData from 'redux/medicationData/actions';
import getAllPatientData from 'redux/patientData/actions';
import getAllRoomStatusData from 'redux/roomStatusData/actions';
import getAllThemeData from 'redux/themeData/actions';

const Devices = React.lazy(() =>
  import('./devices')
);
const Theme = React.lazy(() => 
  import('./theme')
);
const Location = React.lazy(() =>
  import( './location')
);
const Patient = React.lazy(() =>
  import('./patient')
);
const Infotile = React.lazy(() =>
  import('./infotile')
);
const Medication = React.lazy(() =>
  import('./medication')
);
const Careteam = React.lazy(() =>
  import('./careteam')
);
const Alerts = React.lazy(() =>
  import('./alerts')
);
const RoomStatus = React.lazy(() => 
  import('./roomStatus')
);
const DesignTheme = React.lazy(() =>
  import('./designTheme')
);

const App = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAlerts());
    dispatch(getAllCareteamData());
    dispatch(getAllDeviceData());
    dispatch(getAllInfotilesData());
    dispatch(getAllLocationData());
    dispatch(getAllMedicationData());
    dispatch(getAllPatientData());
    dispatch(getAllRoomStatusData());
    dispatch(getAllThemeData());
  },[])


  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/devices`} />
            <Route
              path={`${match.url}/devices`}
              render={(props) => <Devices {...props} />}
            />
            <Route
              path={`${match.url}/theme`}
              render={(props) => <Theme {...props} />}
            />
            <Route
              path={`${match.url}/location`}
              render={(props) => <Location {...props} />}
            />
            <Route
              path={`${match.url}/patient`}
              render={(props) => <Patient {...props} />}
            />
            <Route
              path={`${match.url}/infotile`}
              render={(props) => <Infotile {...props} />}
            />
            <Route
              path={`${match.url}/medication`}
              render={(props) => <Medication {...props} />}
            />
            <Route
              path={`${match.url}/careteam`}
              render={(props) => <Careteam {...props} />}
            />
            <Route
              path={`${match.url}/alerts`}
              render={(props) => <Alerts {...props} />}
            />
           <Route 
            path={`${match.url}/roomStatus`}
            render={(props) => <RoomStatus {...props} />}
           />
            <Route
              path={`${match.url}/designTheme`}
              render={(props) => <DesignTheme {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
