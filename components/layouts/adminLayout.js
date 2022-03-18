import { AdminHeader, AdminFooter } from 'components/index';

const AdminLayout = (props) => {
    return(
        <>
            <AdminHeader />
            { props.children }
            <AdminFooter />
        </>
    );
}

export default AdminLayout;