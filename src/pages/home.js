/**
 * Filename: home.js
 * Home page
 * Component path
 * IconBoxed  'componenet/iconboxes.js'
 * Charts compoenent from 'compoenent/charts'
 * Table from 'containers/table.js'
 */

import React from 'react';
import IconBoxes from '../components/iconBoxes';
import DeviceCard from '../components/cards/deviceCard';
import ProfileCard from '../components/cards/profileCard';
import Panel from '../components/panel';
import SimpleAreaChart from '../charts/simpleAreaChart';
import SimpleLineChart from '../charts/simpleLineChart';
import TableComponent from '../containers/table.js';

import img2 from '../img/user3.jpg';

const Home = () => {
  return (
    <div>
      <IconBoxes />
      <div className="row">
        <div className="col-md-3">
          <DeviceCard
            gradient
            percentUser="35"
            title="Desktop users."
          />
        </div>
        <div className="col-md-3">
          <ProfileCard
            name="Alma Christensen"
            userRole="UX Designer"
            avatar={img2}
            followers="1,367"
            followings="2,367"

          />
        </div>
        <div className="col-md-6">
          <Panel
            title="Total Earns"
            subtitle="Today"
            righticon={true}
            height="245"
          >
            <SimpleAreaChart
              stroke="#1dc9b6"
              fill="#1dc5e9"
            />
          </Panel>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Panel
            title="Total Earns"
            subtitle="1 May - 2 Jun"
            righticon={true}
          >
            <SimpleAreaChart
              stroke="#f54a70"
              fill="#f54a70"
            />
          </Panel>
        </div>

        <div className="col-md-6">
          <Panel
            title="Total Sales"
            subtitle="1 May - 2 Jun"
            righticon={true}
          >
            <SimpleLineChart />
          </Panel>
        </div>
      </div>

      <Panel
        title="Support User"
        righticon={true}
        subtitle="Acitve now"
      >
        <TableComponent />
      </Panel>
    </div>
  );
}

export default Home;
