export default class Nmcli {
  constructor({nmcliPath = '/usr/bin/nmcli'} = {}) {
    this.options = {
      nmcliPath
    };
  }
}
