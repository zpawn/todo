import { dbService } from '../../services';

const loadListService = () => {
    return dbService('/lists')
};

const addNewListService = (newList) => {
    return dbService('/lists', {
        method: 'POST',
        body: newList,
    });
};

export { loadListService, addNewListService };
