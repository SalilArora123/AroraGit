import { Route, Routes } from 'react-router-dom';
import {AdminPage} from '../AdminComponent/AdminPage';
import {Layout} from '../Layout';

const MainRouter = () => {

    return (

        <div>

            <Routes>
                
                <Route exact path='/admin' element={<AdminPage />} />
                <Route exact path='/dashboard/*' element={<Layout/>} />

            </Routes>

        </div>
    )
}

export default MainRouter;