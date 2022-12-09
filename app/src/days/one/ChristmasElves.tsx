import {FC} from "react";
import input from './input'


export const ChristmasElves: FC = () => {
    const result = input.split("\n")
    let total = 0;
    const resultArray: Number[] = []

    result.forEach((value) => {
        if (value !== "") {
            total += Number(value);
        } else {
            resultArray.push(Number(total));
            total = 0;
        }
    })

    resultArray.sort((a : Number, b : Number) => {
        return Number(a) - Number(b);
    });

    const elveCarryingTheMost = Number(resultArray[resultArray.length - 1]);
    const finalResult = Number(resultArray[resultArray.length - 1]) + Number(resultArray[resultArray.length - 2]) + Number(resultArray[resultArray.length - 3]);

    return (
        <div>
            <h1>Advent Of Code - Elves problems</h1>
            <p>The elve carrying the most is carrying : {elveCarryingTheMost} calorie(s)</p>
            <p>The sum of the three elves carrying the most is : {finalResult} calorie(s)</p>
        </div>
    )
}