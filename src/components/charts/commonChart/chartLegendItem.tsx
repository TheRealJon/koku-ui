import { css } from '@patternfly/react-styles';
import React from 'react';
import { styles } from './chartLegendItem.styles';
import { ChartDatum, getDateRangeString } from './chartUtils';

interface ChartLegendItemProps {
  data: ChartDatum[];
  idKey?: string;
  isCurrent?: boolean;
  index?: number;
  style?: any;
}

const ChartLegendItem: React.SFC<ChartLegendItemProps> = ({
  data,
  isCurrent,
  idKey = 'date',
  index,
  style,
}) => {
  if (!data || data.length === 0) {
    return <div />;
  }
  const styling =
    Boolean(style) && Boolean(style.legendItem)
      ? style.legendItem
      : styles.legendItem;
  if (idKey === 'date') {
    const label = getDateRangeString(data);
    return (
      <div className={css(styling)}>
        <div
          className={css(
            styles.color,
            isCurrent ? styles.currentColor : styles.previousColor
          )}
        />
        {label}
      </div>
    );
  } else {
    return (
      <div key={data[index].key} className={css(styling)}>
        <div
          className={css(
            styles.color,
            isCurrent ? styles.currentColor : styles.previousColor
          )}
        />
        {data[index].key}
      </div>
    );
  }
};

export { ChartLegendItem, ChartLegendItemProps };
