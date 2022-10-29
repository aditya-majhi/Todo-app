import Footer from "./components/footer";
import Form from "./components/form";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="h-screen bg-[#00ABB3] space-y-7">
      <Navbar />
      <div className="flex flex-col items-center space-y-2 text-gray-200 font-semibold">
          <h2 className="text-xl md:text-2xl">Organise your Day with Us</h2>
          <h1 className="text-xl md:text-2xl">And , Be <span className="text-2xl font-serif text-gray-700 md:text-4xl">PRODUCTIVE</span></h1>
      </div>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
