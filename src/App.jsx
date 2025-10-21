import Badge from "./components/Badge";

function App() {
  return (
    <div className="min-h-[100vh] grid place-items-center">
      <div className="grid grid-rows-2 gap-4">
        <div className="flex items-center gap-4 justify-center">
          <p className="uppercase mr-4">Square</p>
          <Badge text="Badge" className="text-sm"/>
          <Badge text="Badge" variant="#FEE2E2" textClr="#991B1B" className="text-sm"/>
          <Badge text="Badge" variant="#FEF3C7" textClr="#92400E" className="text-sm"/>
          <Badge text="Badge" variant="#D1FAE5" textClr="#065F46" className="text-sm"/>
          <Badge text="Badge" variant="#DBEAFE" textClr="#1E40AF" className="text-sm"/>
          <Badge text="Badge" variant="#E0E7FF" textClr="#3730A3" className="text-sm"/>
          <Badge text="Badge" variant="#EDE9FE" textClr="#5B21B6" className="text-sm"/>
          <Badge text="Badge" variant="#FCE7F3" textClr="#9D174D" className="text-sm"/>
        </div>

        <div className="flex items-center gap-4 justify-center">
          <p className="uppercase mr-4">Pill</p>
          <Badge text="Badge" shape="circle" className="text-sm rounded-4xl" />
          <Badge text="Badge" shape="circle" variant="#FEE2E2" textClr="#991B1B" className="text-sm rounded-4xl" />
          <Badge text="Badge" shape="circle" variant="#FEF3C7" textClr="#92400E" className="text-sm rounded-4xl" />
          <Badge text="Badge" shape="circle" variant="#D1FAE5" textClr="#065F46" className="text-sm rounded-4xl" />
          <Badge text="Badge" shape="circle" variant="#DBEAFE" textClr="#1E40AF" className="text-sm rounded-4xl" />
          <Badge text="Badge" shape="circle" variant="#E0E7FF" textClr="#3730A3" className="text-sm rounded-4xl" />
          <Badge text="Badge" shape="circle" variant="#EDE9FE" textClr="#5B21B6" className="text-sm rounded-4xl" />
          <Badge text="Badge" shape="circle" variant="#FCE7F3" textClr="#9D174D" className="text-sm rounded-4xl" />
        </div>
      </div>
    </div>
  );
}

export default App;
