import s from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <div className={s.contact_item_wrap}>
        <span>
          <IoPersonSharp /> {name}
        </span>
        <span>
          <FaPhoneAlt /> {number}
        </span>
      </div>
      <button onClick={() => onDelete(id)} className={s.contact_btn_delete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
