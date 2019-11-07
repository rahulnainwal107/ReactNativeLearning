import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, processColor
} from 'react-native';

import { BarChart } from 'react-native-charts-wrapper';

export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            legend: {
                enabled: true,
                textSize: 14,
                form: 'SQUARE',
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 5,
                formToTextSpace: 5,
                wordWrapEnabled: true,
                maxSizePercent: 0.5
            },
            data: {
                dataSets: [{
                    values: [{ y: 100 }, { y: 105 }, { y: 102 }, { y: 110 }, { y: 114 }, {
                        y:
                            109
                    }, { y: 105 }, { y: 99 }, { y: 120 }],
                    label: 'Bar dataSet',
                    config: {
                        color: processColor('pink'),
                        drawBarShadow: true,
                        barShadowColor: processColor('red'),
                        highlightAlpha: 90,
                        highlightColor: processColor('red'),
                    }
                }],

                config: {
                    barWidth: 0.7,
                }
            },
            highlights: [{ x: 3 }, { x: 6 }],
            xAxis: {
                valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'oct'],
                granularityEnabled: true,
                position: 'BOTTOM',
                granularity: 1,
            },
            yAxis: {
                left: { axisMinimum: 10 }
            }
        };
    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {

            this.setState({ ...this.state, selectedEntry: null })
        } else {
            this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) })
        }

        console.log(event.nativeEvent)
    }


    render() {
        return (
            <View style={{ flex: 1 }}>


                <View style={{flex:1}}>
                    <BarChart
                        style={{flex:1}}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        animation={{ durationX: 2000 }}
                        legend={this.state.legend}
                        gridBackgroundColor={processColor('#000000')}
                        visibleRange={{ x: { min: 5, max: 5 } }}
                        drawBarShadow={false}
                        drawValueAboveBar={true}
                        drawHighlightArrow={true}
                        onSelect={this.handleSelect.bind(this)}
                        highlights={this.state.highlights}
                        onChange={(event) => console.log(event.nativeEvent)}
                    />
                </View>
            </View>
        );
    }
}