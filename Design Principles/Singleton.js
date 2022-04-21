/*
Singleton  Class

It is basically a regular class only difference is you only want to 
create a single instance of a class

example use case is a Settings/Environmental Vars accessor
*/

class Settings {
  constructor() {
    if (Settings.instance instanceof Settings) {
      return Settings.instance;
    }
    this.settingsObject = {
      background: "#ff0000",
      version: Math.floor(Math.random() * 4000),
    };
    Object.freeze(this.settingsObject);
    Object.freeze(this);
    Settings.instance = this;
  }
  get(key) {
    return this.settingsObject[key];
  }
}

const s = new Settings();
console.log(s.get("background"));
console.log(s);
const s2 = new Settings();
console.log(s2.get("background"));
console.log(s2);
/*
Output:
#ff0000
Settings { settingsObject: { background: '#ff0000', version: 950 } }
#ff0000
Settings { settingsObject: { background: '#ff0000', version: 950 } }
*/
console.log(s2 === s); //true
