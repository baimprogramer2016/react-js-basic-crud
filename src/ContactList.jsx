import { Link } from "react-router-dom";

const ContactList = ({ title, contacts, onDelete }) => {
  return (
    <div className="contact-list">
      <h3>{title}</h3>
      {contacts.map((contact) => (
        <div className="contact" key={contact.id}>
          <div className="contact-info">
            <p className="contact-name">{contact.name}</p>
            <p className="contact-number">{contact.number}</p>
          </div>
          <div className="contact-action">
            <Link to={"/edit/" + contact.id}>
              <button className="btn btn-primary">Edit</button>
            </Link>

            {/* <button //ini pake props
              onClick={() => onDelete(contact.id)}
              className="btn btn-danger"
            >
              Delete
            </button> */}
            <button
              onClick={() => onDelete(contact.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
