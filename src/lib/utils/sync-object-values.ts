import { isUndefined } from "../typings";
import { getByPaths } from "./get-by-path";
import { setByPath } from "./set-by-path";

export function syncObjectValues(
  oldObj: Record<string, unknown>,
  newObj: Record<string, unknown>,
  exception: string[] = [],
) {
  for (const field in newObj) {
    if (exception.includes(field)) continue;

    const oldValue = getByPaths(oldObj, field, undefined);
    const newValue = getByPaths(newObj, field, undefined);

    if (isUndefined(oldValue) || isUndefined(newValue)) continue;
    if (oldValue === newValue) continue;

    setByPath(oldObj, field, newValue);
  }
}
