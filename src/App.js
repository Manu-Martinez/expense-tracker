import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="grid grid-flow-row gap-8 bg-gray-100 p-4 font-montserrat">
        <Header />
        <Balance />
        <IncomeExpenses />
        <History />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
