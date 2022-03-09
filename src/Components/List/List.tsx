import { Column, ListItem } from "Components";

type ListProps = {
    items: {label: string, ended: boolean}[];
    setTasks: React.Dispatch<any>;
};

export const List: React.FC<ListProps> = ({items, setTasks}) => {
    return (
        <Column py="10px">
        {items.map((item, index) => ( 
            <ListItem key={index} {...item} index={index} setTasks={setTasks}/>
        ))}
        </Column>
    );
};