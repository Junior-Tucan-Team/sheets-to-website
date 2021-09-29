
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'
];

export const splitDate = (modifiedDate) => {
    const dateArray = modifiedDate.split(' ')[0].split('-');
    return ` ${monthNames[parseInt(dateArray[1], 10) - 1]} ${dateArray[2]}, ${dateArray[0]}.`;
};
