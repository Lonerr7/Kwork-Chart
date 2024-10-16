import { create } from 'zustand';
import { generateRandomNumber } from '../utils/generateRandomNumInRange';
import {
  ChartDataObject,
  ConverterState,
  SelectOption,
  SelectValues,
} from '../types/types';
import rubIcon from '../images/RUB 1.svg';

export const useConverter = create<ConverterState>()((set) => ({
  dataToRUB: [
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
  ] as ChartDataObject[],
  dataToBYN: [
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
  ] as ChartDataObject[],
  selectedOption: {
    value: SelectValues.RUB,
    img: rubIcon,
    label: SelectValues.RUB,
  },
  handleSelectChange: (newValue: SelectOption) =>
    set(() => {

      console.log(`from zustand`);
      
      return {
        selectedOption: newValue,
      }
    }),
}));
