import TestimonialWithImage from "./components/Testimonials/TestimonialWithImage";
import May from "./assets/may-2.png";

function App() {
  return (
    <div className="min-h-[100vh] grid place-items-center">
      <div className="grid grid-rows-2 gap-4">
        <div className="flex items-center gap-4 justify-center">
          <p className="uppercase mr-4">1</p>
          <TestimonialWithImage
            image={<May />}
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
            name="May Andersons"
            role="Workcation, CTO"
          />
          <p className="uppercase mr-4">1</p>
        </div>

        <div className="flex items-center gap-4 justify-center">
          <p className="uppercase mr-4">2</p>
        </div>
      </div>
    </div>
  );
}

export default App;
