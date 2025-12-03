/**
 *
 * @param time
 * @returns 周一
 */
export const formatWeekday = (time: number | Date = Date.now()): string => {
  const weekdays: string[] = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  let d: Date;
  if (typeof time === "object" && time instanceof Date) {
    d = time as Date;
  } else {
    d = new Date(time);
  }
  return weekdays[d.getDay()];
};
