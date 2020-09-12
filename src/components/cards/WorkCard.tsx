import React from 'react';
import './cards.css';
import WorkIcon from '@material-ui/icons/Work';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        fontSize:40,
        color:'rgb(55, 227, 92)'
    },
});

const WorkCard:React.FC = () => {
    const classes = useStyles()

    return (
        <div className='work__card__container'>
            <div className="work__card">
                <div className="card__icon">
                    <WorkIcon className={classes.icon} />
                </div>
                <div className="card__amount">$0 USD</div>
                <div className="card__title">IN PROGRESS</div>
            </div>
            <div className="work__card middle">
                <div className="card__icon">
                    <MonetizationOnIcon className={classes.icon}/>
                </div>
                <div className="card__amount">$0 USD</div>
                <div className="card__title">WITHDRAWN</div>
            </div>
            <div className="work__card">
                <div className="card__icon">
                    <ListIcon className={classes.icon}/>
                </div>
                <div className="card__amount">0</div>
                <div className="card__title">ONGOING</div>
            </div>
        </div>
    );
};

export default WorkCard;
