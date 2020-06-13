/// <reference lib="dom" />
import * as CSS from "csstype";

const camelize = (str: string): string => {
    return str.replace(/-([\w])/g, (string, letter: string) => {
        return letter.toUpperCase();
    });
};

const stylize = (strings: TemplateStringsArray, ...values: (string | number)[]): CSS.Properties<string | number> => {
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
