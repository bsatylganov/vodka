import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const elementData = [
    { name: "Стаканчик", price: 40 },
    { name: "Мягкая 0,2", price: 105 },
    { name: "Буханка0,2", price: 105 },
    { name: "Пшеничная0,2", price: 105 },
    { name: "Буханка0,5", price: 190 },
    { name: "Питница", price: 185 },
    { name: "Крепость", price: 185 },
    { name: "Капля", price: 190 },
    { name: "Завод", price: 190 },
    { name: "Ржаная", price: 190 },
    { name: "Белая корона", price: 185 },
    { name: "Асман", price: 180 },
    { name: "ЫК", price: 175 },
    { name: "Гаврош", price: 175 },
    { name: "Медовая", price: 175 },
    { name: "Пшеничная0,5", price: 175 },
    { name: "Хлебный дар", price: 175 },
    { name: "Мягкая0,5", price: 175 },
    { name: "Алтындан0,5", price: 255 },
    { name: "Алтындан0,7", price: 295 },
    { name: "Вайт", price: 295 },
    { name: "ЧистыеРосы 0,5", price: 265 },
    { name: "ЧистыеРосы0,7", price: 325 },
    { name: "ЗолотойКолос0,5", price: 185 },
    { name: "ЗолотойКолос0,7", price: 295 },
    { name: "ЗолотойКолос1", price: 350 },
    { name: "ТооАшуу0,5", price: 255 },
    { name: "ТооАшуу0,7", price: 300 },
    { name: "ТооАшуу1", price: 390 },
    { name: "Бурана0,5", price: 255 },
    { name: "Бурана0,7", price: 310 },
    { name: "Бурана1", price: 400 },
    { name: "ОшАрагы", price: 1100 },
    { name: "Каганат0,7", price: 430 },
    { name: "Каганат1", price: 350 },
  ];
  const [counters, setCounters] = useState(Array(elementData.length).fill(0));

  const calculateTotalPrice = () => {
    return counters.reduce((total, count, index) => {
      return total + count * elementData[index].price;
    }, 0);
  };

  const handleIncrement = (index) => {
    const newCounters = [...counters];
    newCounters[index]++;
    setCounters(newCounters);
  };

  const handleDecrement = (index) => {
    const newCounters = [...counters];
    if (newCounters[index] > 0) {
      newCounters[index]--;
      setCounters(newCounters);
    }
  };

  return (
    <div>
      {elementData.map((element, index) => (
        <div key={index}>
          <p>{element.name} - Цена: {element.price}</p>
          <button onClick={() => handleDecrement(index)}>-</button>
          <span>{counters[index]}</span>
          <button onClick={() => handleIncrement(index)}>+</button>
        </div>
      ))}
      <p>Общая стоимость: {calculateTotalPrice()}</p>
    </div>
  );
}
export default App;
