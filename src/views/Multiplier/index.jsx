import React from 'react';
import { useState } from 'react';
import './style.scss';

function Multiplier() {
	const Calc = (n1, n2) => {
		return setResult(n1 * n2);
	};
	const [result, setResult] = useState(null);
	const [valueOne, setValueOne] = useState(null);
	const [valueTwo, setValueTwo] = useState(null);

	return (
		<div className="number-multiplyer">
			<p>Multiplicador de números</p>

			<div className="inputs">
				<input
					type="number"
					placeholder="Primeiro valor"
					onChange={(e) => setValueOne(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Segundo valor"
					onChange={(e) => setValueTwo(e.target.value)}
				/>
				<button
					onClick={() => {
						Calc(valueOne, valueTwo);
					}}
					className="calc"
				>
					Calcular
				</button>
			</div>
			<p>
				Resultado: <span>{result}</span>
			</p>
		</div>
	);
}

export default Multiplier;
