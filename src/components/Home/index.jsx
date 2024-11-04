import StatsCard from "@components/common/StatsCard/StatsCard";
import CardCongratulations from "../../components/common/card-congeralution/CardCongratulations";
import {
  Card,
  CardHeader,
  CardBody, 
  CardTitle,
  CardText,
  CardLink,
  Row,
  Col,
} from "reactstrap";

const Home = () => {
  return (
    <div>
      <Card>
      <Card>
        <CardBody>
          <CardCongratulations />
          <CardText className="flex text-center">بهترین ها برای پروژه جدید شما</CardText>
        </CardBody>
        <Row className='match-height'>
        
        <Col >
          <StatsCard  />
        </Col>
      </Row>
      </Card>
        <CardBody>
          <CardText></CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
