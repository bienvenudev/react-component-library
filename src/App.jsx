import Banner from "./components/Banner/Banner"; //put src to use @

function App() {
  return (
    <div className="min-h-[100vh] grid place-items-center p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-4 relative">
          <p className="absolute top-[-50px] uppercase text-2xl">Multi Line</p>
          <Banner
            status="success"
            title="Congratulations!"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          />
          <Banner
            status="warning"
            title="Attention"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
          />
          <Banner
            status="error"
            title="There is a problem with your application!"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
          />
          <Banner
            status="neutral"
            title="Update available"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          />
        </div>

        <div className="grid gap-4 relative">
          <p className="absolute top-[-50px] uppercase text-2xl">Single Line</p>
          <Banner status="success" title="Congratulations!" />
          <Banner status="warning" title="Attention" />
          <Banner
            status="error"
            title="There is a problem with your application"
          />
          <Banner status="neutral" title="Update available" />
        </div>
      </div>
    </div>
  );
}

export default App;
