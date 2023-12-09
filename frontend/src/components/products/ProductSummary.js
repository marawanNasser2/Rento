//import { useNavigate } from 'react-router-dom';
import Card from '../../UI/Card/Card';
import CardActions from '../../UI/Card/CardActions';
import CardBody from '../../UI/Card/CardBody';
import CardHeader from '../../UI/Card/CardHeader';

const ProductSummary = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  //const navigate = useNavigate();

  const btnOnClickHandler = () => {
    //navigate(`/products/${props.product._id}`);
  };

  return (
    <Card>
      <CardHeader>
        <img
          className="object-scale-down h-[300px]"
          src={props.product.imgURL}
          alt={props.product.name}
        />
      </CardHeader>
      <CardBody>
        <h3 className="font-bold">{props.product.name}</h3>
        <h5>{props.product.price} EGP</h5>
      </CardBody>
      <CardActions>
        <button
          className="bg-white py-3 px-10 font-bold rounded-xl"
          onClick={btnOnClickHandler}
        >
          View
        </button>
      </CardActions>
    </Card>
  );
};

export default ProductSummary;
