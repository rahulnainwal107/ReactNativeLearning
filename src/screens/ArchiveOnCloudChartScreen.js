import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;
const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            yValues: [100, 105, 102, 110, 114, 109, 105, 99, 95],
            data: [
                0,
                200,
                400,
                600,
                800,
                1000,
                1200,
            ],
            xValues: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
    ]
};
const ArchiveOnCloudChartScreen = () => {

    return (
        <View>
            <Text>Bezier Line Chart</Text>
            <View style={{ margin: 10, alignItems: 'center' }}>
                <LineChart
                    data={data}
                    width={screenWidth - 10} // from react-native
                    height={220}
                    yAxisLabel={"$"}
                    fromZero={true}
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 1, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 10
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        },
                        strokeWidth: 2, // optional, default 3
                        barPercentage: 0.5
                    }}
                    bezier
                    style={{
                        margin: 10,
                        borderRadius: 16
                    }}
                />
                <BarChart
                    data={data}
                    width={screenWidth - 10} // from react-native
                    height={220}
                    yAxisLabel={'$'}
                    withVerticalLabels={true}
                    withHorizontalLabels={true}
                    verticalLabelRotation={30}
                    horizontalLabelRotation={-30}
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        barPercentage: 0.4
                    }}
                    bezier
                    style={{
                        margin: 10,
                        borderRadius: 16
                    }}
                />
            </View>
        </View>
    )
}
export default ArchiveOnCloudChartScreen;
