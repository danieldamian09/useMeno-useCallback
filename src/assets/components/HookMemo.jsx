import {useState, useMemo} from "react";
import reactLogo from "./../../assets/react.svg";
import "./../../App.css";

const valorHeavy = (iterationNumber = 1000) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi va un valor pesado")
  }

  return `${iterationNumber} iteraciones realizadas`
}


export const HookMemo = () => {
	const [count, setCount] = useState(500);
	const [show, setShow] = useState(true);

	const mostrar = () => {
		setShow(!show);
	};

	const sumar = () => {
		setCount((count) => count + 1);
	};

	const valorPesado = useMemo(() => valorHeavy(count), [count])

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={sumar}>count is {count}</button>
				<button onClick={mostrar} style={{marginLeft: "10px"}}>
					Mostrar {show ? "si" : "no"}
				</button>
			</div>
			<hr />
			<h4>{ valorPesado }</h4>
		</div>
	);
};
