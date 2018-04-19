import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    listitem: {
        marginLeft: 5
    },
    itembody: {
        marginLeft: 5
    },
    cell: {
        margin: 5,
        borderStyle: 'solid',
        width: 160,
        height: 190
    },
    thumbnail: {
        margin: 5,
        height: 120,
        width: 145
    },
    cellTitle: {
        color: '#222222',
        fontFamily: 'FiraSans-Regular',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 5
    },
    grid: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    modalContent: {
        opacity: 0.9,
        backgroundColor: '#f0ffff',
        height:'100%',
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    buttonCloseModal: {
        backgroundColor: "lightblue",
        alignItems: "center",
        padding: 15,
        margin: 5,
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },


    closeButton: {
        color: '#EFEFEF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    header: {
        color: '#222222',
        fontFamily: 'FiraSans-Bold',
        fontSize: 50,
        fontWeight: 'bold'
    },
    headerWrapper: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 20
    },
    modal: {
        backgroundColor: '#f0ffff',
        flex: 1,
        padding: 40,
        
        borderRadius: 10,
    },
    title: {
        color: '#003aff',
        fontFamily: 'FiraSans-Bold',
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
        color: '#756245',
        fontFamily: 'FiraSans-Light',
        fontSize: 16,
        paddingBottom: 20,
        paddingTop: 5
    },
    thumbnailInfo: {
        height: 75,
        width: 75
    },
    toolbar: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})