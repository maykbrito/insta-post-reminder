import { Notifyer } from './Notifyer.js';

const App = {
  async start() {
    try {
      await Notifyer.init();
      Notifyer.notify({ title: 'Time to post', body: 'Create engagement to build your community'});
    } catch (error) {
      console.log(error.message);
    }
  }
}

export { App };