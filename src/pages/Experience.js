import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="2012-2015"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                    <h3 className="vertical-timeline-element-title"> Munster High Schoo, Munster, Indiana 46321 </h3> 
                    <p> Academic Honors Diploma </p>   
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="2015-2019"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                    <h3 className="vertical-timeline-element-title"> Indiana University Northwest, Gary, IN 46322 Bachelor's Degree </h3> 
                    <p> Chemistry and Mathematics </p>   
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="2020-2022"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                    <h3 className="vertical-timeline-element-title"> Northeastern Illinois University, QuickStart Learning </h3> 
                    <p> Full-Stack Developer Immersive Diploma With Apprenticeship </p>   
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022-Present"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> Senior Front-End Developer- PlayPower, Inc. </h3>
                    <p> Helped the team develop responsive and user-friendly PlayCreator Application to make 2D/3D designs
                        Work with wonderful team to clean-up front-end code and fix bugs as we go by. 
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
