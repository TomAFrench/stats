import { FC } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

import colors from '../../styles/colors';
import CustomLegend from './CustomLegend';

interface BasicPieChartProps {
	data: {
		name: string;
		value: number;
	}[];
	isShortLegend: boolean;
}

const MUTED_COLORS = [
	colors.mutedBrightBlue,
	colors.mutedBrightOrange,
	colors.mutedBrightGreen,
	colors.mutedBrightPink,
	colors.mutedBrightYellow,
	colors.mutedBrightPurple,
	colors.mutedBrightGray,
	colors.mutedBrightRed,
	colors.mutedBrightFoamGreen,
	colors.mutedBrightBurntOrange,
	colors.mutedBrightForestGreen,
];
export const BRIGHT_COLORS = [
	colors.brightBlue,
	colors.brightOrange,
	colors.brightGreen,
	colors.brightPink,
	colors.brightYellow,
	colors.brightPurple,
	colors.brightGray,
	colors.brightRed,
	colors.brightFoamGreen,
	colors.brightBurntOrange,
	colors.brightForestGreen,
];

const BasicPieChart: FC<BasicPieChartProps> = ({ data, isShortLegend }) => (
	<ResponsiveContainer width="100%" height={isShortLegend ? '80%' : '100%'}>
		<PieChart height={380}>
			<Pie
				data={data}
				cx="50%"
				cy="50%"
				labelLine={false}
				outerRadius={140}
				fill={colors.mutedBrightGreen}
				dataKey="value"
				strokeWidth={1.5}
			>
				{data.map((_, index: number) => (
					<Cell
						key={`cell-${index}`}
						fill={MUTED_COLORS[index % MUTED_COLORS.length]}
						stroke={BRIGHT_COLORS[index % BRIGHT_COLORS.length]}
					/>
				))}
			</Pie>
			<Legend content={<CustomLegend isShortLegend={isShortLegend} />} />
		</PieChart>
	</ResponsiveContainer>
);

export default BasicPieChart;
