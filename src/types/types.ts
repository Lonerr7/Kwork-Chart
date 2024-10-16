export interface SelectOption {
  value: string;
  label: string;
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
