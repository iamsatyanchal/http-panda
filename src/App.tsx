import { useState } from "react";
function App() {
  const [url, seturl] = useState('chutiya');
  return (
    <div className="flex flex-col justify-center items-center bg-green-500">
      <div className="flex flex-col grid grid-cols-3 gap-4">
        {status_codes.map((code) => {
          return <p key={code}>{code}</p>
        })}
      </div>
    </div>
  )
}
export default App;