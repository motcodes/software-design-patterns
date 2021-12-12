import { MantisParts } from './ComponentMantisParts';
import { OttoParts } from './ComponentOttoParts';
import { Microcontroller } from './DecoratorMicrocontroller';
import { Motor } from './DecoratorMotor';
import { Sensor } from './DecoratorSensor';

export function RunDecorator() {
  const otto: OttoParts = new OttoParts();
  const ottoMotor: Motor = new Motor(otto);
  const ottoMotor2: Motor = new Motor(ottoMotor);
  const ottoMotor2Micro = new Microcontroller(ottoMotor2);
  const ottoMotor2MicroSensor = new Sensor(ottoMotor2Micro);

  console.log(ottoMotor2MicroSensor.getDescription());
  console.log('Price: ', ottoMotor2MicroSensor.getPrice().toFixed(2));

  const mantis: MantisParts = new MantisParts();

  const mantisSensor: Sensor = new Sensor(mantis);
  const mantis2Sensor: Sensor = new Sensor(mantisSensor);
  const mantis3Sensor: Sensor = new Sensor(mantis2Sensor);
  const mantis3SensorMicrocontroller: Microcontroller = new Microcontroller(
    mantis3Sensor
  );
  const mantis3SensorMicrocontrollerServo: Motor = new Motor(
    mantis3SensorMicrocontroller
  );
  const mantis3SensorMicrocontroller2Servo: Motor = new Motor(
    mantis3SensorMicrocontrollerServo
  );

  console.log(mantis3SensorMicrocontroller2Servo.getDescription());
  console.log(
    'Price: ',
    mantis3SensorMicrocontroller2Servo.getPrice().toFixed(2)
  );
}
