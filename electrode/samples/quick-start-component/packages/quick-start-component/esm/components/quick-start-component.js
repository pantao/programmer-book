import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
// This is a bundled demo
// you should remove this to work on
// your own component.

import React from "react";
import propTypes from "prop-types";

// remember to also remove the bundled demo CSS files
// from ../styles

import styles from "../styles/quick-start-component.css";
import Accordion from "./accordion";

var _ref = React.createElement(
  "h4",
  null,
  "Demo Component"
);

var QuickStartComponent = function (_React$Component) {
  _inherits(QuickStartComponent, _React$Component);

  function QuickStartComponent() {
    _classCallCheck(this, QuickStartComponent);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  QuickStartComponent.prototype.render = function render() {
    var data = this.props.data;

    return React.createElement(
      "div",
      { className: styles.container },
      _ref,
      data.map(function (d, x) {
        return React.createElement(Accordion, { key: x, summary: d.summary, details: d.details });
      })
    );
  };

  return QuickStartComponent;
}(React.Component);

export default QuickStartComponent;


QuickStartComponent.displayName = "QuickStartComponent";

QuickStartComponent.propTypes = {
  data: propTypes.array
};

QuickStartComponent.defaultProps = {};