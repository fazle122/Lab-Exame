﻿using System;
using System.Collections.Generic;
using System.Linq;
using LabWebApp1.Models;
using System.Web;

namespace LabWebApp1.Permission
{
    public enum PublicRoutes
    {
        Home,
        Signin,
        Register,
        Denied,
    }

    public enum UserRoutes
    {
        home,
        profile,
        studententry,
        courselist,
    }

    public enum AdminRoutes
    {
        studentdetail,
        courseentry,
        payment,
    }

    public enum SuperAdminRoutes
    {
        
    }
    public static class RoutesProvider
    {
        private static List<string> GetPublicList()
        {
            //List<string> list = Enum.GetNames(typeof(PublicRoutes)).ToList();
            List<string> list = new List<string>() { };
            return list;
        }

        private static List<string> GetUserList()
        {
            List<string> list = Enum.GetNames(typeof(UserRoutes)).ToList();
            return list;
        }

        private static List<string> GetSuperAdminList()
        {
            var list = Enum.GetNames(typeof(SuperAdminRoutes)).ToList();
            return list;
        }

        private static List<string> GetAdminList()
        {
            var list = Enum.GetNames(typeof(AdminRoutes)).ToList();
            return list;

        }

        public static List<string> GetAllRoutes()
        {
            var list = GetPublicList();
            list.AddRange(GetUserList());
            list.AddRange(GetAdminList());
            list.AddRange(GetSuperAdminList());
            return list;
        }

        public static List<string> GetAdminRoutes()
        {
            var list = GetPublicList();
            list.AddRange(GetUserList());
            list.AddRange(GetAdminList());
            return list;
        }
        public static List<string> GetUserRoutes()
        {
            var list = GetPublicList();
            list.AddRange(GetUserList());
            return list;
        }
        public static List<string> GetPublicRoutes()
        {
            var list = GetPublicList();
            return list;
        }

        public static List<string> GetRoutesByRole(string role)
        {
            if (string.IsNullOrWhiteSpace(role))
            {
                role = ApplicationRoles.Public.ToString();
            }
            ApplicationRoles appRole = (ApplicationRoles)Enum.Parse(typeof(ApplicationRoles), role);
            switch (appRole)
            {
                case ApplicationRoles.SuperAdmin:
                    return GetAllRoutes();
                case ApplicationRoles.Admin:
                    return GetAdminRoutes();
                case ApplicationRoles.GeneralUser:
                    return GetUserRoutes();
                default:
                    return GetPublicRoutes();
            }
        }
    }
}