
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaRocket, FaPen, FaTrophy, FaLightbulb } from 'react-icons/fa';

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid red' }}
        date="2024 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaRocket />}
      >
        <h3 className="vertical-timeline-element-title">Project Start</h3>
        <h4 className="vertical-timeline-element-subtitle">Initial Phase</h4>
        <p>
          Launch the project and start initial development.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 - 2024"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<FaPen />}
      >
        <h3 className="vertical-timeline-element-title">Research & Planning</h3>
        <h4 className="vertical-timeline-element-subtitle">Research Phase</h4>
        <p>
          Conduct thorough research and plan the project scope.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022 - 2023"
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<FaTrophy />}
      >
        <h3 className="vertical-timeline-element-title">Milestone Achieved</h3>
        <h4 className="vertical-timeline-element-subtitle">Success Phase</h4>
        <p>
          Reach a significant milestone in the project development.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021 - 2022"
        iconStyle={{ background: 'rgb(255, 204, 0)', color: '#fff' }}
        icon={<FaLightbulb />}
      >
        <h3 className="vertical-timeline-element-title">Conceptualization</h3>
        <h4 className="vertical-timeline-element-subtitle">Idea Phase</h4>
        <p>
          Come up with the initial idea and concept for the project.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<FaRocket />}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
