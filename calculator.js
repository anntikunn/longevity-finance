const fields = ["spending", "income", "years"].map(id => document.getElementById(id));
const output = document.getElementById("result");
function update() {
  const [spending, income, years] = fields.map(field => Number(field.value));
  if (fields.some(field => !field.value || !field.checkValidity()) || [spending, income, years].some(value => !Number.isFinite(value))) {
    output.textContent = "範囲内の数字を入力してください。";
    return;
  }
  const monthly = Math.max(0, spending - income);
  const total = monthly * 12 * years;
  const format = number => new Intl.NumberFormat("ja-JP", { maximumFractionDigits: 1 }).format(number);
  output.textContent = monthly === 0 ? "入力条件では毎月の不足はありません。" : `毎月の差額${format(monthly)}万円／${format(years)}年の単純合計${format(total)}万円`;
}
fields.forEach(field => field.addEventListener("input", update));
update();
