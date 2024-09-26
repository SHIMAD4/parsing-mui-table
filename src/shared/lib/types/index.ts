// Тип данных для одной строки в таблице
export type TableRowData = {
    [key in string]: string
};

// Тип данных для фильтров
export type FilterState = {
    programName: string;
    fieldOfStudy: string;
    groupCode: string;
    activityField: string;
    hours: string;
    duration: string;
    form: string;
    document: string;
    cost: string;
};

// Тип данных для пропсов строки таблицы
export type TableRowProps = {
    row: TableRowData;
};
