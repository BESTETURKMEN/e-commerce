import React from "react";
import "./Campaigns.scss";
import CampaignsItem from "./CampaignsItem";

export default function Campaigns() {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <CampaignsItem />
          <CampaignsItem />
        </div>
        <div className="campaigns-wrapper">
          <CampaignsItem />
          <CampaignsItem />
        </div>
      </div>
    </section>
  );
}
