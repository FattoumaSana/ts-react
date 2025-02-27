import React from "react";
import "./Greeting.css";

/**
 * Interface définissant les props du composant Greeting.
 * @property {string} name - Le nom à afficher dans le message de salutation.
 */
interface GreetingProps {
  name: string;
}

/**
 * Composant fonctionnel qui affiche un message de salutation.
 * @param {GreetingProps} props - Les props du composant.
 * @returns {JSX.Element} - L'élément JSX représentant le message de salutation.
 */
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div className="greeting">Hello, {name}!</div>;
};

export default Greeting;
