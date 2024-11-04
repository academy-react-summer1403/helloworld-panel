// ** Icons Imports
import { Award } from "react-feather";

// ** Custom Components
import Avatar from "@components/common/avatar";

// ** Reactstrap Imports
import { Card, CardBody, CardText } from "reactstrap";

// ** Images
import decorationLeft from "@src/assets/images/elements/decore-left.png";
import decorationRight from "@src/assets/images/elements/decore-right.png";

const CardCongratulations = () => {
  return (
    <Card className="card-congratulations dir">
      <CardBody className="text-center">
        <img
          className="congratulations-img-right"
          src={decorationRight}
          alt="decor-right"
        />
        <img
          className="congratulations-img-left"
          src={decorationLeft}
          alt="decor-left"
        />
        <Avatar
          icon={<Award size={28} />}
          className="shadow"
          color="primary"
          size="xl"
        />
        <div className="text-center">
          <h1 className="mb-1 text-white">HELLO WORLD</h1>
          <CardText className="m-auto w-75">به پنل ادمین خوش آمدید.</CardText>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardCongratulations;
