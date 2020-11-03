import { FC } from 'react';
import styled from 'styled-components';

import BasicAreaChart from './BasicAreaChart';
import StackedAreaChart from './StackedAreaChart';
import ChartTimeSelectors from './ChartTimeSelectors';
import ChartTitle from './ChartTitle';
import { MAX_PAGE_WIDTH, NumberStyle } from 'constants/styles';
import { ChartPeriod, AreaChartData, StackedAreaChartData } from 'types/data';
import { TimeSeriesType } from 'utils/formatter';

interface AreaChartProps {
	data: Array<AreaChartData | StackedAreaChartData>;
	periods: Array<ChartPeriod>;
	title: string;
	num: number | null;
	numFormat: NumberStyle;
	percentChange: number | null;
	onPeriodSelect: (period: ChartPeriod) => void;
	timeSeries: TimeSeriesType;
	activePeriod: ChartPeriod;
	infoData: React.ReactNode;
	multiChartKeys?: string[];
}

const AreaChart: FC<AreaChartProps> = ({
	data,
	onPeriodSelect,
	activePeriod,
	periods,
	title,
	num,
	numFormat,
	percentChange,
	timeSeries,
	infoData,
	multiChartKeys,
}) => (
	<ChartContainer>
		<ChartHeader>
			<ChartTitle
				infoData={infoData}
				title={title}
				num={num}
				numFormat={numFormat}
				percentChange={percentChange}
			/>
			<ChartTimeSelectors activePeriod={activePeriod} periods={periods} onClick={onPeriodSelect} />
		</ChartHeader>
		{!multiChartKeys ? (
			<BasicAreaChart
				percentChange={percentChange}
				valueType={numFormat}
				data={data as AreaChartData[]}
				timeSeries={timeSeries}
			/>
		) : (
			<StackedAreaChart
				multiChartKeys={multiChartKeys}
				percentChange={percentChange}
				valueType={numFormat}
				data={data as StackedAreaChartData[]}
				timeSeries={timeSeries}
			/>
		)}
	</ChartContainer>
);

export default AreaChart;

const ChartContainer = styled.div`
	background: ${(props) => props.theme.colors.mediumBlue};
	margin: 20px auto;
	max-width: ${MAX_PAGE_WIDTH}px;
`;

const ChartHeader = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
