import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "./api/contact-api";

const Create = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  //++++++++++++++ start submit dan update ++++++++++++++++++++
  const handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name,
      number,
    };
    setLoading(true);
    if (id) {
      //ada id berarti update
      updateContact(contact);
    } else {
      //jika kosong add
      createContact(contact);
    }
  };

  //fungsi update
  const updateContact = (contact) => {
    Api.put("/contacts/" + id, contact).then(() => {
      setLoading(false);
      navigate("/");
    });
  };

  //fungsi simpan
  const createContact = (contact) => {
    Api.post("/contacts/", contact).then(() => {
      setLoading(false);
      navigate("/");
    });
  };
  //END :++++++++++++++ end submit dan update ++++++++++++++++++++

  //+++++++++++++++ start edit +++++++++++++++
  useEffect(() => {
    if (id) {
      Api.get("/contacts/" + id).then((res) => {
        // const { data } = res;
        setName(res.data.name);
        setNumber(res.data.number);
      });
    }
  }, [id]);

  //++++++++++++++ end edit ++++++++++++++++++++
  return (
    <div className="contact-form">
      <h3>{id ? "Update " : "Add "} Contact</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label">Contact Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="control-label">Contact Handphone</label>
          <input
            type="number"
            className="form-control"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <button className="btn btn-danger" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button className="btn btn-primary">
            {loading ? "Updated..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
