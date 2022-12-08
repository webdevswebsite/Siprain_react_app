import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import { useTranslation } from 'next-i18next';
import useStyles from "./cards-style";
import {CurrencyState} from '../../context/CurrencyContext'

function Pricing(props) {

  const {
    state: {currency, rate}
  } = CurrencyState()

  console.log(currency, rate)
  
  const classes = useStyles();
  // const { t } = useTranslation('common');
  const { title, price, img, featureList, desc, highlighted } = props;
  let priceToNum = parseInt(price)
  return (
    <Paper
      className={clsx(classes.pricing, highlighted && classes.highlighted)}
    >
      <div className={classes.title}>
        <Typography variant="h6">{title}</Typography>
        <img src={img} alt="img" />
        <Typography variant="h5">
          {currency}
          {/* {price > 0 && ({currency})} */}
          {price > 0 ? (
            <Fragment>
              {currency !== '$' ? priceToNum * rate : price}
              {/* {price} */}
              <span>/mo</span>
            </Fragment>
          ) : (
            "Free"
          )}
        </Typography>
        <Typography display="block" className={classes.desc}>
          {desc}
        </Typography>
      </div>
      <ul className={classes.feature}>
        {featureList.map((item, index) => (
          <li key={index.toString()}>
            {item.type === "plus" ? (
              <span className={clsx(classes.icon, classes.success)}>
                <i className="ion-ios-checkmark-circle-outline" />
              </span>
            ) : (
              <span className={clsx(classes.icon, classes.error)}>
                <i className="ion-ios-close-circle-outline" />
              </span>
            )}
          </li>
        ))}
      </ul>
      {/* <div className={classes.btnArea}>
        <Button
          fullWidth
          variant="contained"
          color={highlighted ? "secondary" : "primary"}
          className={classes.button}
          size="large"
        >
          Get Started
        </Button>
      </div> */}
    </Paper>
  );
}

Pricing.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  price: PropTypes.number.isRequired,
  featureList: PropTypes.array.isRequired,
  desc: PropTypes.string.isRequired,
  highlighted: PropTypes.bool,
};

Pricing.defaultProps = {
  highlighted: false,
  img: "/images/hosting/home.png",
};

export default Pricing;
