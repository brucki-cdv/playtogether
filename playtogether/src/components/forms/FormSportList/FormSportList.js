import style from './FormSportList.style.module.css'

const FormSportList = (props) => {
    return (
        <div className={style.container}>
            <label for="color">Wybierz sport:</label><input className={style.formInput} name="color" id="color" list="colors" placeholder="Wybierz"/>
            <datalist id="colors">
                <option>Red</option>
                <option>Yellow</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Orange</option>
                <option>Purple</option>
                <option>Black</option>
                <option>White</option>
                <option>Gray</option>
            </datalist>
        </div>
);
}
export default FormSportList;