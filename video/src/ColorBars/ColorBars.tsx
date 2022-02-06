import {FC} from 'react';
import {useVideoConfig, useCurrentFrame, interpolate} from 'remotion';

export const ColorBars: FC<{color: string; index: number}> = ({
	color,
	index,
}) => {
	const {width} = useVideoConfig();
	const BarHeight = 50;
	const BarWidth = width / 5;
	const BarLeft = BarWidth * index;

	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 3], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				opacity,
				backgroundColor: color,
				height: BarHeight,
				width: BarWidth,
				left: BarLeft,
				position: 'fixed',
			}}
		/>
	);
};
