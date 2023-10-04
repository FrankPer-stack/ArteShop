import { Layout } from "../../layouts";
import { UserInfo } from "../../components/Account";
import { Menu } from "../../components/Account/Menu/Menu";

export function AccountScreen() {
    return (
        <Layout.Basic>
            <UserInfo/>
            <Menu />
        </Layout.Basic>
    );
}