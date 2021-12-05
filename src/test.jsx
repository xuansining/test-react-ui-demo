import React,{useState} from "react"
import {Tab,Tabs,TabPanel} from 'react-ui-xmui'
const Test = () => {
    const [value, setValue] = useState(0)
    const handleOnChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div style={{ width: '600px' }}>

    <h1>实例一</h1>
    <Tabs onTabsChange={handleOnChange} value={value}>
        <Tab label={'tab1xxxxxxxx'} value={0} key={0}/>
        <Tab label={'tab2xxxx'} value={1} key={1}/>
        <Tab label={'tab3xxxx'} value={2} key={2}/>
    </Tabs>
    <div>
        <TabPanel index={0} value={value}>
            xxx0
        </TabPanel>
        <TabPanel index={1} value={value}>
            xxx1
        </TabPanel><TabPanel index={2} value={value}>
        xxx2
    </TabPanel>
</div>
</div>
)
}

export default Test;