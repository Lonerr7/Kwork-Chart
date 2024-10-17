import { ResponsiveLine } from '@nivo/line';
import {
  ChartDataObject,
  DataOrigins,
  SelectOption,
  SelectValues,
} from '../../types/types';
import s from './Graph.module.css';
import { selectTodaysObject } from '../../utils/selectTodaysObj';
import enterShopIcon from '../../images/enter-shop.svg';
import { formatDateToRuLocale } from '../../utils/formatDateToRuLocale';

interface Props {
  data: ChartDataObject[];
  selectedOption: SelectOption;
}

const Graph: React.FC<Props> = ({ data, selectedOption }) => {
  const updatedDate = data
    .find((dataObj) => dataObj.id === DataOrigins.ALIEXPRESS)
    ?.data.find((object) => selectTodaysObject(object))
    ?.x.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });

  return (
    <div className={s.graph}>
      <ResponsiveLine
        enableArea
        // areaBaselineValue={75}
        tooltip={(props) => {
          return (
            <div className={s.graph__tooltip}>
              <span className={s.graph__tooltipText}>
                {formatDateToRuLocale(props.point.data.x as Date)}
              </span>
              <span className={s.graph__tooltipText}>
                1$ = {props.point.data.yFormatted}
                {selectedOption.value === SelectValues.BYN ? 'Br' : '₽'}
              </span>
            </div>
          );
        }}
        curve="cardinal"
        theme={{
          text: {
            fontSize: 14,
          },
        }}
        data={data}
        margin={{ top: 50, right: 60, bottom: 130, left: 60 }}
        xScale={{ type: 'time' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
        }}
        axisTop={null}
        axisRight={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          truncateTickAt: 0,
          format: function noRefCheck(props) {
            return `${props} ${
              selectedOption.label === SelectValues.RUB ? '₽' : 'Br'
            }`;
          },
        }}
        axisLeft={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0,
          format: function noRefCheck(props) {
            return formatDateToRuLocale(props);
          },
        }}
        pointSize={3}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={6}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        colors={{
          datum: 'color',
        }}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom',
            translateX: -50,
            direction: 'row',
            justify: false,
            translateY: 133,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />

      <div className={s.graph__bottom}>
        <p className={s.graph__lastUpdated}>
          <span className={s.graph__lastUpdatedText}>
            {selectedOption.label === SelectValues.RUB
              ? 'Обновлено'
              : 'Абноўлены'}
          </span>
          {updatedDate}
        </p>
        <a
          className={s.graph__link}
          href="https://aliexpress.ru/"
          target="_blank"
          rel="noreferrer"
        >
          <span className={s.graph__linkText}>
            {selectedOption.label === SelectValues.RUB
              ? 'Перейти в магазин'
              : 'Перайсці ў краму'}
          </span>
          <img className={s.graph__icon} src={enterShopIcon} alt="visit" />
        </a>
      </div>
    </div>
  );
};

export default Graph;
