import { BaseTypeDictionary } from '@/shared/types/dictionary.types';

interface IOffineDict {
  [key: string]: BaseTypeDictionary[];
}

export const offlineDict: IOffineDict = {
  transmissions: [
    {
      id: 1,
      name: 'МКПП',
    },
    {
      id: 2,
      name: 'АКПП',
    },
    {
      id: 3,
      name: 'РКПП',
    },
    {
      id: 4,
      name: 'ВКПП',
    },
  ],
};
