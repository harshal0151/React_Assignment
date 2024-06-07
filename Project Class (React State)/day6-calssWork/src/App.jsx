import { useEffect, useState } from "react";
import { CChart } from "@coreui/react-chartjs";
import "./App.css";

function App() {
  const [homevalue, setHomeValue] = useState(1000);
  const [downPayment, setDownPayment] = useState(200);
  const [loanAmount, setLoanAmount] = useState(800);
  const [interestRate, setInterestRate] = useState(2);
  const [tenure, setTenure] = useState(10);

  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    // Update the downPayment to 20% of the current homevalue
    const newDownPayment = Math.floor(homevalue * 0.2);
    setDownPayment(newDownPayment);
    setLoanAmount(homevalue - newDownPayment);
  }, [homevalue]);

  useEffect(() => {
    // Calculate monthly payment using the loan amount, interest rate, and tenure
    const interestPerMonth = interestRate / 100 / 12;
    const totalLoanMonths = tenure * 12;
    const EMI =
      (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) /
      ((1 + interestPerMonth) ** totalLoanMonths - 1);

    setMonthlyPayment(EMI.toFixed(2));
  }, [loanAmount, interestRate, tenure]);

  return (
    <>
      <header>
        <h3>Bank of React</h3>
      </header>
      <div className="container">
        <div className="left">
          <div>
            <p>Home Value</p>
            <p>{homevalue.toLocaleString()} $</p>
            <input
              onChange={(e) => setHomeValue(parseInt(e.currentTarget.value))}
              type="range"
              min="1000"
              max="10000"
              value={homevalue}
            />
          </div>
          <div>
            <p>Down Payment</p>
            <p>{downPayment.toLocaleString()} $</p>
            <input
              onChange={(e) => {
                const dp = parseInt(e.currentTarget.value);
                setDownPayment(dp);
                setLoanAmount(homevalue - dp);
              }}
              type="range"
              min="0"
              max={homevalue}
              value={downPayment}
            />
          </div>
          <div>
            <p>Loan Amount</p>
            <p>{loanAmount.toLocaleString()} $</p>
            <input
              onChange={(e) => {
                const la = parseInt(e.currentTarget.value);
                setLoanAmount(la);
                setDownPayment(homevalue - la);
              }}
              type="range"
              min="0"
              max={homevalue}
              value={loanAmount}
            />
          </div>
          <div>
            <p>Interest Rate</p>
            <p>% {interestRate}</p>
            <input
              onChange={(e) => setInterestRate(parseFloat(e.currentTarget.value))}
              type="range"
              min="2"
              max="18"
              step="0.1"
              value={interestRate}
            />
          </div>
        </div>
        <div className="right" style={{ width: "300px" }}>
          <h3>Monthly Payment: $ {parseFloat(monthlyPayment).toLocaleString()}</h3>
          <CChart
            type="pie"
            data={{
              labels: ["Principal", "Interest"],
              datasets: [
                {
                  backgroundColor: ["#41B883", "#E46651"],
                  data: [
                    homevalue,
                    (monthlyPayment * tenure * 12 - loanAmount).toFixed(2)
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: "green",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
