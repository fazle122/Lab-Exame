using LabModel;
using LabRepository;
using LabRequestModel;
using LabViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabService
{
    public class CourseService : BaseService<Course>
    {
        public CourseRepository courseRepo;

        public CourseService(CourseRepository repo):base(repo)
        {
            this.courseRepo = repo;
        }

        public List<Course> GetAll()
        {
            var query = courseRepo.GetAll();
            return query.ToList();
        }

        public List<ViewCourse> Search(CourseRequestModels request)
        {
            var query = courseRepo.GetAll();
            var queryable = request.GetOrderedData(query);
            var list = request.SkipAndTake(queryable).ToList();
            var models = list.ConvertAll(x => new ViewCourse(x)).ToList();
            return models;
        }
    }
}
