import React from 'react';


const locations = ['hat stand', 'desk', 'shelf'];

function pick(arr) {
  const ix = Math.floor(Math.random() * arr.length);
  return locations[ix];
}

export default function DataManipulation() {
  const items = {
    hat: { location: pick(locations) },
    computer: { location: pick(locations) },
    mouse: { location: pick(locations) },
    coat: { location: pick(locations) },
    gloves: { location: pick(locations) },
    keys: { location: pick(locations) },
    'lost sock': { location: null }
  };

  let sortedItems = {}
  for (const item in items){
    var locationName = items[item].location
    var itemName = item;
    if(!(locationName in sortedItems)){
      sortedItems[locationName]=itemName;
    }else{
      sortedItems[locationName]+=', '+itemName;
    }
  }
  return (
    <div>
      <pre>{JSON.stringify(items, null, 2)}</pre>
      <pre>{JSON.stringify(sortedItems, null, 2)}</pre>
      <h3>Please display the items object to the following format:</h3>
      <ul>
        <li>hat stand contains hat</li>
        <li>shelf contains computer, mouse, gloves, keys</li>
      </ul>
      {Object.keys(sortedItems).map(key => <li key={key}>{`${key} contains ${sortedItems[key]}`}</li>)}
      
    </div>
  );
}
