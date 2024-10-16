import './App.css';
import Converter from './components/Converter/Converter';
import { ChartDataObject } from './types/types';
import { generateRandomNumber } from './utils/generateRandomNumInRange';

const mockDataUsdToRUB: ChartDataObject[] = [
  {
    id: 'Aliexpress',
    data: [
      {
        x: new Date(2024, 9, 1),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 2),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 3),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 6),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 8),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 9),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 10),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 11),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 13),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 16),
        y: generateRandomNumber(70, 120),
      },
    ],
  },
  {
    id: 'ЦБ РФ',
    data: [
      {
        x: new Date(2024, 9, 1),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 2),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 3),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 6),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 8),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 9),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 10),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 11),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(2024, 9, 13),
        y: generateRandomNumber(70, 120),
      },
      {
        x: new Date(),
        y: generateRandomNumber(70, 120),
      },
    ],
  },
];

const mockDataUsdToBYN: ChartDataObject[] = [
  {
    id: 'Aliexpress',
    data: [
      {
        x: new Date(2024, 9, 1),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 2),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 3),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 6),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 8),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 9),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 10),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 11),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 13),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(),
        y: generateRandomNumber(3.1, 3.7),
      },
    ],
  },
  {
    id: 'НБ РБ',
    data: [
      {
        x: new Date(2024, 9, 1),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 2),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 3),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 6),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 8),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 9),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 10),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 11),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(2024, 9, 13),
        y: generateRandomNumber(3.1, 3.7),
      },
      {
        x: new Date(),
        y: generateRandomNumber(3.1, 3.7),
      },
    ],
  },
];

//   Array<{
//   id:   string | number
//     data: Array<{
//   x: number | string | Date
//  y: number | string | Date
// }>

function App() {
  return (
    <div className="App">
      <Converter data={{ toBYN: mockDataUsdToBYN, toRUB: mockDataUsdToRUB }} />
    </div>
  );
}

export default App;
