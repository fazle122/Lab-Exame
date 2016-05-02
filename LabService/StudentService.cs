using LabModel;
using LabRepository;
using LabRequestModel;
using LabViewModel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabService
{
    public class StudentService : BaseService<Student>
    {
        public StudentRepository stdRepo;

        public StudentService(StudentRepository repo) : base(repo)
        {
            this.stdRepo = repo;
        }

        public List<Student> GetAll()
        {
            IQueryable<Student> query = stdRepo.GetAll();
            //var viewStudent = query.ToList().Select(x => new ViewStudent(x)).ToList();
            return query.ToList();
        }

        public List<ViewStudent> Search(StudentRequestModels request)
        {
            var query = stdRepo.GetAll();
            var queryable = request.GetOrderedData(query);
            var list = request.SkipAndTake(queryable).ToList();
            var models = list.ConvertAll(x => new ViewStudent(x)).ToList();
            return models;
        }




        public bool UpdateDue(string std)
        {

            IQueryable<Payment> stdPayment = stdRepo.DB.Payments.Where(x => x.StudentId == std);
            double due = 0;
            if (stdPayment.Any())
            {
                due = stdPayment.Select(x => x.Amount).Sum(x => x != null ? x : 0);
            }


            var entity = stdRepo.DB.Students.Find(std);
            entity.Due = entity.Due - due;
            stdRepo.DB.Entry(entity).State = EntityState.Modified;
            stdRepo.DB.SaveChanges();
            return true;
        }
    }
}
