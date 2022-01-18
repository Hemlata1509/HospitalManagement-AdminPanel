import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import theme from './theme/reducer';
import style from './style/reducer';
import currentPage from './currentPage/reducer';
import layout from './layout/reducers';
import infotiles from './infotilesData/reducers';
import patient from './patientData/reducers';
import devices from './deviceData/reducers';
import medication from './medicationData/reducers';
import careteam from './careteamData/reducers';
import location from './locationData/reducers';
import alert from './alertData/reducers';
import roomStatus from './roomStatusData/reducers';
import themeData from './themeData/reducers';
import allLayout from './layout/allLayoutReducer';
import dataLayout from './layout/datareducer';
import pen from './dragAndPen/prenreducer';
import drag from './dragAndPen/dragreducer';

const reducers = combineReducers({
  menu,
  settings,
  theme,
  style,
  currentPage,
  layout,
  infotiles,
  patient,
  devices,
  medication,
  careteam,
  location,
  alert,
  roomStatus,
  themeData,
  allLayout,
  dataLayout,
  pen,
  drag
});

export default reducers;
