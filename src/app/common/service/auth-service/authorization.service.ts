import {Injectable} from '@angular/core';

@Injectable()
export class Authorization {
  authorization = undefined;

  private encodeNonASC(str) {
    return /^[\x00=\x7F]*$/.test(str) ? str : encodeURIComponent(str);
  }

  get() {
    return this.authorization;
  }

  clear() {
    this.authorization = undefined;
  }

  basic(username, password) {
    this.authorization = 'Basic' + btoa(this.encodeNonASC(username) + ':' + encodeURIComponent(password));
    return this.authorization;
  }

  token(tokenId) {
    this.authorization = 'Token' + tokenId;
    return this.authorization;
  }
}
