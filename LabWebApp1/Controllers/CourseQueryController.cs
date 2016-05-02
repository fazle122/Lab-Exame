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
    public class CourseQueryController : BaseQueryController<Course>
    {

        public LabDBContext Db;
        public CourseService courseService;
        public CourseQueryController()
        {
            courseService = new CourseService(new LabRepository.CourseRepository(DB));
        }

        public IHttpActionResult Get()
        {
            return Ok(courseService.GetAll());
        }

        public IHttpActionResult Get(string id)
        {
            return Ok(courseService.GetById(id));
        }


    }
}
