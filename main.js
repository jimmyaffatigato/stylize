// SAMPLE INPUT
// stylize`background: ${"white"}; margin: 1.5em`
// return { background: "white", margin: "1.5em" }
const camelize = (str) => {
    return str.replace(/-([\w])/g, (string, letter) => {
        return letter.toUpperCase();
    });
};
const stylize = (strings, ...values) => {
    const styles = {};
    strings
        .reduce((prev, cur, i) => {
        return prev + (values[i - 1] ? String(values[i - 1]) : "") + cur;
    })
        .replace(/(?<=^|;)\s*([^:]+)\s*:\s*([^;]+)\s*/g, (m, property, value) => {
        styles[camelize(property)] = value;
        return value;
    });
    return styles;
};
export default stylize;
