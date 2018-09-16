import React from "react";
import Table from "./uiComponents/table.js";
import constants from "../constants";
import actions from "../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({});

const {getList, deleteRecord} = actions;

const {TABLE_DEFINITION, TABLE_DATA} = constants;

class listComponent extends React.Component {
  componentDidMount() {
    this.props.getListAction();
  }

  onDelete = (id) => {
    this.props.deleteRecordAction(id);
  };

  render() {
    const {
      listReducer: {items},
      classes
    } = this.props;
    const tableProps = {
      TABLE_DEFINITION,
      TABLE_DATA: items,
      onDelete: this.onDelete
    };
    return (
      <div style = {{display:'flex', flexDirection:'column', width:'80%' }}>
        <div style={{textDecoration: "none", padding:'20px', display:'flex', flexDirection:'row-reverse'}}>
          <Link
            style={{textDecoration: "none"}}
            to={`/post/new`}
            className="btn btn-primary"
          >
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              New
            </Button>
          </Link>
        </div>
        <Table tableProps={tableProps} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getListAction: getList,
      deleteRecordAction: deleteRecord
    },
    dispatch
  );

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(listComponent)
);
