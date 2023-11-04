import { ReactComponent as HomeIcon } from "../../Media/NavLinksIcon/home.svg";
import { ReactComponent as NotificationIcon } from "../../Media/NavLinksIcon/notification.svg";
import { ReactComponent as MessageIcon } from "../../Media/NavLinksIcon/message.svg";
import { ReactComponent as WalletIcon } from "../../Media/NavLinksIcon/wallet.svg";
import { ReactComponent as FavoriteIcon } from "../../Media/NavLinksIcon/favorite.svg";
import { ReactComponent as ProfileIcon } from "../../Media/NavLinksIcon/profile.svg";
import { ReactComponent as SettingIcon } from "../../Media/NavLinksIcon/setting.svg";

const navLinks = [
  { link: "Home", linkIcon: HomeIcon },
  { link: "Notification", linkIcon: NotificationIcon },
  { link: "Conversation", linkIcon: MessageIcon },
  { link: "Wallet", linkIcon: WalletIcon },
  { link: "Subscription", linkIcon: FavoriteIcon },
  { link: "My Profile", linkIcon: ProfileIcon },
  { link: "Setting", linkIcon: SettingIcon },
];

export default navLinks;
