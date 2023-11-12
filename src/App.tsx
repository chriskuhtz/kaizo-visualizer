import { useState } from 'react';
import { RunInfo } from './components/RunInfo/RunInfo';
import { Statistics } from './components/Statistics/Statistics';
import { runs } from './data/runs';
import { getRunIndex } from './functions/getRunIndex';
import { Run } from './interfaces/Run';

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
						key={i}
						className="sidebarElement"
						role="button"
						tabIndex={i + 2}
						onClick={() => setSelected(r)}
					>
						{getRunIndex(r.filename)}: Lvl {r.level} {r.name}
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
