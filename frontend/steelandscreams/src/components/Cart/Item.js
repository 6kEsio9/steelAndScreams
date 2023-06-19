export const Item = () => {

    return (
        <div className="Cart-Items">
            <div className="image-box">
                <img src="images/apple.png" style={{ height: "120px" }} />
            </div>
            <div className="about">
                <h1 className="title">Apple Juice</h1>
                <h3 className="subtitle">250ml</h3>
            </div>
            <div className="counter">
                <div className="btn">+</div>
                <div className="count">2</div>
                <div className="btn">-</div>
            </div>
            <div className="prices">
                <div className="amount">${props.item.price}</div>
                <div className="remove"><u>Remove</u></div>
            </div>
        </div>
    );
};