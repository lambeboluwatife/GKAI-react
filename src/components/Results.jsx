const Results = ({ results }) => {
  return (
    <>
      {results.map((result) => (
        <div className="output text-muted" key={result.id}>
          <strong>
            {result.userNumbers.join("")} = {result.inj} Injured and{" "}
            {result.killCount} Killed
          </strong>
        </div>
      ))}
    </>
  );
};

export default Results;
