import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from "@material-ui/core/Avatar";
import CardFunction from "./CardFunction";
import {NewTask} from "./NewTask";
import Filter from "./Filter";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";


const drawerWidth = 240;

const useStyles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "#a7e7a5"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    rootCard: {
        width: "auto",
        alignItems: "center",
        alignContent: "center",
        marginBottom: "100%",

    },
    avatar: {
        backgroundColor: "#a7e7a5",
    },
    pos:{
        margin: "auto"
    }

});

function setTask (result){
    console.log(this.state.tasks);
    this.setState({tasks: this.state.tasks.concat(result)});
    console.log(result, "asdfasfsadfsdfsadfsadfsadfasdfsadfsadfsadfasdfasdf");
}

class DrawerComponent extends React.Component{

    state = {
        open: false,
        tasks: [
            {
                "description": "Implement Login View ",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail"
                },
                "status": "ready",
                "dueDate": 156464645646,
                "fileUrl": "lion.jpeg"
            },
            {
                "description": "Implement Login View ",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail"
                },
                "status": "in progress",
                "dueDate": 156464645646
            },
            {
                "description": "Implement Login View ",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail"
                },
                "status": "done",
                "dueDate": 156464645646
            },
        ]
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };



    render(){
        const classes = this.props;
        const theme = this.props;
        const {open} = this.state;
        return (
            <Router>

                <div className={classes.root}>

                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <ListItem>
                                <ListItemIcon>{
                                    <Avatar aria-label="recipe" className={classes.avatar} >D</Avatar>
                                }</ListItemIcon>
                                <ListItemText primary={this.props.info.nombre} secondary={this.props.info.correo} />
                            </ListItem>
                        </List>
                        <Divider />
                    </Drawer>
                    <main
                        className={clsx(classes.content, {
                            [classes.contentShift]: open,
                        })}
                    >
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div align="center">
                            <Filter/>
                        </div>
                        <div align="left"  >
                            { this.state.tasks.map( task => {
                                return(<CardFunction  info={task}/>);
                            })}
                        </div>
                        <Link to="/Add">
                            <Fab color="priinherit" aria-label="add" >
                                <AddIcon />
                            </Fab>
                        </Link>
                        <Switch>
                            <Route exact path="/Add">
                                <NewTask/>
                            </Route>

                        </Switch>

                    </main>
                </div>
            </Router>

        );

    }

}
DrawerComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(useStyles, {withTheme: true})(DrawerComponent);