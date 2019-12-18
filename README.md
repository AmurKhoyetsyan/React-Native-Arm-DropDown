## React-Native-Arm-DropDown

<img src="https://raw.githubusercontent.com/AmurKhoyetsyan/React-Native-DropDown/master/src/gif/dropdown.gif" />

#### install React-Native-Arm-DropDown

if RN version >= 0.60

npm i react-native-arm-dropdown

### Props

| Props            |  Value         |
| ---------------- | ---------------|
| title            | String         |
| id               | Number         |
| items            | Array          |

#### Example

    import DropDown from 'react-native-arm-dropdown';
    
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

    ****
    ****
    ****

    <DropDown
        title={data.title}
        id={data.id}
        items={data.items}
        onChange={(id, title)=>{
            console.log(id, title);
        }}
    />
