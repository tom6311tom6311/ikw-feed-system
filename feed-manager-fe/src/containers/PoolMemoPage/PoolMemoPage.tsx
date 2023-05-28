import React from 'react';
// import { useParams } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

function PoolMemoPage() {
  // const { siteId, poolId } = useParams();
  return (
    <div className="o-sitelist-container">
      <div className="o-siteoverview o-pool-memo__wrapper">
        <div className="o-siteoverview__head">
          <p className="c-siteoverview__head__text">水池</p>
          <div>
            <p className="c-siteoverview-caseId">E-Memo</p>
          </div>
        </div>
        <div className="o-siteoverview__pending">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={new Date(Date.UTC(2023, 3, 1, 11, 0, 0)).toLocaleString()}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h4 className="vertical-timeline-element-subtitle">飼料投餵</h4>
              <p>
                1包
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={new Date(Date.UTC(2023, 3, 2, 11, 0, 0)).toLocaleString()}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h4 className="vertical-timeline-element-subtitle">飼料投餵</h4>
              <p>
                1包
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
              date={new Date(Date.UTC(2023, 3, 2, 15, 0, 0)).toLocaleString()}
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h4 className="vertical-timeline-element-subtitle">魚病檢測</h4>
              <p>
                正常
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={new Date(Date.UTC(2023, 3, 3, 11, 0, 0)).toLocaleString()}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h4 className="vertical-timeline-element-subtitle">飼料投餵</h4>
              <p>
                1包
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={new Date(Date.UTC(2023, 3, 4, 11, 0, 0)).toLocaleString()}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h4 className="vertical-timeline-element-subtitle">飼料投餵</h4>
              <p>
                1包
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
              date={new Date(Date.UTC(2023, 3, 4, 15, 0, 0)).toLocaleString()}
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h4 className="vertical-timeline-element-subtitle">魚病檢測</h4>
              <p>
                正常
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={new Date(Date.UTC(2023, 3, 5, 11, 0, 0)).toLocaleString()}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h4 className="vertical-timeline-element-subtitle">飼料投餵</h4>
              <p>
                1包
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default PoolMemoPage;
