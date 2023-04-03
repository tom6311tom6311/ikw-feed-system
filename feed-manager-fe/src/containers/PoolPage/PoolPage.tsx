import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPoolQuery } from './GetPoolQuery.graphql.generated';

const STATUS_MAP: { [key: string]: string; } = {
  ACTIVE: '養殖中',
  INACTIVE: '未養殖',
};

function PoolPage() {
  const { poolId } = useParams();
  const {
    data: getPoolData,
  } = useGetPoolQuery({ variables: { poolId: poolId || '' } });

  return (
    <div className="o-page-container">
      <div>{getPoolData?.pool?.poolName}</div>
      <div>{STATUS_MAP[getPoolData?.pool?.status || ''] ?? '未知'}</div>
    </div>
  );
}

export default PoolPage;
