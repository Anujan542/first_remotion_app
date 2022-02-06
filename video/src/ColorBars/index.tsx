import {FC} from 'react';
import {Sequence} from 'remotion';
import {blue, purple, red, white, yellow} from './color';
import {ColorBars} from './ColorBars';

export const ColorBar: FC = () => {
	const colors = [blue, purple, red, white, yellow];

	return (
		<>
			{colors.map((color, index) => (
				// eslint-disable-next-line @remotion/duration-in-frames
				<Sequence key={color} durationInFrames={Infinity} from={index * 3}>
					<ColorBars key={color} color={color} index={index} />
				</Sequence>
			))}
		</>
	);
};
