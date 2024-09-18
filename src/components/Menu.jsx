import Image from "next/image";
import Link from "next/link";

import { role } from "@/lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/icons/home.png",
        label: "Home",
        href: "/",
        role: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/icons/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        role: ["admin", "teacher"],
      },
      {
        icon: "/icons/student.png",
        label: "Students",
        href: "/list/students",
        role: ["admin", "teacher"],
      },
      {
        icon: "/icons/parent.png",
        label: "Parents",
        href: "/list/parents",
        role: ["admin", "teacher"],
      },
      {
        icon: "/icons/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        role: ["admin"],
      },
      {
        icon: "/icons/class.png",
        label: "Classes",
        href: "/list/classes",
        role: ["admin", "teacher"],
      },
      {
        icon: "/icons/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        role: ["admin", "teacher"],
      },
      {
        icon: "/icons/exam.png",
        label: "Exams",
        href: "/list/exams",
        role: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/icons/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        role: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/icons/result.png",
        label: "Results",
        href: "/list/results",
        role: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/icons/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        role: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/icons/calendar.png",
        label: "Events",
        href: "/list/events",
        role: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/icons/message.png",
        label: "Messages",
        href: "/list/messages",
        role: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/icons/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        role: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/icons/profile.png",
        label: "Profile",
        href: "/profile",
        role: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/icons/setting.png",
        label: "Settings",
        href: "/settings",
        role: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/icons/logout.png",
        label: "Logout",
        href: "/logout",
        role: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

export default function Menu() {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>

          {i.items.map((item) => {
            if (item.role.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}
