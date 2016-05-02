using LabModel;
using LabService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LabWebApp1.Controllers
{
    public class BaseCommandController<L> : ApiController where L:Entity
    {
        public BaseService<L> baseService;

        public BaseCommandController(BaseService<L> service)
        {
            this.baseService = service;

        }

        public IHttpActionResult Post(L entity)
        {
            if (string.IsNullOrWhiteSpace(entity.ID))
            {
                entity.ID = Guid.NewGuid().ToString();
            }

            return Ok(baseService.Add(entity));
        }

        public IHttpActionResult Put(L entity)
        {
            var edit = baseService.Update(entity);
            return Ok(entity);
        }


        public IHttpActionResult Delete(string id)
        {
            var delete = baseService.Delete(id);
            return Ok(delete);
        }

    }
}
