import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
    <div className="o-sitelist-container">
      <div className="o-siteoverview">
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
          <div className="o-siteoverview-info">
            <p className="c-siteoverview-info__key">E-Memo</p>
            <Link to={`/site/${siteId}/pool/${poolId}/memo`} className="no-link-style">
              <div className="c-siteoverview-info__value__btn button-primary">進入</div>
            </Link>
          </div>
          <div className="o-sitecamera__view">
            {(getPoolData?.pool?.cameras || []).map(({ cameraId, cameraName }) => (
              <div key={cameraId} className="c-sitecamera-wrapper">
                <img
                  src={`${AppConfig.BACKEND.URL}/snapshot/${siteId}/${poolId}/${cameraId}?salt=${salt}`}
                  alt="realtime camera view"
                  className="c-sitecamera-img"
                />
                <div className="c-sitecamera-name">{cameraName}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoolPage;
