const constants = {
    APP_TITLE: 'Title',

    TABLE_DEFINITION: [
        {
            key: 'id',
            label: 'User Id',
        },
        {
            key: 'name',
            label: 'Name',
        },
        {
            key: 'address',
            label: 'Address',
        }
    ],

    TABLE_DATA: [
        {
            name: 'Mohamed',
            id: '001',
            address: 'Frazer Town'
        },
        {
            name: 'Maaz',
            id: '002',
            address: 'Benson Town'
        }
    ],
    SERVER_URL : `http://localhost:8081/posts`
} 

export default constants;