import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-charts-wrapper';

const ArchiveOnCloudChartScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <BarChart style={styles.chart}
                    data={{ dataSets: [{ label: "demo", values: [{ x: 10, y: 1 }, { x: 5, y: 5 }, { x: 2, y: 1 }] }] }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    chart: {
        flex: 1
    }
});
export default ArchiveOnCloudChartScreen;
