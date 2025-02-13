import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bg from "../src/assets/img/bg.jpg";
import Form from "./components/Form";
import FormLeft from "./components/FormLeft";
import { Sidebar } from "lucide-react";
import PropertyDisplay from "./components/PropertyDisplay";
import propertyImg from "../src/assets/img/propertyImages/new.webp";
import FloatingSideBar from "./components/FloatingSideBar";

function App() {
  const propertyData = [
    {
      id: 1,
      totalprice: "12345",
      perMonth: "3000",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 2,
      totalprice: "15000",
      perMonth: "3200",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 3,
      totalprice: "21000",
      perMonth: "3500",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 4,
      totalprice: "18000",
      perMonth: "3100",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 5,
      totalprice: "25000",
      perMonth: "4000",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 6,
      totalprice: "9000",
      perMonth: "2200",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 7,
      totalprice: "14000",
      perMonth: "2800",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 8,
      totalprice: "16000",
      perMonth: "3000",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 9,
      totalprice: "19000",
      perMonth: "3300",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 10,
      totalprice: "22000",
      perMonth: "3600",
      address: "1001 1st St.",
      img: propertyImg,
    },
  ];

  const splitIndex = Math.ceil(propertyData.length / 2);
  const firstColumn = propertyData.slice(0, splitIndex);
  const secondColumn = propertyData.slice(splitIndex);
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
        <div className="flex gap-1 px-24">
          {/* First Column */}
          <div className=" flex flex-col gap-1 w-1/2">
            {firstColumn.map((property) => (
              <div key={property.id} className="w-full">
                <PropertyDisplay
                  totalprice={property.totalprice}
                  perMonth={property.perMonth}
                  img={property.img}
                  address={property.address}
                />
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div className=" w-1/2 flex flex-col gap-1 py-8">
            {secondColumn.map((property) => (
              <div key={property.id} className="w-full">
                <PropertyDisplay
                  totalprice={property.totalprice}
                  perMonth={property.perMonth}
                  img={property.img}
                  address={property.address}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-[95%] top-[2%] md:left-[90%] md:top-[5%] lg:left-[95%] lg:top-[2%] xl:left-[96%] xl:top-[2.2%]">
          <FloatingSideBar />
        </div>

        {/* <Form /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
