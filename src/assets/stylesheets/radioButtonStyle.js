import { StyleSheet} from "react-native";

const radioButtonStyle = StyleSheet.create({
    radioCircleWrapper:{
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginTop: 5
    },
    radioLabel:{
        fontSize: 16,
        fontWeight: "400",
        color: '#171717',
        marginLeft: 10,
        fontFamily: 'Inter'
    },
    entryMode:{
        marginVertical: 10,
        flexDirection: "row",
        alignItems: 'center'
        
    },
    outerRadio:{
        width: 16,
        height: 16,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#0069DB', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerRadio:{
        width: 9,
        height: 9,
        backgroundColor: '#0069DB',
        borderRadius: 10
    }
});
export default radioButtonStyle