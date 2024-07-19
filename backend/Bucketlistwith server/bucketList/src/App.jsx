import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Counter() {
  const [count, setCount] = useState(0);
  const handleMinus = () => {
    setCount(count - 1)
  }

  const handlePlus = () => {
    setCount(count + 1)
  }
  return (
    <div><button onClick={handleMinus}>-1</button> {count} <button onClick={handlePlus}>+1</button> </div>
  )
}
function BucketListItems(props) {
  const { list, handleComplete, handleDelete } = props

  return (
    <div>
      <h2>Bucket list</h2>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <input type="checkbox" value={item.isComplete} onClick={() => handleComplete(item)} />
              <span style={item.isComplete ? {
                textDecoration: "line-through"
              } : {}}>{item.description} </span>
              <button onClick={() => {
                return handleDelete(item)
              }}>x</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function Footer(props) {
  const { list } = props;

  const notCompleteItems = list.filter(item => item.isComplete === false);

  return (
    <div style={{
      fontWeight: 'bold'
    }}>{notCompleteItems.length} items to complete</div>
  )
}

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      description: "Backpack NewZealand",
      isComplete: false,
    },
    {
      id: 2,
      description: "Visit Canada",
      isComplete: false,
    },
  ]);
  const handleDelete = (item) => {
    setList(list.filter(loopItem => loopItem.id !== item.id))
  }

  const handleComplete = (item) => {
    setList(list.map(loopItem => loopItem.id === item.id ? {
      ...loopItem,
      isComplete: !loopItem.isComplete
    } : loopItem))
  }

  return (
    <div className="App">
      <div className="Header">
        <h1>BucketList App</h1>
      </div>
      <div className="body">
        <Counter />
        <div className="bucketlist-container">
          <BucketListItems list={list} handleComplete={handleComplete} handleDelete={handleDelete} />
        </div>
      </div>
      <div className="footer">
        <Footer list={list} />
      </div>
    </div>
  );
}

export default App;
