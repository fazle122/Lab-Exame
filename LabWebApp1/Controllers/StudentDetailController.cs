using LabModel;
using LabRequestModel;
using LabService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LabWebApp1.Controllers
{
    public class StudentDetailController : BaseQueryController<Student>
    {
        public StudentService stdService;

        public StudentDetailController()
        {
            stdService = new StudentService(new LabRepository.StudentRepository(DB));
        }

        public IHttpActionResult Get()
        {
            return Ok(stdService.GetAll());
        }

        public IHttpActionResult Get(string id)
        {
            return Ok(stdService.GetById(id));
        }

        //public IHttpActionResult Search(StudentRequestModels request)
        //{
        //    var model = stdService.Search(request);
        //    return Ok(model);
        //}
    }
}
