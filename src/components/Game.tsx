import { useEffect, useState } from "react"
import logo from '../logo.svg';


interface Tile {
    colour: string;
    selected: boolean;
}

interface SelectedIndices {
    x: number;
    y: number;
}

const Game = () => {
    const [tiles, setTiles] = useState<Tile[][]>([]);
    const [selected, setSelected] = useState<SelectedIndices>()


    console.log(tiles);
    useEffect(() => {
        // TODO set tiles
        type Board = Tile[][];


        const generateBoard = (length: number = 4) => {

            const board: Board = [];
            const tileOptions = [{ colour: '#313368', selected: false }, { colour: '#683131', selected: false }, { colour: '#606831', selected: false }, { colour: '#503168', selected: false },];
            for (let rowIndex = 0; rowIndex < length; rowIndex++) {
                let row = [];

                for (let tileIndex = 0; tileIndex < length; tileIndex++) {
                    const randomElement = tileOptions[Math.floor(Math.random() * tileOptions.length)];
                    row.push(randomElement);
                }
                board.push(row);
            }
            return board;
        };
        const b = generateBoard();
        console.log(b);

        setTiles(b);


    }, []);




    return <>
        <h1>Game</h1>
        <div className="container">
            {tiles.length !== 0 && tiles.map((row, rowIndex) => {

                return <div className="row">
                    {row.map((t, tileIndex) => {
                        // return <div className="col-sm">{t.colour}</div>
                        return <img className="col-sm"
                            src={logo}
                            style={{ backgroundColor: t.colour, border: t.selected ? 'dashed' : '' }}
                            height={'80px'}
                            width={'100px'}
                            alt="logo"
                            onClick={() => {
                                setSelected({ x: rowIndex, y: tileIndex })
                                // deselect old tile
                                const newTiles = [...tiles] // duplicates the existing object
                                if (selected) newTiles[selected.x][selected.y].selected = false;// = { ...t, selected: false }
                                newTiles[rowIndex][tileIndex] = { ...t, selected: true }
                                setTiles(newTiles)
                            }}
                        />;

                    })}
                </div>;
            })}
        </div>


    </>;
};
export default Game

