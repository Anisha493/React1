import Navbar from "../components/Navbar";

const UserLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <div className="h-16 bg-red-500">Footer</div>
    </div>
  );
};

export default UserLayout;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           