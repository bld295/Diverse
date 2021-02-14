import React from 'react';
import Panel from '../components/panel.js';
import IconBoxesAlter from '../components/iconBoxAlter.js'
import ProductsTable from '../containers/productsTable.js';
import TableComponent from '../containers/table.js';
//import CustomShapeBarChart from '../components/charts/customShapeBarChart.js';
import SimpleBarChart from '../components/charts/simpleBarChart.js';
import {IconBox} from '../components/iconBoxes.js';

const EcommerceDashboard = () => (
  <div>
    <IconBoxesAlter />
    <div className="row">
      <div className="col-md-7">
        <Panel
          title="Most Viewed Products"
          righticon={true}
          subtitle="Over the month"
        >
          <ProductsTable />
        </Panel>
      </div>
      <div className="col-md-5">
        <Panel
          title="Total Revenue chart"
          subtitle="Based on month"
          righticon={true}
          height="280"
        >
          <SimpleBarChart />
        </Panel>

        <IconBox
          title="Weekly Sales"
          subtitle="6 Days"
          earns="4,389"
          percent="45"
        >
        </IconBox>
      </div>
    </div>
    <Panel
      title="Active Support Agents"
      subtitle="Support team"
      righticon={true}
    >
      <TableComponent />
    </Panel>

  </div>

);

export default EcommerceDashboard;
