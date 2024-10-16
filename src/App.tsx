import './App.css';
import Converter from './components/Converter/Converter';
import { useConverter } from './store/store';

// const mockDataUsdToRUB: ChartDataObject[] = [
//   {
//     id: 'Aliexpress',
//     data: [
//       {
//         x: new Date(2024, 9, 1),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 2),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 3),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 6),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 8),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 9),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 10),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 11),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 13),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 16),
//         y: generateRandomNumber(70, 120),
//       },
//     ],
//   },
//   {
//     id: 'ЦБ РФ',
//     data: [
//       {
//         x: new Date(2024, 9, 1),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 2),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 3),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 6),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 8),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 9),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 10),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 11),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(2024, 9, 13),
//         y: generateRandomNumber(70, 120),
//       },
//       {
//         x: new Date(),
//         y: generateRandomNumber(70, 120),
//       },
//     ],
//   },
// ];

// const mockDataUsdToBYN: ChartDataObject[] = [
//   {
//     id: 'Aliexpress',
//     data: [
//       {
//         x: new Date(2024, 9, 1),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 2),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 3),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 6),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 8),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 9),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 10),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 11),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 13),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//     ],
//   },
//   {
//     id: 'НБ РБ',
//     data: [
//       {
//         x: new Date(2024, 9, 1),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 2),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 3),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 6),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 8),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 9),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 10),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 11),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(2024, 9, 13),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//       {
//         x: new Date(),
//         y: generateRandomNumber(3.1, 3.7),
//       },
//     ],
//   },
// ];

//   Array<{
//   id:   string | number
//     data: Array<{
//   x: number | string | Date
//  y: number | string | Date
// }>

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
    </div>
  );
}

export default App;
