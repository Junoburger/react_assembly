import * as loader from "@assemblyscript/loader";
let wasm;

export const loadWASM = () => {
	return loader
		.instantiate(fetch("optimized.wasm"))
		.then((result) => {
			// storing the response inside a wasm variable for now
			wasm = result;
			console.log(wasm);
			return true;
		})
		.catch((error) => {
			console.error("Error laoding WASM file", error);
			return false;
		});
};

export const addNumbers = (a, b) => wasm.exports.add(a, b);

export const concatString = (aStr, bStr) => {
	const { concat } = wasm.exports;
	const { __getString, __newString } = wasm.exports;
	let aPtr = __newString(aStr);
	let bPtr = __newString(bStr);
	let cPtr = concat(aPtr, bPtr);
	let cStr = __getString(cPtr);
	return cStr;
};

export const helloWorld = (str) => {
	let newStr = wasm.exports.__newString(str);
	let hello = wasm.exports.hello(newStr);
	let getStr = wasm.exports.__getString(hello);
	return getStr;
};
