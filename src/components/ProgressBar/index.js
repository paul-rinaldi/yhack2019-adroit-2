class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="progressBar">
                <div
                    className="currentProgress"
                    style={{width: `calc(${this.props.value}%)`}}/>
            </div>            
        );
    }
}

export default ProgressBar;
