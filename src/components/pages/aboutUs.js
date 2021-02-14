import React, {Component} from 'react';
import {connect} from 'react-redux';
import imageUrl from '../../img/banner.jpg';


const style = {
  backgroundImage: 'url('+ imageUrl + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}

class AboutUs extends Component{

  teamLoop () {
    return this.props.teams.map((team) => {
      return (
        <div className="col-md-4 col-sm-6" key={team.id}>
          <div className="an-team-single light-bg">
            <div className="image-container" style={{ background: 'url(' + team.img + ')'}}>
              <div className="overlay">
                <ul className="small-social">
                  <li><a href=""><i className="fa fa-twitter"></i></a></li>
                  <li><a href=""><i className="fa fa-facebook"></i></a></li>
                  <li><a href=""><i className="fa fa-pinterest"></i></a></li>
                  <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="user-details">
              <h4><a href="">{team.name}</a></h4>
              <p>{team.role}</p>
            </div>
          </div>
        </div>
      )
    });
  }
  render () {
    return (
      <div>
        <div className="re-page-banner" style={style}>
          <div className="overlay"></div>
          <h1>About Us</h1>
        </div>
        <div className="container">

          <div className="row">
            <div className="col-md-4">
              <div className="about-box-single">
                <h4 className="inner-box-title">Why choose us.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi voluptas iusto, hic autem deleniti.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-box-single">
                <h4 className="inner-box-title">Our mission.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi voluptas iusto, hic autem deleniti.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-box-single">
                <h4 className="inner-box-title">What we do.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi voluptas iusto, hic autem deleniti.</p>
              </div>
            </div>
          </div>

          <h4 className="inner-box-title full">Meet our team</h4>

          <div className="row">
            {this.teamLoop()}
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    teams: state.teams
  }
}

export default connect(mapStateToProps)(AboutUs);
