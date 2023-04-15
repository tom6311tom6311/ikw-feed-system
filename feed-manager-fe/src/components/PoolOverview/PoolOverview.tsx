import * as React from 'react';
import { Link } from 'react-router-dom';
import { PoolStatus } from '../../types';
import cameraSample from '../../img/camera_sample.png';

type PoolOverviewProps = {
  poolName: string;
  status: PoolStatus;
  link: string;
}

export default function PoolOverview(props: PoolOverviewProps) {
  const {
    poolName,
    status,
    link,
  } = props;
  return (
    <div className="o-siteoverview">
      <div className="o-siteoverview__head">
        <p className="c-siteoverview__head__text">水池</p>
        <div>
          <p className="c-siteoverview-caseId">{poolName}</p>
          <Link to={link}>
            <div className="bnt c-siteoverview-button">水池管理</div>
          </Link>
        </div>
      </div>
      <div className="o-siteoverview__body">
        <div className="o-siteoverview-info">
          <p className="c-siteoverview-info__key">狀態</p>
          <p className="c-siteoverview-info__value">{status}</p>
        </div>
        <div className="o-sitecamera__view">
          <img src={cameraSample} alt="realtime camera view" className="c-sitecamera-img" />
        </div>
      </div>
    </div>
  );
}
