import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import Api from "./api/contact-api";

//list data
const Home = () => {
  // const [contacts, setContact] = useState([
  //   { id: 1, name: "Anhari Chaniagox", number: "0847488593" },
  //   { id: 2, name: "Nisma Yuhu", number: "8432742342" },
  //   { id: 3, name: "Baim Ganteng", number: "989448234" },
  // ]);
  const [contacts, setContact] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //delete data
  // const handleDelete = (id) => {
  //   const filterContact = contacts.filter((contact) => contact.id != id);
  //   setContact(filterContact);
  // };

  // const [nakama, setNakama] = useState("Robin");

  const handleDelete = (id) => {
    Api.delete("/contacts/" + id).then((res) => {
      console.log(res);
    });
  };

  const fetchContact = () => {
    Api.get("/contacts")
      .then((res) => {
        setContact(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //menarik data dari API database
  useEffect(() => {
    fetchContact();
  }, [handleDelete]); //kasih efek setelah funtion handleDelete di click

  //   useEffect(() => {
  //     console.log("user Effect Called 2");
  //   }, [nakama]);

  return (
    <div className="home">
      {loading && <div>Loading .... </div>}
      {error && <div>{error}</div>}
      {contacts && ( //jika tidak null kanan beraksi (conditional rendering)
        <ContactList
          contacts={contacts}
          title="All Contact"
          onDelete={handleDelete}
        />
      )}
      {/* onDelete={handleDelete} */}
      {/* <button onClick={() => setNakama("Franki")}>Update Nakama</button> */}
    </div>
  );
};

export default Home;

//beljar yang lama
//   const [like, setLike] = useState(0);
//   const [dislike, setDislike] = useState(0);

//   const handleClick = () => {
//     setLike(like + 1);
//   };

//   const disLikeHandle = () => {
//     setDislike(dislike + 1);
//   };

//   const [person, setPerson] = useState({
//     firstName: "Roronoa",
//     lastName: "Zoro",
//     age: 22,
//     address: {
//       address1: "Jogja",
//       address2: "Malang",
//     },
//   });

//   const handleUpdateAge = () => {
//     setPerson({
//       ...person,
//       age: 55,
//     });
//   };

//   const handleUpdateAddress = () => {
//     setPerson({
//       ...person,
//       address: {
//         ...person.address,
//         address1: "Surabaya",
//       },
//     });
//   };
//
{
  /* <h5>Like {like}</h5>
      <h5>Dislike {dislike}</h5> */
}
{
  /* <button onClick={handleClick}>Like</button>
      <button onClick={disLikeHandle}>Dis - Like</button> */
}

{
  /* <div>Firstname : {person.firstName}</div>
      <div>Lastname : {person.lastName}</div>
      <div>age : {person.age}</div>
      <div>address : </div>
      <ul>
        <li> {person.address.address1}</li>
        <li> {person.address.address2}</li>
      </ul>
      <button onClick={handleUpdateAge}>Update Age</button>
      <button onClick={handleUpdateAddress}>Update Address</button> */
}
