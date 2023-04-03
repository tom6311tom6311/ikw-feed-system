import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSiteQuery } from './GetSiteQuery.graphql.generated';

function SiteStatusPage() {
  const { siteId } = useParams();
  const {
    data: getSiteData,
  } = useGetSiteQuery({ variables: { siteId: siteId || '' } });

  return (
    <div className="o-page-container">
      <div className="o-page-container__body">
        <div>{getSiteData?.site?.nameChin}</div>
        <div>{getSiteData?.site?.pools?.map(({ poolName }) => (<div>{poolName}</div>))}</div>
      </div>
    </div>
  );
}

export default SiteStatusPage;
