import { useEffect, useState } from 'react';
import Select from 'react-select';
import s from './Converter.module.css';
import { ChartDataObject, SelectValues } from '../../types/types';
import usdIcon from '../../images/USD 1.svg';
import rubIcon from '../../images/RUB 1.svg';
import bynIcon from '../../images/BYN 1.svg';
import { selectTodaysObject } from '../../utils/selectTodaysObj';

const currencyOptions: any = [
  { label: 'RUB', value: SelectValues.RUB, img: rubIcon },
  { label: 'BYN', value: SelectValues.BYN, img: bynIcon },
];

interface Props {
  data: {
    toRUB: ChartDataObject[];
    toBYN: ChartDataObject[];
  };
}

const Converter: React.FC<Props> = ({ data: { toBYN, toRUB } }) => {
  const todaysRUBObj = toRUB.find((obj) => obj.id === 'Aliexpress')!;
  const todaysBYNObj = toBYN.find((obj) => obj.id === 'Aliexpress')!;

  const [todaysRUBValue, setTodaysRUBValue] = useState(
    todaysRUBObj.data.find((obj) => selectTodaysObject(obj))?.y
  );
  const [todaysBYNValue, setTodaysBYNValue] = useState(
    todaysBYNObj.data.find((obj) => selectTodaysObject(obj))?.y
  );

  const [usdText, setUsdText] = useState('1');
  const [selectedOption, setSelectedOption] = useState({
    value: SelectValues.RUB,
    img: rubIcon,
  });

  const onUsdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsdText(e.currentTarget.value);
  };

  useEffect(() => {}, [usdText, selectedOption]);

  return (
    <div className={s.converter}>
      <input
        className={s.converter__input}
        type="number"
        value={usdText}
        onChange={onUsdInputChange}
      />
      <span>=</span>

      <div>
        <span className={s.converter__value}>{todaysRUBValue}</span>
        <Select
          defaultValue={selectedOption}
          options={currencyOptions}
          onChange={(newValue: any) => {
            setSelectedOption(newValue);
          }}
          formatOptionLabel={(currency: any) => (
            <div>
              <img src={currency.img} alt="flag" />
              <span>{currency.value}</span>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Converter;
