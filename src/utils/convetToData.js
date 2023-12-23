export function convertToDate(value) {
  let months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  let monthNumber = new Date(value).getMonth();
  let dayNumber = new Date(value).getDate();

  var monthName = months[monthNumber];

  return dayNumber.toString().padStart(2, '0') + " " + monthName;
}
