import { format } from "date-fns";

export default function dateConvertor(date: number, formatTo: string) {
  if (date) {
    return format(new Date(date), formatTo);
  }
  return "-";
}
