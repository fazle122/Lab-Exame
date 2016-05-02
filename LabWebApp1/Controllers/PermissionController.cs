using LabWebApp1.Models;
using LabWebApp1.Permission;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace LabWebApp1.Controllers
{
    public class PermissionController : ApiController
    {
        [AllowAnonymous]
        public IHttpActionResult Post(PermissionRequest o)
        {
            if (User.Identity.IsAuthenticated)
            {
                string id = User.Identity.GetUserId();
                ApplicationUserManager userManager = Request.GetOwinContext().GetUserManager<ApplicationUserManager>();
                IList<string> roles = userManager.GetRoles(id);
                string role = roles.FirstOrDefault();
                bool isAllowed = PermissionManagerInMemory.IsAllowed(role, o.Name); if (isAllowed)
                {
                    return Ok();
                }
                return Unauthorized();
            }
            else
            {
                bool isAllowed = PermissionManagerInMemory.IsAllowed("", o.Name);
                if (isAllowed)
                {
                    return Ok();
                }
                return Unauthorized();
            }

        }
    }
}
