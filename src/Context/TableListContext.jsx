import { createContext, useState } from "react";

const TableListContext = createContext();

export const TableListProvider = ({ children }) => {
    const [tableList, setTableList] = useState([
        {
            id: 1,
            text: "This is table list item 1",
            rating: 5,
            age: 13,
            button: "disabled"
        },
        {
            id: 2,
            text: "This is table list item 2",
            rating: 4,
            age: 15,
            button: "enabled"
        },
        {
            id: 3,
            text: "This is table list item 3",
            rating: 3,
            age: 14,
            button: "enabled"
        }
    ]);

    const deleteTableItem = (id) => {
        setTableList(tableList.filter((item) => item.id !== id));
    };

    return (
        <TableListContext.Provider value={{ tableList, deleteTableItem, setTableList }}>
            {children}
        </TableListContext.Provider>
    );
};

export default TableListContext;