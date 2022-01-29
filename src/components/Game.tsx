import { useEffect, useState } from "react"

interface Tile {
    colour: string;
}

export default () => {
    const [tiles, setTiles] = useState<Tile[][]>([]);
    console.log(tiles)
    useEffect(()=> {

        setTiles( [
            [{colour:'blue'}, {colour:'blue'}], 
                [{colour:'red'}]
                ])

        // TODO set tiles


        // const generateBoard = (length: number=10) => {

        //     const board: Board = [];
        //     const tileOptions = ['?', '#', 'W', '0']
        //     for (let rowIndex = 0; rowIndex < length; rowIndex++) {
        //         let row = []
        //         for (let tileIndex = 0; tileIndex < length; tileIndex++) {
        //             const randomElement = tileOptions[Math.floor(Math.random() * tileOptions.length)];
        //             row.push(randomElement)
        //         }
        //         board.push(row)
        //     }
        //     return board
        // }





    },[])

    return <>
    <h1>Game</h1>

    {tiles.length !== 0 && tiles.map(row=> {

        return <div>
            {row.map(t => {
                return <div>{t.colour}</div>
            })}
        </div>
    })}

    </>
}

