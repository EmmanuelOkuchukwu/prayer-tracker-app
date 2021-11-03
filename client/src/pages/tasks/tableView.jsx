import React, { useState, useEffect } from 'react';
import { TaskService } from '../../service/taskService';

const TableView = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        return getData()
    }, [])

    function getData() {
        TaskService.fetchTasks().then((results) => {
            if(results.status === 200) {
                setData(results.data);
                console.log('Results:', results)
            } else if(results.status === 404) {
                console.log('ERROR - could not fetch tasks');
            }
        }).catch((error) => console.log(error))
    }

    return (
        <div className="table-section">
            <table></table>
        </div>
    )
}

export default TableView;
