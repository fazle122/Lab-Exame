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
    public class StudentQueryController : BaseQueryController<Student>
    {
        public StudentService stdService;
        public LabDBContext Db;

        public StudentQueryController()
        {
            stdService = new StudentService(new LabRepository.StudentRepository(DB));
        }

        public IHttpActionResult Get()
        {
            return Ok(stdService.GetAll());
        }

        public IHttpActionResult Search(StudentRequestModels request)
        {
            var model = stdService.Search(request);
            return Ok(model);
        }
    }
}
