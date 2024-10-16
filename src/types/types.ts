export interface SelectOption {
  value: SelectValues;
  label: SelectValues;
  img: string;
}

export enum SelectValues {
  BYN = 'BYN',
  RUB = 'RUB',
}

export interface ChartDataObject {
  id: string;
  data: {
    x: Date;
    y: number;
  }[];
}

export interface ConverterState {
  dataToRUB: ChartDataObject[];
  dataToBYN: ChartDataObject[];
  selectedOption: SelectOption;
  handleSelectChange: any;
}

export enum DataOrigins {
  ALIEXPRESS = 'Aliexpress',
  CBRF = 'ЦБ РФ',
  NBRB = 'НБ РБ',
}
