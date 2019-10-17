import React from 'react';
import MenuList from '../components/MenuList';

const data = [{
    logo: require('../Images/logo5.png'),
    title: 'Total Mapped Objects',
    size: {
        size: '02',
        color: '#00b3b3'
    },
    subtitle: 'This Month'
},
{
    logo: require('../Images/logo4.png'),
    title: 'Total Record Backups',
    size: {
        size: '8.4 GB',
        color: '#3366cc'
    },
    subtitle: 'This Month'
}, {
    logo: require('../Images/logo6.png'),
    title: 'Data Base Size',
    size: {
        size: '0.11 MB',
        color: '#ff8c1a'
    },
    subtitle: 'This Month'
}, {
    logo: require('../Images/logo1.png'),
    title: 'Total Attachment',
    size: {
        size: '22',
        color: '#ff3399'
    },
    subtitle: 'This Month'
}];

const ArchiveOnCloudScreen = () => {
    return (
        <MenuList
            data={data}
        />
    )
}




// navigationOptions in functional component.
ArchiveOnCloudScreen.navigationOptions = {
    title: 'DASHBOARD',
    headerStyle: {
        backgroundColor: '#ff8c1a'
    }
}
// SomeFunctionalComponent.navigationOptions = ({ navigation }) => {
//     return {
//         title: navigation.getParam('headerTitle'),
//     }
// }
export default ArchiveOnCloudScreen;