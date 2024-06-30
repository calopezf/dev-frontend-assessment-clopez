import Routes from './Constants';
import HomeView from '../views/Home'
import SymbolsView from '../views/Symbols'
import TickerDetails from "../views/TickerDetails.vue";

export default [
    {
        path : '/',
        name : Routes.HOME,
        component : HomeView,
        meta : {
            title : 'Home'
        },
    },
    {
        path : '/symbols',
        name : Routes.SYMBOLS,
        component : SymbolsView,
        meta : {
            title : 'Symbols'
        },
    },
    {
        path : "/ticker/:symbol",
        name : Routes.TICKET_DETAILS,
        component : TickerDetails,
        meta : {
            title : 'TickerDetails'
        },
    },
];
