import style from './FormSportList.style.module.css'

const FormSportList = (props) => {
    return (
        <div className={style.container}>
            <label for="color">Wybierz sport:</label><input className={style.formInput} name="color" id="color" list="colors" placeholder="Wybierz"/>
            <datalist id="colors">
                <option>Siatkówka</option>
                <option>Piłka Nożna</option>
                <option>Tenis</option>
                <option>Hokej</option>
                <option>Siłownia</option>
                <option>Biegane</option>
            </datalist>
        </div>
);
}
export default FormSportList;