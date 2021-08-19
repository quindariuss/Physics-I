/*
A typical person has an average heart rate of 68.0 beats/min. Calculate the given questions.How many beats does she have in 4.0 years?
How many beats in 4.00 years?
And finally, how many beats in 4.000 years?
Pay close attention to significant figures
in this question.
*/

const heartbeats = 68.0;

const minuites_in_hour = 60;

const hours_in_day = 24;

const days_in_year = 365;

function heartbeats_to_years(amount_of_years) {
  const total_heartbeats =
    heartbeats *
    minuites_in_hour *
    hours_in_day *
    days_in_year *
    amount_of_years;
  return total_heartbeats;
}

console.log(parseFloat(heartbeats_to_years(4.0)).toPrecision(4));

/*
Arrange the measurements from longest length to shortest length.
*/

const mile = 1609;
const meters = 10;
const centimeter = (10 * 10 * 10 * 10) / 100;
const nanometer = (10 * 10 * 10 * 10 * 10) / 1_000_000_000;

console.log({ mile, meters, centimeter, nanometer });

/*
A person with a BMI between 25.0 and 30.0 is considered overweight.
If a person is  5'9" tall
what range of mass m_min≤𝑚≤m_max
will he be considered overweight?
*/

const overweight_min = 25;
const overweight_max = 30;

function BMI(feet, inches, mass) {
  let total_inches = feet * 12 + inches;
  total_inches *= total_inches;
  const weight_divide_height = mass / total_inches;

  return 703 * weight_divide_height;
}

function bmi_to_kilo(feet, inches, BMI) {
  let total_inches = feet * 12 + inches;
  total_inches *= total_inches;
  const height_x_BMI = total_inches * BMI;
  const calculated_BMI = height_x_BMI / 703;
  return calculated_BMI / 2.2;
}

console.log("Minimum Mass: " + bmi_to_kilo(5, 9, 25));
console.log("Maxiumum Mass" + bmi_to_kilo(5, 9, 30));

/*
d At a resting pulse rate of 79 beats per minute, the human heart typically pumps about 67 mL of blood per beat. Blood has
density of 1060 kg/m^3. Circulating all of the blood in the body through the heart takes about 1 min for a person at rest.

Approximately how much blood is in the body?

On average, what mass of blood does the heart pump with each heart beat?
*/

const beats_per_minute = 79;

const blood_per_beat = 67; // mL

const blood_pressure = 1060; // kg/m^3

const time_to_circulate = 1;

const volume_in_human =
  (time_to_circulate * blood_per_beat * beats_per_minute) / 1_000_000;

const mass_per_beat = (blood_pressure * blood_per_beat) / 1_000_000;

console.log({ volume_in_human, mass_per_beat });
