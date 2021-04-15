import React, {Component} from 'react';


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const useStyles = then =>({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        width: "auto",
        alignItems: "center",
        alignContent: "center",


    },
    titleCardGreen: {
        fontSize: 20,
        color: "#0f5f04",
        font: "italic",

    },
    titleCardBlack: {
        fontSize: 20,
        color: "#050505",
        font: "italic",

    },
    titleCardRed: {
        fontSize: 20,
        color: "#790010",
        font: "italic",

    },

});

class CardFunction extends Component{
    constructor(props){
        super(props);
    }

    render() {

        const {classes} = this.props;

        const imagenLoad = () => {
            console.log("************************************",this.props.info.fileUrl);
            let data = new FormData();
            data.append('file', this.state.file);

            axios.get('http://localhost:8080/api/files/'.concat(this.props.info.fileUrl)).then(function (response) {
                console.log("This is my todolist:  ", response.data);
                })
                .catch(function (error) {
                    console.log("failed file upload");
                });
        };

        return (
            <Card className={classes.root}>
                <CardContent>

                    {this.props.info.status==="in progress" && <Typography className={classes.titleCardGreen} color="textPrimary" gutterBottom>{this.props.info.description}</Typography>}
                    {this.props.info.status==="ready" && <Typography className={classes.titleCardBlack} color="textPrimary" gutterBottom>{this.props.info.description}</Typography>}
                    {this.props.info.status==="done" && <Typography className={classes.titleCardRed} color="textPrimary" gutterBottom>{this.props.info.description}</Typography>}
                    <br></br>
                    <Typography variant="h7" component="h5" >
                        {this.props.info.responsible.name}
                    </Typography>
                    <Typography variant="h7" component="h5" >
                        {this.props.info.responsible.email}
                    </Typography>
                    <Typography variant="h7" component="h4">
                        {this.props.info.status}
                    </Typography>
                    <Typography variant="h7" component="h5">
                        {new Date(this.props.info.dueDate).toDateString()}
                    </Typography>
                    <td>
                        {console.log("-------------------------------------------------","/////////////////////////////////////////////////",this.props.info.fileUrl)}
                        {this.props.info.fileUrl ? <img /> : <div/>}
                        </td>
                </CardContent>
            </Card>
        );
    }
}
export default withStyles(useStyles, { withTheme: true })(CardFunction);
