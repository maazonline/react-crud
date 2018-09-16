import React from "react";
import Table from "./uiComponents/table.js";
import constants from "../constants";
import actions from "../actions";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Field, reduxForm} from "redux-form";
import {TextField} from "redux-form-material-ui";

const {TABLE_DEFINITION, TABLE_DATA} = constants;

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  menu: {
    width: 200
  }
});

const {getDetail, saveDetail} = actions;

class detailComponent extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: {postId}
      }
    } = this.props;
    if (postId) this.props.getDetailAction(postId);
  }

  handleFormSubmit = (values) => {
    debugger;
    console.log(values);
    this.props.saveDetailAction(values);
    this.props.history.push('/posts')
  };

  render() {
    const {classes} = this.props;
    const {handleSubmit, pristine, reset, submitting} = this.props;

    return (
      <div>
        <form
          className={classes.container}
          onSubmit={handleSubmit(this.handleFormSubmit)}
          noValidate
          autoComplete="off"
          style= {{ display: 'grid'}}
        >
          {TABLE_DEFINITION.map((item) => {
            return (
              <Field
                key={item.key}
                name={item.key}
                component={TextField}
                hintText={item.label}
                floatingLabelText={item.label}
                label={item.label}
                ref={item.key}
                withRef
              />
            );
          })}

          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Link
              style={{textDecoration: "none"}}
              to={`/posts`}
              className="btn btn-primary"
            >
              <Button
                size="small"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Cancel
              </Button>
            </Link>
            <Button
              size="small"
              variant="contained"
              color="primary"
              type="submit"
              disabled={submitting}
              className={classes.button}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialValues: state.detailReducer.items
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getDetailAction: getDetail,
      saveDetailAction: saveDetail
    },
    dispatch
  );

const detailComponentWithStyle = reduxForm({
  form: "detailForm",
  enableReinitialize: true
})(detailComponent);

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(detailComponentWithStyle)
);
