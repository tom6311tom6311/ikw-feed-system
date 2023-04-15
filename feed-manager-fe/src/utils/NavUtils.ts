import { Params } from 'react-router-dom';
import { GetNavHierarchyQuery } from '../commonApis/GetNavHierarchyQuery.graphql.generated';

const renderMenuContent = (
  urlParams: Params<string>,
  navHierarchy: GetNavHierarchyQuery['sites'],
  logout: () => void,
) => {
  const { siteId, poolId } = urlParams;
  if (poolId && siteId) {
    const pools = navHierarchy.find(({ siteId: stId }) => (stId === siteId))?.pools || [];
    const poolItems = pools
      .map(({ poolId: plId, poolName }) => ({
        level: 1,
        text: poolName,
        link: `/site/${siteId}/pool/${plId}/`,
      }));
    return [
      {
        level: 0,
        text: '回到案場',
        link: `/site/${siteId}/`,
      },
      ...poolItems,
      {
        level: 0,
        text: '登出',
        onClick: logout,
      },
    ];
  }

  const siteIds = navHierarchy.map(({ siteId: stId }) => stId) || [];
  const siteItems = siteIds
    .map((stId) => ({
      level: 1,
      text: stId,
      link: `/site/${stId}/`,
    }));
  return [
    {
      level: 0,
      text: '所有案場',
      link: '/',
    },
    ...siteItems,
    {
      level: 0,
      text: '登出',
      onClick: logout,
    },
  ];
};

const renderHeaderTitle = (
  urlParams: Params<string>,
) => {
  const { siteId, poolId } = urlParams;
  if (poolId && siteId) {
    return `${siteId} > ${poolId}`;
  }

  if (siteId) {
    return siteId;
  }

  return '案場總覽';
};

export default {
  renderMenuContent,
  renderHeaderTitle,
};
