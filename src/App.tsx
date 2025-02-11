import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bg from "../src/assets/img/bg.jpg";
import Form from "./components/Form";
import FormLeft from "./components/FormLeft";
import { Sidebar } from "lucide-react";

function App() {
  return (
    <>
      <div>
        <Header />

        <div className="flex">
          <div className="w-[35.5%] flex justify-center items-center">
            <FormLeft />
          </div>
          <div className="w-[62.5%]">
            {" "}
            <Form />
          </div>
        </div>

        {/* <Form /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
