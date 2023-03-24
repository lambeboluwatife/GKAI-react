const WinModal = ({ results, win }) => {
  return (
    <div id="myModal" className="modal2">
      <div className="modal2-content">
        <div className="modal2-header">
          <h2>
            <b>You Won</b>
          </h2>
          <i className="fab fa-happy"></i>
        </div>
        <div className="modal2-body">
          <b>
            <h2>You Got All Numbers Correctly</h2>
            <h6>and you tried it {results.length} times.</h6>
          </b>
        </div>
        <div className="modal2-footer">
          <button type="button" className="btn btn-light" onClick={win}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinModal;
