import { useCallback, useEffect, useState } from "react";
import {
	// addNumbers, concatString, helloWorld,
	loadWASM,
} from "./wasmLoader";
import { useWasm } from "./useWasm";

function App() {
	const instance = useWasm();
	const [loadTest, setLoadTest] = useState();
	const [wasmLoaded, setWasmLoaded] = useState(false);
	// const [sum, setSum] = useState();
	// const [concatStr, setConcatStr] = useState("");
	// const [sayHello, setSayHello] = useState("");
	const loadWasm = useCallback(async () => {
		try {
			const wasm = await import("test_wasm");
			console.log(wasm.test_wasm);
			setLoadTest({ wasm });
		} catch (err) {
			console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
		}
	}, []);

	useEffect(() => {
		loadWasm();
	}, [loadWasm]);

	useEffect(() => {
		// console.log({ instance });
		// loadWASM().then((result) => setWasmLoaded(result));
	}, [instance]);

	useEffect(() => {
		if (wasmLoaded) {
			// setConcatStr(concatString("React", "WASM"));
			// setSum(addNumbers(4, 4));
			// setSayHello(helloWorld("hiya2"));
		}
	}, [wasmLoaded]);

	useEffect(() => {
		if (loadTest) {
			// console.log(loadTest.wasm);
		}
	}, [loadTest]);

	return (
		<>
			{/* <div className="App-div">
				<p>{concatStr}</p>
				Gr{sum}! <br />
				{sayHello}
			</div> */}
		</>
	);
}

export default App;
