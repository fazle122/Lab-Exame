using LabModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Microsoft.AspNet.Identity.Owin;
using System.Net.Http;
using System.Web.Http;
using LabService;

namespace LabWebApp1.Controllers
{
    public class BaseQueryController<L> : ApiController where L : Entity
    {
        public LabDBContext DB;

        public BaseQueryController()
        {
            DB = new LabDBContext();
        }

    }
}
