import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "rgb(248,248,255)"
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
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Problem
        </Typography> */}
        <Typography variant="h5" component="h2">
          Problem
          {/* {props.cardList.error_message} */}
        </Typography>
        <Typography variant="body2" component="p">
          How it was solved
        </Typography>
        <br />
        <Typography variant="body2" component="p" color="textSecondary">
          By: Username
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          Date
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Read More</Button>
        <Button size="small" color="primary">Docs</Button>
      </CardActions>
    </Card>
  );
}