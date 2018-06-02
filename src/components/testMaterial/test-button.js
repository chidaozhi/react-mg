import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        backgroundColor: 'red',
    },
};
class AppButton extends React.Component {
    render () {
        return (
            <Button variant="raised" color="primary" className={this.props.classes.root}>
                Hello World
            </Button>
        );
    }
}

export default withStyles(styles)(AppButton);