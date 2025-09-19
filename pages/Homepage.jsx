const Homepage = () => {
  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-12">
          <h2 className="text-center my-3">Homepage</h2>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="movie-card">
            <img src="./imgs/inception.jpg" alt="" />
            <div className="overlay"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Homepage;
