import { useEffect, useState } from "react"

interface Tile {
    colour: string;
}

export default () => {
    const [tiles, setTiles] = useState<Tile[][]>([]);
    console.log(tiles)
    useEffect(() => {





        // TODO set tiles
        type Board = Tile[][]

        const generateBoard = (length: number = 10) => {

            const board: Board = [];
            const tileOptions = [{ colour: 'blue' }]
            for (let rowIndex = 0; rowIndex < length; rowIndex++) {
                let row = []
                for (let tileIndex = 0; tileIndex < length; tileIndex++) {
                    const randomElement = tileOptions[Math.floor(Math.random() * tileOptions.length)];
                    row.push(randomElement)
                }
                board.push(row)
            }
            return board
        }
        const b = generateBoard();
        console.log(b);

        setTiles(b)


    }, [])


    return <>
        <h1>Game</h1>

        {tiles.length !== 0 && tiles.map(row => {

            return <div>
                {row.map(t => {
                    return <div>{t.colour}</div>
                })}
            </div>
        })}

    </>
}

