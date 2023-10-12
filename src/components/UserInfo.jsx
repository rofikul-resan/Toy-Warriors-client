import { AuthContext } from "@/firebase/FirebaseProvider";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useContext } from "react";
import { BiLogOutCircle } from "react-icons/bi";

const UserInfo = ({ name, image, email }) => {
  const { logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser().then();
  };
  return (
    <div>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            className="transition-transform"
            color="secondary"
            name={name}
            size="sm"
            src={image}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold text-xl capitalize">{name}</p>
            <p className="font-semibold text-xs">{email}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem
            key="logout"
            color="primary"
            onClick={handleLogOut}
            as={Button}
            variant="shadow"
            startContent={<BiLogOutCircle />}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default UserInfo;
