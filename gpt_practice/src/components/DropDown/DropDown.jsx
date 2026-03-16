import s from "./DropDown.module.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";

export default function DropDown({
  dropdown,
  activeSort,
  handleToggle,
  isOpen,
  close,
  set
}) {
  const handleSelect = (level) => {
    close();
    set(level)
  };

  return (
    <div className={`${s.sortWrapper} ${isOpen ? s.open : ""}`}>
      <button className={s.sortTrigger} type="button" onClick={handleToggle}>
        Sorted by:<span className={s.active}>{activeSort}</span>
        <span className={s.sortArrow}>
          {!isOpen ? (
            <IoIosArrowDropdownCircle style={{ color: "orange" }} />
          ) : (
            <AiFillCloseCircle style={{ color: "orange" }} />
          )}
        </span>
      </button>
      <ul className={s.sortList}>
        {dropdown.map((item) => (
          <li
            key={item.id}
            className={s.sortItem}
            onClick={() => handleSelect(item.level)}
          >
            {item.level}
          </li>
        ))}
      </ul>
    </div>
  );
}
