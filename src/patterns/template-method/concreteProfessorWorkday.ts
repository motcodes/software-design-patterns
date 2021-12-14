import { WorkdayPlanner } from './abstractWorkdayPlanner';

export class ProfessorWorkday extends WorkdayPlanner {
  override goToWork = (): void => console.log('driving by car');
  override work = (): void => console.log('teaching about design patterns');
  override facePeeling = (): void => console.log('getting a face peeling');
}
