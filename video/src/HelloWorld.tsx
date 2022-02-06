/* eslint-disable react/self-closing-comp */
import {
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	Audio,
} from 'remotion';

import pop from './assets/pop.mp3';

import {ColorBar} from './ColorBars/index';

import './ani.css';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
			{/* <Sequence from={10} durationInFrames={Infinity}> */}
			<Audio src={pop} />
			{/* </Sequence> */}
			<ColorBar />

			<Sequence from={16 * 3} durationInFrames={Infinity} name="Title">
				<div
					style={{
						fontFamily: 'Bangers',
						fontSize: 156,
						fontWeight: 800,
						textAlign: 'center',
						position: 'absolute',
						top: 280,
						width: '100%',
						color: 'white',
					}}
				>
					Best UI for React
				</div>
			</Sequence>

			<Sequence from={20 * 3} durationInFrames={Infinity}>
				<div
					style={{
						position: 'fixed',
						top: '500px',
						//bottom: '0px',
						left: '48%',
						marginLeft: '-100px',
					}}
				>
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 256 204"
						preserveAspectRatio="xMidYMid"
					>
						<g>
							<polygon
								fill="#00B0FF"
								points="0 110.848 0 0 96 55.424 96 92.3733333 32 55.424 32 129.322667"
								className="svg-elem-1"
							/>
							<polygon
								fill="#0081CB"
								points="96 55.424 192 0 192 110.848 128 147.797333 96 129.322667 160 92.3733333 160 55.424 96 92.3733333"
								className="svg-elem-2"
							/>
							<polygon
								fill="#00B0FF"
								points="96 129.322667 96 166.272 160 203.221333 160 166.272"
								className="svg-elem-3"
							/>
							<path
								d="M160,203.221333 L256,147.797333 L256,73.8986667 L224,92.3733333 L224,129.322667 L160,166.272 L160,203.221333 Z M224,55.424 L224,18.4746667 L256,5.68434189e-14 L256,36.9493333 L224,55.424 Z"
								fill="#0081CB"
								className="svg-elem-4"
							/>
						</g>
					</svg>
				</div>
			</Sequence>
		</div>
	);
};
