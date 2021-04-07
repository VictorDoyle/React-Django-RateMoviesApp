import 'semantic-ui-css/semantic.min.css'
import NavigationBar from './components/NavigationBar/NavigationBar';
import routes from './config/routes';

function App() {
  return (
    <>
    <NavigationBar />
    { routes }
    </>
  );
}

export default App;
