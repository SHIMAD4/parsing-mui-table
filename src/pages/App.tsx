import React from 'react';
import jsonData from '@/shared/lib/data/mock-data.json'
import { MainComponent } from "@/features";

function App() {
  return <MainComponent jsonData={jsonData} />
}

export default App;
