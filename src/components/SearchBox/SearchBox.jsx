import React from 'react';
import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilters } from '../../redux/filters/selectors';

function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilters);
    return (
        <div>
            <label className={css.formLabel}>
                <span className={css.headText}>Find contacts by name</span>
                <input type="text" value={filter} onChange={e => dispatch(changeFilter(e.target.value))} />
            </label>
        </div>
    );
}

export default SearchBox;