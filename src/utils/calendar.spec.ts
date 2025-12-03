import { formatWeekday } from "./calendar";

describe("Calendar unit test ", () => {
  test("The CCPSinDay ts should is 周日", () => {
    const ts = 612900900000;
    const weekday = formatWeekday(new Date(ts));
    expect(weekday).toEqual("周日");
  });
});
