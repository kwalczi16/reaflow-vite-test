import "./App.css";
import { Canvas } from "reaflow";

const nodes = [
	{
		id: "1",
		text: "1",
	},
	{
		id: "2",
		text: "2",
	},
];

const edges = [
	{
		id: "1-2",
		from: "1",
		to: "2",
	},
];

function App() {
	return (
		<div className="App">
			<h1>Reaflow</h1>
			<Canvas nodes={nodes} edges={edges} />
		</div>
	);
}

export default App;
