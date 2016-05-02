using LabModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabViewModel
{
    public class ViewPayment
    {
        public ViewPayment(Payment payment)
        {
            this.ID = payment.ID;
            this.StudentId = payment.StudentId;
            this.Student = payment.Student;
            this.Amount = payment.Amount;
        }
        public String ID { get; set; }
        public string StudentId { get; set; }
        public Student Student { get; set; }
        public double Amount { get; set; }


    
    }
}
