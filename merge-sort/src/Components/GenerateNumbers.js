const pro_IntDigit = () => Math.floor(Math.random() * (100 - 0)) + 0
const randomizeNewArray = () => {
    let temp = []
    for (let i = 0; i < 10; i++) {
        let item = (pro_IntDigit())
        temp.push(item)
    }
    const random_val = (temp) => {
        temp.sort(function (a, b) {
            return b - a;
        })
    }
    random_val(temp)
    console.log(temp);
    return temp
}
export default randomizeNewArray