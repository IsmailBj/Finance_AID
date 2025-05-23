

const Header = () =>{

    return (
        <div className="header">
            <div className="calendar">
                <span className="arrow arrow--left" aria-label="Previous day">←</span>
                <span className="date">20 May 2024</span>
                <span className="arrow arrow--right" aria-label="Next day">→</span>
            </div>
            <div className="balance-container">
                <span className="amount">300 $</span>
                <span className="status">Ready to be Assign</span>
                <div className="assign-btn">Assing ^</div>
            </div>
            <div className="days-container">
                <div className="day">6</div>
                <div className="day-info">Planet Days</div>
            </div>
        </div>
    )
}

export default Header