import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
// import progress from './components/progress';

const init = () => {
  eat.eatDomBuilder();
  play.playDomBuilder();
  fight.fightDomBuilder();
  sleep.sleepDomBuilder();
  // progress.showProgress();
};

init();

export default { init };
