import {type JSX} from 'react';

export default function Square({value, onSquareClick}: {value: string; onSquareClick: () => void}): JSX.Element {
  return <button className="square" value={value} onClick={onSquareClick}>{value}</button>;
}