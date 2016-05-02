using LabModel;
using LabRepository;
using LabViewModel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabService
{
    public class PaymentService:BaseService<Payment>
    {
        private readonly PaymentRepository repo;

        public PaymentService(PaymentRepository repository) : base(repository)
        {
            this.repo = repository;
        }

        public async Task<List<ViewPayment>> GetAllAsync()
        {
            return await repo.Get().Select(x => new ViewPayment(x)).ToListAsync();
        }

        public List<ViewPayment> GetAll()
        {
            return repo.Get().Include(y => y.Student).ToList().ConvertAll(x => new ViewPayment(x)).ToList();
        }
        

        public ViewPayment GetDetail(string id)
        {
            var model = baseRepo.GetById(id);
            if (model == null)
            {
                return null;
            }
            return new ViewPayment(model);
        }

        public override bool Add(Payment payment)
        {
            bool add = base.Add(payment);
            var stdRepository = new StudentRepository(baseRepo.DB);
            StudentService stdService = new StudentService(stdRepository);
            stdService.UpdateDue(payment.StudentId);
            return true;
        }

       
    }
}

