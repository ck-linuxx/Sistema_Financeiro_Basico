import { useState, useEffect } from "react";

import * as Components from "./App.style";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories"
import { items } from "./data/items"
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea"
import { InfoArea } from "./components/InfoArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  },[list, currentMonth])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  return(
    <Components.Container>
      <Components.Header>
        <Components.HeaderText>Sistema Financeiro</Components.HeaderText>
      </Components.Header>
      <Components.Body>
        
        <InfoArea 
        currentMonth={currentMonth} 
        onMonthChange={handleMonthChange}
        /> {/*Area de Informações*/}

        {/*Area de inserção */}
        
        <TableArea list={filteredList}/> {/*tabela de itens */}

      </Components.Body>
    </Components.Container>
  );
}

export default App;