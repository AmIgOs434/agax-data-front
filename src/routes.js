
import { ALL_SCHETA_ROUTE, DOSTUP_ROUTE, MENU_ROUTE,SORT_BY_DATA_BD_ROUTE,SORT_BY_DATA_OP_BD_ROUTE,SORT_BY_RAZDEL,SORT_BY_RAZDEL1,VLADELETS_ROUTE, ZADACHI_ROUTE} 
from "./utils/consts";
import { GLAV_ROUTE,USER_ROUTE} from "./utils/consts";
import Glav from "./components/Glav_str";
import User from "./components/User";
import Vladelets_chetov from "./components/Vladelets_chetov";
import Dostup_schetov from "./components/Dostup_schetov";
import All_scheta from "./components/All_scheta";
import Menu from "./components/Menu";
import Zadachi from "./components/Zadachi";
import Sort_by_data_bd from "./components/Sort_by_data_bd";
import Sort_by_data_op_bd from "./components/Sort_by_data_op_bd";
import Sort_by_razdel from "./components/Sort_by_razdel";
import Sort_by_razdel11 from "./components/Sort_by_razdel_1";
import Sort_by_razdel_ from "./components/Sort_by_razdel_";
export const adminRoutes = [


]

export const publicRoutes = [
    {
        path: GLAV_ROUTE,
        Component: Glav
    },
    {
        path: USER_ROUTE,
        Component: User
    },
    {
        path: MENU_ROUTE,
        Component: Menu
    },
    {
        path: ALL_SCHETA_ROUTE,
        Component: All_scheta
    },
    {
        path: DOSTUP_ROUTE,
        Component: Dostup_schetov
    },
    {
        path: VLADELETS_ROUTE,
        Component: Vladelets_chetov
    },
    {
        path: ZADACHI_ROUTE,
        Component: Zadachi
    },
    {
        path: SORT_BY_DATA_BD_ROUTE  + '/:id',
        Component: Sort_by_data_bd
    },
    {
        path: SORT_BY_DATA_OP_BD_ROUTE  + '/:id',
        Component: Sort_by_data_op_bd
    },
    {
        path: SORT_BY_RAZDEL + '/:id',
        Component: Sort_by_razdel
    },
    {
        path: SORT_BY_RAZDEL1 + '/:id',
        Component: Sort_by_razdel_
    },
]

