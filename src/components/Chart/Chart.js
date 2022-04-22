import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => 
            <ChartBar
            key={dataPoint.label} 
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            />)}
            {/* We can use 12 chartbar components for each month but instead we can 
            create them dynamically by expecting props having an array dataPoints and then 
            using map , we can create a ChartBar for each dataPoint.
            Also , we want each chartBar to reach its maximum value so we add an attribute
            called maxValue and we must use a key for efficient usage of this component
            and there must be a label say for e.g. January , February , etc.*/}
        </div>
    );
};

export default Chart;
