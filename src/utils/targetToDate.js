import jMoment from "moment-jalaali";

export function getWeeksDifference(targetDate) {
  const currentDate = new Date();
  const convertedDate = jMoment(targetDate, "jYYYY/jMM/jDD").format(
    "YYYY-MM-DD"
  );
  const timeDifference =
    new Date(convertedDate).getTime() - currentDate.getTime();
  const remainingWeeks = Math.ceil(timeDifference / (1000 * 3600 * 24 * 7));
  return ` ${remainingWeeks} هفته تا`;
}
