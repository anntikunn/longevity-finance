const fields = ["spending", "income", "years"].map(id => document.getElementById(id));
const output = document.getElementById("result");
function update() {
  const [spending, income, years] = fields.map(field => Number(field.value));
  if (fields.some(field => !field.value || !field.checkValidity()) || [spending, income, years].some(value => !Number.isFinite(value))) {
    output.textContent = "Enter non-negative amounts and a whole number of years from 1 to 80.";
    return;
  }
  const monthly = Math.max(0, spending - income);
  const total = monthly * 12 * years;
  if (!Number.isFinite(total)) {
    output.textContent = "These amounts are too large to calculate. Enter smaller amounts.";
    return;
  }
  const format = n => new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(n);
  output.textContent = monthly === 0 ? "No monthly shortfall under these assumptions." : `Monthly gap: ${format(monthly)}; simple ${format(years)}-year total: ${format(total)} in the same currency.`;
}
fields.forEach(field => field.addEventListener("input", update));
update();
