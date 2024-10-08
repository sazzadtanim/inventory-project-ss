import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cost from "./components/Cost";
import Capital from "./components/Capital";
import AccountReview from "./components/AccountReview";
import Investment from "./components/Investment";
import Vendors from "./components/Vendors";
import Invoice from "./components/invoice_page/Invoice";
import AllProducts from "./components/all_product-page/AllProducts";
import Orders from "./components/order_page/Orders";
import SazzadInvoice from "./SazzadInvoice";
import MoneyCollection from "./components/money_collection_page/MoneyCollection";

function App() {
  return (
    <div className="flex">
      <Router>
        {/* <Sidebar></Sidebar> */}
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/all-products" element={<AllProducts />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/money-collection" element={<MoneyCollection />}></Route>
          <Route path="/cost" element={<Cost></Cost>}></Route>
          <Route path="/capital" element={<Capital></Capital>}></Route>
          <Route path="/invoice" element={<Invoice />}></Route>
          <Route
            path="/acount-overview"
            element={<AccountReview></AccountReview>}
          ></Route>
          <Route path="/investment" element={<Investment></Investment>}></Route>
          <Route path="/vendors" element={<Vendors></Vendors>}></Route>
          <Route path="/sazzad_invoice" element={<SazzadInvoice />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
