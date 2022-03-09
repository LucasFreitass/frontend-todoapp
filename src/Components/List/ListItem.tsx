import { Column, Text, Row} from "Components"
import { Button } from "Components/Button";


export type ListItemProps = {
    label: string;
    ended: boolean;
    index: number;
    setTasks: React.Dispatch<any>;
}

export const ListItem: React.FC<ListItemProps> = ({label, ended, index, setTasks}) => {
    
    const handleENDEDButton =  (e: any) => {
        setTasks((previous: any[]) => {
            const element = previous[index];
            element.ended = true;
            previous[index] = element;
            return [...previous]
        })
    };

    return (
        <>
        <Column width="100%" p="15px" mb="8px" borderRadius="4px">
            <Row>
                <Text style={{
                    width: "75%",
                    border: "1px solid black",
                    marginRight: "10px",
                    textDecoration: ended ? "line-through" : "none"
                    }}
                >
                    {label}
                </Text>
                <Button 
                    onClick={handleENDEDButton}
                    style={{width: "25%"}}
                    disabled={ended}
                >
                    {ended ? "Done" : "Finish my task"}
                </Button>
            </Row>    
        </Column> 
        

        </>
        
    
    );
};