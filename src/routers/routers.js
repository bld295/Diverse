/*
 * filename: routers.js
 * mainly responsivle for all routes component
 * change and sidebar routlist menu item
 * */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import classNames from 'classnames';
import ScrollToTop from './scroll';
import {BrowserRouter as Router} from 'react-router-dom'
import RoutesList from './routesList.js';
import RoutesComponent from './routesComponent';
import { Scrollbars } from 'react-custom-scrollbars';
import Footer from '../components/footer';
import StyleSwitcher from '../style-switcher/index';
import logo from '../img/logo.svg';
import menuBtn from '../img/menu-btn.svg';

class RouterComponent extends Component {
  constructor () {
    super();
    this.state = { menuOpen: true };
    this.menuCollapseWithResize = this.menuCollapseWithResize.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // menu collapse when on mobile function
  menuCollapseWithResize (){
    if (window.innerWidth < 991) {
      this.setState({menuOpen: false});
    }
    if (window.innerWidth > 991) {
      this.setState({menuOpen: true});
    }
  }

  // Sidebar collapse when tablet
  componentDidMount () {
    window.addEventListener('resize', this.menuCollapseWithResize);

    if (window.innerWidth < 991) {
      this.setState({menuOpen: false});
    }
  }

  // Sidebar collapse when tablet
  componentWillUnmount() {
    window.removeEventListener('resize', this.menuCollapseWithResize);
  }

  // Sidebar toggle
  toggleMenu() {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }


  render() {

    const headerStyle = {
      background:  'linear-gradient(to right,' +  this.props.colorHeader.color + ')'
    }

    const containerStyle = {
      background: this.props.colorSidebar.color,
    }

    // Page content class change based on menu toggle
    const pageContent = classNames ({
      'readmin-page-content' : true,
      'menu-open': this.state.menuOpen,
    });

    // Sidebar class based on bg color
    const sidebarClass = classNames ({
      'menu-drawer' : true,
      'has-bg': true,
    });

    // header left part with logo and toggle button
    const HeaderLogoWithMenu = () => (
      <div className="an-header" style={headerStyle}>
        <div className="header-left">
        <button onClick={this.toggleMenu}>
          <img src={menuBtn} alt="menu"/>
        </button>
          <Link to="/" className="brand"><img src={logo} alt="Logo" /></Link>
        </div>
      </div>
    );

    const Sidebar = () => (
      <div className="readmin-sidebar">
        <HeaderLogoWithMenu />
        <Drawer open={this.state.menuOpen}
          className={sidebarClass}
          containerClassName="sidebar-initial-color"
        >
          <div className="sidebar-overlay" style={containerStyle}></div>
          <Scrollbars>
            <RoutesList />
          </Scrollbars>
        </Drawer>
      </div>
    );

    return (
      <Router>
        <div>
          <Sidebar />
          <div className={pageContent}>
            <StyleSwitcher/>
            <ScrollToTop>
              <RoutesComponent />
            </ScrollToTop>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    colorHeader: state.headerActiveStyle,
    colorSidebar: state.sidebarActiveStyle
  }
}

export default connect(mapStateToProps)(RouterComponent);
