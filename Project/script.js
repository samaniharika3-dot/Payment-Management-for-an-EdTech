// Payment data stored temporarily in memory
let payments = [];

// Form and table references
const form = document.getElementById("payment-form");
const tableBody = document.getElementById("paymentTableBody");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const studentName = document.getElementById("studentName").value.trim();
  const plan = document.getElementById("plan").value;
  const amount = document.getElementById("amount").value;
  const method = document.getElementById("method").value;
  const date = new Date().toLocaleString();

  if (!studentName || !plan || !amount || !method) {
    alert("Please fill out all fields.");
    return;
  }

  const payment = {
    id: payments.length + 1,
    studentName,
    plan,
    amount,
    method,
    date
  };

  payments.push(payment);
  displayPayments();
  form.reset();
});

// Function to show payments in the table
function displayPayments() {
  tableBody.innerHTML = "";
  payments.forEach((p) => {
    const row = `
      <tr>
        <td>${p.id}</td>
        <td>${p.studentName}</td>
        <td>${p.plan}</td>
        <td>₹${p.amount}</td>
        <td>${p.method}</td>
        <td>${p.date}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}
