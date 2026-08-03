"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const DashboardSidebar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const role = user?.role || "seller";



  const navMenu = {
    seller: [
  {
    title: "Overview",
    href: "/dashboard/seller",
  },
  {
    title: "Add Class",
    href: "/dashboard/seller/add-class",
  },
  {
    title: "My Classes",
    href: "/dashboard/seller/my-classes",
  },
  {
    title: "Add Forum Post",
    href: "/dashboard/seller/add-forum-post",
  },
  {
    title: "My Forum Posts",
    href: "/dashboard/seller/my-forum-posts",
  },
],

    buyer: [
  {
    title: "Overview",
    href: "/dashboard/buyer",
  },
  {
    title: "Booked Classes",
    href: "/dashboard/buyer/booked-classes",
  },
  {
    title: "Favorite Classes",
    href: "/dashboard/buyer/favorites",
  },
  {
    title: "Apply as Trainer",
    href: "/dashboard/buyer/apply-trainer",
  },
],

    admin: [
  {
    title: "Overview",
    href: "/dashboard/admin",
  },
  {
    title: "Manage Users",
    href: "/dashboard/admin/manage-users",
  },
  {
    title: "Applied Trainers",
    href: "/dashboard/admin/applied-trainers",
  },
  {
    title: "Manage Trainers",
    href: "/dashboard/admin/manage-trainers",
  },
  {
    title: "Manage Classes",
    href: "/dashboard/admin/manage-classes",
  },
  {
    title: "Add Forum Post",
    href: "/dashboard/admin/add-forum-post",
  },
  {
    title: "Transactions",
    href: "/dashboard/admin/transactions",
  },
  {
    title: "Forum Posts",
    href: "/dashboard/admin/forum-post-manage",
  },
],
  };

  const menu = navMenu[role];

  return (
    <div>
      <nav className="p-4 space-y-2 text-gray-950">
       {
        menu.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="block px-4 py-2 rounded hover:bg-gray-100"
          >
            {item.title}
          </Link>
        ))
        
       }
      </nav>
    </div>
  );
};

export default DashboardSidebar;
