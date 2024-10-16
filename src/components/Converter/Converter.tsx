import { useEffect, useState } from 'react';
import Select from 'react-select';
import s from './Converter.module.css';
import { ChartDataObject, SelectOption, SelectValues } from '../../types/types';
import usdIcon from '../../images/USD 1.svg';
import rubIcon from '../../images/RUB 1.svg';
import bynIcon from '../../images/BYN 1.svg';
import { selectTodaysObject } from '../../utils/selectTodaysObj';

const currencyOptions: any = [
  { label: SelectValues.RUB, value: SelectValues.RUB, img: rubIcon },
  { label: SelectValues.BYN, value: SelectValues.BYN, img: bynIcon },
];

interface Props {
  data: {
    toRUB: ChartDataObject[];
    toBYN: ChartDataObject[];
  };
  selectedOption: SelectOption;
  handleSelectChange: any;
}

const Converter: React.FC<Props> = ({
  data: { toBYN, toRUB },
  selectedOption,
  handleSelectChange,
}) => {
  // Получаем объекты для дефолтного значения в конвертере
  const todaysRUBObj = toRUB.find((obj) => obj.id === 'Aliexpress')!;
  const todaysBYNObj = toBYN.find((obj) => obj.id === 'Aliexpress')!;

  // Получаем дефолтные значения каждой валюты для отображения в конвертере
  const [todaysRUBValue, setTodaysRUBValue] = useState(
    todaysRUBObj.data.find((obj) => selectTodaysObject(obj))?.y
  );
  const [todaysBYNValue, setTodaysBYNValue] = useState(
    todaysBYNObj.data.find((obj) => selectTodaysObject(obj))?.y
  );

  // Копии сегодняшних валют для того, если пользователь захочет ввести свое значение -> чтобы оно пересчиталось. Если введет 0 - то потом без этих копий не получится считать
  const todaysRUBValueCopy = todaysRUBObj.data.find((obj) =>
    selectTodaysObject(obj)
  )?.y;
  const todasyBYNValueCopy = todaysBYNObj.data.find((obj) =>
    selectTodaysObject(obj)
  )?.y;

  // Текст, который пользователь вводит для конвертации валюты
  const [usdText, setUsdText] = useState('1');

  // Обрабатываем ввод чисел в USD
  const onUsdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsdText(e.currentTarget.value);
  };

  // Обрабатываем выбор другой валюты
  const onSelectChange = (newValue: any) => {
    handleSelectChange(newValue);
  };

  // Обрабатываем автоматический пересчет валюты исходя из введенного числа пользователем
  useEffect(() => {
    if (
      selectedOption.value === SelectValues.RUB &&
      todaysRUBValue !== undefined &&
      todaysRUBValueCopy !== undefined
    ) {
      setTodaysRUBValue(+(todaysRUBValueCopy * +usdText).toFixed(2));
    } else {
      setTodaysBYNValue(+(todasyBYNValueCopy! * +usdText).toFixed(2));
    }

    // eslint-disable-next-line
  }, [usdText, selectedOption]);

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
        <span className={s.converter__value}>
          {selectedOption.value === SelectValues.RUB
            ? todaysRUBValue
            : todaysBYNValue}
        </span>
        <Select
          defaultValue={selectedOption}
          options={currencyOptions}
          onChange={onSelectChange}
          isSearchable={false}
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
