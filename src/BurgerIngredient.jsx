import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div id="BreadTop">
            <div id="Seeds1"></div>
            <div id="Seeds2"></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className="Meat"></div>;
        break;
      case "cheese":
        ingredient = <div className="Cheese"></div>;
        break;
      case "bacon":
        ingredient = <div className="Bacon"></div>;
        break;
      case "salad":
        ingredient = <div className="Salad"></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
