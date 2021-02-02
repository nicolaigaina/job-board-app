import React from "react";
import DefaultJobLogo from "../../assets/default-company-logo.png";
import { Link } from "react-router-dom";
import moment from "moment";
import { Container, CompanyLogo, Wrapper } from "./styled";

const Card = ({ job }) => {
  const { id, company, location, type, created_at, title } = job;
  return (
    <Container>
      <Wrapper>
        <CompanyLogo
          src={company.logo_url || DefaultJobLogo}
          alt="Comapany name"
        />
        <h1>{title}</h1>
        <h2 className="location">{location}</h2>
        <h3>{type}</h3>
        <p>
          {moment(created_at, "ddd MMM DD HH:mm:ss YYYY")
            .startOf("second")
            .fromNow()}
        </p>
        <Link to={`/job/${id}`}>
          <button>View Job</button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Card;
