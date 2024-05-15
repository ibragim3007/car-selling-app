export interface ITheme {
  themeName: string;
  divider: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    white: string;
  };
  background: {
    primary: string;
    secondary: string;
    neutral: string;
    success: string;
    alert: string;
    negative: string;
    disabled: string;
    active: string;
  };
  accent: {
    primary: string;
    primary_dark: string;
    primary_pale_transparent: string;
    primary_pale: string;
    negative: string;
    disabled: string;
    alert: string;
    red: string;
  };
  styles: {
    borderRadius: number;
  };
}

export const themes: ITheme[] = [
  {
    themeName: 'light',
    divider: '#C8D0D8',
    text: {
      primary: '#292930',
      secondary: '#8391A1',
      disabled: '#B3BCC6',
      white: '#FFFFFF',
    },
    background: {
      primary: '#ffffff',
      secondary: '#E7E9ED',
      neutral: '#a9afb517',
      success: '#009e2f25',
      alert: '#ffc8002d',
      negative: '#d92e1e28',
      disabled: '#f4f4f427',
      active: '#F8FBFF',
    },
    accent: {
      primary: '#2DC574',
      primary_dark: '#22A860',
      primary_pale_transparent: '#2DC5741A',
      primary_pale: '#EAF9F1',
      disabled: '#B3BCC6',
      alert: '#FF9458',
      negative: '#FA6D8F',
      red: '#FF003D',
    },
    styles: {
      borderRadius: 8,
    },
  },
  {
    themeName: 'dark',
    divider: '#C8D0D8',
    text: {
      primary: '#ffffff',
      secondary: '#8391A1',
      disabled: '#B3BCC6',
      white: '#070707',
    },
    background: {
      primary: '#1e1e1e',
      secondary: '#0f0f0f',
      neutral: '#a9afb517',
      success: '#009e2f25',
      alert: '#ffc8002d',
      negative: '#d92e1e28',
      disabled: '#f4f4f427',
      active: '#f8fbff2a',
    },
    accent: {
      primary: '#2DC574',
      primary_dark: '#22A860',
      primary_pale_transparent: '#2DC5741A',
      primary_pale: '#EAF9F1',
      disabled: '#B3BCC6',
      alert: '#FF9458',
      negative: '#FA6D8F',
      red: '#FF003D',
    },
    styles: {
      borderRadius: 8,
    },
  },
];
