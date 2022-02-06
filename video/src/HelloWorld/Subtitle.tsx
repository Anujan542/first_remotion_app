import {interpolate, useCurrentFrame} from 'remotion';
import {COLOR_2} from './config';

export const Subtitle: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div
			style={{
				fontFamily: 'Helvetica, Arial',
				fontSize: 40,
				textAlign: 'center',
				position: 'absolute',
				bottom: 100,
				width: '100%',
			//	opacity,
			}}
		>
			
			<p
				style={{
					color: "tomato",
				}}
			>
				Edit src/Video.tsx and save to reload.
			</p>
			
		</div>
	);
};
