
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    View
} from 'react-native';

import DropDown from "react-native-arm-dropdown";

let data = {
    title: 'DropDown',
    id: 1,
    items: [
        {title: 'item 1', id: 2},
        {title: 'item 2', id: 3},
        {
            title: 'item 3',
            id: 4,
            items: [
                {title: 'item 5', id: 6}
            ]
        },
        {title: 'item 4', id: 5}
    ]
};

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView>
          <View style={{padding: 20}}>
              <DropDown
                  title={data.title}
                  id={data.id}
                  items={data.items}
                  onChange={(id, title)=>{
                      console.log(id, title);
                  }}
              />
          </View>
      </SafeAreaView>
    </>
  );
};

export default App;
