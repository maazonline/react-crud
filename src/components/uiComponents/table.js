import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

function CustomizedTable(props) {
  const {
    classes,
    tableProps: {TABLE_DATA: data, TABLE_DEFINITION, onDelete}
  } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {TABLE_DEFINITION.map((row) => {
              return <CustomTableCell key={row.key} >{row.label}</CustomTableCell>;
            })}
            <CustomTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            return (
              <TableRow className={classes.row} key={row.id}>
                {TABLE_DEFINITION.map((cols) => {
                  return <CustomTableCell key={cols.key} >{row[cols.key]}</CustomTableCell>;
                })}
                <CustomTableCell style={{width:150}}>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                  <Link
                    style={{textDecoration: "none"}}
                    to={`/post/${row.id}`}
                    className="btn btn-primary"
                  >
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                    >
                      Edit
                    </Button>
                  </Link>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    onClick={() => onDelete(row.id)}
                  >
                    Delete
                  </Button>
                  </div>
                </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
