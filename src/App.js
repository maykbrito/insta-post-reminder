import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';

const App = {
  async start() {
   try {
    Timer.init(0.1 * 60)
    //  await Notifyer.init()
    //  Notifyer.notify({
    //    title: "Hora do Post",
    //    body: "Crie algum conteúdo para ajudar a comunidade"
    //  })
   } catch (err) {
     console.log(err.message)
   }
  }
}

export { App }