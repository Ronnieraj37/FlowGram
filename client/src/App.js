import Home from "./components/Home"
import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import BottomBar from "./components/BottomBar";

//0x52f09b78c773c412
//flowscan id afe56d64de66773542aaf6175741d97b664f6f920da6c7f8a5f9dc6262247e4c

function App() {
  const [connected, setconnected] = useState(false);
  const [verified, setverified] = useState(false);
  const [contract, setcontract] = useState(null);
  const [provider, setprovider] = useState(null);
  const [account, setaccount] = useState("");
  const [accountDetails, setaccountDetails] = useState(null);

  useEffect(() => {
  }, [connected, verified]);
  return (
    <div className="bg-[#20202b] relative items-center flex flex-col min-h-screen p-4 text-white">
      <div className=" flex flex-col p-4 text-white">
        <Home setaccount={setaccount} setverified={setverified} setaccountDetails={setaccountDetails} connected={connected} contract={contract} account={account} setprovider={setprovider} setcontract={setcontract} setconnected={setconnected} />
        {verified && <Profile account={account} accountDetails={accountDetails} contract={contract} />}
      </div>
      <div className="sm:mx-12">
        {verified && <BottomBar accountDetails={accountDetails} contract={contract} />}
      </div>
    </div>
  );
}

export default App;
