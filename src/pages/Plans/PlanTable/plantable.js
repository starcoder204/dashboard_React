import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from 'react-bootstrap/Button';
import './plantable.css';

const useStyles = {
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
};

class PlanTable extends Component {
    constructor(props) {
        super(props);
        this.plan_data = props.plan_data;
        
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleClickAction = this.handleClickAction.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.state = {
            page: 0,
            setPage: 0,
            rowsPerPage: 10,
            setRowsPerPage: 10
        };
        
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };
    
    handleChangeRowsPerPage = event => {
        this.setState({ page: 0, rowsPerPage: event.target.value });
    };

    
    handleClickAction(id) {
        console.log(id);
    }

    render() {
        const header_columns = [
            { 
                id: 'username', 
                label: 'Username', 
                minWidth: 120 
            },
            { 
                id: 'password', 
                label: 'Password', 
                minWidth: 120 
            },
            {
              id: 'active_from',
              label: 'Active from',
              minWidth: 120,
            },
            {
              id: 'expires_at',
              label: 'Expires At',
              minWidth: 120,
            },
            {
              id: 'data_remain',
              label: 'Data Remaining',
              minWidth: 100,
              format: (value) => value + 'GB',
            },
            {
              id: 'action',
              label: 'Action',
              minWidth: 120,
              align: 'center',
            },
        ];
        
        const { classes } = this.props;
        const { rowsPerPage, page } = this.state;
        return (
            <div className="main-block plan-table-block">
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {header_columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.plan_data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            {header_columns.map((column) => {
                                const value = row[column.id];
                                if (column.id == 'action') {
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                            <Button onClick={() => this.handleClickAction(row.id)} variant={row.action == 1 ? "danger" : "info"}>{row.action == 1 ? 'Select' : 'Deselect'}</Button>
                                        </TableCell>
                                    );
                                } else {
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                        </TableCell>
                                    );
                                }
                                
                            })}
                            </TableRow>
                        );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    labelRowsPerPage="Per page"
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={this.plan_data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{native: true}}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
            </div>
        );
    }
    
};

PlanTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(PlanTable);


