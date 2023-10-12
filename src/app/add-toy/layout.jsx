import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import PrivetRoute from "@/components/PrivetRoute";

const AddToyLayout = ({ children }) => {
  return (
    <PrivetRoute>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </PrivetRoute>
  );
};

export default AddToyLayout;
