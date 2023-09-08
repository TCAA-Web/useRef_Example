export const ScrollBar = ({scrollPercentage}) => {

    const style = {
        width: scrollPercentage + "%",
        height: "16px",
        position: "fixed",
        backgroundColor: "red",
        top: "0",
        left: "0",
        transition: "all 0.1s ease"
    }

    return (
        <div style={style}></div>
    )
}