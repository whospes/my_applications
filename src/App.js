
import './App.css';
import ApplicationsBlockAll from './ApplicationsBlockAll';
import { RequestsProvider } from './Context/RequestsContext';

function App() {
  return (
    <div className="my_applications_block_all">
      <RequestsProvider>
      <ApplicationsBlockAll />
      </RequestsProvider>
    </div>
  );
}

export default App;
