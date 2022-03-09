import { Input, Text, Button, Row, Column, List} from 'Components'
import { useEffect } from 'react';
import { useState } from 'react';


export const Home = () => {
    
    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState<{label: string, ended: boolean}[]>([]);

    useEffect(() => {
       const value =  localStorage.getItem("tasks")
       if ( value) {
           const tasks = JSON.parse(value)
           setTasks(() => tasks)
       }
    }, [])

    useEffect(() => {
        tasks.forEach(task => {
            console.log({task})
        })
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const handleOKButton =  () => {

        if (!taskName) return;

        setTasks((previous) => {
            const copy = [...previous];
            copy.push({label: taskName, ended: false});
            return copy;
        }); 
        
        setTaskName('');
    };

    return (
        <Column width="680px" margin={"0 auto"}>
            <Text style={{fontSize:"30px", color: "#347AB7", textAlign: "center"}} my={"15px"} pl={"5px"}>Todo App</Text>
            <Row width="100%">
            <Input flex={1} placeholder="Enter your task" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            <Button onClick={handleOKButton} >Send</Button>
            </Row>
            <List items={tasks} setTasks={setTasks} />
        </Column>
    )
}   