// "use client"

// import { authClient } from "@/lib/auth-client";
// import { Avatar, Dropdown, Label } from "@heroui/react";
// import { BiLogOut } from "react-icons/bi";
// import { CgProfile } from "react-icons/cg";
// import { MdDashboard } from "react-icons/md";
// import ThemeToggle from "../ThemeToggle";

// const DashboardNavbar = () => {
//       const { data: session } = authClient.useSession();
//       const user = session?.user;

//        const handleSignOut = async () => {
//           await authClient.signOut();
//         };

//     return (
//         <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
//   <div className="flex h-20 items-center justify-between px-6">
//     {/* Left */}
//     <div>
//       <p className="text-sm text-gray-500">Blacksmith Athletics</p>
//       <h2 className="text-2xl font-bold text-gray-900">
//         Welcome back, {user?.name?.split(" ")[0]} 💪
//       </h2>
//     </div>

//     {/* Right */}
//     <div className="flex items-center gap-4">
//       <ThemeToggle/>
//       {/* Notifications */}
//       <button className="relative rounded-xl border p-2.5 transition hover:bg-gray-100">
//         <span className="text-xl">🔔</span>

//         <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
//           3
//         </span>
//       </button>
      

//       {/* User */}
//       {user && (
//         <Dropdown>
//           <Dropdown.Trigger className="cursor-pointer rounded-full">
//             <Avatar
//               size="md"
//               className="ring-2 ring-primary/20 transition hover:ring-primary"
//             >
//               <Avatar.Image
//                 referrerPolicy="no-referrer"
//                 src={user?.image}
//                 alt={user?.name}
//               />
//               <Avatar.Fallback>
//                 {user?.name?.charAt(0).toUpperCase()}
//               </Avatar.Fallback>
//             </Avatar>
//           </Dropdown.Trigger>

//           <Dropdown.Popover className="w-72">
//             <div className="border-b px-4 py-4">
//               <div className="flex items-center gap-3">
//                 <Avatar size="lg">
//                   <Avatar.Image src={user?.image} alt={user?.name} />
//                   <Avatar.Fallback>
//                     {user?.name?.charAt(0).toUpperCase()}
//                   </Avatar.Fallback>
//                 </Avatar>

//                 <div>
//                   <h3 className="font-semibold">{user?.name}</h3>
//                   <p className="text-sm text-gray-500">{user?.email}</p>
//                 </div>
//               </div>
//             </div>
            

//             <Dropdown.Menu>
//               <Dropdown.Item id="profile">
//                 <CgProfile className="mr-2" />
//                 <Label>My Profile</Label>
//               </Dropdown.Item>

//               <Dropdown.Item id="settings">
//                 ⚙️
//                 <Label>Settings</Label>
//               </Dropdown.Item>

//               <Dropdown.Item id="membership">
//                 💳
//                 <Label>Membership</Label>
//               </Dropdown.Item>

//               <Dropdown.Item
//                 id="logout"
//                 variant="danger"
//                 onClick={handleSignOut}
//               >
//                 <BiLogOut className="mr-2" />
//                 <Label>Logout</Label>
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown.Popover>
//         </Dropdown>
        
//       )}
//     </div>
    
//   </div>
// </header>
//     );
// };

// export default DashboardNavbar;

"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { Bell, Search } from "lucide-react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import ThemeToggle from "../ThemeToggle";
import Link from "next/link";

const DashboardNavbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-8">
        {/* Left */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[4px] text-orange-500">
            Blacksmith Athletics
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Welcome Back,
            <span className="text-cyan-500">
              {" "}
              {user?.name?.split(" ")[0]}
            </span>{" "}
            🔥
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden lg:flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-2 shadow-sm">
            <Search className="h-5 w-5 text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm"
            />
          </div>

          <ThemeToggle />
          <Link
                href="/"
                className="font-medium text-accent"
                aria-current="page"
              >
                Home
              </Link>
          {/* Notification */}
          <button
            type="button"
            className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white"
          >
            <Bell size={21} />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
          </button>

          {/* User */}
          {user && (
            <Dropdown placement="bottom-end">
              <Dropdown.Trigger className="cursor-pointer">
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-2 shadow-md transition hover:shadow-xl">
                  <Avatar size="md" className="ring-2 ring-cyan-400">
                    <Avatar.Image
                      src={user.image}
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>
                      {user.name?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>

                  <div className="hidden md:block text-left">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {user.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {user.role}
                    </p>
                  </div>
                </div>
              </Dropdown.Trigger>

              <Dropdown.Popover className="w-80 rounded-3xl border-0 bg-white shadow-2xl">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <Avatar size="lg">
                      <Avatar.Image src={user.image} />

                      <Avatar.Fallback>
                        {user.name?.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar>

                    <div>
                      <h2 className="text-lg font-bold">
                        {user.name}
                      </h2>

                      <p className="text-sm opacity-90">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>

                <Dropdown.Menu className="p-3">
                  
                  <Dropdown.Item as={Link} href="/" id="home">
                    <CgProfile className="mr-3 text-lg" />
                    <Label>Home</Label>
                  </Dropdown.Item>


                  <Dropdown.Item
                    id="logout"
                    variant="danger"
                    onClick={handleSignOut}
                  >
                    <BiLogOut className="mr-3 text-lg" />
                    <Label>Logout</Label>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;