import { useState } from 'react';
import * as C from './globalsStyles';
import { TaskItem } from './types/TaskItem';
import { FaRegTrashAlt } from 'react-icons/fa';

const App = () => {
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState<TaskItem[]>([
    { id: 1, label: 'Levar cachorro ao veterinário', checked: true }
  ]);

  const handleAddInput = () => {
    if(itemInput.trim() === '') return;
    setList([...list, { id: list.length+1, label: itemInput, checked: false }]);
    setItemInput('');
  }

  const deleteTask = (id: number) => {
    setList(list.filter(item => item.id !== id));
  }

  const toggleTask = (id: number) => {
    let newList = [...list];
    
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
        <C.Title>Listagem de tarefas</C.Title>
        <C.ContainerSection>        
          <input type="text"
            placeholder="Adicionar uma nova tarefa..."
            value={itemInput}
            onChange={e => setItemInput(e.target.value)}
          />
          <button onClick={handleAddInput} className='btn'>Adicionar</button>
        </C.ContainerSection>

        <C.ItemCount>{list.length} Tarefas na lista</C.ItemCount>

        <C.Main>
          {list.map(item => (
            <li key={item.id}>
              <input onClick={() => toggleTask(item.id)} type="checkbox" checked={item.checked} />
              {item.label}<button onClick={() => deleteTask(item.id)}><FaRegTrashAlt /></button>
            </li>
          ))}
        </C.Main>
    </C.Container>
  )
}

export default App;
