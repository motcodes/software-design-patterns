import { WorkdayPlanner } from './abstractWorkdayPlanner';
import { ProfessorWorkday } from './concreteProfessorWorkday';
import { StudentWorkday } from './concreteStudentWorkday';

export function RunTemplate() {
  const sw: WorkdayPlanner = new StudentWorkday();
  const pw: WorkdayPlanner = new ProfessorWorkday();
  console.log('student:');
  sw.createWorkday();
  console.log('professor:');
  pw.createWorkday();
}
