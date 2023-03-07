import { Field, FilterLabel } from "./Filter.styled";
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
    return (
        <FilterLabel htmlFor="">
            Find contacts by name
            <Field type="text" name="filter" value={value} onChange={onChange} />
        </FilterLabel>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};