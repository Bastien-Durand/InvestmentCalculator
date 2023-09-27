import { useState } from "react";
import { DataOutputTable } from "./components/DataOutputTable";
import { Header } from "./components/Header";
import { InvestmentForm } from "./components/InvestmentForm";

const App = () => {
  const [outputData, setOutputData] = useState(null);

  const hoistUpFormData = (data) => {
    console.log(data);
    setOutputData(data);
  };

  return (
    <>
      <Header />
      <InvestmentForm hoistUpFormData={hoistUpFormData} />
      {outputData ? (
        <DataOutputTable data={outputData} />
      ) : (
        <p style={{ textAlign: "center" }}>No results</p>
      )}
    </>
  );
};

export default App;
