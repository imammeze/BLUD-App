const HeaderAdmin = () => {
  return (
    <>
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="img/logo blud.png" alt="Logo" className="h-10 mr-2" />
        </div>
        <div className="flex items-center">
          <span className="mr-4 font-medium text-gray-700">Putri Aryta</span>
          <img
            src="/img/profile.jpg"
            alt="Profile"
            className="h-10 w-10 rounded-full border border-gray-300"
          />
        </div>
      </header>
    </>
  );
};

export default HeaderAdmin;
