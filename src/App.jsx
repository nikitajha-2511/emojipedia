import { useState } from 'react';
import emojis from "unicode-emoji-json";
console.log(emojis);
import './App.css'

function App() {
  const [search,setSearch]=useState("");
  const emojiList =Object.entries(emojis).map(([emoji,info])=>({emoji,...info}));  //filter work on array and thats why we converted it into array
  const filteredEmojis = emojiList.filter((item) =>{ 
    const searchText= search.toLowerCase(); //if user types hAppY then must convert it to lowercase to everything
  return (
    item.name.toLowerCase().includes(searchText)
    // || item.keywords.some((keyword)=>    //some: means atleast one out of many
    // keyword.toLowerCase().includes(searchText))
  );
  
  }); 
  function handleChange(event)
  {
    setSearch(event.target.value);
  }

  return (
    <div className="app">
      <h1>😍Emoji Search</h1>
      <input
        type="text"
        placeholder="Search for an emoji"
        value={search}
        onChange={handleChange}

      />
      {search &&
      <div className='emoji-container'> 
        {filteredEmojis.map((item)=>(
          <div className='emoji-card' key={item.name}>
            <span className='emoji'>{item.emoji}</span>
            <p>{item.name}</p>
          </div>

        ))    //we will get emoji information that we will need to map
        }

      </div>
      }
    </div>
    
    );
}
export default App;
