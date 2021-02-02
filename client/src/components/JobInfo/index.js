import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import {
  Container,
  HeaderWrapper,
  CompanyLogo,
  BackButton,
  Wrapper,
  ApplyWrapper,
} from "./styled";

const JobInfo = ({ job }) => {
  const history = useHistory();
  const { company, title, location, created_at, type } = job;
  return (
    <Container>
      <Wrapper>
        <BackButton onClick={() => history.goBack()}>Go Back</BackButton>
        <div>
          <CompanyLogo src={company.logo_url || ""} alt={company.name} />
          <h1 className="company_link">
            <a target="_blanck" href={company.url}>
              {company.name}
            </a>
          </h1>
          <h1>{title}</h1>
          <HeaderWrapper>
            <h3>{location}</h3>
            <h3>{type}</h3>
            <h3>
              {moment(created_at, "ddd MMM DD HH:mm:ss YYYY")
                .startOf("second")
                .fromNow()}
            </h3>
          </HeaderWrapper>
          <ApplyWrapper>
            <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
          </ApplyWrapper>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>
      </Wrapper>
    </Container>
  );
};

export default JobInfo;
