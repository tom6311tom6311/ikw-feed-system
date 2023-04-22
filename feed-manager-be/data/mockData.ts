import { User, Site, Pool, Camera, SiteStatus, SiteValidationStatus, PoolStatus } from "../src/generated/graphql";

type MockData = {
  users: {
    [key: string]: User;
  }
  userCredentials: {
    [key: string]: string;
  }
  sites: {
    [key: string]: Site;
  },
  pools: {
    [key: string]: Pool;
  },
};

const users = {
  'truth@iknowwater.com': {
    email: 'truth@iknowwater.com',
    nameEng: 'iKnowWater',
    nameChin: '愛諾華特',
  },
};

const userCredentials = {
  'truth@iknowwater.com': 'Siras@6868',
};

const pools = {
  YGDS__1: {
    poolId: 'YGDS__1',
    poolName: '水池1',
    status: PoolStatus.Active,
    capacity: 999,
    speciesList: ['加州鱸'],
    cameras: [
      {
        cameraId: 'Cam1',
        cameraName: '攝像頭1'
      },
      {
        cameraId: 'Cam2',
        cameraName: '攝像頭2'
      },
      {
        cameraId: 'Cam3',
        cameraName: '攝像頭3'
      },
      {
        cameraId: 'Cam4',
        cameraName: '攝像頭4'
      }
    ]
  },
  YGDS__2: {
    poolId: 'YGDS__2',
    poolName: '水池2',
    status: PoolStatus.Active,
    capacity: 999,
    speciesList: ['加州鱸'],
    cameras: [
      {
        cameraId: 'Cam1',
        cameraName: '攝像頭1'
      },
      {
        cameraId: 'Cam2',
        cameraName: '攝像頭2'
      },
    ]
  },
  YGDS__3: {
    poolId: 'YGDS__3',
    poolName: '水池3',
    status: PoolStatus.Active,
    capacity: 999,
    speciesList: ['加州鱸'],
    cameras: []
  },
  YGDS__4: {
    poolId: 'YGDS__4',
    poolName: '水池4',
    status: PoolStatus.Active,
    capacity: 999,
    speciesList: ['加州鱸'],
    cameras: []
  },
};

const mockData: MockData = {
  users,
  userCredentials,
  sites: {
    YGDS: {
      siteId: 'YGDS',
      status: SiteStatus.Active,
      nameEng: 'YingGeDemoSite',
      nameChin: '鶯歌Demo場',
      licenseNum: '20220002',
      validationStatus: SiteValidationStatus.Passed,
      pools: [pools['YGDS__1'], pools['YGDS__2'], pools['YGDS__3'], pools['YGDS__4']],
      owners: [users['truth@iknowwater.com']],
      addressEng: 'No. 43, Yongji St., Yingge Dist., New Taipei City',
      addressChin: '新北市鶯歌區永吉街43號',
      telCompany: '02-8972-5569',
      telMobile: '0952989201',
      telHouse: 'NA',
      companyNameEng: 'iKnowWater',
      companyNameChin: '愛諾華特',
      email: 'truth@iknowwater.com',
      county: '新北市',
      district: '鶯歌區',
    },
  },
  pools,
};

export default mockData;
