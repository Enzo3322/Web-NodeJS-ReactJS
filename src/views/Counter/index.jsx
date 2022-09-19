import React, { useState } from 'react';
import './styles.scss';
function Counter() {
	const [counter, setCounter] = useState(0);
	return (
		<div className="counter-container">
			<p>Contador de clientes</p>
			<h1>{counter}</h1>
			<button className="reset" onClick={() => setCounter(0)}>
				Zerar contador
			</button>
			<div className="buttons">
				<button className="add" onClick={() => setCounter(counter + 1)}>
					+
				</button>
				<button
					className="remove"
					onClick={() => setCounter(counter ? counter - 1 : 0)}
				>
					-
				</button>
			</div>
		</div>
	);
}

export default Counter;
