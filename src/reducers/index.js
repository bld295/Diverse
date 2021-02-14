import {combineReducers} from 'redux';
import notificationReducers from './notificationReducers';
import toggleMenu from './menuReducers';
import tableReducers from './tableReducers';
import areaChartReducers from './chart-reducers/chartReducers';
import lineChartReducers from './chart-reducers/lineChartReducers';
import tinyChartReducers from './chart-reducers/tinyChartReducers';
import productTableReducers from './productTableReducers';
import productsReducers from './productReducers';
import teamReducres from './teamReducres';
import serviceReducers from './serviceReducers';
import blogReducers from './blogReducers';
import headerStyleReducers from './style-switcher-reducers/headerStyleReducers';
import headerActiveStyleReducer from './style-switcher-reducers/headeractiveReducer';
import sidebarStyleReducers from './style-switcher-reducers/sidebarStyleReducers';
import sidebarActiveStyleReducer from './style-switcher-reducers/sidebarActiveReducer';
import headerBannerStyleReducers from './style-switcher-reducers/headerBannerStyleReducers';
import headerBannerActiveStyleReducer from './style-switcher-reducers/headerBannerActiveReducer';
import messagesReducer from './messageReducers';


const allReducers = combineReducers({
  notifications: notificationReducers,
  menu: toggleMenu,
  tableData: tableReducers,
  areaChartData: areaChartReducers,
  lineChartData: lineChartReducers,
  tinyChartData: tinyChartReducers,
  productsTable: productTableReducers,
  products: productsReducers,
  teams: teamReducres,
  services: serviceReducers,
  blogs: blogReducers,
  headerStyle: headerStyleReducers,
  headerActiveStyle: headerActiveStyleReducer,
  headerBannerStyle: headerBannerStyleReducers,
  headerBAnnerActiveStyle: headerBannerActiveStyleReducer,
  sidebarStyle: sidebarStyleReducers,
  sidebarActiveStyle: sidebarActiveStyleReducer,
  messages: messagesReducer,
});

export default allReducers;
