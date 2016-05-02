using LabModel;
using LabService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Microsoft.AspNet.Identity.Owin;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using LabViewModel;

namespace LabWebApp1.Controllers
{
    public class DropdownController : ApiController
    {
        public LabDBContext DB;

        public DropdownController()
        {
            DB = new LabDBContext();
        }

        //public async Task<IHttpActionResult> Get(string name)
        //{
        //    DropdownDataService service = new DropdownDataService(Request.GetOwinContext().Get<LabDBContext>());
        //    return Ok(await service.GetList(name.ToLower()));
        //}


        public IHttpActionResult Get(string name)
        {
            DropdownDataService service = new DropdownDataService(Request.GetOwinContext().Get<LabDBContext>());
            return Ok(service.GetList(name.ToLower()));
        }
    }
}
