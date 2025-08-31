// 兵士のコストデータ
const soldierData = {
  A: { cost: 50 },
  B: { cost: 80 }
};

// シミュレーション処理
function simulate() {
  const type = document.getElementById("soldier").value;
  const count = parseInt(document.getElementById("count").value);
  const total = soldierData[type].cost * count;
  document.getElementById("result").textContent = `必要なコストは ${total} です。`;
}
