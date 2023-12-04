import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import ModelCards from "../../components/modelCards/ModelCards";
import CardGrid from "../../components/cardGrid/CardGrid";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <ModelCards />
      <CardGrid />
      <Footer />
    </>
  );
}
