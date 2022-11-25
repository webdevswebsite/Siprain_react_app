/* eslint-disable quotes */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
// import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
// import { useTranslation } from "next-i18next";
// import brand from "../../../public/text/brand";
// import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import Error from "../../components/Error";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const useStyles = makeStyles((theme) => ({
  dedicatedPage: {
    background:
      theme.palette.type === "dark"
        ? theme.palette.background.default
        : theme.palette.background.paper,
  },
}));

function ErrorPage(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const { errorCode, stars } = props;
  // const { t } = useTranslation("common");

  if (errorCode) {
    return (
      <Fragment>
        {/* <Head> */}
        <title>
          {/* {brand.hosting.name} */}
          &nbsp; -&nbsp;
          {errorCode}
        </title>
        {/* </Head> */}
        <div className={classes.dedicatedPage}>
          <Header
            onToggleDark={onToggleDark}
            onToggleDir={onToggleDir}
            invert
          />
          <Error errorCode={errorCode} text="404" />
          <Footer />
        </div>
      </Fragment>
    );
  }

  return (
    <div className={classes.dedicatedPage}>
      description Next stars:&nbsp;
      {stars}
    </div>
  );
}

ErrorPage.propTypes = {
  errorCode: PropTypes.string,
  stars: PropTypes.number,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

ErrorPage.defaultProps = {
  errorCode: "400",
  stars: 0,
};

// const getStaticProps = makeStaticProps(["common"]);
// export { getStaticPaths, getStaticProps };

export default ErrorPage;
