import { IoAccessibility, IoCloudUpload } from "react-icons/io5";
import Card from "./components/Card/Card";


function App() {
  return (
    <div className="min-h-[100vh] grid place-items-center">
      <div className="grid grid-rows-2 gap-4">
        <div className="flex gap-4 justify-center">
          {/* <p className="uppercase mr-4">1</p> */}
          <Card icon={<IoCloudUpload className='size-12'/>} iconBackgroundColor='#3F75FE' title='Easy Deployment' text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.' />
          <Card icon={<IoAccessibility className='size-12'/>} iconBackgroundColor='#2E21FF' title='Accessibility Features' text='Our platform is designed to be inclusive and accessible for all users.'/>
          <Card icon={<IoAccessibility className='size-12'/>}  title='Accessibility Features' text='Our platform is designed to be inclusive and accessible for all users.'/>
        </div>
      </div>
    </div>
  );
}

export default App;
