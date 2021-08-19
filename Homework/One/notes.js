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
