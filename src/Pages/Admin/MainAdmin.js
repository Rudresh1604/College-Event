import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import CsiAdmin from "./CsiAdmin";
import CodersAdmin from "./CodersAdmin";
import { Tabs } from "antd";
import TableComp from "./TableComp";

const { TabPane } = Tabs;

function MainAdmin() {
  return (
    <div>
      <AdminHeader user={"DYPIEMR"} />
      <Tabs defaultActiveKey="1" className="ml-20">
        <TabPane tab="Intro" key="1" className="font-bold">
          <TableComp user="Computer Society Of India" />
        </TabPane>
        <TabPane tab="About" key="2" className="font-bold">
          <TableComp user="Coders club" />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default MainAdmin;
