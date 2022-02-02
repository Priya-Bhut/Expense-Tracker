import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Component/Header";
import { Balance } from "./Component/Balance";
import { IncomeExpense } from "./Component/IncomeExpense";
import { TransactionList } from "./Component/TransactionList";
import { AddTransaction } from "./Component/AddTransaction";
import { GlobalProvider } from "./context/Globalstate";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
