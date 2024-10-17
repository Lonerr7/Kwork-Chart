import './App.css';
import Converter from './components/Converter/Converter';
import Graph from './components/Graph/Graph';
import { useConverter } from './store/store';
import { SelectValues } from './types/types';

function App() {
  const dataRUB = useConverter((state) => state.dataToRUB);
  const dataBYN = useConverter((state) => state.dataToBYN);
  const selectedOption = useConverter((state) => state.selectedOption);
  const handleSelectChange = useConverter((state) => state.handleSelectChange);

  return (
    <div className="App">
      <Converter
        data={{ toBYN: dataBYN, toRUB: dataRUB }}
        selectedOption={selectedOption}
        handleSelectChange={handleSelectChange}
      />
      <Graph
        data={selectedOption.label === SelectValues.BYN ? dataBYN : dataRUB}
        selectedOption={selectedOption}
      />
    </div>
  );
}

export default App;
