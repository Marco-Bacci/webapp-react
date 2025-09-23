const ReviewForm = () => {
  return (
    <div className="container">
      <h3 className="mb-4 text-center c-violet">Aggiungi una recensione</h3>
      <form>
        <div className="row gy-3">
          <div className="col-12 col-md-6 bg-violet p-3 text-light rounded">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Inserisci il tuo nome"
              name="name"
              id="name"
            />
          </div>

          <div className="col-12 col-md-6 bg-violet p-3 text-light rounded">
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
            />
          </div>

          <div className="col-12 bg-violet p-3 text-light rounded">
            <label htmlFor="text" className="form-label">
              Testo recensione
            </label>
            <textarea
              className="form-control"
              placeholder="Scrivi la tua recensione"
              name="text"
              id="text"
              rows="4"
            ></textarea>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary mb-4">
              Invia
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;