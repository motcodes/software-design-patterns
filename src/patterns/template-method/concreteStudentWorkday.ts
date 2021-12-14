import { WorkdayPlanner } from './abstractWorkdayPlanner';

export class StudentWorkday extends WorkdayPlanner {
  override goToWork = (): void => console.log('Taking the train');
  override work = (): void => console.log('learning about design patterns');
}
