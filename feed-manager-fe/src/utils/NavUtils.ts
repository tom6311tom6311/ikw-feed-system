import { Params } from 'react-router-dom';
import { GetNavHierarchyQuery } from '../commonApis/GetNavHierarchyQuery.graphql.generated';

const renderMenuContent = (
  urlParams: Params<string>,
  navHierarchy: GetNavHierarchyQuery['sites'],
  logout: () => void,
) => {
  const { siteId, poolId } = urlParams;
  if (poolId && siteId) {
    const site = navHierarchy.find(({ siteId: stId }) => (stId === siteId));
    const pools = site?.pools || [];
    const poolItems = pools
      .map(({ poolId: plId, poolName }) => ({
        level: 1,
        text: poolName,
        link: `/site/${siteId}/pool/${plId}/`,
      }));
    return [
      {
        level: 0,
        text: site?.nameChin || siteId,
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

  const siteItems = navHierarchy
    .map(({ siteId: stId, nameChin }) => ({
      level: 1,
      text: nameChin,
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
  navHierarchy: GetNavHierarchyQuery['sites'],
) => {
  const { siteId, poolId } = urlParams;
  if (poolId && siteId) {
    const site = navHierarchy.find(({ siteId: stId }) => (stId === siteId));
    const pool = site?.pools.find(({ poolId: plId }) => (plId === poolId));
    return `${site?.nameChin || siteId} > ${pool?.poolName || poolId}`;
  }

  if (siteId) {
    const site = navHierarchy.find(({ siteId: stId }) => (stId === siteId));
    return site?.nameChin || siteId;
  }

  return '案場總覽';
};

export default {
  renderMenuContent,
  renderHeaderTitle,
};
