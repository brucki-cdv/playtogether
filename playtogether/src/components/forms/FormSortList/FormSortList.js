import style from './FormSortList.style.module.css'

const FormSortList = (props) => {
    return (
        <div className={style.container}>
            <label htmlFor="sort">Kolejność:</label><input className={style.formInput} name="sort" id="sort"
                                                                list="sortList" placeholder="Wybierz"/>
            <datalist id="sortList">
                <option>Rosnąco</option>
                <option>Malejąco</option>

            </datalist>
        </div>
    );
}
export default FormSortList;