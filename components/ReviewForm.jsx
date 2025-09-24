import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const ReviewForm = ({ bookId }) => {
  const apiUrl = `http://localhost:3000/movies/${bookId}/review`;

  const [formData, setFormData] = useState({
    text: "",
    vote: "",
    name: "",
  });

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    const obj = {
      ...formData,
      [name]: value,
    };
    setFormData(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, formData, {
        headers: { "Content-type": "application/json" },
      })
      .then((resp) => {
        setFormData({
          name: "",
          text: "",
          vote: "",
        });
      });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-center text-light">Aggiungi una recensione</h3>
        <Link className="home text-light ms-4" to="/">
          <i className="fa-solid fa-house-chimney"></i>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row bg-violet rounded p-3 mb-4">
          <div className="col-12 col-md-6  text-light rounded">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Inserisci il tuo nome"
              name="name"
              id="name"
              value={formData.name}
              onChange={setFieldValue}
            />
          </div>

          <div className="col-12 col-md-6 text-light rounded">
            <label htmlFor="vote" className="form-label">
              Voto
            </label>
            <input
              type="number"
              className="form-control"
              min="0"
              max="5"
              placeholder="Da 0 a 5"
              name="vote"
              id="vote"
              value={formData.vote}
              onChange={setFieldValue}
            />
          </div>

          <div className="col-12 text-light rounded">
            <label htmlFor="text" className="form-label">
              Testo recensione
            </label>
            <textarea
              className="form-control"
              placeholder="Scrivi la tua recensione"
              name="text"
              id="text"
              rows="4"
              value={formData.text}
              onChange={setFieldValue}
            ></textarea>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-outline-light mt-4 ">
              Invia
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
