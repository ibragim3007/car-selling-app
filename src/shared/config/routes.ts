export const tabs = '(tabs)';
export const routes = {
  tabs: {
    checks: `${tabs}/checks`,
    collections: `${tabs}/collections`,
    home: `${tabs}/home`,
    profile: `${tabs}/profile`,
    services: `${tabs}/services`,
  },
  pages: {
    support: {
      help: 'support/help',
      advice: 'support/advice',
      questions: 'support/questions',
    },
    settings: {
      index: 'settings',
    },
    profile: {
      edit: 'profile/edit',
      updatePassword: 'profile/update-password',
      delete: 'profile/delete',
    },
    filter: {
      filters: '(mycollections)/filters',
      filter: '(mycollections)/filters/[id]',
      newfilter: '(mycollections)/new-filter',
      modal: {
        choiceRegion: '(mycollections)/modal/choice-region',
      },
    },
  },
  auth: {
    login: 'auth/login',
    registration: 'auth/registration',
    recovery: 'auth/recovery',
  },
};
