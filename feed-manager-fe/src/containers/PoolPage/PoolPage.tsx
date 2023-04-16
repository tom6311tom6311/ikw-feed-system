import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import AppConfig from '../../const/AppConfig';
import { useGetPoolQuery } from './GetPoolQuery.graphql.generated';

function PoolPage() {
  const { siteId, poolId } = useParams();
  const {
    data: getPoolData,
  } = useGetPoolQuery({ variables: { poolId: poolId || '' } });

  const [salt, setSalt] = useState(0);
  let refreshInterval: number = -1;
  useEffect(() => {
    refreshInterval = window.setInterval(() => {
      setSalt(salt + 1);
    }, AppConfig.TIMING.IMG_REFRESH_PERIOD);

    return () => {
      window.clearInterval(refreshInterval);
      refreshInterval = -1;
    };
  }, [salt]);

  return (
    <div className="o-sitelist-container o-sitelist-container-fixed">
      <div className="o-fixed-overview">
        <div className="o-siteoverview__head">
          <p className="c-siteoverview__head__text">水池</p>
          <div>
            <p className="c-siteoverview-caseId">{getPoolData?.pool?.poolName}</p>
          </div>
        </div>
        <div className="o-siteoverview__body">
          <div className="o-siteoverview-info">
            <p className="c-siteoverview-info__key">ID</p>
            <p className="c-siteoverview-info__value">{getPoolData?.pool?.poolId}</p>
          </div>
          <div className="o-siteoverview-info">
            <p className="c-siteoverview-info__key">狀態</p>
            <p className="c-siteoverview-info__value">{getPoolData?.pool?.status}</p>
          </div>
          <div className="o-sitecamera__view">
            <img src={`${AppConfig.BACKEND.URL}/snapshot/${siteId}/${poolId}?salt=${salt}`} alt="realtime camera view" className="c-sitecamera-img" />
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

export default PoolPage;
