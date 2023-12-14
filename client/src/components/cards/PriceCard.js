import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context";

const PriceCard = ({ price, handleSubscription, userSubscriptions }) => {
  const [state] = useContext(UserContext);
  const dynamicDescription = () => {
    if (price.nickname === "BASIC") {
      return "5 exclusive features";
    } else if (price.nickname === "STANDARD") {
      return "10 exclusive features";
    } else {
      return "20 exclusive features";
    }
  };
  const buttonStyle = () => {
    return price.nickname === "BASIC" ? "btn-outline-danger" : "btn-danger";
  };
  const headerStyle = () => {
    return price.nickname === "PREMIUM" ? "bg-danger text-light" : "";
  };
  const borderStyle = () => {
    return price.nickname === "PREMIUM" ? "border-danger" : "";
  };
  const buttonText = () => {
    debugger;
    return state && state.token ? "Buy the plan" : "Sign up";
  };

  return (
    <div className="col">
      <div className={`card rounded-3 mb-4 shadow-sm ${borderStyle()}`}>
        <div className={`card-header py-3 ${headerStyle()}`}>
          <h4 className="fw-normal my-0">{price.nickname}</h4>
        </div>

        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            {(price.unit_amount / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
            <small className="text-muted fw-light">/mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li className="fw-bold">{dynamicDescription()}</li>
            <li>Free market analysis</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          {/* <pre>{JSON.stringify(price, null, 3)}</pre> */}
          {/* <Link to="/register"> */}
          {/* <button
            // className="w-100 btn btn-lg btn-outline-danger"
            className={`w-100 btn btn-lg ${buttonStyle()}`}
            onClick={(e) => handleSubscription(e, price)}
          >
            {buttonText()}
          </button> */}

          <button
            onClick={(e) => handleSubscription(e, price)}
            className={`w-100 btn btn-lg ${buttonStyle()}`}
          >
            {userSubscriptions && userSubscriptions.includes(price.id)
              ? "Access plan"
              : buttonText()}
          </button>

          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export { PriceCard };
