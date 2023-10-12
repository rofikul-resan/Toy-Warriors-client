"use client";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const PrivetRoute = ({ children }) => {
  const user = useSelector((state) => state.User);
  const pathname = usePathname();
  const router = useRouter();
  console.log(user);
  if (!user) {
    router.state = pathname;
    return router.push("/auth/login");
  }
  return children;
};

export default PrivetRoute;
