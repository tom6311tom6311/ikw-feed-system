import React from 'react';
import { useParams } from 'react-router-dom';
import AppConfig from '../../const/AppConfig';
import { useGetSiteQuery } from './GetSiteQuery.graphql.generated';
import PoolOverview from '../../components/PoolOverview/PoolOverview';

function SiteStatusPage() {
  const { siteId } = useParams();
  const {
    data: getSiteData,
  } = useGetSiteQuery({ variables: { siteId: siteId || '' } });

  return (
    <div className="o-sitelist-container">
      {getSiteData?.site?.pools?.map(({ poolId, poolName, status }) => (
        <PoolOverview
          key={poolId}
          poolName={poolName}
          status={status}
          link={`/site/${siteId}/pool/${poolId}`}
          imageUrl={`${AppConfig.BACKEND.URL}/snapshot/${siteId}/${poolId}`}
        />
      ))}
    </div>
  );
}

export default SiteStatusPage;
