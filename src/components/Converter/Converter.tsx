import { useState } from 'react';
import Select from 'react-select';
import s from './Converter.module.css';
import { SelectOption, SelectValues } from '../../types/types';
import usdIcon from '../../images/USD 1.svg';
import rubIcon from '../../images/RUB 1.svg';
import bynIcon from '../../images/BYN 1.svg';

const currencyOptions: any = [
  { label: 'RUB', value: SelectValues.RUB, img: rubIcon },
  { label: 'BYN', value: SelectValues.BYN, img: bynIcon },
];

const Converter: React.FC = () => {
  const [usdText, setUsdText] = useState('1');
  const [selectedOption, setSelectedOption] = useState();

  const onUsdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsdText(e.currentTarget.value);
  };

  return (
    <div className={s.converter}>
      <input
        className={s.converter__input}
        type="number"
        value={usdText}
        onChange={onUsdInputChange}
      />
      <span>=</span>
      <Select
        defaultValue={{ value: SelectValues.RUB, img: rubIcon }}
        options={currencyOptions}
        formatOptionLabel={(currency: any) => (
          <div>
            <img src={currency.img} alt="flag" />
            <span>{currency.value}</span>
          </div>
        )}
      />
    </div>
  );
};

export default Converter;
