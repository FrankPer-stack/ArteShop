import { scrensName } from "../../../utils";

export const accountMenu = [
    {
        title: "Cambiar nombre y apellidos",
        description: "Cambiar el nombre de tu cuenta",
        leftIcon: "emoticon-excited-outline",
        screen: scrensName.account.changeName,
    },
    {
        title: "Cambiar email",
        description: "Cambia el email de tu cuenta",
        leftIcon: "at",
        screen: scrensName.account.changeEmail,
    },
    {
        title: "Cambiar el nombre de usuario",
        description: "Cambiar el nombre de usuario de tu cuenta",
        leftIcon: "card-account-details-outline",
        screen: scrensName.account.changeUsername,
    },
    {
        title: "Cambiar contraseña",
        description: "Cambiar la contraseña de tu cuenta",
        leftIcon: "key-outline",
        screen: scrensName.account.changePassword,
    },
];

export const appMenu = [
    {
        title: "Pedidos",
        description: "Lista de todos los pedidos",
        leftIcon: "order-bool-descending-variant",
        screen: scrensName.account.orders,
    },
    {
        title: "Mis direcciones",
        description: "Administra tus direcciones de envio",
        leftIcon: "map-marker-outline",
        screen: scrensName.account.addresses,
    },
    {
        title: "Lista de deseos",
        description: "Lista de todos los productos que te quieres comprar",
        leftIcon: "heart-outline",
        screen: scrensName.wishlist.root,
    },
];