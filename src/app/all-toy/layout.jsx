import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

const AllToyPageLayout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default AllToyPageLayout;
