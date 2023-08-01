export function listMonths() {
  return [...Array(12).keys()].map((key) =>
    new Date(0, key).toLocaleString("en", { month: "long" })
  );
}
