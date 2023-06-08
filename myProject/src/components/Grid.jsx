export default function Grid(props) {
    const { grid, handlePlay } = props;
  
    const checkWinner = () => {
      const wCond = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6], 
      ];
      for (let condition of wCond) {
        const [a, b, c] = condition;
        if (grid[a].text !== "" && grid[a].text === grid[b].text && grid[a].text === grid[c].text) {
          return grid[a].text; 
        }
      } 
      return null; 
    };
  
    const winner = checkWinner(); 
    return (
      <div className="grid grid-cols-3 m-auto w-fit">
        {grid.map((element) => (
          <div key={element.id} className="relative group">
            <div className="absolute transition duration-500 opacity-75 -inset-1 bg-gradient-to-r from-slate-950 via-red-600 to-stone-700 blur group-hover:opacity-100"></div>
            <button
              onClick={() => handlePlay(element.id)}
              className="relative w-24 h-24 transition duration-500 bg-slate-950 hover:bg-slate-800"
            >
              {element.text}
            </button>
          </div>
        ))}
        {winner && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-bold">Winner: {winner}</h2>
          </div>
        )}
      </div>
    );
  }
  