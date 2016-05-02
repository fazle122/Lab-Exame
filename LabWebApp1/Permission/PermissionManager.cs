using LabWebApp1.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;

namespace LabWebApp1.Permission
{
    public class PermissionManager
    {
        private ApplicationDbContext db;
        private string resourceName;
        public PermissionManager(ApplicationDbContext db, string resourceName)
        {
            this.db = db;
            this.resourceName = resourceName.ToLower();
        }

        public ApplicationResource GetResourceDetail()
        {
            return db.Resources.FirstOrDefault(x => x.Name.ToLower() == resourceName);
        }

        public bool IsAllowed(IPrincipal user)
        {
            var userId = user.Identity.GetUserId();
            ApplicationResource resource = db.Resources.First(x => x.Name.ToLower() == resourceName);
            List<ApplicationPermission> permissions = resource.Permissions.ToList();
            IdentityUserRole userRole = db.ApplicationUserRoles.FirstOrDefault(x => x.UserId == userId);
            bool isAllowed = permissions.Any(x => x.RoleId == userRole.RoleId && x.IsAllowed);
            return isAllowed;
        }
    }

    public static class PermissionManagerInMemory
    {
        public static bool IsAllowed(string role, string resource)
        {
            resource = resource.ToLower();
            List<string> routes = RoutesProvider.GetRoutesByRole(role);
            return routes.Any(x => x.ToLower() == resource);
        }
    }
}