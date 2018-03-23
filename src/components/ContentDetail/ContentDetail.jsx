import React, { Component } from 'react';
//Components
import LabButton from "./../LabButton";
import LabCard from "../LabCard";
import Typography from '../Typography/Typography';

class ContentDetail extends Component {
  render() {
    return (
      <div className="content-detail col-sm-9">
        <LabButton className="lab-lg">Large Button</LabButton>
        <LabButton>Default Button</LabButton>
        <LabButton className="lab-sm">Small Button</LabButton>
        <LabCard />
        <Typography />
      </div>
    );
  }
}

export default ContentDetail;