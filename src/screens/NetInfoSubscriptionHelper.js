import NetInfo from '@react-native-community/netinfo'
var status = false;
const netINfoHelper = () => {
    // NetInfo.fetch().then(state => {
    //     status = state
    // })
    NetInfo.addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        status = state
      });
      
    return status;
}
export default netINfoHelper;