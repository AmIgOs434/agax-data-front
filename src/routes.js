
import { ALL_SCHETA_ROUTE, DOSTUP_ROUTE, MENU_ROUTE,VLADELETS_ROUTE, ZADACHI_ROUTE} 
from "./utils/consts";
import { GLAV_ROUTE,USER_ROUTE} from "./utils/consts";
import Glav from "./components/Glav_str";
import User from "./components/User";
import Vladelets_chetov from "./components/Vladelets_chetov";
import Dostup_schetov from "./components/Dostup_schetov";
import All_scheta from "./components/All_scheta";
import Menu from "./components/Menu";
import Zadachi from "./components/Zadachi";
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
]
