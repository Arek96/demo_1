const styles = theme => ({
    card: {
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.7)",
        border: "3px solid rgba(0, 0, 0, 0.2)",
        marginBottom: "9rem",
        marginUp: "5rem"
    },
    edit: {
        width: 120,
        height: 30,
        color: "white",
        backgroundColor: "#3F51B5",
        marginLeft: '1.2rem',
        marginTop: '8px',
        fontSize: "0.7rem"
    },
    avatar: {
        margin: '10px 70px 10px 20px',
        width: 170,
        height: 170,
    },
    typography: {
        marginBottom: 10,
        fontFamily: 'roboto'
    }

});
export default styles;
