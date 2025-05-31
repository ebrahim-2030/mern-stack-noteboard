import { Plus } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className=" border-b border-base-content/10 p-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between items-center">
          {/* logo */}
          <h1 className="text-3xl font-extrabold text-success font-mono">
            Noteboard
          </h1>
          {/* link to create a new note */}
          <div>
            <Link
              to={"/create"}
              className=" flex items-center btn btn-md btn-success rounded-full gap-2"
            >
              <Plus className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
