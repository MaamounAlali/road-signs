import 
const countries = [
  {
    id: '1',
    label: 'Sweden',
    value: 'sw',
    langs: [
      {
        title: '',
        data: [
          {
            id: '1',
            label: ' Swedish',
            value: 'sw',
            avatarSource: require('../assets/sw.png'),
          },
          {
            id: '2',
            label: ' Arabic',
            value: 'ar',
            avatarSource: require('../assets/ar.png'),
          },
          {
            id: '3',
            label: ' English',
            value: 'en',
            avatarSource: require('../assets/en.png'),
          },
        ],
      },
    ],
    avatarSource: require('../assets/sw.png'),
  },
  {
    id: '2',
    label: 'Norway',
    value: 'nr',
    langs: [
      {
        title: '',
        data: [
          {
            id: '1',
            label: ' English',
            value: 'en',
            avatarSource: require('../assets/en.png'),
          },
        ],
      },
    ],
    avatarSource: require('../assets/nr.png'),
  },
];

const languages = [
  {
    title: '',
    data: [
      {
        id: '1',
        label: ' Swedish',
        value: 'sw',
        avatarSource: require('../assets/sw.png'),
        countries: ['sw'],
      },
      {
        id: '2',
        label: ' Arabic',
        value: 'ar',
        avatarSource: require('../assets/ar.png'),
        countries: ['sw'],
      },
      {
        id: '3',
        label: ' English',
        value: 'en',
        avatarSource: require('../assets/en.png'),
        countries: ['sw', 'nr'],
      },
    ],
  },
];