import React from 'react';
import jsonData from '@/shared/data/mock-data.json'
import {DataTable} from "@/features";

function App() {
  return (
      <div>
        <h1>Таблица с фильтрацией</h1>
        <DataTable jsonData={jsonData} />
      </div>
  );
}

export default App;
