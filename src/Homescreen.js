import React from 'react';
import { View, Text } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#ff4081', justifyContent: 'center', alignItems: 'center' }} >
            <Text>First</Text>
        </View>)
}



const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const HomeScreen = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });
    const renderTabBar = props => {
        return (
            <View>
                <TabBar
                    onIndexChange={routes}
                    {...props}
                    renderLabel={({ route, focused, color }) => (
                        <Text style={{ color: focused ? "white" : "black" }}>
                            {route.title}
                        </Text>
                    )}
                    indicatorStyle={{ backgroundColor: "gray", height: '100%', borderRadius: 25 }}
                    style={{ backgroundColor: 'white' }}
                    pressColor={"white"}
                // pressOpacity={0.8}
                />
            </View>
        )

    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: '70%' }}
                // swipeEnabled={false}
                lazy={true}
                renderTabBar={renderTabBar}
            />
        </View>
    )
}

export default HomeScreen