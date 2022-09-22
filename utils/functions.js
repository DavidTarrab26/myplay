export const generateRandomNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNum = Math.floor(Math.random() * (max-min) + min)
    if (randomNum === exclude) {
        return generateRandomNumberBetween(min, max, exclude)
    }else {
        return randomNum
    }
}