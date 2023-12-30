import { upperCaseFirstLetter, calculateDuration } from "./helper";

describe("Helper file", () => {
    test("UpperCaseFirstLetter Function", () => {
        const string = "ali"
        const output = upperCaseFirstLetter(string)
        expect(output).toBe('Ali')
    })
    
    test("CalculationDuration Function", () => {
        const start = "2021-05-28T09:35:11.523Z"
        const end = "2021-05-28T11:22:27.523Z"
    
        const duration = calculateDuration(start, end)
        expect(duration).toBe("1h 47min")
    })
})
