import React, { Fragment, useEffect, useContext } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

const Basic = () => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();
  const match = useMatch("/basic");
  useEffect(() => {
    let result = [];
    const check = () =>
      state &&
      state.user &&
      state.user.subscriptions &&
      state.user.subscriptions.map((sub) => {
        result.push(sub.plan.nickname);
      });
    check();
    // console.log("MATCH", match);

    if (state.token) {
      const plan = match.pathname.split("/")[1].toUpperCase(); // basic
      if (!result.includes(plan)) {
        navigate("/");
      }
    }
  }, [state && state.user]);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row bg-light py-5 text-center">
          <h1 className="display-4 fw-bold">BASIC</h1>
          <p className="lead">Here are your 5 exclusive stocks of this month</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 bg-dark text-light rounded p-5">
            <ul className="lead">
              <li>Tesla</li>
              <li>Microsoft</li>
              <li>PayPal</li>
              <li>Square</li>
              <li>Alibaba</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>Market analysis</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ratione pariatur ab unde voluptatem ea, quae veniam
              aperiam sint porro aliquid animi eveniet, culpa id reiciendis vel
              nihil veritatis qui.
            </p>
            <h4>Email support</h4>
            <p>subscriptions@domain.com</p>
            <h4>Help center</h4>
            1300 123 456
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Basic;
