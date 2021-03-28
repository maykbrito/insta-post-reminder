import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';

const App = {
  async start() {
    try {
      const time = 25 * 60; 
      //await Notifyer.init();
      //Notifyer.notify({ title: 'Time to post', body: 'Create engagement to build your community'});
      Timer.init();
    } 
    catch (error) {
      console.log(error.message);
    }
  }
}

export { App };