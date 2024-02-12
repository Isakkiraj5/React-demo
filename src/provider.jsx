import { newcontext } from './contexthooks/context';
import colorchange from './color.json'
const Provider = ({ children }) => {
    const colorred = colorchange && colorchange.colors && colorchange.colors.red.map((item, index) => {
        return item;
    });
    const colorblue = colorchange && colorchange.colors && colorchange.colors.blue.map((item, index) => {
        return item;
    });
    const colorgreen = colorchange && colorchange.colors && colorchange.colors.green.map((item, index) => {
        return item;
    });
    const colorYellow = colorchange && colorchange.colors && colorchange.colors.Yellow.map((item, index) => {
        return item;
    });

    const colorGrey = colorchange && colorchange.colors && colorchange.colors.Grey.map((item, index) => {
        return item;
    });

    const colorFancy = colorchange && colorchange.colors && colorchange.colors.Fancy.map((item, index) => {
        return item;
    });



    return (
        <newcontext.Provider value={{ colorred ,colorblue,colorgreen,colorYellow,colorGrey,colorFancy}}>
            {children}
        </newcontext.Provider>
    );
};


export default Provider