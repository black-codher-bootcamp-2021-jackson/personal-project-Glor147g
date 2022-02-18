const Testimonials = () => {
  return (
    <>
      <div className="title">
        <div className="test-1">
          <h2>
            " The App is such a great idea, simple no fuss and i love that we
            get to see the books we've read".
          </h2>
          <h3>Lisa South Norwood </h3>
        </div>
        <div className="test-2">
          <h2>
            " It's a great little tracker App! The notifications remind us to
            just read and also I love that we get to see the books we've read."{" "}
          </h2>
          <h3>Tony, Jersey </h3>
        </div>

        <div className="test-3">
          <h2
            style={{
              color: "blue",
              backgroundColor: "#f1356d",
            }}
          >
            " I love connecting with my son, we bond and spend time together
            regularly with no disruptions."
          </h2>
          <h3> Oksana, Manchester </h3>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
