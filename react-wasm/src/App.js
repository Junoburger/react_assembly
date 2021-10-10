import { useEffect, useState } from "react";
import { addNumbers, concatString, helloWorld, loadWASM } from "./wasmLoader";

function App() {
	const [wasmLoaded, setWasmLoaded] = useState(false);
	const [sum, setSum] = useState();
	const [concatStr, setConcatStr] = useState("");
	const [sayHello, setSayHello] = useState("");

	useEffect(() => {
		loadWASM().then((result) => setWasmLoaded(result));
	}, []);

	useEffect(() => {
		if (wasmLoaded) {
			setConcatStr(concatString("React", "WASM"));
			setSum(addNumbers(4, 4));
			setSayHello(helloWorld("hiya2"));
		}
	}, [wasmLoaded]);

	return (
		<>
			<div className="App-div">
				<p>{concatStr}</p>
				Gr{sum}! <br />
				{sayHello}
			</div>
		</>
	);
}

export default App;
