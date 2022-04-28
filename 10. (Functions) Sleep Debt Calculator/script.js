// // This functions take in the day of the week and how many hours I have slept
// const getSleepHours = (day) => {
//     switch (day) {
//         case 'monday':
//             return 8;
//         case 'tuesday':
//             return 8;
//         case 'wednesday':
//             return 8;
//         case 'thursday':
//             return 8;
//         case 'friday':
//             return 8;
//         case 'saturday':
//             return 9;
//         case 'sunday':
//             return 9;
//         default:
//             return 'invalid day';
//     }
// };

// // This function calculate the total number of hours slept
// const getActualSleepHours = () =>
//     getSleepHours('monday') +
//     getSleepHours('tuesday') +
//     getSleepHours('wednesday') +
//     getSleepHours('thursday') +
//     getSleepHours('friday') +
//     getSleepHours('saturday') +
//     getSleepHours('sunday');

// This Function return the total numbers of hours sleep (Bonus)
const getActualSleepHours = (monday, tuesday, wednesday, thursday, friday, saturday, sunday) =>
    monday + tuesday + wednesday + thursday + friday + saturday + sunday;

// This function calculate how many hours ideally I would like to sleep (nr of hours * days of the week)
const getIdealSleepHours = (hours) => hours * 7;

// This function calculate the sleep debt during the week
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours(10, 7, 8, 6, 8, 8, 10);
    const idealSleepHours = getIdealSleepHours(9);

    if (actualSleepHours === idealSleepHours) {
        console.log('Perfect amount of sleep hours');
    } else if (actualSleepHours < idealSleepHours) {
        console.log(
            `Not enough sleep hours, get some rest. You have a deficit of ${idealSleepHours - actualSleepHours} hours`
        );
    } else {
        console.log(
            `You got more than enough hours sleep. You have a surplus of ${actualSleepHours - idealSleepHours} hours`
        );
    }
};

calculateSleepDebt();
