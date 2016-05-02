using LabModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabRepository
{
    public class PaymentRepository:BaseRepository<Payment>
    {
        public PaymentRepository(LabDBContext db):base(db)
        {

        }
    }
}
