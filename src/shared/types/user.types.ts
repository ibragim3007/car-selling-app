interface IUserAfterLogin {
  id: number;
  login: string;
  clicks: number;
  expire: number;
  autoru: number;
  phone: string;
  sendMethod: number;
  companyid: number;
  enableaudio: boolean;
  locklentaupdate: boolean;
  erased: number;
  os: string;
  sipid: string;
  updatePeriod: number;
  filterMaxCount: number;
  colorlenta: boolean;
  ignoreavg: boolean;
  redirecttarget: number;
  lentacolortype: number;
  lentasize: number;
  blacktheme: number;
  review: number;
  siplogin: string;
  sippassword: string;
  sipstatus: number;
  sipuid: number;
  lentastyle: number;
}

export interface IUserLogin {
  token: string;
  user: IUserAfterLogin;
}

export interface IUser extends IUserAfterLogin {
  lname: string;
  fname: string;
  timezone: string;
  timezonestring: string;
  notifytype: string;
  notifytypestring: string;
  companyname: string;
  calltype: string;
  turbosip: string;
  turbosip5accessto: string;
  turbosip20accessto: string;
  boturl: string;
}

export interface ILogin {
  login: string;
  password: string;
}
