import { useState } from 'react';
import { RunInfo } from './components/RunInfo/RunInfo';
import { Statistics } from './components/Statistics/Statistics';
import { runs } from './data/runs';
import { Run } from './interfaces/Run';

export const getRunIndex = (str: string): string | undefined => {
	if (str.length === 16) {
		return str.slice(-5, -4);
	}
	if (str.length === 17) {
		return str.slice(-6, -4);
	}
	if (str.length === 18) {
		return str.slice(-7, -4);
	}
	if (str.length === 19) {
		return str.slice(-8, -4);
	}
};

function App() {
	const [selected, setSelected] = useState<Run | undefined>();
	return (
		<div className="container">
			<div className="sidebar">
				<div
					className="sidebarElement"
					role="button"
					tabIndex={1}
					onClick={() => setSelected(undefined)}
				>
					Statistics
				</div>
				{runs.map((r, i) => (
					<div
						className="sidebarElement"
						role="button"
						tabIndex={i + 2}
						onClick={() => setSelected(r)}
					>
						Lvl {r.level} {r.name}
					</div>
				))}
			</div>
			<div className="content">
				{selected ? (
					<RunInfo run={selected} />
				) : (
					<Statistics setSelected={setSelected} />
				)}
			</div>
		</div>
	);
}

export default App;
