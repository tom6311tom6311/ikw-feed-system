import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppConfig from '../../const/AppConfig';
import { useGetSiteQuery } from './GetSiteQuery.graphql.generated';
import PoolOverview from '../../components/PoolOverview/PoolOverview';

function SiteStatusPage() {
  const { siteId } = useParams();
  const {
    data: getSiteData,
  } = useGetSiteQuery({ variables: { siteId: siteId || '' } });

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
      {getSiteData?.site?.pools?.map(({ poolId, poolName, status }) => (
        <PoolOverview
          key={poolId}
          poolName={poolName}
          status={status}
          link={`/site/${siteId}/pool/${poolId}`}
          imageUrl={`${AppConfig.BACKEND.URL}/snapshot/${siteId}/${poolId}?salt=${salt}`}
        />
      ))}
    </div>
  );
}

export default SiteStatusPage;
