// this is the css file of the dashview file (landing view)
export default {
    ViewBox: {
        height: '100%',
        backgroundColor: '#292C30',
        width: '100%'
    },
    scrollView:{
        height:'100%',
        width: '100%'
    },
    container:{
        display: 'flex',
        alignItems: 'center'
    },
    dashCont:{
        marginTop: 30,
        backgroundColor: '#2F3439',
        padding: 15,
        width: '80%',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        marginLeft: 8
    },
    body:{
        color:'white',
        marginLeft: 8
    },
    bodyBottom:{
        marginBottom: 40
    },
    but:{
        flexDirection: 'row'
    }
}