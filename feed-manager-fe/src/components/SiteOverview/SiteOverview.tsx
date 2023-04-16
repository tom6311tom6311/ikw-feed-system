import * as React from 'react';
import { Link } from 'react-router-dom';
import { GetSitesQuery } from '../../containers/SiteListPage/GetSitesQuery.graphql.generated';

type SiteOverviewProps = {
  siteData: GetSitesQuery['sites'][number];
  link: string;
}

export default function SiteOverview(props: SiteOverviewProps) {
  const {
    siteData: {
      siteId,
      nameChin,
      companyNameChin,
      county,
      district,
    },
    link,
  } = props;
  return (
    <div className="o-siteoverview">
      <div className="o-siteoverview__head">
        <p className="c-siteoverview__head__text">案場</p>
        <div>
          <p className="c-siteoverview-caseId">{nameChin}</p>
          <Link to={link}>
            <div className="bnt c-siteoverview-button">案場管理</div>
          </Link>
        </div>
      </div>
      <div className="o-siteoverview__body">
        <div className="o-siteoverview-info">
          <p className="c-siteoverview-info__key">ID</p>
          <p className="c-siteoverview-info__value">{siteId}</p>
        </div>
        <div className="o-siteoverview-info">
          <p className="c-siteoverview-info__key">公司</p>
          <p className="c-siteoverview-info__value">{companyNameChin}</p>
        </div>
        <div className="o-siteoverview-info">
          <p className="c-siteoverview-info__key">地點</p>
          <p className="c-siteoverview-info__value">{`${county} ${district}`}</p>
        </div>
      </div>
    </div>
  );
}
