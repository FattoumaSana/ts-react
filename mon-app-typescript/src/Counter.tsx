import React, { Component } from "react";
import "./Counter.css";

/**
 * Interface définissant l'état du composant Counter.
 * @property {number} count - La valeur du compteur.
 */
interface CounterState {
  count: number;
}

/**
 * Composant de classe qui affiche un compteur et un bouton pour l'incrémenter.
 */
class Counter extends Component<{}, CounterState> {
  // Initialisation de l'état du composant avec une valeur de départ de 0.
  state: CounterState = {
    count: 0,
  };

  /**
   * Méthode qui incrémente la valeur du compteur dans l'état.
   */
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  /**
   * Méthode qui rend le JSX du composant.
   * @returns {JSX.Element} - L'élément JSX représentant le compteur.
   */
  render() {
    return (
      <div className="counter">
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
