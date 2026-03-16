import type { DimensionUnit } from "./cart-context";

/**
 * Area in sq.ft from width & height.
 * If unit is "in": width_ft = width/12, height_ft = height/12, area = width_ft * height_ft.
 */
export function computeArea(
  width: number,
  height: number,
  unit: DimensionUnit
): number {
  if (unit === "in") {
    const widthFt = width / 12;
    const heightFt = height / 12;
    return widthFt * heightFt;
  }
  return width * height;
}

export function formatDimensions(
  width: number,
  height: number,
  unit: DimensionUnit
): string {
  const suffix = unit === "ft" ? " ft" : " in";
  return `${width}${suffix} x ${height}${suffix}`;
}
