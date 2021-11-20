import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useStateInLocalStorage from "../hooks/localStorageHook";
import style from "../header/Filter.module.css";
import { getUsersOperation } from "../../redux/users/usersOperations";

export const Filter = () => {
  const [filterGender, setFilterGender] = useState("");
  const [filterNationality, setFilterNationality] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const dispatch = useDispatch();

  const [getStorageFilter, setStorageFilter] =
    useStateInLocalStorage("FilteredUsers");

  useEffect(() => {
    if (getStorageFilter.length === 0) {
      setStorageFilter(newFilter);
    }
  }, [newFilter, setStorageFilter]);

  const handleFilterNat = (value) => {
    if (!filterNationality.find((nat) => nat === value)) {
      setFilterNationality([...filterNationality, value]);
    }

    if (filterNationality.find((nat) => nat === value)) {
      const result = filterNationality;
      const index = result.indexOf(value);
      result.splice(index, 1);
      setFilterNationality(result);
    }
  };

  const filterAllUsers = (e) => {
    e.preventDefault();
    const filter = `${
      filterNationality.length > 0
        ? `nat=${filterNationality.join(",").toLowerCase()}`
        : ""
    }${filterGender ? `&gender=${filterGender}` : ""}`;
    setNewFilter(filter);
    dispatch(getUsersOperation(filter));
  };

  return (
    <form className={style.filterForm} onSubmit={filterAllUsers}>
      <label className={style.label} htmlFor="filterGender">
        gender
        <select
          value={filterGender}
          onChange={(e) => setFilterGender(e.target.value)}
          name="gender"
          id="filterGender"
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <label className={style.label} htmlFor="filterNationality">
        nationality
        <select
          multiple
          value={filterNationality}
          onChange={(e) => handleFilterNat(e.target.value)}
          name="nationality"
          id="filterNationality"
        >
          <option value="AU">AU</option>
          <option value="BR">BR</option>
          <option value="CA">CA</option>
          <option value="CH">CH</option>
          <option value="DE">DE</option>
          <option value="DK">DK</option>
          <option value="ES">ES</option>
          <option value="FI">FI</option>
          <option value="FR">FR</option>
          <option value="GB">GB</option>
          <option value="IE">IE</option>
          <option value="IR">IR</option>
          <option value="NO">NO</option>
          <option value="NL">NL</option>
          <option value="NZ">NZ</option>
          <option value="TR">TR</option>
          <option value="US">US</option>
        </select>
      </label>
      <button type="submit">Apply filters</button>
    </form>
  );
};
