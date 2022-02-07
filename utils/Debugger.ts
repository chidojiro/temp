/* eslint-disable no-console */
// import { Dict } from '../types'
type Dict = Record<string, any>;
export const isProdEnv = () => {
  return process.env.NODE_ENV === 'production';
};

export const isServerSide = () => {
  return typeof window === 'undefined';
};

class _Debugger {
  private isBasicDataSet = false;

  private readonly env: string = '';

  private readonly enableConsoleLog: boolean = false;

  private singleValue: string[] = ['env', 'userAgent', 'url', 'cookie', 'app', 'user'];

  private excludedCookies: string[] = ['tua', 'uua', 'atu', 'sid', 'aut'];

  private values: Dict = {};

  private maxLogStack = 10;

  private logStack: string[] = [];

  constructor(environment: string) {
    this.env = environment;
    const enableConsoleLog = new URLSearchParams(window.location.search).get('console') || 0;
    this.enableConsoleLog = !!enableConsoleLog;
    if (isProdEnv()) {
      console.log = this.log.bind(this);
    }
  }

  private log(...args: any[]): void {
    const line = [];
    for (const i in args) {
      if (!args[i]) {
        continue;
      }
      if (typeof args[i] === 'object') {
        line.push(JSON.stringify(args[i]));
      } else {
        line.push(args[i] + '');
      }
    }
    this.logStack.push(line.join(' '));
    if (this.logStack.length > this.maxLogStack) {
      this.logStack.splice(0, this.logStack.length - this.maxLogStack);
    }
    if (this.enableConsoleLog) {
      console.debug.apply(null, args);
    }
  }

  set(key: string, value: string | Record<string, unknown>): void {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    if (this.singleValue.includes(key)) {
      this.values[key] = value;
    } else {
      // Support multiple value, convert to array if necessary
      if (!this.values.hasOwnProperty(key)) {
        this.values[key] = value;
      } else if (!Array.isArray(this.values[key])) {
        this.values[key] = [this.values[key]];
      }
      if (Array.isArray(this.values[key])) {
        this.values[key].push(value);
      }
    }
  }

  setUser(user: Dict): void {
    if (!user) {
      return;
    }
    const data: Dict = {};
    const keys = ['id', 'oid', 'role', 'status'];
    for (const i in keys) {
      if (!keys[i]) continue;
      data[keys[i]] = user[keys[i]];
    }
    this.set('user', data);
  }

  private setBasicData(): void {
    this.isBasicDataSet = true;
    this.set('env', this.getEnvironment());
    this.set('url', window.location.href);
    this.set('userAgent', navigator.userAgent);
    this.set('cookie', this.getCompressCookie());
  }

  private getEnvironment(): string {
    const href = window.location.href;
    if (href.indexOf('.dev.') > 0) {
      return 'dev';
    } else if (href.indexOf('.stg.') > 0) {
      return 'stg';
    }
    return this.env;
  }

  private getCompressCookie(): string {
    const pieces: Array<string> = document.cookie.split('; ');
    const cookies: Array<string> = [];

    for (let index = 0; index < pieces.length; index++) {
      const key = pieces[index].split('=')[0];
      if (!this.excludedCookies.includes(key)) {
        cookies.push(pieces[index]);
      }
    }
    return cookies.join('; ');
  }

  private copyToClipboard(str: string): void {
    const el = document.createElement('textarea');
    el.setAttribute('readonly', '');
    el.value = str;
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  private getValueAsString(): string {
    if (!this.isBasicDataSet) {
      this.setBasicData();
    }
    let message = '';
    for (const key in this.values) {
      if (!this.values[key]) {
        continue;
      }
      let value = '';
      if (Array.isArray(this.values[key])) {
        value = `[${this.values[key].join(', ')}]`;
      } else {
        value = this.values[key];
      }
      message += `${key}: ${value}\n`;
    }
    return message;
  }

  private getLogStackAsString(): string {
    return this.logStack.join('\n');
  }

  getFormattedValue(): string {
    let message = '```\n' + this.getValueAsString();
    if (this.logStack.length) {
      message += '\n\nconsole.log:\n' + this.getLogStackAsString();
    }
    message += '\n```';
    return message;
  }

  getDebugInfo(): string {
    const done = 'Copied to clipboard!';
    const message = this.getFormattedValue();
    this.copyToClipboard(message);
    console.debug(message);
    console.debug(done);
    return done;
  }
}

export const Debugger = new _Debugger(process.env.NODE_ENV);
(window as any).Debugger = Debugger;
(window as any).hehehe = (): string => {
  return Debugger.getDebugInfo();
};

export default Debugger;
