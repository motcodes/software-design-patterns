import { Sound } from './beepBehavior';
import { Go, RocketPower } from './movieBehavior';
import { Fressomat, Mantis, Otto, RoboCar, Robot } from './robot';

export function RunStrategy() {
  console.log('Running Factory Method: \n');

  const mantis: Robot = new Mantis();
  mantis.ShowName();
  mantis.Sense();
  mantis.StartBeep();
  mantis.SetMoveBehavior(new Go());
  mantis.StartMove();

  console.log();

  const otto: Robot = new Otto();
  otto.ShowName();
  otto.Sense();
  otto.StartMove();
  otto.StartBeep();

  console.log();

  const fressomat: Robot = new Fressomat();
  fressomat.ShowName();
  fressomat.Sense();
  fressomat.StartBeep();
  fressomat.StartMove();
  fressomat.SetSoundBehavior(new Sound());
  fressomat.StartBeep();

  console.log();

  const roboCar: Robot = new RoboCar();
  roboCar.ShowName();
  roboCar.StartMove();
  roboCar.SetMoveBehavior(new RocketPower());
  roboCar.StartMove();

  console.log();
}
