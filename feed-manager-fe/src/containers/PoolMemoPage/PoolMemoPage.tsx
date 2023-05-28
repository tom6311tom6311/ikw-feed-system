import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import ArrayUtils from '../../utils/ArrayUtils';

type MemoElement = {
  type: string;
  details: string;
  timestamp: number;
};

const MEMO_TYPE_TITLE_MAP: Record<string, string> = {
  FEED: '飼料投餵',
  HEALTH_CHECK: '魚病檢測',
};

const MEMO_ITEMS = [
  {
    type: 'FEED',
    details: '1包',
    timestamp: Date.UTC(2023, 3, 1, 11, 0, 0),
  },
  {
    type: 'FEED',
    details: '1包',
    timestamp: Date.UTC(2023, 3, 2, 11, 0, 0),
  },
  {
    type: 'HEALTH_CHECK',
    details: '正常',
    timestamp: Date.UTC(2023, 3, 2, 15, 0, 0),
  },
  {
    type: 'FEED',
    details: '1包',
    timestamp: Date.UTC(2023, 3, 3, 11, 0, 0),
  },
  {
    type: 'FEED',
    details: '1包',
    timestamp: Date.UTC(2023, 3, 4, 11, 0, 0),
  },
  {
    type: 'HEALTH_CHECK',
    details: '正常',
    timestamp: Date.UTC(2023, 3, 4, 15, 0, 0),
  },
  {
    type: 'FEED',
    details: '1包',
    timestamp: Date.UTC(2023, 3, 5, 11, 0, 0),
  },
];

const renderMenuItem = ({ type, details, timestamp }: MemoElement, idx: number) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date={new Date(timestamp).toLocaleString()}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={regular('pen-to-square')} />}
    iconOnClick={() => {}}
    position={idx % 2 === 0 ? 'left' : 'right'}
  >
    <h4 className="vertical-timeline-element-subtitle">{MEMO_TYPE_TITLE_MAP[type]}</h4>
    <p>
      {details}
    </p>
  </VerticalTimelineElement>
);

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
            {
              ArrayUtils.interleave(
                MEMO_ITEMS.map(renderMenuItem),
                Array(MEMO_ITEMS.length).fill(
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={regular('square-plus')} />}
                    iconOnClick={() => {}}
                  />,
                ),
              )
            }
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default PoolMemoPage;
