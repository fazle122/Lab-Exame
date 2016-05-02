namespace LabWebApp1.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Models;
    using System.Collections.Generic;
    using Permission;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    internal sealed class Configuration : DbMigrationsConfiguration<LabWebApp1.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "LabWebApp1.Models.ApplicationDbContext";
        }

        protected override void Seed(LabWebApp1.Models.ApplicationDbContext context)
        {

            AddUser(context, ApplicationRoles.SuperAdmin.ToString(), "abc@gmail.com", "12345678901");
            AddUser(context, ApplicationRoles.Admin.ToString(), "def@gmail.com", "09876543210");
            AddUser(context, ApplicationRoles.GeneralUser.ToString(), "xyz@gmail.com", "12312312312");
            AddRoles(context);
            AddResources(context);
            AddPermissions(context);
            
        }


        private void AddUser(ApplicationDbContext db, string role, string email, string phone)
        {
            ApplicationUserManager manager = new ApplicationUserManager(new UserStore<ApplicationUser>(db));
            ApplicationUser user = manager.FindByEmail(email);
            if (user == null)
            {
                user = new ApplicationUser() { Email = email, UserName = email, EmailConfirmed = true, PhoneNumber = phone };
                IdentityResult result = manager.Create(user, "Pass@123");
                if (result.Succeeded)
                {
                    manager.AddToRole(user.Id, role);
                }
            }
        }


        private void AddRoles(ApplicationDbContext context)
        {
            List<string> list = Enum.GetNames(typeof(ApplicationRoles)).ToList();
            foreach (string r in list)
            {
                ApplicationRole role = context.ApplicationRoles.FirstOrDefault(x => x.Name == r);
                if (role == null)
                {
                    context.Roles.Add(new ApplicationRole(r) { Description = r });
                    context.SaveChanges();
                }
            }
        }

        private static void AddResources(ApplicationDbContext context)
        {
            List<string> names = RoutesProvider.GetAllRoutes();
            foreach (var name in names)
            {
                var resource = context.Resources.FirstOrDefault(x => x.Name == name);
                if (resource == null)
                {
                    var r = new ApplicationResource
                    {
                        IsPublic = false,
                        Name = name,
                    };
                    context.Resources.Add(r);
                }
            }
        }

        private void AddPermissions(ApplicationDbContext db)
        {

            var roles = db.ApplicationRoles.ToList();

            ApplicationRole admin = roles.First(x => x.Name == ApplicationRoles.Admin.ToString());
            AddRolePermissions(db, admin.Id);
            ApplicationRole superAdmin = roles.First(x => x.Name == ApplicationRoles.SuperAdmin.ToString());
            AddRolePermissions(db, superAdmin.Id);

        }

        private static void AddRolePermissions(ApplicationDbContext db, string roleId)
        {
            var resources = db.Resources.ToList();
            foreach (var resource in resources)
            {
                var permission = db.Permissions.FirstOrDefault(x => x.ResourceId == resource.Id && x.RoleId == roleId);
                if (permission == null || permission.Id == new Guid().ToString())
                {
                    permission = new ApplicationPermission()
                    {
                        Id = Guid.NewGuid().ToString(),
                        ResourceId = resource.Id,
                        IsAllowed = true,
                        RoleId = roleId,
                    };
                    db.Permissions.Add(permission);
                }
                db.SaveChanges();
            }
        }




    }
}


